import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Images } from '../Themes';
import { totalSize } from 'react-native-dimension';

class LocationIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Image source={Images.location_icon} resizeMode={"contain"} style={{ height: totalSize(1.5), width: totalSize(1.5) }} />
        );
    }
}

export default LocationIcon;
