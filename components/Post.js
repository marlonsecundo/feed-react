import React, { Component } from 'react';
import { StyleSheet, View, Text, WebView } from 'react-native';


export class Post extends Component {

    render() {

        let html = this.props.content;
        console.log(html);
        return (

            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.postContainer}>
                    <WebView style={styles.webview} source={ { html, baseUrl : 'web/'  } }>  
                    </WebView> 
                </View>

            </View>
 
        );
    };
}

const styles = StyleSheet.create({
    container:
    {
        padding: 5,
        marginHorizontal: 15,
        marginVertical: 5,
        flex: 1,
    }, 
    titleContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4545',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 5
    },
    postContainer:
    {
        backgroundColor: '#3232',
        padding: 15,
        flex: 1,
    },
    webview:
    {
        backgroundColor : 'red',
        flex: 1,
        minHeight: 150,
    },

});