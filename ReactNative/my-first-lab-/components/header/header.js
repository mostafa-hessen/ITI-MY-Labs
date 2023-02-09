import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/base';
import { SocialIcon } from '@rneui/themed';


export default function Header() {
  return (
    <View>
      <View style={styles.myHeader}>
        <Image style={styles.tinyLogo} source={require('./download.jpg')} />
        <Text style={styles.name}>mostafa hessen</Text>
        <Text style={styles.pargraph}>front end developer</Text>
      </View>

      <View  style={styles.iconsContainer}   >
       
         <SocialIcon
                type={'facebook'}
                // iconType={'facebook'}
                iconSize={16}
                style={ styles.icon}
              />

         
         <SocialIcon
                type={'youtube'}
                // iconType={'facebook'}

             iconSize={16}
                style={ styles.icon}
              />


        
         <SocialIcon
                type={'twitter'}
                // iconType={'facebook'}
             iconSize={16}
                style={ styles.icon}
              />


         <SocialIcon
                type={'google'}
                // iconType={'facebook'}
             iconSize={16}
                style={ styles.icon}
              />

        
         <SocialIcon
                type={'linkedin'}
                // iconType={'facebook'}
             iconSize={16}
                style={ styles.icon}
              />

   

      </View>

     </View>
  );
}
const styles = StyleSheet.create({
  myHeader: {
    width: 200,
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    color: 'white',
    textTransform: 'capitalize',
    marginBottom: 10,
    marginTop: 20,
  },
  pargraph: {
    fontSize: 12,
    textTransform: 'capitalize',
    color: '#d5d5d5',
  },

  iconsContainer:{
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'space-between'

  },

  icon :{
    width:25,
    height:25,
    backgroundColor:'#FFC000',
    padding:15,
    borderRadius:15,
    textAlign:'center',
    cursor:'pointer'
     


  }
});
