import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('Users').doc('DKTzA7UjZIr6rKwRcCLP').collection('cartItems')