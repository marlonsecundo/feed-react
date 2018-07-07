import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonMenu from '../UiComps/ButtonMenu';
export class Menu extends Component {

    render() {
        return (
            <View>
                <ButtonMenu title="Poesias"></ButtonMenu>
            </View>
        )
    };
}

