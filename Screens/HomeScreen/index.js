import { createStackNavigator } from 'react-navigation';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Menu, PostViewer, Header } from '../../components';

import { category } from '../../components/AppConsts';
import styles from './styles';

export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                menuAction: null,
            };

    }

    _onPressBtBack = () =>
    {
        this.props.navigation.navigate("About");
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Header btInfoAction={this._onPressBtBack}></Header>
                    <Menu getFeed={this.state.menuAction}></Menu>
                </View>
                <View style={[styles.rootContainer, styles.content]}>
                    <PostViewer
                        onMount={menuAction => { this.setState({ menuAction: menuAction }) }}
                        category={category.poesias}>
                    </PostViewer>
                </View>

            </View>
        )
    }
}

export default HomeScreen;