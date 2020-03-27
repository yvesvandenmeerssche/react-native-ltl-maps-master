import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { totalSize } from 'react-native-dimension';
import { Colors } from '../Themes';

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={this.props.onPress} style={[{ backgroundColor: Colors.appColor1, borderRadius: 100, height: totalSize(4), width: totalSize(4), alignItems: 'center', justifyContent: 'center' }, this.props.style]}>
                <Icon name="ios-add" type="ionicon" size={totalSize(3.5)} color={'#FFFF'} />
            </TouchableOpacity>
        );
    }
}

export default AddButton;
