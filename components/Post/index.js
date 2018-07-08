import React  from 'react';
import { StyleSheet, View, Text, WebView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';


const Post = ({ title, content, tag }) => (
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
                getPoesias(content).map((item, index) => {
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
);

getPoesias = (content) => {
    let versos = content.split("<p>");

    versos = versos.join("$");

    versos = versos.split("<br />");

    versos = versos.join("$").split("$");

    versos = versos.map((item) => {
        item = item.replace("</p>", "");
        item = item.replace("\n", "");
        item = item.replace('\n', "")
        return item;
    });


    versos = versos.filter((item, index) => {
        return index !== 0;
    });

    return versos;
}



export default Post;