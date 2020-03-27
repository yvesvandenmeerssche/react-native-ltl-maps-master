import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { totalSize } from 'react-native-dimension';

class TabIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { icon, tintColor } = this.props
        return (
            <Image source={icon} resizeMode="contain" style={{ height: totalSize(2.5), width: totalSize(2.5), tintColor: tintColor }} />
        );
    }
}

export default TabIcon;
