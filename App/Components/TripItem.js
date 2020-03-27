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
import CustomIcon from './CustomIcon';
class TripItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, item, containerStyle } = this.props
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={1} style={[{ marginVertical: height(2.5), marginHorizontal: width(5), backgroundColor: Colors.appBgColor1, elevation: 5, borderRadius: 10 }, containerStyle]}>
                <Image source={item.image} style={{ height: height(35), width: null, borderRadius: 10 }} />
                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, borderRadius: 10, justifyContent: 'space-between', backgroundColor: '#00000040' }}>
                    <View style={[ApplicationStyles.compContainer, { alignItems: 'flex-start' }]}>
                        <ButtonResponsive text={item.status} style={{ backgroundColor: item.status === 'On going' ? Colors.appColor1 : item.status === 'Up comming' ? Colors.appcolor3 : Colors.appcolor4 }} />
                    </View>
                    <View style={{ backgroundColor: Colors.appBgColor1, borderRadius: 10 }}>
                        <View style={[ApplicationStyles.compContainer, { alignItems: 'center', }]}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={[[ApplicationStyles.HeadingTiny, { fontFamily: Family.appTextRegular, marginVertical: height(1.5) }]]}>{item.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <CustomIcon source={Images.calender_icon} size={totalSize(1.5)} color={Colors.appTextColor4} />
                                    <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor4, marginLeft: 5 }]}>Aug 22 - Aug 26</Text>
                                </View>
                            </View>
                        </View>
                        <ImagesOverlaped data={item.users} containerStyle={{ position: 'absolute', alignSelf: 'center', top: -totalSize(2) }} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default TripItem;
