import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { height, totalSize } from 'react-native-dimension';
import { Colors, ApplicationStyles } from '../Themes';

class ArrowUpDownButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, isMovedUp } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress}>
                <View style={[ApplicationStyles.compContainer, { marginVertical: height(0.5) }]}>
                    <Icon name={isMovedUp ? "ios-arrow-down" : "ios-arrow-up"} type="ionicon" size={totalSize(2.5)} color={Colors.appTextColor5} />
                </View>
            </TouchableOpacity>
        );
    }
}

export default ArrowUpDownButton;
