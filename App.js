import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Header from './components/Header';
import { Menu } from './components/Menu';
import { PostViewer } from './components/PostViewer';

import { general, colors } from './styles';
import {category} from './components/AppConsts';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state =
      {
        menuAction: null,
      };

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header></Header>
          <Menu getFeed={this.state.menuAction}></Menu>
        </View>
        <View style={[styles.rootContainer, styles.content]}>
          <PostViewer
            onMount={menuAction => { this.setState({ menuAction: menuAction }) }}
            category={category.poesias}>
          </PostViewer>
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
