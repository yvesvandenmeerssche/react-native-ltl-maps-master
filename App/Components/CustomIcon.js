import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

class CustomIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, size, source, color, containerStyle } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={containerStyle}>
                <Image source={source} resizeMode="contain" style={{ height: size, width: size, tintColor: color }} />
            </TouchableOpacity>
        );
    }
}

export default CustomIcon;
