import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const PostFrase = ({ title, content, tag, url }) => (
    <TouchableOpacity onPress={() => { Linking.openURL(url)}}>

    <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {title}
            </Text>

        </View>
        <View>
            {
                getFrases(content)
            }
        </View>

        
        <View style={styles.tagsContainer}>
            <Icon name="ios-pricetag" style={styles.icon}></Icon>
            <Text style={styles.tagText}>{tag}</Text>
        </View>
    </View>
    </TouchableOpacity>

);

getFrases = (content) => {
    content = "<html>"+content+"</html>";
    window.DOMParser = require('xmldom').DOMParser;
    xmlDoc = new DOMParser().parseFromString(content, "text/xml");

    let frase = xmlDoc.getElementsByTagName("blockquote")[0].textContent;
    let autor = xmlDoc.getElementsByTagName("p")[1].textContent;

    return (
        <View style={styles.postContainer}>
            <Text style={styles.frase}>{frase}</Text>
            <Text style={styles.autor}>{autor}</Text>
        </View>);
}


export default PostFrase;