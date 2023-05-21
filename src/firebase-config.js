import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDPT2avKSK0WTKiy0vRerTKEERQ_2B8x-U',
  authDomain: 'crud-react-5938b.firebaseapp.com',
  projectId: 'crud-react-5938b',
  storageBucket: 'crud-react-5938b.appspot.com',
  messagingSenderId: '1027597826284',
  appId: '1:1027597826284:web:e3f0c999512cf578200dc9',
  measurementId: 'G-VDYZ5TNB1T',
}
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
