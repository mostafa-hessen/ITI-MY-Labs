import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Language() {
  return (
    <View style={styles.myInfoContainer}>
      <Text style={styles.languages}>languages</Text>
      <View >
          <Text style={styles.language}  >english</Text>
        <View style={styles.track}>
          <Text style={[styles.trackChild,styles.trackChild1]}></Text>
        </View>
      </View>


      <View >
          <Text style={styles.language}  >arabic</Text>
        <View style={styles.track}>
          <Text style={[styles.trackChild,styles.trackChild2]}></Text>
        </View>
      </View>

      <View >
          <Text style={styles.language}  >espanol</Text>
        <View style={styles.track}>
          <Text style={[styles.trackChild,styles.trackChild3]}></Text>
        </View>
      </View>

      <View >
          <Text style={styles.language}  >french</Text>
        <View style={styles.track}>
          <Text  style={[styles.trackChild,styles.trackChild4]}
        ></Text>
        </View>
      </View>



    </View>
  );
}
const styles = StyleSheet.create({
  myInfoContainer: {
    // backgroundColor:'green',
    width: 240,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
    textTransform: 'capitalize',
  },
  languages:{
    color:"white",
    width:'50%',
    padding:'10px 0px',
    fontSize:20,
    marginBottom:20

  },
   language:{
     color:'white',
     padding:'10px 0px',
     fontSize:14,
     fontWeight:'bold'


  },
  track: {
    backgroundColor: 'black',
    width: 240,
    padding: 2,
    marginBottom:20,
    // paddingRight:35,
    color: 'white',
    postion: 'relative',
 boxShadow: "2px 0px 20px 1px gray",
borderRadius: 100/2,
    // borederRadious:10
  },
  trackChild: {
    backgroundColor: '#FFC000',
    // width: '70%',
    height: 1,
    padding: 2,
    // paddingRight:35,
    color: 'red',
    postion: 'absolute',
borderRadius: 100/2,

  },
  trackChild1: {
     width: '70%',

  },
    trackChild2: {
     width: '90%',

  }
  ,
    trackChild3: {
     width: '60%',

  }
  ,
    trackChild4: {
     width: '93%',

  }


});
