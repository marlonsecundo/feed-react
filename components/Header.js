import React, { Component } from 'react';

import { Text, Button, View, StyleSheet } from 'react-native';

export class Header extends Component {

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.title}>Ser Humano</Text>
                <Button title="Info" onPress={()=>{}}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    title:
    {
        fontSize: 30,
    },
});
