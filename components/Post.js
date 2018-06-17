import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class Post extends Component {

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.postContainer}>
                    <Text>{this.props.title}</Text>
                </View> 
                <View style={styles.postContainer}>
                    <Text>{this.props.content}</Text>
                </View> 

            </View>

        );
    };
}

const styles = StyleSheet.create({
    container:
    {
        margin: 10,
    },
    postContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    }
});