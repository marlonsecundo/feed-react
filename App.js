import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  FlatList,
  View
} from 'react-native';

import  Header  from './components/Header';
import { Menu } from './components/Menu';
import { PostViewer } from './components/PostViewer';

import { general } from './styles';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}> 
        <View>
          <Header></Header> 
          <Menu></Menu> 
        </View>
        <View style={styles.container}>
          <PostViewer></PostViewer>
        </View>
        
      </View> 
    );
  }
}


const styles = StyleSheet.create({
  ...general,

});
