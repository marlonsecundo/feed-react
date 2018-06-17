import React, { Component } from 'react';

import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';

import { Post } from './Post';

class PostItem {
    id = "";
    title = "";
    content = "";

    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;

    }
}


export class PostViewer extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                category: "poesias",
                posts: [new PostItem("0", "oi", "ola")]
            };
    }

    componentDidMount = () => {
        this._getDOMFeed();
    }

    _getDOMFeed = () => {
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
            let title = list[index].getElementsByTagName("title")[0].textContent;
            let description = "<html>" + list[index].getElementsByTagName("content:encoded")[0].textContent + "</html>";
            items.push(new PostItem(index.toString(), title, description));
        }

        this.setState({ posts: items }); 
    }


    getDataList = () => {

        let items = [new PostItem("0", "Titulo 1", "Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo"), new PostItem("1", "Título 2", "Conteudo"), new PostItem("2", "Título 3", "Conteudo")];

        return items;  
    }

    _renderItem = ({ item }) => (<Post title={item.title} content={item.content}></Post>);

    render() {
        return (
            <View style={styles.container}> 
                <FlatList keyExtractor={data => data.id} data={this.state.posts} renderItem={this._renderItem} />
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container:
    {
        justifyContent: 'center',
        flex: 1,
    },
});

