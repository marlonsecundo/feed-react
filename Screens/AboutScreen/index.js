import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                    <Icon style={styles.icon} name="ios-arrow-back"></Icon>
                </TouchableOpacity>
                <Text style={styles.desenv}>Desenvolvedor</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../Assets/Images/me.jpg')}></Image>
                    <Text style={styles.name}>Marlon Secundo</Text>
                </View>
                <View style={styles.versionContainer}>
                    <Text style={styles.version}>Versão 0.1 / 2018</Text>
                </View>
            </View>
        );
    }

} 