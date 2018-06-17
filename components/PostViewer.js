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

    render() {
        return (
            <View style={styles.container}>  
                <FlatList keyExtractor={data => data.id} data={this.getDataList()} renderItem={this._renderItem} />
            </View>
        );
    }


    getDataList = () => {

        let items = [new PostItem("0", "Titulo 1" , "Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo"), new PostItem("1", "Título 2", "Conteudo"), new PostItem("2", "Título 3", "Conteudo")];

        return items;
    }

    _renderItem = ({ item }) => (<Post title={item.title} content={item.content}></Post>);

}


const styles = StyleSheet.create({

    container:
    {
        justifyContent: 'center',
        flex: 1,
    },
});

