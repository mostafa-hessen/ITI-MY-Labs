import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function Form() {
  const [email, setEmail] = useState('');
  const [pass, setpass] = useState('');

  const [emailErr, setEmailErr] = useState('');
  const [passErr, setpassErr] = useState('');

  const handleSubmitEmail = () => {
    if (email.length < 2) {
      setEmailErr('Email is Required and length must greater  than 2');
    } else {
      setEmailErr('');
    }
  };

  const handleSubmitPassword = () => {
    if (pass.length < 8) {
      setpassErr('Password is Required and length Must greater than 8');
    } else {
      setpassErr('');
    }
  };

  

  return (
    //
    <View>
      <TextInput
        placeholder="Enter Email"
        onChangeText={(text) => {
          setEmail(text);
          handleSubmitEmail();
        }}
        style={{ border: '1px solid red', padding: '10px' }}
      />

      <Text style={style.myText}> {emailErr} </Text>

      <TextInput
      secureTextEntry={true}
        placeholder="Enter Password"
        onChangeText={(text) => {
          setpass(text);
          handleSubmitPassword();
        }}
        style={{ border: '1px solid red', padding: '10px' }}
      />
      <Text style={style.myText}> {passErr} </Text>

      <Button title="Submit">
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  myText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
