import React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './DJButton';
import AppHeader from './AppHeader';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        sounds
        <View style={styles.redB}>
          <DJButton
            uri="https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/ambulance-sound-26298.mp3"
            text="ambulance"
            bgcolor="red"
          />
          </View>

          <View style={styles.yellowB}>
          <DJButton
            uri="https://mobcup.net/d/jo2a2hfp/mp3"
            text="police "
            bgcolor="yellow"
          />
          </View>
          <View style={styles.greenB}>
          <DJButton
            uri="https://mobcup.net/d/zerwfv85/mp3"
            text="scream"
            bgcolor="lime"
          />
          </View>
           <View style={styles.blueB}>
            <DJButton
            uri="https://mobcup.net/d/wn7jnwv9/mp3"
            text="alarm clock"
            bgcolor="blue"
          />
        </View>
          <View style={styles.pinkB}>
          <DJButton
            uri="https://mobcup.net/d/ao1w6ulq/mp3"
            text="wood sawing "
            bgcolor="#FF2480"
          />
          </View>
        <View style={styles.stopButtonContainer}>
          <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(true);
            }}
            >
            <Text>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   stopButtonContainer : {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    marginTop:40
  },
  container:{
    backgroundColor:'#C8A2C8'
  },
  
  redB:{
    width:150,
    height:150,
    borderWidth:10,
    borderRadius:20,
    backgroundColor:"cyan",
     marginTop:'90',
         borderBottomColor:'yellow',
       borderLeftColor:'yellow'
      


  },
    yellowB:{
    width:150,
    height:150,
    borderWidth:10,
    borderRadius:20,
    backgroundColor:"blue",
    marginTop:20,
         borderBottomColor:'lime',
       borderLeftColor:'lime'  

  },
    greenB:{
    width:150,
    height:150,
    borderWidth:10,
    borderRadius:20,
    backgroundColor:"red",
      marginTop:20,
           borderBottomColor:'yellow',
       borderLeftColor:'yellow'  

    },
      pinkB:{
    width:150,
    height:150,
    borderWidth:10,
    borderRadius:20,
    backgroundColor:"orange",
      marginTop:20,
     borderBottomColor:'silver',
       borderLeftColor:'silver'  

    },
    blueB:{
    width:150,
    height:150,
    borderWidth:10,
    borderRadius:20,
    backgroundColor:"brown",
      marginTop:20,
       borderBottomColor:'magenta',
       borderLeftColor:'magenta'  

    },

  stopButton :{
    width: '999%',
    height: 100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 1,
    backgroundColor : 'gold',
    borderWidth:26,
    borderColor : 'rgba(0,0,0)',
  }
  
});

