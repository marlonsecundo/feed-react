import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fonts, colors } from '../../styles'

const ButtonMenu = ({title}) => (
    <TouchableOpacity>
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