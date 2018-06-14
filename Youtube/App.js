import React from 'react';
import { StyleSheet, Text, View ,Image ,StatusBar ,TouchableOpacity ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from './data.json';
import VideoItem from './components/VideoItem';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.navBar}>
          <Image source={require('./logo.png')} style={{width:98,height:22}}/>
          <View style={styles.navRight}>
          <TouchableOpacity>
            <Icon style={styles.navItem} name='search' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.navItem} name='account-circle' size={25}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={(video)=><VideoItem video={video.item}/>}
            keyExtractor={(item)=>item.id}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name='home' size={25}/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name='whatshot' size={25}/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name='subscriptions' size={25}/>
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name='folder' size={25}/>
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar:{
    height:55,
    backgroundColor:'white',
    elevation:3,
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  navRight:{
    flexDirection:'row'
  },
  navItem:{
    marginLeft:25,
  },
  body:{
    flex:1,
  },
  tabBar:{
    borderColor:'#E5E5E5',
    borderTopWidth:0.5,
    height:60,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  tabItem:{
    justifyContent:'center',
    alignItems:'center'
  },
  tabTitle:{
    fontSize:11,
    color:'#3c3c3c',
  }
});
