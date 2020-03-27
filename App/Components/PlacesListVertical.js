import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ApplicationStyles, Images, Colors } from '../Themes';
import { height, width, totalSize } from 'react-native-dimension';
import ButtonSeeAll from './ButtonSeeAll';
import { Icon } from 'react-native-elements';

class PlacesListVertical extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data, heading, onPress } = this.props
        return (
            <View>
                {
                    heading ?
                        <View style={[ApplicationStyles.rowCompContainer, { marginTop: height(5) }]}>
                            <Text style={[ApplicationStyles.HeadingMedium, {}]}>{heading}</Text>
                            {/* <ButtonSeeAll onPress={onPressSeeAll} /> */}
                        </View>
                        :
                        null
                }
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={onPress} activeOpacity={1} style={{ marginHorizontal: width(5), marginBottom: height(2.5) }}>
                            <Image source={item.image} style={{ height: height(25), width: null, borderRadius: 10 }} />
                            <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, borderRadius: 10, justifyContent: 'flex-end', backgroundColor: '#00000040' }}>
                                <View style={ApplicationStyles.compContainer}>
                                    <Text style={[[ApplicationStyles.HeadingSmall, { color: Colors.appTextColor6 }]]}>{item.title}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icon name="location-on" type="material" size={totalSize(1.5)} color={Colors.appTextColor6} />
                                        <Text style={[[ApplicationStyles.bodySmallText, { color: Colors.appTextColor6, marginHorizontal: 2.5 }]]}>{item.places} Places</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

export default PlacesListVertical;
