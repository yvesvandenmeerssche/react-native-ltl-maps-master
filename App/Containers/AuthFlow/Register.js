import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes';
import BackButtonAuth from '../../Components/BackButtonAuth';
import InputNtitle from '../../Components/InputNtitle';
import { height } from 'react-native-dimension';
import ButtonColored from '../../Components/ButtonColored';
import OrComponent from '../../Components/OrComponent';
import ButtonSocial from '../../Components/ButtonSocial';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordSecured: true,
            confirmPasswordSecured: true
        };
    }
    handleSecurity = () => {
        this.setState({ passwordSecured: !this.state.passwordSecured })
    }
    handleConfirmSecurity = () => {
        this.setState({ confirmPasswordSecured: !this.state.confirmPasswordSecured })
    }
    render() {
        const { navigation } = this.props
        const { navigate } = navigation
        const { passwordSecured, confirmPasswordSecured } = this.state
        return (
            <View style={[ApplicationStyles.mainContainer, { backgroundColor: Colors.appbgColor3 }]}>
                <BackButtonAuth title="Register" onPress={() => navigation.goBack()} />
                <ScrollView>
                    <View style={{ marginTop: height(5) }}>
                        <InputNtitle
                            title="Email"
                            placeholder="alan.triper@example.com"
                        />
                        <InputNtitle
                            title="Password"
                            placeholder="**********"
                            ManageSecurity={true}
                            secureTextEntry={passwordSecured}
                            onPressEye={this.handleSecurity}
                        />
                        <InputNtitle
                            title="Confirm Password"
                            placeholder="**********"
                            ManageSecurity={true}
                            secureTextEntry={confirmPasswordSecured}
                            onPressEye={this.handleConfirmSecurity}
                        />
                        {/* <View style={ApplicationStyles.compContainer}>
                            <Text style={[ApplicationStyles.bodyMediumText, styles.forgotTxtStyle]}>Forgot Password?</Text>
                        </View> */}
                        <ButtonColored text="Register" buttonStyle={{ marginTop: 10 }} onPress={() => navigate('emailSend')} />
                        <OrComponent />
                        <ButtonSocial text="Login with Facebook" iconName="facebook" tintColor={Colors.facebook} />
                        <ButtonSocial text="Login with Twitter" iconName="twitter" tintColor={Colors.twitter} buttonStyle={styles.socialButtonStyle} />
                        {/* <ButtonSocial text="Login with Instagram" iconName="instagram" tintColor={Colors.instagram} buttonStyle={styles.socialButtonStyle} /> */}
                        <View style={ApplicationStyles.compContainer}>
                            <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor6, textAlign: 'center' }]}>Already user?  <Text style={[styles.BottomTxtStyle]} onPress={() => navigate('login')}>Login</Text></Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Register;

const styles = StyleSheet.create({
    forgotTxtStyle: {
        color: Colors.appTextColor4,
        textDecorationLine: 'underline',
        textDecorationColor: Colors.appTextColor4,
        textAlign: "right"
    },
    socialButtonStyle: {
        marginTop: height(2.5)
    },
    BottomTxtStyle: {
        color: Colors.appTextColor6,
        textDecorationLine: 'underline',
        textDecorationColor: Colors.appTextColor4,
        // textAlign: "right"
    },
})