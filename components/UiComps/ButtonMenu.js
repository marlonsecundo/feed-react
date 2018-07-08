import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fonts, colors } from '../../styles';
import { category } from '../AppConsts';



const ButtonMenu = ({ title, action, cat }) => (
    <TouchableOpacity
        onPress={() => { action(cat) }}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    text:
    {
        fontFamily: fonts.family,
        fontSize: fonts.title,
        color: colors.primary,
        opacity: 0.7,
    },


});

export default ButtonMenu;