import firebase from 'firebase'
import Vue from 'vue'

let config = {
  apiKey: 'AIzaSyA4tAry8J07Ti704Q7_TMDxDGK9MHCrvLw',
  authDomain: 'rest-my-case-ppp.firebaseapp.com',
  databaseURL: 'https://rest-my-case-ppp.firebaseio.com',
  projectId: 'rest-my-case-ppp',
  storageBucket: 'rest-my-case-ppp.appspot.com',
  messagingSenderId: '796166403176'
}

let app = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()

let db = app.database()

export default db
