import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ApplicationStyles, Colors, Family, Images } from '../../../../Themes';
import { width, totalSize, height } from 'react-native-dimension';
import HeartButton from '../../../../Components/HeartButton';
import CustomIcon from '../../../../Components/CustomIcon';
import ButtonsListHorizontalSmall from '../../../../Components/ButtonsListHorizontalSmall';
import AddButton from '../../../../Components/AddButton';

class DayByDayPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDayIndex: 0,
            days_list: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
            day_detail: [
                { title: 'Bora Bor Hotel', image: Images.bg2, distance: '3.6', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                { title: 'Four Seasons Resort', image: Images.bg, distance: '5', tags: ['surfing', 'Yoga Life', 'Kitesurf',] },
                { title: 'Polynisia', image: Images.bg2, distance: '6', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
                { title: 'Lec Arcs', image: Images.bg, distance: '2.5', tags: ['surfing', 'Yoga Life', 'Kitesurf'] },
            ],
        };
    }
    onChangeDay = (i) => {
        this.setState({ selectedDayIndex: i })
    }
    renderDays(props) {
        const { data, selectedIndex, onPress } = props
        return (
            <View style={{ borderBottomWidth: 1, borderBottomColor: Colors.appBgColor2, marginBottom: height(2.5) }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => onPress(index)} style={{ paddingVertical: 10, paddingHorizontal: 5, marginHorizontal: width(5), borderBottomWidth: selectedIndex === index ? 2.5 : 0, borderBottomColor: Colors.appColor1 }}>
                            <Text style={[ApplicationStyles.bodyMediumText, { fontSize: totalSize(1.7), color: selectedIndex === index ? Colors.appColor1 : Colors.appTextColor4 }]}>{item}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }

    renderDayDetail(props) {
        const { data } = props
        const iconSize = totalSize(1.5)
        const iconColor = Colors.appTextColor1
        return (
            <FlatList
                data={data}
                renderItem={({ item, index }) =>
                    <View style={ApplicationStyles.compContainer}>
                        <View style={[ApplicationStyles.rowCompContainer, { marginHorizontal: 0, marginVertical: 0 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[ApplicationStyles.bodyMediumText, { fontFamily: Family.appTextMedium }]}>10:30</Text>
                                <Text style={[ApplicationStyles.bodyMediumText, { fontFamily: Family.appTextLight, marginHorizontal: width(5) }]}>15km</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <CustomIcon source={Images.walk_icon} size={iconSize} color={iconColor} />
                                    <View style={{ marginHorizontal: 7.5 }}>
                                        <CustomIcon source={Images.bus_icon} size={iconSize} color={iconColor} />
                                    </View>
                                    <CustomIcon source={Images.car_icon} size={iconSize} color={iconColor} />
                                </View>
                            </View>
                            <CustomIcon source={Images.map_icon} size={totalSize(2.5)} color={Colors.appColor2} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <View style={{ height: height(35), borderRightWidth: 0.5, borderRightColor: Colors.appTextColor5 }}></View>
                            </View>
                            <View style={{ flex: 9 }}>
                                <TouchableOpacity activeOpacity={1} style={{ marginVertical: height(2.5), marginLeft: width(2.5), backgroundColor: Colors.appBgColor1, elevation: 5, borderRadius: 10 }}>
                                    <Image source={item.image} style={{ height: height(35), width: null, borderRadius: 10 }} />
                                    <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, borderRadius: 10, justifyContent: 'space-between', backgroundColor: '#00000040' }}>
                                        <View style={[ApplicationStyles.compContainer, { alignItems: 'flex-end' }]}>
                                            <CustomIcon source={Images.heartOutline_icon} color={Colors.appTextColor6} size={totalSize(2.5)} />
                                        </View>
                                        <View style={{ backgroundColor: Colors.appBgColor1, borderRadius: 10 }}>
                                            <View style={[ApplicationStyles.compContainer]}>
                                                <Text style={[[ApplicationStyles.h4, {}]]}>{item.title}</Text>
                                                <ButtonsListHorizontalSmall data={item.tags} />
                                            </View>
                                            <View style={{ position: 'absolute', top: -totalSize(2), right: 12.5 }}>
                                                <AddButton />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
            />
        )
    }
    render() {
        const { days_list, selectedDayIndex, day_detail } = this.state
        return (
            <View style={ApplicationStyles.mainContainer}>
                <this.renderDays
                    data={days_list}
                    selectedIndex={selectedDayIndex}
                    onPress={(i) => this.onChangeDay(i)}
                />
                <this.renderDayDetail data={day_detail} />
            </View>
        );
    }
}

export default DayByDayPlan;
