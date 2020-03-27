import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { ApplicationStyles, Images } from '../../../Themes';
import { totalSize, width, height } from 'react-native-dimension';
import SearchInput from '../../../Components/SearchInput';
import ButtonsListHorizontal from '../../../Components/ButtonsListHorizontal';
import PlacesListHorizontal from '../../../Components/PlacesListHorizontal';
import PlacesListVertical from '../../../Components/PlacesListVertical';
import Swiper from 'react-native-deck-swiper';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: ['Sleep', 'Eat', 'Sports', 'Hiking', 'Play', 'Travel'],
      places: [
        { title: 'Polynisia', image: Images.bg2, places: '235' },
        { title: 'Norway', image: Images.bg, places: '135' },
        { title: 'Polynisia', image: Images.bg2, places: '235' },
        { title: 'Norway', image: Images.bg, places: '135' },
        { title: 'Polynisia', image: Images.bg2, places: '235' },
        { title: 'Norway', image: Images.bg, places: '135' },
      ],
    };
  }

  render() {
    const { buttons, places } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={ApplicationStyles.compContainer}>
            <Text style={[ApplicationStyles.HeadingMedium, {  }]}>
              Which place do you have in mind? Simply explore ...
            </Text>
          </View>
          <SearchInput />
          {/* <View style={{width: width(100), height: height(30)}}>
            <Swiper
              cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
              renderCard={card => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.text}>{card}</Text>
                  </View>
                );
              }}
              onSwiped={cardIndex => {
                console.log(cardIndex);
              }}
              onSwipedAll={() => {
                console.log('onSwipedAll');
              }}
              cardIndex={0}
              backgroundColor={'#4FD0E9'}
              stackSize={3}></Swiper>
          </View> */}
          <ButtonsListHorizontal
            data={buttons}
            onPress={() => navigate('exploreDestination')}
          />
          <PlacesListHorizontal
            heading={'Nearby'}
            data={places}
            onPress={() => navigate('exploreDestination')}
            onPressSeeAll={() =>
              navigate('exploreDestination', { title: 'Nearby' })
            }
          />
          <PlacesListHorizontal
            heading={'Recommended'}
            data={places}
            onPress={() => navigate('exploreDestination')}
            onPressSeeAll={() =>
              navigate('exploreDestination', { title: 'Recommended' })
            }
          />
          <PlacesListVertical
            heading={'Favourites'}
            data={places}
            onPress={() => navigate('exploreDestination')}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    // width: totalSize(10),
    height: totalSize(10),
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});

export default Explore;
