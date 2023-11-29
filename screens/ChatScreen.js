import React, { useLayoutEffect } from 'react' 
import { View, Text, TouchableOpacity } from 'react-native'
import {auth} from '../firebase'
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from '@rneui/base';

const ChatScreen = ({navigation}) => {

  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      navigation.replace('Login');
    }).catch((error) => {
      // An error happened.
    });
  };
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft:20}}>
          <Avatar
            rounded
            source = {{
              uri: auth?.currentUser?.photoURL || 'https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png'
            }}/>
        </View>
      ),

      headerRight: () => (
        <TouchableOpacity style={{
          marginRight:30
        }}
        onPress={signOut}
        >
          <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
      ),
    })
  },[])

  return (
    <View>
      <Text>Chat Screen</Text>
    </View>
  )
}

export default ChatScreen
