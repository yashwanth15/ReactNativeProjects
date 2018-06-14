import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView ,TouchableOpacity , StatusBar} from 'react-native';
//import { Actions } from 'react-native-router-flux';

class ScrollViewExample extends Component{
   state = {
      names: [
         {'name': 'Ben', 'id': 1},
         {'name': 'Susan', 'id': 2},
         {'name': 'Robert', 'id': 3},
         {'name': 'Mary', 'id': 4},
         {'name': 'Daniel', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12}
      ]
   }
   alertName=(item)=>{
     alert(item.name)
   }
   render() {
      return (
         <View style={styles.body}>
            <StatusBar hidden={true}/>
            <ScrollView style={styles.container}>
               {
                  this.state.names.map((item, index) => (
                    <TouchableOpacity key = {item.id} onPress={()=>this.alertName(item)}>
                     <View style = {styles.item}>
                     <Image source={require('../img.png')} style={styles.img}/>
                        <Text style={styles.txt}>
                        {item.name}</Text>
                     </View>
                    </TouchableOpacity>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
  body:{
    backgroundColor:'black'
  },
  container:{
    marginTop:30
  },
   item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 30,
      margin: 5,
      backgroundColor:'white'
   },
   txt:{
     marginLeft:10,
     marginBottom:2
   },
   img:{
     width:30,
     height:30
   }
})
