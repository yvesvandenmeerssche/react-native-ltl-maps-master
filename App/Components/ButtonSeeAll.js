import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Colors } from '../Themes';
import { Icon } from 'react-native-elements';
import { totalSize } from 'react-native-dimension';

class ButtonSeeAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center' }} onPress={this.props.onPress}>
                <Text style={[ApplicationStyles.bodySmallText, { color: Colors.appColor2 }]}>See all  </Text>
                <Icon name="arrow-right" type="simple-line-icon" color={Colors.appColor2} size={totalSize(1.5)} />
            </TouchableOpacity>
        );
    }
}

export default ButtonSeeAll;
