import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  FlatList,
  View
} from 'react-native';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { PostViewer } from './components/PostViewer';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Menu ></Menu>
        <PostViewer></PostViewer>
    
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container :
  {
    flex: 1
  }
});
