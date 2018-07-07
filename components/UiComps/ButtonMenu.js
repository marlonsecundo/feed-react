import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonMenu = ({title}) => (
    <TouchableOpacity>
        <Text>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

});

export default ButtonMenu;