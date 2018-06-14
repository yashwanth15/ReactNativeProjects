import React from 'react';
import { StyleSheet, Text, View ,Image ,StatusBar ,TouchableOpacity ,FlatList ,Button} from 'react-native';
import {Font} from 'expo';

export default class First extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'roboto': require('./fonts/Roboto-Regular.ttf'),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.body}>
          <Image style={styles.logo} source={require('./images/Logo_5cm_5cm.png')} />
          <Image style={styles.logoGif} source={require('./images/betterharlf-hero-page-illu-mob.gif')} />
          <Text style={styles.quote}>India&#39;s first AI powered{'\n'}life partner search experience</Text>
        </View>
        <TouchableOpacity style={styles.linkedInButton}>
          <View>
            <Image style={styles.linkedInLogo} source={require('./images/button.png')}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:50
  },
  linkedInButton:{
    height:60,
    backgroundColor:'#0277BD',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
  },
  logoGif:{
    height:300,
    width:250,
    marginTop:20
  },
  logo: {
    height:55,
    width:150,
    marginTop:30
  },
  quote: {
    padding:25,
    fontSize:23,
    textAlign:'center',
    marginBottom:20,
  },
  /*linkedInText:{
    color:'white',
    fontSize:18,
  },*/
  linkedInLogo:{
    height:60,
    width:400,
  }
});
