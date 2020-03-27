import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ApplicationStyles, Images, Colors, Family } from '../Themes';
import { height, width, totalSize } from 'react-native-dimension';
import ButtonSeeAll from './ButtonSeeAll';
import { Icon } from 'react-native-elements';
import HeartButton from './HeartButton';
import ButtonsListHorizontalSmall from './ButtonsListHorizontalSmall';
import AddButton from './AddButton';
import ButtonResponsive from './ButtonResponsive';
import ImagesOverlaped from './ImagesOverlaped';
class WalletItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, item, containerStyle } = this.props
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={1} style={[{ marginVertical: height(2.5), marginHorizontal: width(5), backgroundColor: Colors.appBgColor1, elevation: 5, borderRadius: 10 }, containerStyle]}>
                <Image source={item.image} style={{ height: height(25), width: null, borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                <View style={[ApplicationStyles.compContainer, {}]}>
                    <Text style={[[ApplicationStyles.bodyMediumText, { marginBottom: height(1), fontSize: totalSize(1.75) }]]}>{item.title}</Text>
                    <Text style={[[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor4, }]]}>{item.detail}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default WalletItem;
