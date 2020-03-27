import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Images } from '../Themes';
import { Icon } from 'react-native-elements';
import { totalSize, height } from 'react-native-dimension';
import { Image } from 'react-native';

class BackArrowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, color } = this.props
        return (
            <Image source={Images.arrowLeft_icon} resizeMode="contain" style={{ height: totalSize(2.25), width: totalSize(2.25), tintColor: color }} />
        );
    }
}

export default BackArrowButton;
