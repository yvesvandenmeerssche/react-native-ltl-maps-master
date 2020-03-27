import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import { ApplicationStyles, Images, Colors, Family } from '../../../Themes';
import { height, width, totalSize } from 'react-native-dimension';
import CustomIcon from '../../../Components/CustomIcon';
import { Icon } from 'react-native-elements';
import Dot from '../../../Components/Dot';
import ButtonResponsive from '../../../Components/ButtonResponsive';
import LineHorizontal from '../../../Components/LineHorizontal';
import DestinationListHorizontal from '../../../Components/DestinationListHorizontal';
import TripListHorizontal from '../../../Components/TripListHorizontal';
import WalletItem from '../../../Components/WalletItem';
import ButtonSeeAll from '../../../Components/ButtonSeeAll';
import TripItem from '../../../Components/TripItem';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my_fav: [
        {
          title: 'Four Seasons Resort',
          image: Images.bg,
          distance: '5',
          tags: ['surfing', 'Yoga Life', 'Kitesurf'],
        },
        {
          title: 'Bora Bor Hotel',
          image: Images.bg2,
          distance: '3.6',
          tags: ['surfing', 'Yoga Life', 'Kitesurf'],
        },
        {
          title: 'Lec Arcs',
          image: Images.bg,
          distance: '2.5',
          tags: ['surfing', 'Yoga Life', 'Kitesurf'],
        },
        {
          title: 'Polynisia',
          image: Images.bg2,
          distance: '6',
          tags: ['surfing', 'Yoga Life', 'Kitesurf'],
        },
      ],
      trips: [
        {
          title: 'Santa Monica',
          image: Images.bg,
          status: 'On going',
          users: [1, 2, 3],
        },
        {
          title: 'Bora Bor Hotel',
          image: Images.bg2,
          status: 'Up comming',
          users: [1, 2, 3],
        },
      ],
      wallet: [
        {
          title: 'We Turn Likes Into Trees Planted',
          image: Images.bg2,
          detail:
            'Focused on planting trees around the world. Anyone can get involved. One dollar plants one tree. See where we plant and help us plant trees.',
        },
        {
          title: 'We Turn Likes Into Trees Planted',
          image: Images.bg,
          detail:
            'Focused on planting trees around the world. Anyone can get involved. One dollar plants one tree. See where we plant and help us plant trees.',
        },
        {
          title: 'We Turn Likes Into Trees Planted',
          image: Images.bg2,
          detail:
            'Focused on planting trees around the world. Anyone can get involved. One dollar plants one tree. See where we plant and help us plant trees.',
        },
      ],
    };
  }
  renderTrips(props) {
    const { data, onPress, onPressSeeAll } = props;
    return (
      <View style={{ flex: 1 }}>
        <View style={[ApplicationStyles.rowCompContainer, { marginBottom: 0 }]}>
          <Text style={[ApplicationStyles.HeadingMedium, { fontFamily:Family.appTextRegular }]}>
            My Trips
          </Text>
          <ButtonSeeAll onPress={onPressSeeAll} />
        </View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TripItem
              item={item}
              onPress={onPress}
              containerStyle={{ marginTop: index === 0 ? height(2.5) : 0 }}
            />
          )}
        />
      </View>
    );
  }
  Info(props) {
    const { title, number } = props;
    return (
      <View style={{ alignItems: 'flex-start', marginHorizontal: width(3) }}>
        <Text style={[ApplicationStyles.bodyMediumText, { fontSize: totalSize(1.75) }]}>
          {number}
        </Text>
        <Text
          style={[
            ApplicationStyles.bodyMediumText,
            { color: Colors.appTextColor4, marginTop: 5 },
          ]}>
          {title}
        </Text>
      </View>
    );
  }
  renderWallet(props) {
    const { data, onPress, onPressSeeAll } = props;
    return (
      <View style={{ flex: 1 }}>
        <View style={[ApplicationStyles.rowCompContainer, { marginBottom: 0 }]}>
          <Text style={[ApplicationStyles.bodyMediumText, { fontSize: totalSize(2.5) }]}>
            My Wallet
          </Text>
          <ButtonSeeAll onPress={onPressSeeAll} />
        </View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <WalletItem
              item={item}
              onPress={onPress}
              containerStyle={{ marginTop: index === 0 ? height(2.5) : 0 }}
            />
          )}
        />
      </View>
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    const { my_fav, trips, wallet } = this.state;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <ScrollView>
          <View style={{}}>
            <Image
              source={Images.bg2}
              style={{
                height: height(20),
                width: null,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: '#00000040',
                justifyContent: 'flex-end',
              }}>
              <View
                style={[
                  ApplicationStyles.rowCompContainer,
                  { justifyContent: 'flex-start', marginVertical: height(1) },
                ]}>
                <View style={{ flex: 3 }}>
                  <Image
                    source={Images.user}
                    style={{
                      height: totalSize(10),
                      width: totalSize(10),
                      borderRadius: 100,
                      position: 'absolute',
                      bottom: -totalSize(7.5),
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 7,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CustomIcon
                      source={Images.location_icon}
                      size={totalSize(2)}
                      color={Colors.appTextColor6}
                    />
                    <Text
                      style={[
                        ApplicationStyles.bodyMediumText,
                        { color: Colors.appTextColor6, marginHorizontal: 5 },
                      ]}>
                      Fiji
                    </Text>
                  </View>
                  <View>
                    <Icon
                      name="setting"
                      type="antdesign"
                      size={totalSize(2.5)}
                      color={Colors.appTextColor6}
                      onPress={() => navigate('settings')}
                    />
                    <Dot style={{ position: 'absolute', top: 0, right: 0 }} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              ApplicationStyles.rowCompContainer,
              { justifyContent: 'center', marginTop: height(1) },
            ]}>
            <this.Info title="Trees" number="135" />
            <this.Info title="Place" number="456" />
            <this.Info title="Photos" number="356" />
          </View>
          <View style={ApplicationStyles.compContainer}>
            <View style={{ alignItems: 'center' }}>
              <Text style={ApplicationStyles.HeadingLarge}>Alex Max</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <ButtonResponsive
                  text="Chat"
                  style={[
                    styles.buttonStyle,
                    {
                      backgroundColor: '#FFFF',
                      borderWidth: 1,
                      borderColor: Colors.appColor1,
                      marginRight: width(5),
                    },
                  ]}
                  textStyle={[
                    styles.buttonTextStyle,
                    { color: Colors.appColor1 },
                  ]}
                />
                <ButtonResponsive
                  text="Following"
                  style={[styles.buttonStyle]}
                  textStyle={styles.buttonTextStyle}
                />
              </View>
            </View>
          </View>
          <LineHorizontal
            style={{ marginTop: height(2), marginHorizontal: width(5) }}
          />
          <this.renderTrips
            data={trips}
            onPress={() => navigate('trips')}
            onPressSeeAll={() => navigate('trips')}
          />
          <DestinationListHorizontal
            heading={'My Favorite'}
            seeAllShown={true}
            data={my_fav}
            onPress={() => navigate('destinationDetail')}
            onPressSeeAll={() => navigate('favorite')}
          />
          <this.renderWallet
            data={wallet}
            onPress={() => navigate('walletAuth')}
            onPressSeeAll={() => navigate('walletAuth')}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  buttonStyle: {
    height: height(7),
    width: width(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonTextStyle: {
    fontSize: totalSize(1.75),
  },
});
