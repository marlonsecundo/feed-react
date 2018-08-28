import { View, Text, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Post/styles';

const PostReflexao = ({ title, content, tag, url }) => (
    <TouchableOpacity onPress={() => { Linking.openURL(url)}}>

    <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {title}
            </Text>

        </View>
        <View style={styles.separador}>
            <View></View>
        </View>
        <View style={styles.postContainer}>
            {
                getReflexoes(content).map((item, index) => {
                    if (index < 5)
                        return (<Text style={styles.postText} key={index}>{item}</Text>)
                })
            }
        </View>
        <View style={styles.tagsContainer}>
            <Icon name="ios-pricetag" style={styles.icon}></Icon>
            <Text style={styles.tagText}>{tag}</Text>
        </View>
    </View>
    </TouchableOpacity>

);

getReflexoes = (content) =>
{
    let versos = content.split("<p>");

    versos = versos.map((item) => {
        item = item.replace("</p>", "");
        return item;
    });
    return versos;
}


export default PostReflexao;