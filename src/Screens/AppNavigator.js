import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import DiscoverScreen from './DiscoverScreen/DiscoverScreen';
import WatchlistScreen from './WatchlistScreen/WatchlistScreen';  
import SearchScreen from './SearchScreen/SearchScreen';
import SettingsScreen from './SettingsScreen';
import colors from '../Constants/colors';
import isSmallScreen from '../utils/isSmallScreen';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Discover: { 
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="local-movies" color={tintColor} size={28} />
        )
      } 
    },
    Watchlist: { 
      screen: WatchlistScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="bookmark" color={tintColor} size={28} />
        )
      } 
    },
    Search: { 
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" color={tintColor} size={28} />
        )
      } 
    },
    Settings: { 
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({tintColor}) => (
          <Icon name="settings" color={tintColor} size={28} />
        )
      } 
    }
  }, 
  {
    initialRouteName: 'Search',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: colors.text01,
      inactiveTintColor: colors.text02,
      style: { 
        backgroundColor: colors.base01,
        paddingTop: 5,
        paddingBottom: isSmallScreen() ? 10 : 25,
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true,
      showLabel: false
    }
  }
);

export default createAppContainer(AppNavigator);