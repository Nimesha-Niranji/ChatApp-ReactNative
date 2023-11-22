import {Input, Button} from '@rneui/base';
import React, {useState} from 'react'
import { Text, View , StyleSheet} from 'react-native'


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

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

        <Button title='Sign in' style={styles.button}/>
        <Button title='Register' style={styles.button}
            onPress={() => navigation.navigate('Register')} />
         
    </View>
  )
}
const styles = StyleSheet.create({
  
    button:{
      width: 400,
      marginTop: 20,
      color:'red'
    },
    container:{
        flex:1,
        alignItems: 'center',
        padding:10
    }
  });

export default LoginScreen


