import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { height, width, totalSize } from 'react-native-dimension';
import RenderChats from '../../../Components/RenderChats';
import { ApplicationStyles, Colors, Images } from '../../../Themes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loged_in: false,
      chats: [
        {
          user_name: 'Alex Vin',
          user_pic: Images.user,
          read: false,
          newMessages: false,
        },
        {
          user_name: 'Jhon Wick',
          user_pic: Images.user,
          read: true,
          newMessages: true,
        },
        {
          user_name: 'William Luk',
          user_pic: Images.user,
          read: true,
          newMessages: true,
        },
        {
          user_name: 'Jackob black',
          user_pic: Images.user,
          read: true,
          newMessages: false,
        },
        {
          user_name: 'Alex Vin',
          user_pic: Images.user,
          read: true,
          newMessages: true,
        },
        {
          user_name: 'Jhon Wick',
          user_pic: Images.user,
          read: true,
          newMessages: true,
        },
        {
          user_name: 'William Luk',
          user_pic: Images.user,
          read: true,
          newMessages: false,
        },
        {
          user_name: 'Jackob black',
          user_pic: Images.user,
          read: true,
          newMessages: true,
        },
      ],
    };
  }
  componentDidMount() {
    //this.animation.play();
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <View style={ApplicationStyles.compContainer}>
          <Text style={ApplicationStyles.HeadingLarge}>Chat with </Text>
          <Text style={ApplicationStyles.HeadingLarge}>your friends!</Text>
        </View>

        <View style={ApplicationStyles.rowCompContainer}>
          <TextInput
            placeholder="Catch up with real life friends ... ."
            style={[
              ApplicationStyles.inputField,
              {
                backgroundColor: Colors.appBgColor2,
                borderRadius: 10,
                width: width(80),
                height: height(6),
                //fontSize: totalSize(1.5),
                paddingHorizontal: 10,
              },
            ]}
          />
          <Icon
            onPress={() => navigate('addPeople')}
            name="add"
            type="material"
            size={totalSize(3)}
            color={Colors.appTextColor4}
          />
        </View>

        <View style={{ flex: 1 }}>
          <RenderChats
            data={this.state.chats}
            onPress={() => navigate('chatScreen')}
          />
        </View>
      </View>
    );
  }
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  h1: {
    //fontSize: totalSize(2.5),
    marginVertical: height(2),
    fontWeight: 'bold',
    color: Colors.Darkgraycolor,
  },
  h2: {
    fontSize: totalSize(2),
    color: Colors.Darkgraycolor,
  },
  h3: {
    fontSize: totalSize(1.5),
    color: Colors.steel,
    textAlign: 'center',
  },
});
