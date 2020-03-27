import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ApplicationStyles, Colors } from '../Themes';
import { width } from 'react-native-dimension';

class InputWithIconTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ marginHorizontal: width(5), backgroundColor: Colors.appBgColor2, borderRadius: 10, alignItems: 'center' }}>
                <Text> InputWithIconTitle </Text>
            </View>
        );
    }
}

export default InputWithIconTitle;
