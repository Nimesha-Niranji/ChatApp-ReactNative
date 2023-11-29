import {Input, Button} from '@rneui/base';
import React, {useEffect, useState} from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
      auth.signInWithEmailAndPassword(email, password)
      
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
    };

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(function(user) {
        if (user) {
            navigation.replace('Chat');
        } else {
            navigation.canGoBack() && navigation.popToTop();
        }
      });
      return unsubscribe
    },[])

  return (
    <View style={styles.container}>
        <Input 
            placeholder="Enter Your Email"  
            value = {email}
            label="Email"
            leftIcon={{type:'material',name: 'email'}}
            onChangeText={text => setEmail(text)} />

        <Input 
            placeholder="Enter Your Password"  
            value = {password}
            label="Password"
            leftIcon={{type:'material',name: 'lock'}}
            onChangeText={text => setPassword(text)}
            secureTextEntry />

        <Button title='Sign in' onPress={signIn} buttonStyle={styles.button}/>
        <Button title='Register' buttonStyle={styles.button}
            onPress={() => navigation.navigate('Register')} />
         
    </View>
  )
}
const styles = StyleSheet.create({
  
    button:{
      width: 200,
      marginTop: 20,
    },
    container:{
        flex:1,
        alignItems: 'center',
        padding:10
    }
  });

export default LoginScreen


