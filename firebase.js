import * as firebase from 'firebase/compat';
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBo57-LSW4_qcSKwTQsVMygnq3u9JFIagM",
    authDomain: "gifted-chat-39bd5.firebaseapp.com",
    projectId: "gifted-chat-39bd5",
    storageBucket: "gifted-chat-39bd5.appspot.com",
    messagingSenderId: "537305525663",
    appId: "1:537305525663:web:eb3c695385612008f961aa"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth}; 