import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { ApplicationStyles, Images, Colors } from '../../../../Themes';
import DestinationListVertical from '../../../../Components/DestinationListVertical';
import { height } from 'react-native-dimension';

class AddPlaceToTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const { destinations } = this.state
        return (
            <View style={ApplicationStyles.mainContainer}>
                <View style={{ borderBottomWidth: 0.5, borderBottomColor: Colors.appTextColor5 }}>
                    <View style={[ApplicationStyles.compContainer, { marginTop: 0 }]}>
                        <Text style={ApplicationStyles.h2}>Add Place To Trip</Text>

                    </View>
                    <TextInput
                        placeholder="Search Places to Live The Life "
                        style={[ApplicationStyles.inputFieldColored, { backgroundColor: Colors.appBgColor2, elevation: 0, borderRadius: 10, paddingHorizontal: 10, marginBottom: height(2.5) }]}
                    />
                </View>
                <DestinationListVertical
                    // heading={"All of the places"}
                    data={destinations}
                    onPress={() => navigate('destinationDetail')}
                />
            </View>
        );
    }
}

export default AddPlaceToTrip;
