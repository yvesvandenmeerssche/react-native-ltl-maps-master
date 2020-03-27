import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import { ApplicationStyles, Images, Colors } from '../../../../Themes';
import TripItem from '../../../../Components/TripItem';
import { ButtonGroup } from 'react-native-elements';
import { totalSize, width, height } from 'react-native-dimension';
import ButtonColored from '../../../../Components/ButtonColored';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={trips_ongoing}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TripItem
          item={item}
          //   onPress={() => navigate('tripSummary')}
          containerStyle={{ marginTop: index === 0 ? height(2.5) : 0 }}
        />
      )}
    />
  </View>
);
const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={trips_upcoming}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TripItem
          item={item}
          //   onPress={() => navigate('tripSummary')}
          containerStyle={{ marginTop: index === 0 ? height(2.5) : 0 }}
        />
      )}
    />
  </View>
);
const ThirdRoute = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={trips_completed}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TripItem
          item={item}
          //   onPress={() => navigate('tripSummary')}
          containerStyle={{ marginTop: index === 0 ? height(2.5) : 0 }}
        />
      )}
    />
  </View>
);


const trips_ongoing = [
  {
    title: 'Santa Monica',
    image: Images.bg,
    status: 'On going',
    users: [1, 2, 3],
  },
  {
    title: 'Bora Bor Hotel',
    image: Images.bg2,
    status: 'On going',
    users: [1, 2, 3],
  },
  {
    title: 'Lec Arcs',
    image: Images.bg,
    status: 'On going',
    users: [1, 2, 3],
  },
  {
    title: 'Polynisia',
    image: Images.bg2,
    status: 'On going',
    users: [1, 2, 3],
  },
];
const trips_upcoming = [
  {
    title: 'Santa Monica',
    image: Images.bg,
    status: 'Up comming',
    users: [1, 2, 3],
  },
  {
    title: 'Bora Bor Hotel',
    image: Images.bg2,
    status: 'Up comming',
    users: [1, 2, 3],
  },
  {
    title: 'Lec Arcs',
    image: Images.bg,
    status: 'Up comming',
    users: [1, 2, 3],
  },
  {
    title: 'Polynisia',
    image: Images.bg2,
    status: 'Up comming',
    users: [1, 2, 3],
  },
];
const trips_completed = [
  {
    title: 'Santa Monica',
    image: Images.bg,
    status: 'Completed',
    users: [1, 2, 3],
  },
  {
    title: 'Bora Bor Hotel',
    image: Images.bg2,
    status: 'Completed',
    users: [1, 2, 3],
  },
  {
    title: 'Lec Arcs',
    image: Images.bg,
    status: 'Completed',
    users: [1, 2, 3],
  },
  {
    title: 'Polynisia',
    image: Images.bg2,
    status: 'Completed',
    users: [1, 2, 3],
  },
];

const initialLayout = { width: Dimensions.get('window').width };

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
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
          status: 'On going',
          users: [1, 2, 3],
        },
        {
          title: 'Lec Arcs',
          image: Images.bg,
          status: 'On going',
          users: [1, 2, 3],
        },
        {
          title: 'Polynisia',
          image: Images.bg2,
          status: 'On going',
          users: [1, 2, 3],
        },
      ],
      trips_ongoing: [
        {
          title: 'Santa Monica',
          image: Images.bg,
          status: 'On going',
          users: [1, 2, 3],
        },
        {
          title: 'Bora Bor Hotel',
          image: Images.bg2,
          status: 'On going',
          users: [1, 2, 3],
        },
        {
          title: 'Lec Arcs',
          image: Images.bg,
          status: 'On going',
          users: [1, 2, 3],
        },
        {
          title: 'Polynisia',
          image: Images.bg2,
          status: 'On going',
          users: [1, 2, 3],
        },
      ],
      trips_upcoming: [
        {
          title: 'Santa Monica',
          image: Images.bg,
          status: 'Up comming',
          users: [1, 2, 3],
        },
        {
          title: 'Bora Bor Hotel',
          image: Images.bg2,
          status: 'Up comming',
          users: [1, 2, 3],
        },
        {
          title: 'Lec Arcs',
          image: Images.bg,
          status: 'Up comming',
          users: [1, 2, 3],
        },
        {
          title: 'Polynisia',
          image: Images.bg2,
          status: 'Up comming',
          users: [1, 2, 3],
        },
      ],
      trips_completed: [
        {
          title: 'Santa Monica',
          image: Images.bg,
          status: 'Completed',
          users: [1, 2, 3],
        },
        {
          title: 'Bora Bor Hotel',
          image: Images.bg2,
          status: 'Completed',
          users: [1, 2, 3],
        },
        {
          title: 'Lec Arcs',
          image: Images.bg,
          status: 'Completed',
          users: [1, 2, 3],
        },
        {
          title: 'Polynisia',
          image: Images.bg2,
          status: 'Completed',
          users: [1, 2, 3],
        },
      ],
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  TabViewExample() {
    // const {navigate} = this.props.navigation;
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Ongoing' },
      { key: 'second', title: 'Upcoming' },
      { key: 'third', title: 'Completed' },
    ]);

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      third: ThirdRoute,
    });

    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    );
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    if (selectedIndex === 0) {
      this.setState({ trips: this.state.trips_ongoing });
    } else if (selectedIndex === 1) {
      this.setState({ trips: this.state.trips_upcoming });
    } else {
      this.setState({ trips: this.state.trips_completed });
    }
  }

  renderTrips(props) {
    const { data, onPress } = props;
    return (
      <View style={{ flex: 1 }}>
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
  render() {
    const { navigate } = this.props.navigation;
    const { trips, selectedIndex } = this.state;
    const buttons = ['Ongoing', 'Upcoming', 'Completed'];
    return (
      <View style={ApplicationStyles.mainContainer}>
        <View style={[ApplicationStyles.compContainer, { marginVertical: 0 }]}>
          <Text style={[ApplicationStyles.h2, { marginBottom: totalSize(2) }]}>
            My Trips
          </Text>
        </View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{
            height: height(7),
            borderWidth: 0,
            borderBottomWidth: 0.5,
            backgroundColor: 'transparent',
            borderRadius: 0,
            marginBottom: height(2.5),
          }}
          selectedButtonStyle={{
            backgroundColor: 'transparent',
            borderBottomWidth: 1,
            borderBottomColor: Colors.appColor2,
          }}
          selectedTextStyle={[
            ApplicationStyles.HeadingTiny,
            { color: Colors.appColor1, },
          ]}
          textStyle={[
            ApplicationStyles.bodyLargeText,
            { color: Colors.appTextColor4,  },
          ]}
          innerBorderStyle={{ width: 0 }}
        />

        {/* <this.TabViewExample
         
        /> */}

        <this.renderTrips
          data={trips}
          onPress={() => navigate('tripSummary')}
        />
        <ButtonColored
          text="Create new plan"
          buttonStyle={{ marginVertical: height(2.5) }}
          onPress={() => navigate('createPlan')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default Trips;
