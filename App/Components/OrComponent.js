import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { width, height } from 'react-native-dimension';
import { ApplicationStyles, Colors } from '../Themes';
import LineHorizontal from './LineHorizontal';

class OrComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ marginHorizontal: width(5), marginVertical: height(2.5), flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 4.5 }}>
                    <LineHorizontal />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={[ApplicationStyles.bodyMediumText,{color:Colors.appTextColor4}]}>OR</Text>
                </View>
                <View style={{ flex: 4.5 }}>
                    <LineHorizontal />
                </View>
            </View>
        );
    }
}

export default OrComponent;
