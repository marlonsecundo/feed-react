import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonMenu from '../UiComps/ButtonMenu';
import styles from './styles'
export class Menu extends Component {

    render() {
        return (
            <View style={[styles.rootContainer]}>
                <View style={[styles.container]}>
                    <ButtonMenu title="Poesias"></ButtonMenu>
                    <ButtonMenu title="Reflexões"></ButtonMenu>
                    <ButtonMenu title="Frases"></ButtonMenu>
                </View>
            </View>
        )
    };
}

