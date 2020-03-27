import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles } from '../Themes';
import { totalSize, height } from 'react-native-dimension';
import { Icon } from 'react-native-elements';

class ButtonSocial extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { buttonStyle, textStyle, text, onPress, tintColor, iconName } = this.props
        return (
            <TouchableOpacity onPress={onPress} style={[ApplicationStyles.buttonColord, { borderRadius: 10, backgroundColor: '#FFFF', height: height(7) }, buttonStyle]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={iconName} type="material-community" size={totalSize(2.5)} color={tintColor} />
                    <Text style={[ApplicationStyles.buttonText, { color: tintColor, marginHorizontal: 5 }, textStyle]}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ButtonSocial;
