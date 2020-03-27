import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Images, Colors } from '../Themes';
import { totalSize, width, height } from 'react-native-dimension';
import { Icon } from 'react-native-elements';

class ImagesOverlaped extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [1, 2, 3, 4]
        };
    }

    render() {
        const { data, onPressAdd, containerStyle } = this.props
        return (
            <View style={[{ width: width(20) }, containerStyle]}>
                {
                    data.map((item, key) => {
                        return (
                            <View style={{ position: 'absolute', left: (key * width(5)) }}>
                                <Image source={Images.user} style={{ height: totalSize(4), width: totalSize(4), borderRadius: 100 }} />
                            </View>
                        )
                    })
                }
                <TouchableOpacity activeOpacity={1} onPress={onPressAdd} style={{ position: 'absolute', left: (data.length * width(5)), height: totalSize(4), width: totalSize(4), borderRadius: 100, backgroundColor: Colors.appBgColor2, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="ios-add" type="ionicon" size={totalSize(3.5)} color={Colors.appTextColor4} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default ImagesOverlaped;
