import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { Card, Icon } from '@rneui/themed';


export default function MoviDetaiels( {navigation,route}) {
  const myitem = route.params.item
  return (
    <View style={{padding:10,backgroundColor:'black',height:'100%',flexDirection:'column' }}>
           

                       <View style={{backgroundColor:'black',padding:10,borderRadius:'10px',
          boxShadow: "0px 0px 6px 1px  gray",
          marginTop:'10px'
}} >

            <Card.Image
            
              style={{ padding: 10,borderRadius:'10px' , 
          color:'white',
          cursor:'pointer'
              }}
              source={{
                uri: route.params.item.background_image,
              }}


            />
     
            <Card.Title style={{
          color:'white',
          marginTop:20

            }}>{route.params.item.slug}</Card.Title>
        
          </View>

          </View>
          

  
  );
}

//   <View style={{backgroundColor:'black',padding:10,borderRadius:'10px',
//           boxShadow: "0px 0px 6px 1px  gray",
//           marginTop:'10px'
// }} >

//             <Card.Title style={{
//           color:'white',

//             }}>{item.name}</Card.Title>
//             <Card.Divider />
//             <Card.Image
            
//               style={{ padding: 10,borderRadius:'10px' , 
//           color:'white',
//            cursor:'pointer'
//               }}
//               source={{
//                 uri: item.background_image,
//               }}

//             />
       
//           </View>