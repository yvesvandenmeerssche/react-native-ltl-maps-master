import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors, ApplicationStyles } from '../Themes';

class ButtonResponsive extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, style, text, textStyle } = this.props
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={1} style={[{ backgroundColor: Colors.appColor1, borderRadius: 2.5, paddingHorizontal: 5, paddingVertical: 5 }, style]}>
                <Text style={[ApplicationStyles.bodySmallText, { color: Colors.appTextColor6 }, textStyle]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

export default ButtonResponsive;
