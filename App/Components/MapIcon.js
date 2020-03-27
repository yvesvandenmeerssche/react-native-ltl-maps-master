import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Images } from '../Themes';
import { totalSize } from 'react-native-dimension';

class MapIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Image source={Images.map_icon} resizeMode={"contain"} style={{ height: totalSize(2), width: totalSize(2) }} />
        );
    }
}

export default MapIcon;
