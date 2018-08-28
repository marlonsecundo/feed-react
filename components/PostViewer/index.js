import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Post, PostFrase, PostReflexao } from '../../components';
import { category } from '../AppConsts';
import styles from './styles';
import { colors } from '../../styles';

class PostItem {
    id = "";
    title = "";
    content = "";
    tag = "";
    url = "";

    constructor(id, title, content, category, tag, url) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.tag = tag;
        this.url = url;
    }
}


export default class PostViewer extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                category: "",
                loaded: false,
                posts: []
            };
    }

    componentDidMount = () => {
        this.getDOMFeed(this.props.category);
        this.props.onMount(this.getDOMFeed);
    }

    getDOMFeed = (category) => {
        this.setState({ loaded: false, posts: [], category: category });
        let request = new XMLHttpRequest();
        request.open("GET", "https://seuserhumano.wordpress.com/feed/", true);
        let response = "";

        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                response = request.responseText.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", '');

                window.DOMParser = require('xmldom').DOMParser;
                this._extractPostRSS(new DOMParser().parseFromString(response, "text/xml"))
            }
        };

        request.send(null);
    }

    _extractPostRSS = (xmlDoc) => {
        let items = [];
        let list = xmlDoc.getElementsByTagName("item");
        for (let index = 0; index < list.length; index++) {
            let title = list[index].getElementsByTagName("title")[0].textContent.toUpperCase();
            let description = list[index].getElementsByTagName("content:encoded")[0].textContent;
            let category = list[index].getElementsByTagName("category");
            let tag = category[category.length - 1].textContent;
            let url = list[index].getElementsByTagName("link")[0].textContent;
            for (let i = 0; i < category.length; i++) {
                cat = category[i].textContent;

                if (cat.toUpperCase() == this.state.category) {
                    tag = category.length == 2 && i == 0 ? category[1].textContent : tag;
                    items.push(new PostItem(index.toString(), title, description, this.state.category, tag, url));
                }
            }

        }

        this.setState({ posts: items, loaded: true });
    }

    _renderItem = ({ item }) => {
        switch (item.category) {
            case category.poesias:
                return (<Post title={item.title} content={item.content} tag={item.tag} url={item.url}></Post>);
            case category.frases:
                return (<PostFrase title={item.title} content={item.content} tag={item.tag} url={item.url}> </PostFrase>);
            case category.reflexoes:
                return (<PostReflexao title={item.title} content={item.content} tag={item.tag} url={item.url}></PostReflexao>);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loaded ? null :
                        (<ActivityIndicator style={styles.loading} size="large" color={colors.primary}></ActivityIndicator>)
                }
                <FlatList collapsable={this.state.loaded} keyExtractor={data => data.id} data={this.state.posts} renderItem={this._renderItem} />
            </View>
        );
    }
}


