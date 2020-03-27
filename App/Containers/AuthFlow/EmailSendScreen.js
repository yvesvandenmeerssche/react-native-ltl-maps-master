import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, ApplicationStyles, Family, Images } from '../../Themes';
import { width, totalSize } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import ButtonColored from '../../Components/ButtonColored';

class EmailSendScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <View style={[ApplicationStyles.mainContainer, { backgroundColor: Colors.appbgColor3, justifyContent: 'center' }]}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={Images.send_icon} resizeMode="contain" style={{ height: totalSize(15), width: totalSize(15) }} />
                </View>
                <View style={[ApplicationStyles.compContainer, { marginHorizontal: width(15) }]}>
                    <Text style={[ApplicationStyles.h2, styles.txtStyle]}>We’ve sent you an email</Text>
                    <Text style={[ApplicationStyles.bodyMediumText, styles.txtStyle, { fontFamily: Family.appTextRegular, marginTop: 10 }]}>Please open the email and follow the link to verify the account.</Text>
                </View>
                <ButtonColored text="I got it!" buttonStyle={{ marginTop: 10 }} onPress={() => navigate('app')} />
                <View style={ApplicationStyles.compContainer}>
                    <Text style={[ApplicationStyles.bodyMediumText, styles.underlined]}>Resend</Text>
                </View>
            </View>
        );
    }
}

export default EmailSendScreen;

const styles = StyleSheet.create({
    txtStyle: {
        color: '#FFFF',
        fontFamily: Family.appTextMedium,
        textAlign: 'center'

    },
    underlined: {
        color: Colors.appTextColor6,
        textDecorationLine: 'underline',
        textDecorationColor: Colors.appTextColor6,
        textAlign: "center"
    },
})