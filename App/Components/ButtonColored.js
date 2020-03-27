import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles } from '../Themes';
import { totalSize, height } from 'react-native-dimension';

class ButtonColored extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { buttonStyle, textStyle, text, onPress } = this.props
        return (
            <TouchableOpacity onPress={onPress} style={[ApplicationStyles.buttonColord, { borderRadius: 10, }, buttonStyle]}>
                <Text style={[ApplicationStyles.buttonText, { fontSize: totalSize(1.75), color: '#FFFF' }, textStyle]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

export default ButtonColored;
