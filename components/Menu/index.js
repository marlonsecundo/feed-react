import React, { Component } from 'react';
import { View } from 'react-native';
import { ButtonMenu } from '../UiComps';

import { category } from '../AppConsts';
import styles from './styles';

export default class Menu extends Component {

    constructor(props) {
        super(props);
        
    }

    _onPressBtMenu = (category) =>
    {
        if (this.props.getFeed !== null)
            this.props.getFeed(category);
    }

    render() {
        return (
            <View style={[styles.rootContainer]}>
                <View style={[styles.container]}>
                    <ButtonMenu action={this._onPressBtMenu} title="Poesias" cat={category.poesias}></ButtonMenu>
                    <ButtonMenu action={this._onPressBtMenu} title="Reflexões" cat={category.reflexoes}></ButtonMenu>
                    <ButtonMenu action={this._onPressBtMenu} title="Frases" cat={category.frases}></ButtonMenu>
                </View>
            </View>
        )
    };
}

