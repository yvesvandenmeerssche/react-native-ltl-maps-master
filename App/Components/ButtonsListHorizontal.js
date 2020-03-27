import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, ApplicationStyles, Family} from '../Themes';
import {height, width, totalSize} from 'react-native-dimension';

class ButtonsListHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {data, onPress} = this.props;
    return (
      <View style={{marginTop: height(2.5)}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={1}
              style={{
                backgroundColor: Colors.appColor2,
                marginRight: width(2.5),
                marginLeft: index === 0 ? width(5) : null,
                borderRadius: 10,
                height: height(10),
                width: width(35),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={[ApplicationStyles.bodyMediumText, styles.textStyle]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default ButtonsListHorizontal;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.appTextColor6,
    //fontSize: totalSize(1.75),
    fontFamily: Family.appTextMedium,
  },
});
