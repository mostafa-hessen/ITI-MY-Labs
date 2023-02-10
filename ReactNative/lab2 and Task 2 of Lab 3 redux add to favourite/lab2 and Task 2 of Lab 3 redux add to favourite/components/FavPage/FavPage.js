import { Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { getFromLocalStorage, getUrlData } from "../redux/action";

import { Card, Button, Icon } from '@rneui/themed';


import SyncStorage from 'sync-storage';






export default function FavPage({route}
) {

    let MyFavouriteGames=useSelector( state=> state.favoriteGames.k?"": JSON.parse(state.favoriteGames))

   const dispatch = useDispatch();


   let setToLocalStorage = (ele) => {
    //  alert(ele[0].name)
    SyncStorage.set('FavouriteItems', JSON.stringify(ele));


  };

//  let getFromoLocalStorage = (ele) => {
//    return JSON.parse( SyncStorage.get('FavouriteItems'));

  // };

 const favoriteFunc = (element) => {

    let newItem = MyFavouriteGames.filter(ele=>ele.id!=element.id)
    
      //  alert(newItem )
       setToLocalStorage(newItem);
    dispatch(
      getFromLocalStorage(JSON.parse(localStorage.getItem("FavouriteItems")))
    );
 

  };

  
// useEffect(()=>{

//  dispatch(
//       getFromLocalStorage(JSON.parse(localStorage.getItem("FavouriteItems")))
//     );
 
// },[setToLocalStorage()])


  // let items=  route.params

  return (
    <View style={{padding:10}}>
       {MyFavouriteGames.length!=0?MyFavouriteGames.map(function (item, index) {
        return (
          <View style={{backgroundColor:'black',padding:10,borderRadius:'10px',
          // color:'white',
          boxShadow: "0px 0px 6px 1px  gray",
          marginTop:'10px'
}} >

            <Card.Title style={{
          color:'white',

            }}>{item.name}</Card.Title>
            <Card.Divider />
            <Card.Image
            
              style={{ padding: 10,borderRadius:'10px' , 
          color:'white',
          cursor:'pointer'
              }}
              source={{
                uri: item.background_image,
              }}


            />
     
      

 <Button
              title="remove"
              buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
              containerStyle={{
                height: 40,
                width: 250,
                marginHorizontal: 10,
                marginVertical: 20,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
               onPress={() => favoriteFunc(item)}

            />
 
        
          </View>
        );
      }):<Text style={{fontSize:25,textTransform:'capitalize',textAlign:'center'}}>favourit is embty</Text>}

    </View>
  );
}



   // let i =  favorite!=[]? [...favorite]:favorite
    // let newItem = [...favorite];

    // favorite.find((ele) => ele.id == element.id)
    //   ? ''
    //   : newItem.push(element);

    // newItem.find((ele) => console.log(ele));

    // setfavorite(newItem);

    // setToLocalStorage(newItem);

    // dispatch(
    //   getFromLocalStorage(JSON.parse(localStorage.getItem("FavouriteItems")))
    // );