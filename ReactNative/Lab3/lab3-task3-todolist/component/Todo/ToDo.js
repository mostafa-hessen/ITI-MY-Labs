import React, { useState } from 'react';


import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  CheckBox,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import { Button } from '@rneui/themed';
import SyncStorage from 'sync-storage';

export default function ToDo() {
    const [task, setTask] = useState('');
  const [isSelected, setSelection] = useState(false);
 let setToLocalStorage = (ele) => {
    SyncStorage.set('tasks', JSON.stringify(ele));

  };

 let getFromoLocalStorage = () => {
   return  SyncStorage.get('tasks')?JSON.parse(SyncStorage.get('tasks')):""

  };

  let clearLocalStorage = () => {
     SyncStorage.remove('tasks');

  };
 let arr =getFromoLocalStorage()?[...getFromoLocalStorage()]:[]
const addTask=(e,ele)=>{
  
 if( ele.length<1){alert("can't empty add task")}
 
 else{
   arr.push(ele)
  setToLocalStorage(arr)
  }
}
  return (
<ScrollView>

    <View style={styles.container}>
      <View>
        <Image />
      </View>

      <View style={styles.todoList}>
        <Text
          style={{
            color: '#fff',
            fontSize: '20px',
            marginBottom: '20px',
            textTransform: 'capitalize',
          }}>
          your to do list 😊
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="Add task"
            style={{
              border: '1px dashed blue',
              padding: '10px',
              marginRight: 10,
              color: '#FFF',
            }}
              onChange={(e)=>{setTask(e.target.value)}}
          />
          <Button
           onPress={(e) => {

             addTask(e,task)
    
  }}   > Add</Button>
        </View>
  {
            getFromoLocalStorage()? getFromoLocalStorage().map((ele)=> <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '22px',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '5px',
          }}>

        
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox  style={{ marginRight: '10px' }} value={isSelected}
          onValueChange={setSelection} />
          
            <Text style={{marginTop:'-4px'}}>{ele}</Text>
          </View>

          <Button
            color="red"
            style={{
              height: '24px',
              width: '20px',
              fontSize: '10px',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={()=>{alert(arr[1])}}
            title="x"></Button>
        </View>):<Text> empty</Text>}


        <Button title="Clear" color="warning" style={{marginTop:'10px'}}
        
        
        >
        </Button>
      </View>
      

    </View>
</ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  todoList: {
    backgroundColor: '#010730',
    borderRadius: '7px',
    minHeight: '200px',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#FFF',
  },
});

// <View >

//        <Text  >your to do list 😊 </Text>
//          <View  >
//            <TextInput  >
//           <Button >w</Button>
//          </View>

//        <View

//            <View
//           "

//         >
//            <View >
//              <TextInput
//              />
//             <Text

//             >
//             </Text>
//            </View>
//           <Button >X</Button>
//          </View>

//        </View>
//      </View>
//     <View  >
//       <Text>Made with 💖 by Mostafa Bebo </Text>
//       <Text>good luck 💥</Text>
