import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { totalSize } from 'react-native-dimension';

class PhoneButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, color } = this.props
        return (
            <Icon name="phone" type="simple-line-icon" size={totalSize(2.5)} color={color} onPress={onPress} />
        );
    }
}

export default PhoneButton;
