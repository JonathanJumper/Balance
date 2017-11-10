import React from "react"
import { StackNavigator, TabNavigator } from 'react-navigation'
import MeasureScreen from '../Containers/MeasureScreen'
import CalculateScreen from '../Containers/CalculateScreen'
import GuideScreen from '../Containers/GuideScreen'
import SettingsScreen from '../Containers/SettingsScreen'
import StockScreen from '../Containers/StockScreen'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import Icon from "react-native-vector-icons/Ionicons"
import { Colors } from "../Themes/"
import styles from './Styles/NavigationStyles'

const MainNavigation = TabNavigator(
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
        tabBarLabel: "Config",
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
        activeTintColor: "#fff",
        inactiveTintColor:'#aaa',
        style: {
            backgroundColor: Colors.primary,
        },
        indicatorStyle: {
            backgroundColor: 'white'
        }
    }
  }
);

const LoginNavigation = StackNavigator(
  { 
    //LaunchScreen: { screen: LaunchScreen},
    Home: { screen: MainNavigation, },
    LoginScreen: { screen: LoginScreen },
    MeasureScreen: { screen: MeasureScreen },
    CalculateScreen: { screen: CalculateScreen }
  },
  {
  // In modal mode screen slides up from the bottom
    mode: 'modal',
    // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
    headerMode: 'none',
  }
)


export default LoginNavigation
