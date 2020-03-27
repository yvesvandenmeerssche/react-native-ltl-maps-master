import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import Navigation from './App/Navigation/Navigation';
import { Colors } from './App/Themes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.appBgColor1} barStyle="dark-content" />
        <Navigation />
      </SafeAreaView>
    );
  }
}

export default App;
