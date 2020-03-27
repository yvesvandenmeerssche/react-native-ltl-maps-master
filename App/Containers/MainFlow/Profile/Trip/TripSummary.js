import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Colors, Images, Family } from '../../../../Themes';
import { height, totalSize, width } from 'react-native-dimension';
import BackArrowButton from '../../../../Components/BackArrowButton';
import { Image } from 'react-native';
import CustomIcon from '../../../../Components/CustomIcon';
import ImagesOverlaped from '../../../../Components/ImagesOverlaped';
import ButtonResponsive from '../../../../Components/ButtonResponsive';
import MapView, { Marker } from 'react-native-maps';
import LineHorizontal from '../../../../Components/LineHorizontal';
import PlacesListVertical from '../../../../Components/PlacesListVertical';
import DestinationListHorizontal from '../../../../Components/DestinationListHorizontal';
import ButtonColored from '../../../../Components/ButtonColored';

class TripSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: {
                title: 'Polynisia',
                image: Images.bg2,
                status: 'Completed',
                users: [1, 2, 3,]
            },
            region: {
                latitude: 51.5347,
                longitude: 0.1246,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            plans: [
                {
                    title: '3 NIGHTS',
                    places: [
                        { title: 'Polynisia', image: Images.bg2, places: '235' },
                    ],
                    highlights: [
                        { title: 'Four Seasons Resort', image: Images.bg, distance: '5', tags: ['surfing', 'Yoga Life', 'Kitesurf',] },
                        { title: 'Bora Bor Hotel', image: Images.bg2, distance: '3.6', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                        { title: 'Lec Arcs', image: Images.bg, distance: '2.5', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                        { title: 'Polynisia', image: Images.bg2, distance: '6', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                    ],
                },
                {
                    title: '4 NIGHTS',
                    places: [
                        { title: 'Los Angeles', image: Images.bg, places: '538' },
                    ],
                    highlights: [
                        { title: 'Bora Bor Hotel', image: Images.bg2, distance: '3.6', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                        { title: 'Four Seasons Resort', image: Images.bg, distance: '5', tags: ['surfing', 'Yoga Life', 'Kitesurf',] },
                        { title: 'Polynisia', image: Images.bg2, distance: '6', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                        { title: 'Lec Arcs', image: Images.bg, distance: '2.5', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                    ],
                }
            ]
        };
    }
    renderPlans(props) {
        const { data, onPress } = props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    scrollEnabled={false}
                    data={data}
                    renderItem={({ item, index }) =>
                        <View>
                            <LineHorizontal style={{ marginHorizontal: width(5) }} />
                            <View style={ApplicationStyles.compContainer}>
                                <Text style={[ApplicationStyles.HeadingSmall, {}]}>{item.title}  <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor5 }]}>. Aug 22-Aug 25</Text></Text>
                            </View>
                            <PlacesListVertical
                                data={item.places}
                                onPress={() => { }}
                            />
                            <DestinationListHorizontal
                                heading={"Hightlight from your plan"}
                                data={item.highlights}
                                onPress={() => { }}
                            />
                            <ButtonColored text="See day by day plan" buttonStyle={{ marginBottom: height(5) }} onPress={() => onPress(index)} />
                        </View>
                    }
                />
            </View>
        )
    }
    render() {
        const { trip, region, plans } = this.state
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <View style={ApplicationStyles.mainContainer}>
                <ScrollView>
                    <View style={{ position: 'absolute', width: width(100), height: height(30), backgroundColor: Colors.appTextColor5 }}>
                        <Image source={Images.bg2} style={{ height: null, width: null, flex: 1 }} />
                    </View>
                    <View style={ApplicationStyles.rowCompContainer}>
                        <CustomIcon source={Images.arrowLeft_icon} size={totalSize(2.5)} color={Colors.appTextColor6} onPress={() => navigation.goBack()} />
                        <CustomIcon source={Images.check_icon} size={totalSize(2.5)} color={Colors.appTextColor6} onPress={() => navigate('tripChecklist')} />
                    </View>
                    <View style={[ApplicationStyles.cardView, { marginTop: height(5) }]}>
                        <View style={{ marginVertical: height(2.5), alignItems: 'center' }}>
                            <ImagesOverlaped data={trip.users} containerStyle={{}} />
                        </View>
                        <View style={[ApplicationStyles.compContainer, { alignItems: 'center' }]}>
                            <View style={{ alignItems: 'center', marginBottom: height(2.5) }}>
                                <Text style={[[ApplicationStyles.HeadingMedium, { fontFamily: Family.appTextRegular, marginVertical: height(1.5) }]]}>{trip.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <CustomIcon source={Images.calender_icon} size={totalSize(1.5)} color={Colors.appTextColor4} />
                                    <Text style={[[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor4, marginLeft: 5 }]]}>Aug 22 - Aug 26</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <ButtonResponsive text="Chat" style={[styles.buttonStyle, { backgroundColor: '#FFFF', borderWidth: 1, borderColor: Colors.appColor1, marginRight: width(5) }]} textStyle={[styles.buttonTextStyle, { color: Colors.appColor1 }]} />
                                <ButtonResponsive onPress={() => navigate('tripEdit')} text="Detail" style={[styles.buttonStyle]} textStyle={styles.buttonTextStyle} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigate('tripRoadMap')} style={[ApplicationStyles.compContainer, {}]}>
                        <MapView
                            zoomEnabled
                            zoomTapEnabled
                            showsUserLocation
                            initialRegion={region}
                            style={{ height: height(30), width: null, borderRadius: 10 }}
                        >
                        </MapView>
                    </TouchableOpacity>
                    <this.renderPlans data={plans} onPress={(key) => navigate('dayByDayPlan')} />
                </ScrollView>
            </View>
        );
    }
}

export default TripSummary;

const styles = StyleSheet.create({
    buttonStyle: {
        height: height(7),
        width: width(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonTextStyle: {
        fontSize: totalSize(1.75)
    }
})