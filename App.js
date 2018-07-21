import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeScreen, AboutScreen } from './Screens';
import { createStackNavigator } from 'react-navigation';

type Props = {};

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends Component<Props> {

  render() {
    return (
      <RootStack />
    );
  }
}
