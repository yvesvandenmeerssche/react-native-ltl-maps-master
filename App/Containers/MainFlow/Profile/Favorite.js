import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { ApplicationStyles, Colors, Images } from '../../../Themes';
import { totalSize, width, height } from 'react-native-dimension';
import BackArrowButton from '../../../Components/BackArrowButton';
import FilterButton from '../../../Components/FilterButton';
import DestinationListHorizontal from '../../../Components/DestinationListHorizontal';
import DestinationListVertical from '../../../Components/DestinationListVertical';

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            best_destinations: [
                { title: 'Four Seasons Resort', image: Images.bg, distance: '5', tags: ['surfing', 'Yoga Life', 'Kitesurf',] },
                { title: 'Bora Bor Hotel', image: Images.bg2, distance: '3.6', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                { title: 'Lec Arcs', image: Images.bg, distance: '2.5', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                { title: 'Polynisia', image: Images.bg2, distance: '6', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
            ],
            destinations: [
                { title: 'Somatra', image: Images.bg2, distance: '3.8', tags: ['Landscape', 'Nature', 'Historic',] },
                { title: 'Lec Arcs', image: Images.bg, distance: '2.5', tags: ['Landscape', 'Nature',] },
                { title: 'Polynisia', image: Images.bg2, distance: '6', tags: ['Landscape', 'Nature', 'Historic', 'Nature'] },
                { title: 'Bali', image: Images.bg, distance: '10', tags: ['Landscape', 'Nature', 'Historic'] },
                { title: 'Somatra', image: Images.bg2, distance: '3.8', tags: ['Landscape', 'Nature', 'Historic'] },
                { title: 'Lec Arcs', image: Images.bg, distance: '2.5', tags: ['Landscape', 'Nature', 'Historic'] },
                { title: 'Polynisia', image: Images.bg2, distance: '6', tags: ['Landscape', 'Nature', 'Historic'] },
                { title: 'Bali', image: Images.bg, distance: '10', tags: ['Landscape', 'Nature', 'Historic'] },
            ],
        };
    }

    render() {
        const { navigation } = this.props
        const { navigate } = navigation
        const { params } = this.props.navigation.state
        const { best_destinations, destinations } = this.state
        return (
            <View style={ApplicationStyles.mainContainer}>
                <View style={ApplicationStyles.rowCompContainer}>
                    <BackArrowButton color={Colors.appTextColor4} onPress={() => navigation.goBack()} />
                    <TextInput
                        placeholder="Search places to sleep, eat or play..."
                        style={[ApplicationStyles.inputField, { backgroundColor: Colors.appBgColor2, borderRadius: 10, width: width(70), height: height(6), fontSize: totalSize(1.5), paddingHorizontal: 10 }]}
                    />
                    <FilterButton onPress={() => navigate('filterScreen')} />
                </View>
                <ScrollView>
                    <View style={[ApplicationStyles.compContainer, { marginTop: 0 }]}>
                        <Text style={[ApplicationStyles.h3, { fontSize: totalSize(3.5) }]}>My Favorite</Text>
                    </View>
                    {/* <DestinationListHorizontal
                        heading={"Best in Tahiti"}
                        data={best_destinations}
                        onPress={() => navigate('destinationDetail')}
                        onPressSeeAll={() => navigate('')}
                    /> */}
                    <DestinationListVertical
                        //heading={"All of the places"}
                        data={destinations}
                        onPress={() => navigate('destinationDetail')}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default Favorite;
