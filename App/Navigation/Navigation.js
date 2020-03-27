import React, { Component } from 'react';
import { Image, StyleSheet, FlatList, SafeAreaView, View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
} from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation-drawer'


import WelcomeScreen from '../Containers/AuthFlow/WelcomeScreen';
import Login from '../Containers/AuthFlow/Login';
import Register from '../Containers/AuthFlow/Register';
import EmailSendScreen from '../Containers/AuthFlow/EmailSendScreen';
import Explore from '../Containers/MainFlow/Explore/Explore';
import Feed from '../Containers/MainFlow/Feed/Feed';
import Add from '../Containers/MainFlow/Add/Add';
import Chat from '../Containers/MainFlow/Chat/Chat';
import Profile from '../Containers/MainFlow/Profile/Profile';
import { Colors, Family, Images, ApplicationStyles } from '../Themes';
import { totalSize, width, height } from 'react-native-dimension';
import AuthLoading from '../Containers/AuthFlow/AuthLoading';
import { Icon } from 'react-native-elements';
import TabIcon from '../Components/TabIcon';
import ExploreDestination from '../Containers/MainFlow/Explore/ExploreDestination';
import DestinationDetail from '../Containers/MainFlow/Explore/DestinationDetail';
import MapScreen from '../Containers/MainFlow/Explore/MapScreen';
import FilterScreen from '../Containers/MainFlow/Explore/FilterScreen';
import BackArrowButton from '../Components/BackArrowButton';
import ChatScreen from '../Containers/MainFlow/Chat/ChatScreen';
import AddPeople from '../Containers/MainFlow/Chat/AddPeople';
import Trips from '../Containers/MainFlow/Profile/Trip/Trips';
import Favorite from '../Containers/MainFlow/Profile/Favorite';
import Settings from '../Containers/MainFlow/Profile/Settings';
import CreatePlan from '../Containers/MainFlow/Profile/Trip/CreatePlan';
import TripSummary from '../Containers/MainFlow/Profile/Trip/TripSummary';
import DayByDayPlan from '../Containers/MainFlow/Profile/Trip/DayByDayPlan';
import TripEdit from '../Containers/MainFlow/Profile/Trip/TripEdit';
import TripRoadMap from '../Containers/MainFlow/Profile/Trip/TripRoadMap';
import TripChecklist from '../Containers/MainFlow/Profile/Trip/TripChecklist';
import AddPlaceToTrip from '../Containers/MainFlow/Profile/Trip/AddPlaceToTrip';
import CreatePin from '../Containers/MainFlow/Profile/Wallet/Auth/CreatePin';
import ConfirmPin from '../Containers/MainFlow/Profile/Wallet/Auth/ConfirmPin';
import Signup from '../Containers/MainFlow/Profile/Wallet/Auth/Signup';
import LoginWithPhone from '../Containers/MainFlow/Profile/Wallet/Auth/LoginWithPhone';
import PhoneVerification from '../Containers/MainFlow/Profile/Wallet/Auth/PhoneVerification';
import Wallet from '../Containers/MainFlow/Profile/Wallet/Wallet';
import WalletAddress from '../Containers/MainFlow/Profile/Wallet/WalletAddress';
import WalletSettings from '../Containers/MainFlow/Profile/Wallet/WalletSettings';
import FaceID from '../Containers/MainFlow/Profile/Wallet/FaceID';

