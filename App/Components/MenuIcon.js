import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { totalSize } from 'react-native-dimension';
import { Colors } from '../Themes';

class MenuIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { size, color, onPress, style } = this.props
        return (
            <Icon name="dots-vertical" type="material-community" onPress={onPress} size={totalSize(2.5)} color={Colors.appTextColor4} iconStyle={style} />
        );
    }
}

export default MenuIcon;
