import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header/header'
import Line from './components/LineSepreatore/LineSepreatore'
import About from './components/ABOUT/About'
import Labguage from './components/language/Labguage'
import { Button } from '@rneui/themed';


 

export default function App() {
  return (
    <View style={styles.container}>
       <Header> </Header>
       <Line></Line>
       <About></About>
       <Line></Line>
       <Labguage></Labguage>
       <Line></Line>

      <Button color="warning" style={{textTransform:'capitalize',marginTop:'20px'}}>download my cv</Button>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,

    backgroundColor: 'black',
    padding: 20,
  
  }
 
});
