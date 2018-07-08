import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '../UiComps';



import styles from './styles';

const Header = () => (
    <View style={styles.container}>
        <View style={styles.contTitle}>        
            <Text style={styles.title}>Ser Humano</Text>
        </View>

        <View>
            <TouchableOpacity>
                <Text style={styles.about}>i</Text>
            </TouchableOpacity> 
        </View>
    </View>
);

export default Header;