const AuthStack = createStackNavigator(
  {
    welcome: {
      screen: WelcomeScreen,
    },
    login: {
      screen: Login,
    },
    register: {
      screen: Register,
    },
    emailSend: {
      screen: EmailSendScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const ExploreStack = createStackNavigator(
  {
    explore: {
      screen: Explore,
    },
    exploreDestination: {
      screen: ExploreDestination,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const FeedStack = createStackNavigator(
  {
    feed: {
      screen: Feed,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AddStack = createStackNavigator(
  {
    add: {
      screen: Add,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const ChatStack = createStackNavigator(
  {
    chat: {
      screen: Chat,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    profile: {
      screen: Profile,
    },

  },
  {
    initialRouteName: 'profile',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const IconSize = totalSize(2.5);

const MainTab = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreStack,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor }) => (
          // <Icon name="explore" type="material" color={tintColor} size={IconSize} />
          <TabIcon icon={Images.explore_icon} tintColor={tintColor} />
        ),
      },
    },
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({ tintColor }) => (
          <TabIcon icon={Images.feed_icon} tintColor={tintColor} />
        ),
      },
    },
    Add: {
      screen: () => null,
      navigationOptions: {
        tabBarLabel: 'Add',
        tabBarOnPress: ({ navigation }) => {
          if (navigation.isFocused()) {
            console.warn('Add Tab Pressed');
          } else {
            navigation.navigate('addPlace');
          }
        },
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Images.add_icon}
            resizeMode="contain"
            style={{ height: totalSize(4), width: totalSize(4) }}
          />
        ),
      },
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor }) => (
          <TabIcon icon={Images.chat_icon} tintColor={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <TabIcon icon={Images.profile_icon} tintColor={tintColor} />
        ),
      },
    },
  },
  {
    //**** For MaterialTopTaNavigator */
    // tabBarPosition: 'bottom',
    // tabBarOptions: {
    //     showIcon: true,
    //     showLabel: false,
    //     activeTintColor: Colors.appColor1,
    //     inactiveTintColor: Colors.steel,
    //     allowFontScaling: false,
    //     labelStyle: [{ fontSize: totalSize(1.25), fontFamily: Family.appTextRegular }],
    //     style: { backgroundColor: '#FFFF' },
    //     indicatorStyle: { backgroundColor: Colors.appColor1, height: 2, top: 0, },

    // }
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.appColor1,
      inactiveTintColor: Colors.steel,
      allowFontScaling: false,
      style: { backgroundColor: '#FFFF', borderTopWidth: 0 },
    },
  },
);
const WalletAuthStack = createStackNavigator(
  {
    createPin: {
      screen: CreatePin,
    },
    confirmPin: {
      screen: ConfirmPin,
    },
    signup: {
      screen: Signup,
    },
    loginWPhone: {
      screen: LoginWithPhone,
    },
    phoneVerification: {
      screen: PhoneVerification,
    },
  },
  {
    initialRouteName: 'createPin',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const WalletStack = createStackNavigator({
  wallet: {
    screen: Wallet,
    navigationOptions: {
      headerShown: false,
    },
  },
  walletAddress: {
    screen: WalletAddress,
    navigationOptions: {
      headerShown: false,
    },
  },
  walletSettings: {
    screen: WalletSettings,
    navigationOptions: {
      headerShown: false,
    },
  },
},
  {
    initialRouteName: 'wallet',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
)
const AppStack = createStackNavigator({
  mainTab: {
    screen: MainTab,
    navigationOptions: {
      headerShown: false,
    },
  },
  destinationDetail: {
    screen: DestinationDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  mapScreen: {
    screen: MapScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  addPlace: {
    screen: AddStack,
    navigationOptions: {
      title: 'Add place to Live The Life',
      headerTitleAlign: 'center',
      headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor5} />,
    },
  },
  filterScreen: {
    screen: FilterScreen,
    navigationOptions: {
      //  headerShown: false
    },
  },
  chatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      //  headerShown: false
    },
  },
  addPeople: {
    screen: AddPeople,
    navigationOptions: {
      title: 'Add People',
      headerTitleAlign: 'center',
      headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor5} />,
    },
  },
  trips: {
    screen: Trips,
    navigationOptions: {
      title: '',
      // headerTitleAlign: 'center',
      // headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor5} />,
    },
  },
  favorite: {
    screen: Favorite,
    navigationOptions: {
      headerShown: false,
    },
  },
  settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerTitleAlign: 'center',
      headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor5} />,
    },
  },
  createPlan: {
    screen: CreatePlan,
    navigationOptions: {
      title: 'Create Your Plan',
      headerTitleAlign: 'center',
      headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor5} />,
    },
  },
  tripSummary: {
    screen: TripSummary,
    navigationOptions: {
      headerShown: false,
    },
  },
  dayByDayPlan: {
    screen: DayByDayPlan,
    navigationOptions: {
      title: 'Day by day Plan',
      headerTitleAlign: 'center',
      headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor4} />,
    },
  },
  tripEdit: {
    screen: TripEdit,
    navigationOptions: {
      title: 'Organize your trip',
      headerTitleAlign: 'center',
      headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor4} />,
    },
  },
  tripRoadMap: {
    screen: TripRoadMap,
    navigationOptions: {
      title: 'Road Map',
      headerTitleAlign: 'center',
      headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor4} />,
    },
  },
  tripChecklist: {
    screen: TripChecklist,
    navigationOptions: {
      title: 'Checklist',
      headerTitleAlign: 'center',
      headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor4} />,
    },
  },
  addPlaceToTrip: {
    screen: AddPlaceToTrip,
    navigationOptions: {
      title: '',
      // headerTitleAlign: 'center',
      // headerTitleStyle: ApplicationStyles.headerTitleStyle,
      headerStyle: ApplicationStyles.headerStyle,
      headerBackImage: <BackArrowButton color={Colors.appTextColor4} />,
    },
  },
  walletAuth: {
    screen: WalletAuthStack,
    navigationOptions: {
      headerShown: false,
    },
  },
  walletStack: {
    screen: WalletStack,
    navigationOptions: {
      headerShown: false,
    },
  },
  faceID: {
    screen: FaceID,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const LtlDrawerItems = [
  { title: 'Explore', screen: 'Explore' },
  { title: 'Feeds', screen: 'Feed' },
  { title: 'Chats', screen: 'Chat' },
  { title: 'Profile', screen: 'Profile' },
  { title: 'Wallet', screen: 'walletAuth' },
]
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }} >
      <View style={{ flex: 2, justifyContent: 'center', borderBottomWidth: 2.5, borderBottomColor: Colors.appBgColor2 }}>
        <View style={[ApplicationStyles.compContainer, { alignItems: 'center' }]}>
          <View style={{ backgroundColor: '#FFFF', elevation: 5, borderRadius: 100 }}>
            <Image source={Images.user} style={styles.profilePicStyle} />
          </View>
          <Text style={[ApplicationStyles.h5, { color: Colors.appTextColor2, fontFamily: Family.appTextBold }]}>Wiliam Jhon</Text>
        </View>
      </View>
      <View style={{ flex: 6 }}>
        {/* <DrawerItems {...props} /> */}
        <FlatList
          data={LtlDrawerItems}
          renderItem={({ item, index }) =>
            <View style={ApplicationStyles.compContainer}>
              <Text onPress={() => { props.navigation.navigate(item.screen); props.navigation.dispatch(DrawerActions.closeDrawer()); }} style={[ApplicationStyles.h4, { fontSize: totalSize(1.75) }]}>{item.title}</Text>
            </View>
          }
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center', backgroundColor: Colors.appBgColor2 }}>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          <Text onPress={() => props.navigation.navigate('auth')} style={[ApplicationStyles.h4, { color: Colors.appColor1, fontSize: totalSize(1.75) }]}>Logout</Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
)

const AppDrawer = createDrawerNavigator({
  Main: {
    screen: AppStack,
    navigationOptions: {
    }
  }
},
  {
    //initialRouteName: 'DriverHome',
    drawerPosition: 'left',
    drawerType: 'slide',
    //statusBarAnimation: 'slide',
    // hideStatusBar: true,
    contentComponent: props => <CustomDrawerComponent {...props} />,
    contentOptions: {
      inactiveTintColor: Colors.steel,
      activeTintColor: Colors.appColor1
    },
  }
)

const StackSwitcher = createSwitchNavigator(
  {
    splash: AuthLoading,
    auth: AuthStack,
    app: AppDrawer,
  },
  {
    initialRouteName: 'splash',
  },
);

export default createAppContainer(StackSwitcher);

const styles = StyleSheet.create({
  profilePicStyle: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: 100
  }
})