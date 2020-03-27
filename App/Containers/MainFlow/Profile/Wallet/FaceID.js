import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { ImageBackground } from 'react-native';
import { Images, ApplicationStyles, Colors } from '../../../../Themes';
import CustomIcon from '../../../../Components/CustomIcon';
import { totalSize, width } from 'react-native-dimension';
import ButtonColored from '../../../../Components/ButtonColored';

class FaceID extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <ImageBackground source={Images.whale} style={ApplicationStyles.bgContainer}>
                <StatusBar hidden />
                <View style={{ flex: 1, backgroundColor: '#00000080' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={[ApplicationStyles.compContainer, { alignItems: 'center' }]}>
                            <CustomIcon source={Images.faceId_icon} size={totalSize(7.5)} />
                        </View>
                        <View style={[ApplicationStyles.compContainer, { marginHorizontal: width(25) }]}>
                            <Text style={[ApplicationStyles.h4, { fontSize: totalSize(2.25), color: Colors.appTextColor6, textAlign: 'center' }]}>Configure Face ID</Text>
                            <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor6, textAlign: 'center', marginTop: 10 }]}>Face ID allows you to conveneitly and it keep your wallet secure</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        <ButtonColored text="Enable Face ID" buttonStyle={{ backgroundColor: '#FFFFFF40', marginBottom: 10 }} />
                        <ButtonColored text="Later" buttonStyle={{ backgroundColor: '#FFFFFF40', marginBottom: 10 }} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default FaceID;
