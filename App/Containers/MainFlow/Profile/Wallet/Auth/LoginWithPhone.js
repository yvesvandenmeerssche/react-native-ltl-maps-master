import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Images, Colors } from '../../../../../Themes';
import { ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import ButtonColored from '../../../../../Components/ButtonColored';
import CountryPicker from 'react-native-country-picker-modal'

class LoginWithPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCountryModalVisile: false
        };
    }

    toggleCountryModal = () => this.setState({ isCountryModalVisile: !this.state.isCountryModalVisile })

    Custominput(props) {
        const { left, right, center, onPress } = props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={{ marginHorizontal: width(5), backgroundColor: '#F2F2F2', borderRadius: 10, marginBottom: height(2.5) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: height(2) }}>
                    <View style={{ flex: 2, alignItems: 'center' }}>
                        {left}
                    </View>
                    <View style={{ flex: 6 }}>
                        {center}
                    </View>
                    <View style={{ flex: 2, alignItems: 'center' }}>
                        {right}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    customButton(props) {
        const { content, style, onPress } = props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ backgroundColor: Colors.appColor1, borderRadius: 5, height: height(7), alignItems: 'center', justifyContent: 'center' }, style]}>
                {content}
            </TouchableOpacity>
        )
    }
    render() {
        const { navigate } = this.props.navigation
        const { isCountryModalVisile } = this.state
        return (
            <ImageBackground source={Images.iland} style={{ flex: 1, height: height(60), width: null, }}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={ApplicationStyles.bottomCardView}>
                        <ScrollView>
                            <View style={[ApplicationStyles.compContainer, { marginVertical: height(5) }]}>
                                <Text style={ApplicationStyles.HeadingMedium}>Welcome back!</Text>
                                <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor5, marginTop: 10 }]}>Enter your mobile number to login.</Text>
                            </View>
                            <this.Custominput
                                left={
                                    <CountryPicker
                                        withCallingCode={true}
                                        withAlphaFilter={true}
                                        withEmoji={true}
                                        visible={isCountryModalVisile}
                                        onClose={this.toggleCountryModal}
                                        countryCode="US"
                                    />
                                }
                                center={
                                    <Text style={ApplicationStyles.bodyMediumText}>United States of America</Text>
                                }
                                onPress={this.toggleCountryModal}
                                right={
                                    <Icon name="ios-arrow-down" type="ionicon" color={Colors.appTextColor4} size={totalSize(2.5)} />
                                }
                            />
                            <this.Custominput
                                left={
                                    <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor4 }]}>+01</Text>
                                }
                                center={
                                    <TextInput
                                        placeholder={"234 567 8900"}
                                        style={[ApplicationStyles.inputField, { fontSize: totalSize(1.5), width: null, padding: 0, height: height(6) }]}
                                    />
                                }
                                right={
                                    <Icon name="ios-checkmark-circle-outline" type="ionicon" color={Colors.appcolor4} size={totalSize(2.5)} />
                                }
                            />
                            <View style={ApplicationStyles.rowCompContainer}>
                                <this.customButton
                                    onPress={() => navigate('faceDetection')}
                                    style={{ paddingHorizontal: width(10), backgroundColor: "#F2F2F2" }}
                                    content={
                                        <Icon name="face-recognition" type="material-community" size={totalSize(2.5)} color={Colors.appColor1} />
                                    }
                                />
                                <this.customButton
                                    onPress={() => navigate('phoneVerification')}
                                    style={{ width: width(60) }}
                                    content={
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="phone" type="material-community" size={totalSize(2.5)} color={Colors.appTextColor6} />
                                            <Text style={[ApplicationStyles.buttonText, { color: Colors.appTextColor6, marginLeft: 5 }]}>Send Code</Text>
                                        </View>
                                    }
                                />
                            </View>
                            <View style={ApplicationStyles.compContainer}>
                                <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor5, textAlign: 'center' }]}>New user?  <Text style={[{ color: Colors.appColor1 }]} onPress={() => navigate('signup')}>Get Started</Text></Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default LoginWithPhone;
