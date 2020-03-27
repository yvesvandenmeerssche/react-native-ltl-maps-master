import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Images, ApplicationStyles, Family} from '../../Themes';
import {height} from 'react-native-dimension';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('auth');
    }, 2500);
  }
  render() {
    return (
      <ImageBackground
        source={Images.bg}
        style={[
          ApplicationStyles.bgContainer,
          {justifyContent: 'space-around'},
        ]}>
        <StatusBar hidden />
        <View style={{alignItems: 'center'}}>
          <Text style={[ApplicationStyles.h1, styles.textStyle]}>LTL MAPS</Text>
          <Text style={[ApplicationStyles.bodySmallText, styles.textStyle]}>
            Explore Destinations & add places
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          {/* <ActivityIndicator color="#FFFF" size="small" /> */}
          <DotIndicator color="white" size={8} />
        </View>
      </ImageBackground>
    );
  }
}

export default AuthLoading;

const styles = StyleSheet.create({
  textStyle: {
    color: '#FFFF',
    fontFamily: Family.appTextMedium,
  },
});