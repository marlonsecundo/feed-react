import React, { Component } from 'react';

import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';

import { Post } from './Post';
import { red } from 'ansi-colors';

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

    text = "";

    componentDidMount = () => {
        this.getDOOMFeed();
    }

    getDOOMFeed = () => {
        let request = new XMLHttpRequest();
        request.open("GET", "https://seuserhumano.wordpress.com/feed/", true);
        let response = "";

        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                response = request.responseText.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", '');

                window.DOMParser = require('xmldom').DOMParser;
                this.extractPostRSS(new DOMParser().parseFromString(response, "text/xml"))
            }
        };

        request.send(null);
    }

    extractPostRSS = (xmlDoc) => {
        var desc = xmlDoc.getElementsByTagName("item")[0].getElementsByTagName("title")[0].textContent;

    }




    getDataList = () => {

        let items = [new PostItem("0", "Titulo 1", "Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo"), new PostItem("1", "Título 2", "Conteudo"), new PostItem("2", "Título 3", "Conteudo")];

        return items;
    }

    _renderItem = ({ item }) => (<Post title={item.title} content={item.content}></Post>);

    render() {
        return (
            <View style={styles.container}>
                <FlatList keyExtractor={data => data.id} data={this.getDataList()} renderItem={this._renderItem} />
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

