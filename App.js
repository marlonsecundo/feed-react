import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  FlatList,
  View
} from 'react-native';

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { PostViewer } from './components/PostViewer';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header></Header>
        <Menu></Menu>
        <PostViewer></PostViewer>
    
      </View>
    );
  }
}
