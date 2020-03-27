import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import CustomIcon from '../../../../Components/CustomIcon';
import { ApplicationStyles, Images, Colors } from '../../../../Themes';
import { totalSize, width, height } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import ButtonColored from '../../../../Components/ButtonColored';

class TripEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days_detail: [
                {
                    date: 'Aug 21',
                    places: [
                        {
                            image: Images.bg2,
                            time: '7:00',
                            duration: '1h 30m'
                        },
                        {
                            image: Images.bg,
                            time: '10:30',
                            duration: '4h 30m'
                        },
                        {
                            image: Images.bg2,
                            time: '1:00',
                            duration: '2h 30m'
                        },
                        {
                            image: Images.bg,
                            time: '4:00',
                            duration: '3h'
                        }
                    ]
                },
                {
                    date: 'Aug 22',
                    places: [
                        {
                            image: Images.bg2,
                            time: '7:00',
                            duration: '1h 30m'
                        },
                        {
                            image: Images.bg,
                            time: '10:30',
                            duration: '4h 30m'
                        },

                        {
                            image: Images.bg2,
                            time: '4:00',
                            duration: '5h 30m'
                        }
                    ]
                },
                {
                    date: 'Aug 23',
                    places: [
                        {
                            image: Images.bg2,
                            time: '7:00',
                            duration: '1h 30m'
                        },
                        {
                            image: Images.bg,
                            time: '10:30',
                            duration: '4h 30m'
                        },
                        {
                            image: Images.bg2,
                            time: '1:00',
                            duration: '2h 30m'
                        },
                        {
                            image: Images.bg,
                            time: '4:00',
                            duration: '3h'
                        }
                    ]
                },
                {
                    date: 'Aug 24',
                    places: [
                        {
                            image: Images.bg2,
                            time: '7:00',
                            duration: '1h 30m'
                        },
                        {
                            image: Images.bg,
                            time: '10:30',
                            duration: '4h 30m'
                        },
                        {
                            image: Images.bg2,
                            time: '1:00',
                            duration: '2h 30m'
                        },
                        {
                            image: Images.bg,
                            time: '4:00',
                            duration: '3h'
                        }
                    ]
                }
            ]
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <CustomIcon source={Images.reset_icon} size={totalSize(2.5)} color={Colors.appTextColor4} containerStyle={{ marginRight: width(5) }} />
        }
    }
    renderTripDays(props) {
        const { data, onPressAdd } = props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) =>
                        <View style={{ backgroundColor: index % 2 ? Colors.appBgColor1 : Colors.appBgColor2, marginBottom: index === data.length - 1 ? height(10) : null }}>
                            <View style={[ApplicationStyles.rowCompContainer, { marginBottom: 0 }]}>
                                <Text style={[ApplicationStyles.bodyMediumText, { fontSize: totalSize(1.75) }]}>Day {index + 1} - {item.date}  <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor5 }]}>({data.length} Places)</Text></Text>
                                <Icon name="close" size={totalSize(2.5)} color={Colors.appTextColor4} />
                            </View>
                            <View style={[ApplicationStyles.rowCompContainer, { flexWrap: 'wrap', justifyContent: 'flex-start' }]}>
                                {
                                    item.places.map((item, key) => {
                                        return (
                                            <View style={{ marginVertical: 5, marginRight: width(5) }}>
                                                <Image source={item.image} style={{ height: totalSize(12.5), width: width(25), borderRadius: 5, }} />
                                                <View style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: '#00000040', borderRadius: 5 }}>
                                                    <View style={{ alignItems: 'center', marginVertical: 5 }}>
                                                        <Text style={[ApplicationStyles.h4, { fontSize: totalSize(1.75), color: Colors.appTextColor6 }]}>{item.time}</Text>
                                                        <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor6 }]}>{item.duration}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                                <TouchableOpacity onPress={onPressAdd} style={{ height: totalSize(12.5), width: totalSize(12.5), marginVertical: 5, borderRadius: 5, backgroundColor: '#E5E5E5', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name="add" size={totalSize(5)} color={Colors.appTextColor4} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                />
            </View>
        )
    }
    render() {
        const { navigate } = this.props.navigation
        const { days_detail } = this.state
        return (
            <View style={ApplicationStyles.mainContainer}>
                <this.renderTripDays data={days_detail} onPressAdd={() => navigate('addPlaceToTrip')} />
                <View style={{ position: 'absolute', right: 0, bottom: 0, left: 0 }}>
                    <ButtonColored text="Add new day" buttonStyle={{ marginVertical: height(1.5) }} />
                </View>
            </View>
        );
    }
}

export default TripEdit;
