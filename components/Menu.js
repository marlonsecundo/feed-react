import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export class Menu extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Poesias
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        marginTop : 5,
        marginBottom: 15,
        marginHorizontal: 10,
    },
    textContainer:
    {
        borderBottomWidth: 0,
    },
    text:
    {
        fontSize: 20,
    }

});