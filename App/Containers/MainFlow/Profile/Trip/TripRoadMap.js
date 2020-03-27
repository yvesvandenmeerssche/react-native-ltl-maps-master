import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import CustomIcon from '../../../../Components/CustomIcon';
import { Images, Colors, ApplicationStyles } from '../../../../Themes';
import { totalSize, width, height } from 'react-native-dimension';
import MapView, { Marker, Polyline } from 'react-native-maps';
import ButtonRound from '../../../../Components/ButtonRound';
import MapMarker from '../../../../Components/MapMarker';
class TripRoadMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 51.5347,
                longitude: 0.1246,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: [
                {
                    title: 'London kings cross rank 1',
                    description: 'waiting time: 10 mins',
                    cooards: {
                        latitude: 51.5456,
                        longitude: 0.1246
                    }
                },
                {
                    title: 'London kings cross rank 1',
                    description: 'waiting time: 10 mins',
                    cooards: {
                        latitude: 51.5256,
                        longitude: 0.1536
                    }
                },
                {
                    title: 'London kings cross rank 1',
                    description: 'waiting time: 10 mins',
                    cooards: {
                        latitude: 51.5155,
                        longitude: 0.1356
                    }
                },
                {
                    title: 'London kings cross rank 1',
                    description: 'waiting time: 10 mins',
                    cooards: {
                        latitude: 51.5056,
                        longitude: 0.1568
                    }
                }
            ],
            Polyline_data: [
                {
                    latitude: 51.5456,
                    longitude: 0.1246
                },
                {
                    latitude: 51.5256,
                    longitude: 0.1536
                },
                {
                    latitude: 51.5155,
                    longitude: 0.1356
                },
                {
                    latitude: 51.5056,
                    longitude: 0.1568
                }
            ]
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <CustomIcon source={Images.wifiOff_icon} size={totalSize(2.5)} color={Colors.appTextColor4} containerStyle={{ marginRight: width(5) }} />
        }
    }
    render() {
        const { region, markers, Polyline_data } = this.state
        return (
            <View style={ApplicationStyles.mainContainer}>
                <MapView
                    zoomEnabled
                    zoomTapEnabled
                    showsUserLocation
                    initialRegion={region}
                    style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    {
                        markers.map((item, key) => {
                            return (
                                <Marker
                                    coordinate={item.cooards}
                                //title={item.title}
                                //description={item.description}
                                //image={images.markerImage}
                                >
                                    <MapMarker text={key + 1} />
                                </Marker>
                            )
                        })
                    }
                    <Polyline
                        coordinates={Polyline_data}
                        strokeColor={Colors.appColor1} // fallback for when `strokeColors` is not supported by the map-provider
                        strokeWidth={2.5}
                    />
                </MapView>
                <View style={{ backgroundColor: Colors.appBgColor1, elevation: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 8 }}>
                            <View style={ApplicationStyles.inputContainerUnderLined}>
                                <CustomIcon source={Images.currentLocation_icon} size={totalSize(1.75)} color={Colors.appColor1} />
                                <TextInput
                                    placeholder="Current Location"
                                    style={[ApplicationStyles.inputField, { width: width(65), borderBottomWidth: 0.5, borderBottomColor: Colors.appTextColor5 }]}
                                />
                            </View>
                            <View style={ApplicationStyles.inputContainerUnderLined}>
                                <CustomIcon source={Images.locationFill_icon} size={totalSize(1.75)} color={Colors.appColor1} />
                                <TextInput
                                    placeholder="Choose destination"
                                    style={[ApplicationStyles.inputField, { width: width(65), }]}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <ButtonRound
                                buttonStyle={{ backgroundColor: Colors.appColor1, padding: 10 }}
                                content={
                                    <CustomIcon source={Images.arrowReverse_icon} size={totalSize(1.75)} color={Colors.appTextColor6} />
                                }
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default TripRoadMap;
