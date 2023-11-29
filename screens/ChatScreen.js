import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react' 
import { View, Text, TouchableOpacity } from 'react-native'
import {auth} from '../firebase'
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from '@rneui/base';
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = ({navigation}) => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

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
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default ChatScreen
