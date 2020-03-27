import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {ApplicationStyles, Colors} from '../Themes';
import {totalSize, height, width} from 'react-native-dimension';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

class InputNtitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      placeholder,
      secureTextEntry,
      ManageSecurity,
      onPressEye,
    } = this.props;
    return (
      <KeyboardAwareScrollView>
        <View style={{marginTop: height(3)}}>
          <View style={[ApplicationStyles.compContainer, {marginVertical: 0}]}>
            <Text
              style={[
                ApplicationStyles.bodyMediumText,
                {fontSize: totalSize(2), color: Colors.appTextColor6},
              ]}>
              {title}
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={Colors.appTextColor4}
              secureTextEntry={secureTextEntry}
              style={[
                ApplicationStyles.inputFieldUnderlined,
                {
                  borderBottomColor: Colors.appTextColor4,
                  color: Colors.appTextColor4,
                  padding: 0,
                },
              ]}
            />
            {ManageSecurity ? (
              <View style={{position: 'absolute', right: width(5)}}>
                <Icon
                  name={secureTextEntry ? 'eye-closed' : 'eye'}
                  type="octicon"
                  size={totalSize(2.5)}
                  color={Colors.appTextColor4}
                  onPress={onPressEye}
                />
              </View>
            ) : null}
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default InputNtitle;
