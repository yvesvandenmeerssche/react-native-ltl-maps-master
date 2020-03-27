import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ApplicationStyles, Images, Colors, Family } from '../Themes';
import { height, width, totalSize } from 'react-native-dimension';
import ButtonSeeAll from './ButtonSeeAll';
import { Icon } from 'react-native-elements';
import HeartButton from './HeartButton';
import ButtonsListHorizontalSmall from './ButtonsListHorizontalSmall';
import AddButton from './AddButton';

class DestinationListHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, heading, onPressSeeAll, onPress, seeAllShown } = this.props;
    return (
      <View>
        <View style={[ApplicationStyles.rowCompContainer, { marginBottom: 0 }]}>
          <Text style={[ApplicationStyles.HeadingMedium, { fontFamily: Family.appTextRegular }]}>
            {heading}
          </Text>
          {seeAllShown ? <ButtonSeeAll onPress={onPressSeeAll} /> : null}
        </View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={1}
              style={{
                marginVertical: height(2.5),
                marginLeft: index === 0 ? width(5) : null,
                marginHorizontal: width(1.5),
                backgroundColor: Colors.appBgColor1,
                elevation: 5,
                borderRadius: 10,
              }}>
              <Image
                source={item.image}
                style={{ height: height(35), width: width(70), borderRadius: 10 }}
              />
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  borderRadius: 10,
                  justifyContent: 'space-between',
                  backgroundColor: '#00000040',
                }}>
                <View
                  style={[
                    ApplicationStyles.compContainer,
                    { alignItems: 'flex-end' },
                  ]}>
                  <HeartButton color={Colors.appTextColor6} />
                </View>
                <View
                  style={{
                    backgroundColor: Colors.appBgColor1,
                    borderRadius: 10,
                  }}>
                  <View style={[ApplicationStyles.compContainer]}>
                    <Text style={[[ApplicationStyles.HeadingSmall, {}]]}>
                      {item.title}
                    </Text>
                    <ButtonsListHorizontalSmall data={item.tags} />
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      top: -totalSize(2),
                      right: 12.5,
                    }}>
                    <AddButton />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default DestinationListHorizontal;
