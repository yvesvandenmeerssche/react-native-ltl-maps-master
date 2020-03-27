import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { ApplicationStyles, Images, Colors, Family } from '../../../../../Themes';
import { ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import ButtonColored from '../../../../../Components/ButtonColored';
import CountryPicker from 'react-native-country-picker-modal'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    Custominput(props) {
        const { title, placeholder, iconName, codeShown } = props
        return (
            <View style={{ marginHorizontal: width(5), backgroundColor: '#F2F2F2', borderRadius: 10, marginBottom: height(2.5) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: height(2) }}>
                    <View style={{ flex: 2, alignItems: 'center' }}>
                        <Icon name={iconName} type="material-community" size={totalSize(2.5)} color={Colors.appColor1} />
                    </View>
                    <View style={{ flex: 8 }}>
                        <Text style={[ApplicationStyles.bodySmallText, { fontFamily: Family.appTextBold }]}>{title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {
                                codeShown ?
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <CountryPicker
                                            withCallingCode={true}
                                            withAlphaFilter={true}
                                            withEmoji={true}
                                            countryCode="US"
                                        />
                                        <Text style={[ApplicationStyles.bodyLargeText, { color: Colors.appTextColor4, marginHorizontal: 10 }]}>+01</Text>
                                    </View>
                                    :
                                    null
                            }
                            <TextInput
                                placeholder={placeholder}
                                style={[ApplicationStyles.inputField, { width: null, padding: 0, height: height(6) }]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <ImageBackground source={Images.pineapple} style={{ flex: 1, height: height(60), width: null, }}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={ApplicationStyles.bottomCardView}>
                        <ScrollView>
                            <View style={[ApplicationStyles.compContainer, { marginVertical: height(5) }]}>
                                <Text style={ApplicationStyles.h4}>Get Started</Text>
                                <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor5, marginTop: 10 }]}>Let’s create your account</Text>
                            </View>
                            <this.Custominput title="NAME" placeholder="David Morales" iconName="account-outline" />
                            <this.Custominput title="EMAIL" placeholder="david.morales@mail.com" iconName="email-outline" />
                            <this.Custominput title="PHONE NUMBER" placeholder="234 567 8900" iconName="phone" codeShown={true} />
                            <ButtonColored onPress={() => navigate('wallet')} text="Get Started" />
                            <View style={ApplicationStyles.compContainer}>
                                <Text style={[ApplicationStyles.bodyLargeText, { color: Colors.appTextColor5, textAlign: 'center' }]}>Already have an account?  <Text style={[{ color: Colors.appColor1 }]} onPress={() => navigate('loginWPhone')}>Login</Text></Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Signup;
