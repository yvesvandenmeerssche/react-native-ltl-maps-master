import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ApplicationStyles, Colors, Family } from '../../Themes';
import ButtonColored from '../../Components/ButtonColored';
import ButtonBordered from '../../Components/ButtonBordered';
import OrComponent from '../../Components/OrComponent';
import { width } from 'react-native-dimension';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={[ApplicationStyles.mainContainer, { backgroundColor: Colors.appbgColor3, justifyContent: 'space-evenly' }]}>
                <StatusBar hidden />
                <View style={[ApplicationStyles.compContainer, { marginHorizontal: width(10) }]}>
                    <Text style={[ApplicationStyles.HeadingLarge, styles.titleStyle]}>Build The Map Of Your World</Text>
                </View>
                <View>
                    <ButtonColored text="Login" onPress={() => navigate('login')} />
                    <OrComponent />
                    <ButtonBordered text="Create an account" onPress={() => navigate('register')} />
                </View>
            </View>
        );
    }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    titleStyle: {
        color: '#FFFF',
       // fontFamily: Family.appTextMedium,
        textAlign: 'center'

    }
})
