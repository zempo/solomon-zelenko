import firebase from 'firebase/app'
import 'firebase/firestore'

// config
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.APP_NAME}.firebaseapp.com`,
    databaseURL: `https://${process.env.APP_NAME}.firebaseio.com`,
    projectId: `${process.env.APP_NAME}`,
    storageBucket: `${process.env.APP_NAME}.appspot.com`,
    messagingSenderId: `${process.env.MSG_ID}`,
    appId: `${process.env.APP_ID}`,
    measurementId: `${process.env.MEASUREMENT_ID}`
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 
  export const db = firebase.firestore();  