import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ApplicationStyles, Colors, Images } from '../../../Themes';
import Swiper from 'react-native-swiper';
import { height, totalSize, width } from 'react-native-dimension';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { Icon, ButtonGroup } from 'react-native-elements';
import ArrowUpDownButton from '../../../Components/ArrowUpDownButton';
import ButtonsListHorizontalSmall from '../../../Components/ButtonsListHorizontalSmall';
import MapIcon from '../../../Components/MapIcon';
import LocationIcon from '../../../Components/LocationIcon';
import BackArrowButton from '../../../Components/BackArrowButton';
import HeartButton from '../../../Components/HeartButton';
import ShareButton from '../../../Components/ShareButton';
import PhoneButton from '../../../Components/PhoneButton';
import ButtonResponsive from '../../../Components/ButtonResponsive';
import PhotosList from '../../../Components/PhotosList';
import CustomIcon from '../../../Components/CustomIcon';
import ButtonRound from '../../../Components/ButtonRound';
import LikeBubble from '../../../Components/LikeBubble';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

class DestinationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images_list: [
        { image: Images.bg2 },
        { image: Images.bg },
        { image: Images.bg2 },
        { image: Images.bg },
        { image: Images.bg2 },
      ],
      movedUp: false,
      topMarginValue: new Animated.Value(height(60)),
      tags: ['Landscape', 'Nature', 'Historic', 'Nature'],
      selectedIndex: 2,
      dummy_text:
        'When many travellers think of visiting the world-renowned Canadian Rockies, Banff National Park invariably comes to mind.',
      count: 0,
      claps: [],
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.clap = this.clap.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  moveUp = () => {
    Animated.timing(this.state.topMarginValue, {
      toValue: height(25),
      duration: 250,
      easing: Easing.elastic(),
    }).start();
    this.setState({ movedUp: true });
  };
  moveDown = () => {
    Animated.timing(this.state.topMarginValue, {
      toValue: height(60),
      duration: 250,
      easing: Easing.elastic(2, 5),
    }).start();
    this.setState({ movedUp: false });
  };
  ManageMovement = () => {
    if (this.state.movedUp) {
      this.setState({ movedUp: false });
      this.moveDown();
    } else {
      this.setState({ movedUp: true });
      this.moveUp();
    }
  };
  RenderImageSwiper(props) {
    const { movedUp, images_list } = props;
    return (
      <View style={{ position: 'absolute' }}>
        <Swiper
          activeDotColor={'#FFFFFF'}
          dotColor={'#FFFFFFBF'}
          dotStyle={{ height: 3, width: 3 }}
          activeDotStyle={{ height: 5, width: 5 }}
          paginationStyle={
            movedUp ? styles.smallPaginationStyle : styles.largePaginationStyle
          }>
          {images_list.map((item, key) => {
            return (
              <View>
                <Image
                  source={item.image}
                  style={
                    movedUp ? styles.smallSwiperStyle : styles.largeSwiperStyle
                  }
                />
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    backgroundColor: '#00000040',
                  }}></View>
              </View>
            );
          })}
        </Swiper>
      </View>
    );
  }
  clap() {
    let count = this.state.count;
    let claps = this.state.claps;
    count++;
    claps.push(count);
    this.setState({ count });
    this.onPressFeedback();
  }

  animationEnd(totalCount) {
    claps = this.state.claps;
    claps.splice(claps.indexOf(totalCount) - 1);
    this.setState(claps);
  }

  renderLikes() {
    return this.state.claps.map(totalCount => <LikeBubble key={totalCount} count={totalCount} animationEnd={this.animationEnd.bind(this)} />)
  }

  onPressFeedback = () => {
    ReactNativeHapticFeedback.trigger("impactLight", options);
  };
  render() {
    const buttons = ['About', 'Reviews', 'Notes'];
    const { images_list, movedUp, tags, selectedIndex, dummy_text } = this.state;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 50,
    };
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <this.RenderImageSwiper images_list={images_list} movedUp={movedUp} />
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[
              styles.jobs_container,
              { marginTop: this.state.topMarginValue },
            ]}>
            <GestureRecognizer
              onSwipeUp={this.moveUp}
              onSwipeDown={this.moveDown}
              style={{ flex: 1, backgroundColor: 'transparent' }}
              config={config}>
              <View style={{ flex: 1 }}>
                <ArrowUpDownButton
                  isMovedUp={movedUp}
                  onPress={this.ManageMovement}
                />
                <View
                  style={[
                    ApplicationStyles.compContainer,
                    { marginVertical: 0 },
                  ]}>
                  <ButtonsListHorizontalSmall data={tags} />
                </View>
                <View
                  style={[ApplicationStyles.compContainer, { marginBottom: 0 }]}>
                  <Text
                    style={[ApplicationStyles.HeadingMedium, {}]}>
                    Four Seasons Resort
                  </Text>
                </View>
                <View
                  style={[ApplicationStyles.rowCompContainer, { marginTop: 0 }]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <LocationIcon />
                    <Text style={[ApplicationStyles.bodyLargeText, {}]}>
                      {' '}
                      4 km{' '}
                      <Text style={{ color: Colors.appTextColor5 }}>
                        from your location
                      </Text>
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigate('mapScreen')}
                    style={styles.ButtonborderdResponsive}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <MapIcon />
                      <Text
                        style={[
                          ApplicationStyles.bodySmallText,
                          { color: Colors.appColor1 },
                        ]}>
                        {'  '}
                        Map View
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  containerStyle={{
                    height: height(5),
                    borderWidth: 0,
                    borderBottomWidth: 0.5,
                  }}
                  selectedButtonStyle={{
                    backgroundColor: 'transparent',
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.appColor1,
                  }}
                  selectedTextStyle={[
                    ApplicationStyles.HeadingTiny,
                    { color: Colors.appColor1, },
                  ]}
                  textStyle={[
                    ApplicationStyles.bodyLargeText,
                    { color: Colors.appTextColor4, },
                  ]}
                  innerBorderStyle={{ width: 0 }}
                />
                <View style={[ApplicationStyles.compContainer, { marginBottom: 0 }]}>
                  <Text
                    style={[
                      ApplicationStyles.bodyLargeText,
                      { color: Colors.appTextColor4 },
                    ]}>
                    {dummy_text}
                  </Text>
                </View>
                <PhotosList images={images_list} />
                <View style={{ position: 'absolute', right: totalSize(5), top: -totalSize(3.5), }}>
                  <ButtonRound
                    onPress={() => this.clap()}
                    buttonStyle={{ borderRadius: 100, height: totalSize(7.5), width: totalSize(7.5), alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.appColor1, }}
                    content={<HeartButton color={'#FFFF'} />}
                  />
                  {this.renderLikes()}
                </View>
              </View>
            </GestureRecognizer>
          </Animated.View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            right: 0,
            left: 0,
            justifyContent: 'space-between',
          }}>
          <View style={ApplicationStyles.rowCompContainer}>
            <CustomIcon
              source={Images.arrowLeft_icon}
              color={Colors.appTextColor6}
              size={totalSize(2.5)}
              onPress={() => navigation.goBack()}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ShareButton color={'#FFFF'} />
              {/* <View style={{ width: 15 }}></View>
              <HeartButton color={'#FFFF'} /> */}
            </View>
          </View>
          <View style={[ApplicationStyles.rowCompContainer, { marginVertical: height(1) }]}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.ButtonborderdResponsive}>
              <PhoneButton color={Colors.appColor1} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.BottomButtonResponsive}>
              <Text style={[ApplicationStyles.bodyLargeText, { color: Colors.appColor1 }]}>
                Get Direction
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.BottomButtonResponsive,
                { backgroundColor: Colors.appColor1 },
              ]}>
              <Text style={[ApplicationStyles.bodyLargeText, { color: '#FFFF' }]}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

export default DestinationDetail;

const styles = StyleSheet.create({
  jobs_container: {
    marginHorizontal: 0,
    height: height(100),
    borderRadius: 25,
    backgroundColor: 'white',
    // elevation: 10,
    marginTop: height(5),
    // flexDirection: 'row'
  },
  iconContainer: {
    height: totalSize(3.5),
    width: totalSize(3.5),
    backgroundColor: Colors.appColor2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentItemContainer: {
    marginBottom: 0,
  },
  paymentText: {
    fontSize: totalSize(1.75),
  },

  largeSwiperStyle: {
    height: height(70),
    width: null,
  },
  smallSwiperStyle: {
    height: height(30),
    width: null,
  },
  largePaginationStyle: {
    bottom: height(42.5),
  },
  smallPaginationStyle: {
    bottom: height(77.5),
  },
  ButtonborderdResponsive: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.appColor1,
    padding: 5,
    backgroundColor: '#FFFF',
  },
  BottomButtonResponsive: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.appColor1,
    paddingHorizontal: 20,
    paddingVertical: 7.5,
    backgroundColor: '#FFFF',
  },
});
