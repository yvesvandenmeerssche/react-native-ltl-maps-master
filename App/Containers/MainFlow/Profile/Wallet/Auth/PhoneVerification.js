import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ApplicationStyles, Images, Colors } from '../../../../../Themes';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { width, totalSize } from 'react-native-dimension';
import ButtonRound from '../../../../../Components/ButtonRound';
import CustomIcon from '../../../../../Components/CustomIcon';
import BackArrowButton from '../../../../../Components/BackArrowButton';
import { Icon } from 'react-native-elements';
class PhoneVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }

    render() {
        const { code } = this.state
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <ImageBackground source={Images.piano_playing} style={ApplicationStyles.bgContainer}>
                <View style={[ApplicationStyles.mainContainer, { backgroundColor: '#00000080', }]}>
                    <View style={[ApplicationStyles.compContainer, { alignItems: 'flex-start' }]}>
                        <ButtonRound
                            onPress={() => navigation.goBack()}
                            buttonStyle={{ borderRadius: 5, paddingHorizontal: 10 }}
                            content={
                                <Icon name="ios-arrow-back" type="ionicon" color={Colors.appTextColor4} size={totalSize(2)} />
                            }
                        />
                    </View>
                    <View style={ApplicationStyles.compContainer}>
                        <Text style={[ApplicationStyles.HeadingMedium, { color: Colors.appTextColor6 }]}>Enter your code</Text>
                        <Text style={[ApplicationStyles.bodyMediumText, styles.textWhite, { marginTop: 5 }]}>Type the code we sent to  <Text style={{ color: Colors.appcolor4 }}>+1 234 567 8900</Text></Text>
                    </View>
                    <View style={[ApplicationStyles.compContainer, { alignItems: 'center' }]}>
                        <SmoothPinCodeInput
                            placeholder={<View style={{
                                width: 10,
                                height: 10,
                                borderRadius: 25,
                                opacity: 0.3,
                                backgroundColor: '#FFFF',
                            }}></View>}
                            // mask={<View style={{
                            //     width: 10,
                            //     height: 10,
                            //     borderRadius: 25,
                            //     backgroundColor: '#FFFFFF',
                            // }}></View>}
                            maskDelay={1000}
                            // password={true}
                            cellStyle={null}
                            // cellSize={totalSize(5)}
                            autoFocus={true}
                            cellSpacing={0}
                            codeLength={4}
                            cellStyleFocused={null}
                            value={code}
                            onFulfill={() => navigate('wallet')}
                            onTextChange={code => this.setState({ code })}
                        />
                    </View>
                    <View style={ApplicationStyles.compContainer}>
                        <Text style={[ApplicationStyles.bodyLargeText, styles.textWhite, { textAlign: 'center' }]}>Resend Code (21...)</Text>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}

export default PhoneVerification;

const styles = StyleSheet.create({
    textWhite: {
        color: Colors.appTextColor6
    }
})