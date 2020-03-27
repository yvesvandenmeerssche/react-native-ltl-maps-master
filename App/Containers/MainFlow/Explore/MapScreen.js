import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, StyleSheet, Modal, Image, AsyncStorage } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import { totalSize, height, width } from 'react-native-dimension';
import { ApplicationStyles, Colors, Images } from '../../../Themes';
import ArrowUpDownButton from '../../../Components/ArrowUpDownButton';
import ButtonsListHorizontalSmall from '../../../Components/ButtonsListHorizontalSmall';
import LocationIcon from '../../../Components/LocationIcon';
import MapMarker from '../../../Components/MapMarker';
class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 51.5347,
                longitude: 0.1246,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            movedUp: false,
            topMarginValue: new Animated.Value(height(50)),
            tags: ['Landscape', 'Nature', 'Historic', 'Nature'],
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
            ]
        };
    }
    moveUp = () => {
        Animated.timing(this.state.topMarginValue, {
            toValue: height(5),
            duration: 250,
            easing: Easing.elastic()
        }).start();
    }
    moveDown = () => {
        Animated.timing(this.state.topMarginValue, {
            toValue: height(50),
            duration: 250,
            easing: Easing.elastic()
        }).start();
    }
    ManageMovement = () => {
        if (this.state.movedUp) {
            this.setState({ movedUp: false })
            this.moveDown()
        } else {
            this.setState({ movedUp: true })
            this.moveUp()
        }
    }


    render() {
        const { tags, movedUp, markers } = this.state
        const { navigation } = this.props
        const navigate = navigation
        return (
            <View style={ApplicationStyles.mainContainer}>
                <MapView
                    zoomEnabled
                    zoomTapEnabled
                    showsUserLocation
                    initialRegion={this.state.region}
                    style={{ flex: 1, position: 'absolute', bottom: 0, top: 0, right: 0, left: 0 }}
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
                </MapView>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={[ApplicationStyles.compContainer, { alignItems: 'center', marginTop: height(10) }]}>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()} style={styles.ButtonborderdResponsive}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="format-list-bulleted" type="material-community" size={totalSize(2.5)} color="#FFFF" />
                                <Text style={[ApplicationStyles.bodySmallText, { color: Colors.appTextColor6 }]}>  List View</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#FFFF', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                        <ArrowUpDownButton isMovedUp={movedUp} />
                        <View style={[ApplicationStyles.compContainer, { marginVertical: 0 }]}>
                            <ButtonsListHorizontalSmall data={tags} />
                        </View>
                        <View style={[ApplicationStyles.compContainer, { marginVertical: height(5) }]}>
                            <Text style={[ApplicationStyles.HeadingMedium, {}]}>Four Seasons Resort</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <LocationIcon />
                                <Text style={[ApplicationStyles.bodyLargeText, {}]}>  4 km  <Text style={{ color: Colors.appTextColor5 }}>from your location</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>





            </View>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({

    ButtonborderdResponsive: {
        borderRadius: 5,
        // borderWidth: 0.5,
        backgroundColor: Colors.appColor2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        //backgroundColor: '#FFFF'
    },
})