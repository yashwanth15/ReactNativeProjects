import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title='Go to Details' onPress={()=>this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
}
