import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class AboutScreen extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text>Tela de Sobre</Text>
            </View>
        );
    }

} 