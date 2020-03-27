import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ApplicationStyles, Colors, Images } from '../../../Themes';
import { totalSize, height, width } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

class AddPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Max Lee',
          image: Images.user,
          selected: false,
        },
        {
          name: 'James Alise',
          image: Images.user,
          selected: true,
        },
        {
          name: 'William Black',
          image: Images.user,
          selected: false,
        },
        {
          name: 'Max Lee',
          image: Images.user,
          selected: false,
        },
        {
          name: 'James Alise',
          image: Images.user,
          selected: true,
        },
        {
          name: 'William Black',
          image: Images.user,
          selected: false,
        },
        {
          name: 'Max Lee',
          image: Images.user,
          selected: false,
        },
        {
          name: 'James Alise',
          image: Images.user,
          selected: true,
        },
        {
          name: 'William Black',
          image: Images.user,
          selected: false,
        },
      ],
    };
  }
  renderPeople(props) {
    const { data } = props;
    return (
      <View style={{ flex: 1, marginTop: height(2.5) }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={1}
              style={[ApplicationStyles.rowCompContainer, { marginTop: 0 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={item.image}
                  style={{
                    height: totalSize(5),
                    width: totalSize(5),
                    borderRadius: 100,
                  }}
                />
                <Text
                  style={[
                    ApplicationStyles.bodyMediumText,
                    { fontSize: totalSize(1.75), marginHorizontal: width(2.5) },
                  ]}>
                  {item.name}
                </Text>
              </View>
              <View>
                <Icon
                  name={
                    item.selected
                      ? 'ios-radio-button-on'
                      : 'ios-radio-button-off'
                  }
                  type="ionicon"
                  size={totalSize(3)}
                  color={
                    item.selected ? Colors.appColor1 : Colors.appTextColor5
                  }
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  render() {
    const { people } = this.state;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <TextInput
          placeholder="Search"
          style={[
            ApplicationStyles.inputFieldBorderd,
            {
              borderColor: Colors.appTextColor5,
              backgroundColor: Colors.appBgColor2,
              borderRadius: 10,
              paddingHorizontal: 10,
            },
          ]}
        />
        <this.renderPeople data={people} />
      </View>
    );
  }
}

export default AddPeople;
