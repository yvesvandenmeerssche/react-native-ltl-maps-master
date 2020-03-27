import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import { ApplicationStyles, Colors, Family } from '../Themes';

class RenderChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={1} onPress={this.props.onPress}>
                        <View style={{ marginHorizontal: width(5), marginVertical: height(1.5), flexDirection: 'row', }}>
                            <View style={{ flex: 7.5, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 10 }}>
                                    <Image source={item.user_pic} style={{ height: totalSize(5), width: totalSize(5), borderRadius: 100 }} />
                                    <View style={{ position: 'absolute', bottom: -2.5, right: -2.5, backgroundColor: '#FFFF', borderRadius: 100 }}>
                                        <View style={{ backgroundColor: '#4CBD51', borderRadius: 100, margin: 2, height: totalSize(1), width: totalSize(1) }}>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={[ApplicationStyles.HeadingTiny, {}]}>{item.user_name}</Text>
                                    <Text style={[ApplicationStyles.bodySmallText, { color: Colors.appTextColor4, marginTop: 2.5 }]}>Nice weather.  Lets go for a wal</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <View style={{}}>
                                    <Text style={[ApplicationStyles.bodySmallText, { color: Colors.appTextColor4 }]}>01:36 PM</Text>
                                </View>
                                {/* {
                                    item.newMessages ?
                                        <Icon name="check-all" type="material-community" size={totalSize(1.5)} color={Colors.appColor5} />
                                        :
                                        item.read ?
                                            <View style={{ height: totalSize(2.5), width: totalSize(2.5), borderRadius: 100, backgroundColor: Colors.appColor3, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={[ApplicationStyles.bodyMediumText, { color: '#FFFF' }]}>2</Text>
                                            </View>
                                            :
                                            null
                                } */}
                            </View>
                        </View>
                        {/* <View style={{ marginHorizontal: width(5), marginLeft: width(17.5), borderBottomWidth: 0.5, borderBottomColor: Colors.appTextColor5, }}></View> */}
                    </TouchableOpacity>
                }
            />
        );
    }
}

export default RenderChats;
