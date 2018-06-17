import React, { Component } from 'react';

import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';

import { Post } from './Post';

class PostItem
{
    title = "";
    content = "";

    constructor (title, content)
    {
        this.title = title;
        this.content = content;
        
    }
}

export class PostViewer extends Component {

    render() {
        return (
            <View style={styles.container}> 
                <FlatList data={this.getDataList()} renderItem={this._renderItem} />  
            </View>   
        );
    }


    getDataList = () => {

        let items = [ new PostItem("Titulo 1", "Conteudo"), new PostItem("Título 2", "Conteudo"), new PostItem("Título 2", "Conteudo"),new PostItem("Título 2", "Conteudo"),new PostItem("Título 2", "Conteudo"),new PostItem("Título 2", "Conteudo"),new PostItem("Título 2", "Conteudo"), new PostItem("Título 2", "Conteudo") ];

        return items;
    }

    _renderItem = ({item}) => (<Post title={item.title} content={item.content}></Post>);

}


const styles = StyleSheet.create({

    container:
    {
        justifyContent: 'center',
    }

});

