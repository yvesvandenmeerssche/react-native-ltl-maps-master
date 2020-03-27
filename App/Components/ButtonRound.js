import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Colors, ApplicationStyles, Images } from '../Themes';
import { totalSize, } from 'react-native-dimension';
class ButtonRound extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, buttonStyle, content } = this.props
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={[{ backgroundColor: Colors.appBgColor1, borderRadius: 100, padding: 7.5, elevation: 2.5 }, buttonStyle]}>
                {content}
            </TouchableOpacity>
        );
    }
}

export default ButtonRound;
