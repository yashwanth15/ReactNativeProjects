import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import ScrollViewExample from './components/ScrollViewExample';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Login,
      title: 'Login',
    },
    Details: ScrollViewExample,
  },
  {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
