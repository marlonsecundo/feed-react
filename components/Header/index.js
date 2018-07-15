import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '../UiComps';

import styles from './styles';

const Header = ({btInfoAction}) => (
    <View style={styles.container}>
        <View style={styles.contTitle}>        
            <Text style={styles.title}>Seu Ser Humano</Text>
        </View>

        <View>
            <TouchableOpacity onPress={btInfoAction}>
                <Text style={styles.about}>i</Text>
            </TouchableOpacity> 
        </View>
    </View>
);

export default Header;