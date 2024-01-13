import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import Video from './Video'
import Home from './Home'
const AppNavigator=createSwitchNavigator({
  Home:Home,
  Video:Video
})
const AppContainer=createAppContainer(AppNavigator)



export default class App extends React.Component {
  render() {
  
    return (
      <AppContainer/>
         );
  }
}
