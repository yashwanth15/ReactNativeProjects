import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class DetailsScreen extends React.Component{
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
