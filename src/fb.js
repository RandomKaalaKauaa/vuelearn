import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBt_elFfJcWiyJVdNZD3Zn3WEfFP-KJsmM",
    authDomain: "dick-fb1ac.firebaseapp.com",
    databaseURL: "https://dick-fb1ac.firebaseio.com",
    projectId: "dick-fb1ac",
    storageBucket: "dick-fb1ac.appspot.com",
    messagingSenderId: "727202206469"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  db.settings({timestampsInSnapshots:true});

  export default db
