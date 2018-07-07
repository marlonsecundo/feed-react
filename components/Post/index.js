import React, { Component } from 'react';

import { StyleSheet, View, Text, WebView } from 'react-native';


const Post = ({ title, content}) => (
    <View>
        <View>
            <Text>
                {title}
            </Text>
        </View>
        <View>
            <WebView /*style={}*/ source={{ content, baseUrl: 'web/' }}>
            </WebView>
        </View>
    </View>
);

export default Post;