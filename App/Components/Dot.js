import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Colors } from '../Themes';

class Dot extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { style } = this.props
        return (
            <View style={[{ height: totalSize(1), width: totalSize(1), borderRadius: 100, borderWidth: 0.5, borderColor: Colors.appTextColor6, backgroundColor: Colors.error }, style]}>

            </View>
        );
    }
}

export default Dot;
