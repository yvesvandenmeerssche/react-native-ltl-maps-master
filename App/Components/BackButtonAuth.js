import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles } from '../Themes';
import { Icon } from 'react-native-elements';
import { totalSize, height } from 'react-native-dimension';

class BackButtonAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, onPress } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[ApplicationStyles.compContainer, { marginTop: height(5) }]}>
                <View style={{ alignItems: 'flex-start' }}>
                    <Icon name="arrow-left" type="simple-line-icon" size={totalSize(2.5)} color={"#FFFF"} />
                    <Text style={[ApplicationStyles.h3, { marginTop: 10, color: '#FFFF', fontSize: totalSize(3.5) }]}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default BackButtonAuth;
