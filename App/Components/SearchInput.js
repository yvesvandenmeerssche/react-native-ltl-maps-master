import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {ApplicationStyles, Colors} from '../Themes';
import {Icon} from 'react-native-elements';
import {totalSize, height} from 'react-native-dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View
          style={[
            ApplicationStyles.inputContainerColored,
            {
              backgroundColor: Colors.appBgColor2,
              borderRadius: 10,
              marginVertical: height(2.5),
            },
          ]}>
          <Icon
            name="search"
            type="feather"
            size={totalSize(3)}
            color={Colors.appTextColor3}
          />
          <TextInput
            placeholder="Where To? Find things to see & do ..."
            style={ApplicationStyles.inputField}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default SearchInput;
