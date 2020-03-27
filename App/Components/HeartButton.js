import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { totalSize } from 'react-native-dimension';

class HeartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, color } = this.props
        return (
            <Icon name="heart-outline" type="material-community" size={totalSize(3)} color={color} onPress={onPress} />
        );
    }
}

export default HeartButton;
