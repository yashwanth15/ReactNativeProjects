import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
             placeholder = "Enter Text"/>
        <View style={styles.buttons}>
          <TouchableOpacity
            style = {styles.submitButton}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.submitButton}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:25
  },
  input: {
      margin: 15,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      padding:5
   },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  submitButton: {
      backgroundColor: 'gray',
      padding: 10,
      margin: 15,
      height: 40,
   },
});
