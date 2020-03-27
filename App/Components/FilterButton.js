import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Images } from '../Themes';
import { totalSize } from 'react-native-dimension';

class FilterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress}>
                <Image source={Images.filter_icon} resizeMode="contain" style={{ height: totalSize(2.5), width: totalSize(2.5) }} />
            </TouchableOpacity>
        );
    }
}

export default FilterButton;
