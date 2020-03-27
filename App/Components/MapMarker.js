import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomIcon from './CustomIcon';
import { Images, Colors, ApplicationStyles } from '../Themes';
import { totalSize } from 'react-native-dimension';

class MapMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { text } = this.props
        return (
            <View>
                <CustomIcon source={Images.locationFill_icon} size={totalSize(5)} />
                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, alignItems: 'center' }}>
                    <View style={{ height: totalSize(3.75), width: totalSize(3.75), backgroundColor: '#FFFFFF', borderWidth: 0.5, borderColor: Colors.appColor1, borderRadius: 100, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={[ApplicationStyles.h4, { color: Colors.appColor1 }]}>{text}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default MapMarker;
