import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class Post extends Component {

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.titleContainer}>
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
        maxHeight: 150,
        padding: 5,
        marginHorizontal: 15,
        marginVertical: 5,
    },
    titleContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4545',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding : 5
    },
    postContainer:
    {
        backgroundColor: '#3232',
        justifyContent: 'center',
        alignItems: 'center',
        padding : 15
    },

});