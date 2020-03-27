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
import TripItem from './TripItem';

class TripListHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data, heading, onPressSeeAll, onPress, seeAllShown, } = this.props
        return (
            <View>
                <View style={[ApplicationStyles.rowCompContainer, { marginBottom: 0 }]}>
                    <Text style={[ApplicationStyles.bodyMediumText, { fontSize: totalSize(2.5), }]}>{heading}</Text>
                    {
                        seeAllShown ?
                            <ButtonSeeAll onPress={onPressSeeAll} />
                            :
                            null
                    }
                </View>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        <TripItem
                            item={item}
                            onPress={onPress}
                            index={index}
                            containerStyle={{ marginHorizontal: width(1.5), marginLeft: index === 0 ? width(5) : null, }}
                        />
                    }
                />
            </View>
        );
    }
}

export default TripListHorizontal;
