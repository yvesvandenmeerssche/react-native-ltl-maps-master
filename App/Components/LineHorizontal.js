import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../Themes';

class LineHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { style } = this.props
        return (
            <View style={[{ borderBottomWidth: 0.5, borderColor: Colors.appTextColor5 }, style]}>
            </View>
        );
    }
}

export default LineHorizontal;
