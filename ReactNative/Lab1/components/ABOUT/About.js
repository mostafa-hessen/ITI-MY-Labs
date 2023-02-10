import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/base';
import { SocialIcon,LinearProgress  } from '@rneui/themed';


export default function About() {
  return (
    <View>
         <View style={styles.myInfoContainer}>
            <Text style={styles.detailesPargrph}>age</Text>
            <Text style={styles.answer}>22</Text>
         </View> 


              <View style={styles.myInfoContainer}>
            <Text style={styles.detailesPargrph}>name</Text>
            <Text style={styles.answer}>bebo</Text>
         </View>  

              <View style={styles.myInfoContainer}>
            <Text style={styles.detailesPargrph}>address</Text>
            <Text style={styles.answer}>fayoum</Text>
         </View> 

           <View style={styles.myInfoContainer}>
            <Text style={styles.detailesPargrph}>mob</Text>
            <Text style={styles.answer}>01032486387</Text>
         </View>    
     </View>
  );
}
 const styles = StyleSheet.create({

myInfoContainer:{
  // backgroundColor:'green',
  width:240,
  marginTop:20,
 flexDirection:'row',
 justifyContent:'space-between',
alignItems:'center',
textTransform:'capitalize'
},
detailesPargrph:{
    backgroundColor:'#FFC000',
  padding:8,
  paddingRight:35,
  color:'white'

},
answer:{
color:'white'

}
})
//   myHeader: {
//     width: 200,
//     marginTop: 100,
//     flex: 1,
//     alignItems: 'center',
//   },
//   tinyLogo: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//   },
//   name: {
//     fontSize: 24,
//     color: 'white',
//     textTransform: 'capitalize',
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   pargraph: {
//     fontSize: 12,
//     textTransform: 'capitalize',
//     color: '#eee',
//   },

//   iconsContainer:{
//     marginTop: 10,
//     flexDirection:'row',
//     justifyContent:'space-between'

//   },

//   icon :{
//     width:25,
//     height:25,
//     backgroundColor:'#FFC000',
//     padding:15,
//     borderRadius:15,
//     textAlign:'center',
     


//   }
// });
