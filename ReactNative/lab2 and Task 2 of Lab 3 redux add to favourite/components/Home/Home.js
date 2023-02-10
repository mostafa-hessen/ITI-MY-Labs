
import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import { Card, Button, Icon } from '@rneui/themed';
import MoviDetaiels from '../MoviDetaiels/MoviDetaiels'
import SyncStorage from 'sync-storage';
import { getFromLocalStorage, getUrlData } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
 

export default function Home({navigation}) {
   const dispatch = useDispatch();
  const [api,setapi]=useState()
  const [myallFav,setmyallFav]=useState(["hi"])
useEffect(() => {
    fetch(
      'https://api.rawg.io/api/games?key=4efadf7d35904a19996995e218e37c5a&dates=2020-09-01,2022-09-30'
    )
      .then((response) => response.json())
      .then((json) => {
        return setapi(json.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



 let setToLocalStorage = (ele) => {
    SyncStorage.set('FavouriteItems', JSON.stringify(ele));

  };

 let getFromoLocalStorage = (ele) => {
   return JSON.parse( SyncStorage.get('FavouriteItems'));

  };
  const [favorite,setfavorite]=useState([])

 const favoriteFunc = (element) => {
    // let i =  favorite!=[]? [...favorite]:favorite
    let newItem = [...favorite];

    favorite.find((ele) => ele.id == element.id)
      ? ''
      : newItem.push(element);

    newItem.find((ele) => console.log(ele));

    setfavorite(newItem);

    setToLocalStorage(newItem);

    dispatch(
      getFromLocalStorage(JSON.parse(localStorage.getItem("FavouriteItems")))
    );
  };
  return (
<ScrollView>

    
    <View style={styles.container}>
 navigation.navigate('MovieDetailes')
   {api?.map(function (item, index) {
        return (
          <View style={{ padding:10,borderRadius:'10px',
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

               onPress={() => navigation.navigate('MoviDetaiels',{item})}

            />
     

 <Button
              title="Add to fav"
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
 



  <Button
              title="Favpage"
              buttonStyle={{ backgroundColor: 'orange' }}
              containerStyle={{
                height: 40,
                width: 250,
                marginHorizontal: 10,
                marginVertical: 20,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
                             onPress={() => navigation.navigate('FavPage',getFromoLocalStorage())}


            />

         
        
          </View>
        );
      })}
      
    </View>

</ScrollView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: '18px 10px ',
          // height:'100vh',
        // backgroundColor:'red',
        overFlow:'scroll'
    // marginTop:'10px'
  },
 
});



