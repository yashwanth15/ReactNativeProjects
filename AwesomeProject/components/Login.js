import React, { Component } from 'react';
import { Text,
  Image,
   View,
   StyleSheet,
   ScrollView ,
   TouchableOpacity ,
   TouchableHighlight,
   TouchableNativeFeedback,
   TextInput } from 'react-native';
import ScrollViewExample from './ScrollViewExample';
import { Actions } from 'react-native-router-flux'

const Login = () => {
   state={
     email:'',
     password:''
   }
   handleEmail=(text)=>{
     this.setState({email:text})
   }
   handlePassword=(text)=>{
     this.setState({password:text})
   }
   login=(email,password)=>{
     if(email=='email' && password=='password'){
       return true
     }
   }
   const goToScroll=()=>{
     Actions.scrollViewExample()
   }
   //render(){
     return(
       <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#A6A6A6"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#A6A6A6"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {if(this.state.email=='email' && this.state.password=='password'){
                    {goToScroll}
                    alert('Logged in!')
                  }
                  else{
                    alert('Login Failed!')
                  }
                }
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
     )
   //}
}
export default Login

const styles = StyleSheet.create ({
  container: {
      paddingTop: 23
   },
   input: {
     padding:10,
      margin: 15,
      height: 40,
      borderColor:'black',
      borderWidth:1
   },
   submitButton: {
      backgroundColor: 'black',
      padding: 10,
      margin: 15,
      height: 40,
      alignItems:'center'
   },
   submitButtonText:{
      color: 'white'
   }
})
