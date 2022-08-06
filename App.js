import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailValidator = () => {
    let rjxEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let isValidate = rjxEmail.test(email);
    if (email == '') {
      setEmailError('Please enter your email');
    } else if (isValidate && email.length > 0) {
      setEmailError('Please Enter Valid Email');
    } else {
      setEmailError('');
    }
  };

  const nameValidator = () => {
    let rjxName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValidate = rjxName.test(name);
    // console.warn(isValidate);
    if (name == '') {
      setNameError('Please enter your name');
    } else if (isValidate) {
      setNameError('Please enter valid name');
    } else {
      setNameError('');
    }
  };
  const passwordValidate = () => {
    if (password == '') {
      setPasswordError('Please enter your password');
    } else if (password == '' || password.length < 6) {
      setPasswordError('Please enter at least 6 digits');
    } else {
      setPasswordError('');
    }
  };
  return (
    <View style={{marging: 20, marginTop: 100}}>
      <TextInput
        placeholder="Name"
        value={name}
        onBlur={nameValidator}
        onChangeText={text => setName(text)}
        style={{borderWidth: 2, borderColor: 'skyblue', margin: 2}}
      />
      <Text style={{color: 'red'}}> {nameError} </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onBlur={emailValidator}
        onChangeText={text => setEmail(text)}
        style={{borderWidth: 2, borderColor: 'skyblue', margin: 2}}
      />
      <Text style={{color: 'red'}}> {emailError} </Text>

      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onBlur={passwordValidate}
        minlength={6}
        onChangeText={text => setPassword(text)}
        style={{borderWidth: 2, borderColor: 'skyblue', margin: 2}}
      />
      <Text style={{color: 'red'}}> {passwordError} </Text>
      <Button title="Submit" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({});
