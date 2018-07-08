import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Header from './components/Header';
import { Menu } from './components/Menu';
import { PostViewer } from './components/PostViewer';

import { general, colors } from './styles';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1}}>
        <View>
          <Header></Header>
          <Menu></Menu>
        </View> 
        <View style={[styles.rootContainer, styles.content]}>
          <PostViewer></PostViewer>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  ...general,
  content:
  {
    backgroundColor: colors.back,
    flex: 1,
  },

});
