import React from "react"
import { StackNavigator, TabNavigator } from 'react-navigation'
import GuideScreen from '../Containers/GuideScreen'
import SettingsScreen from '../Containers/SettingsScreen'
import StockScreen from '../Containers/StockScreen'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import Icon from "react-native-vector-icons/Ionicons"
import { Colors } from "../Themes/"
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const LoginNavigation = StackNavigator(
  {
    SettingsScreen: { screen: SettingsScreen },
    StockScreen: { screen: StockScreen },
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen },
    LaunchScreen: { screen: LaunchScreen }
  }, 
  // Default config for all screens
  {
    headerMode: 'none',
    initialRouteName: "LoginScreen"
  }
);

// Tab navigation for Home and Settings screens
const HomeNavigation = TabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-analytics" : "ios-analytics-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    StockScreen: {
      screen: StockScreen,
      navigationOptions: {
        tabBarLabel: "Stock",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-medkit" : "ios-medkit-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    GuideScreen: {
      screen: GuideScreen,
      navigationOptions: {
        tabBarLabel: "Guia",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-body" : "ios-body-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "Configurar",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "ios-settings" : "ios-settings-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    headerMode: 'none',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: Colors.primary,
        inactiveTintColor:'#999999',
        style: {
            backgroundColor: "#ffffff",
        },
        indicatorStyle: {
            backgroundColor: 'white'
        }
    }
  }
);

export default HomeNavigation
