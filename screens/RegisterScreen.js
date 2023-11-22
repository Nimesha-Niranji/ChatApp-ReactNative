import {Input, Button} from '@rneui/base';
import React, {useState} from 'react'
import { Text, View , StyleSheet} from 'react-native'


const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [imageUrl, setImageurl] = useState('');

  return (
    <View style={styles.container}>

        <Input 
            placeholder="Enter Your Name"  
            value = {name}
            label="Name"
            leftIcon={{type:'material',name: 'person'}}
            onChangeText={text => setName(text)} />

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

        <Input 
            placeholder="Enter Your Image URL"  
            value = {imageUrl}
            label="Profile Picture"
            leftIcon={{type:'material',name: 'face'}}
            onChangeText={text => setImageurl(text)} />    

        <Button title='Register' style={styles.button} />
         
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

export default RegisterScreen
