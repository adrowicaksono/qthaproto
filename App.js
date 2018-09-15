import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import LandingPage from './src/containers/landingPage'
import Page1 from './src/containers/page1'
import Page2 from './src/containers/page2'
import Page3 from './src/containers/page3'

const RootStack = createStackNavigator ({
  LandingPage : LandingPage,
  Page1 : Page1,
  Page2 : Page2,
  Page3 : Page3,
})



export default class App extends Component {
  
  render() {
    return (
       <RootStack/>
    );
  }
}

