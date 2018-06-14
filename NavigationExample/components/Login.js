import React, { Component } from 'react';
import { Text,
  Image,
   View,
   StyleSheet,
   ScrollView ,
   TouchableOpacity ,
   TouchableHighlight,
   KeyboardAvoidingView,
   TouchableNativeFeedback,
   TextInput,
    StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Login extends Component{
   state={
     email:'',
     password:''
   }
   componentDidMount = ()=> {
     console.log('INSIDE THE LOGIN PAGE')
   }
   handleEmail=(text)=>{
     this.setState({email:text})
   }
   handlePassword=(text)=>{
     this.setState({password:text})
   }
   login=(email,password)=>{
     if(email=='email' && password=='password'){
       return true;
     }
     else{
       return false;
     }
   }
   render(){
     return(
       <View style = {styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.form}>
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
            </View>
            <KeyboardAvoidingView behavior='padding' enabled>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {if(!this.login(this.state.email,this.state.password)){
                    alert('Login Failed!')
                  }
                  else {
                    this.props.navigation.replace('Details')
                  }
                }
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
      </View>
     )
   }
}
export default Login

const styles = StyleSheet.create ({
  container: {
      paddingTop: 23,
      flex:1,
   },
   form:{
     flex:1,
     justifyContent:'center'
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
      alignItems:'center',
      position:'relative',
   },
   submitButtonText:{
      color: 'white'
   }
})
