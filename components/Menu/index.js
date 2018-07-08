import React, { Component } from 'react';
import { View } from 'react-native';
import ButtonMenu from '../UiComps/ButtonMenu';
import styles from './styles';
import { category } from '../AppConsts';

export class Menu extends Component {

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
                    <ButtonMenu action={this._onPressBtMenu} title="Reflexões"></ButtonMenu>
                    <ButtonMenu action={this._onPressBtMenu} title="Frases" cat={category.frases}></ButtonMenu>
                </View>
            </View>
        )
    };
}

