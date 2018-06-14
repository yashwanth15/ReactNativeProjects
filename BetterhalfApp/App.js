import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import First from './assets/First';

const RootStack = createStackNavigator(
  {
    First: {
      screen: First,
      title: 'First',
    },
    //next layouts go here
  },
  {
    initialRouteName: 'First',
    header: null,
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return (<View
      style={
        {
          flex: 1
        }
      }>
      <RootStack />
      </View>);
  }
}
