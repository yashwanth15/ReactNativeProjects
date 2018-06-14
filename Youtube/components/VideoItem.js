import React from 'react';
import { StyleSheet, Text, View ,Image ,StatusBar ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends React.Component{
  render(){
    let video=this.props.video;
    return(
      <View style={styles.container}>
        <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200}}/>
        <View style={styles.descContainer}>
          <Image source={{uri:'https://randomuser.me/portraits/men/0.jpg'}} style={styles.videoProfileImage}/>
          <View style={styles.videoDetails}>
            <Text style={styles.videoTitle}>{video.snippet.title}</Text>
            <Text style={{color:'gray'}}>{video.snippet.channelTitle}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding:15
  },
  descContainer:{
    flexDirection:'row',
    paddingTop:15,
  },
  videoDetails:{
    paddingHorizontal:15,
    flex:1
  },
  videoTitle:{
    fontSize:16,
    color:'#3c3c3c'
  },
  videoProfileImage:{
    width:50,
    height:50,
    borderRadius:100
  }
});
