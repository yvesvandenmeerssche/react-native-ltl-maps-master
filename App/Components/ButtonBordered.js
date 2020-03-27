import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles } from '../Themes';
import { totalSize, height } from 'react-native-dimension';

class ButtonBordered extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { buttonStyle, textStyle, text, onPress } = this.props
        return (
            <TouchableOpacity onPress={onPress} style={[ApplicationStyles.buttonBorderd, { borderRadius: 10, borderColor: '#FFFF' }, buttonStyle]}>
                <Text style={[ApplicationStyles.buttonText, { fontSize: totalSize(1.75), color: '#FFFF' }, textStyle]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

export default ButtonBordered;
