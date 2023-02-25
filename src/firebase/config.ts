import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAp8Rsx_ZkhG5VWLaFXm3n8rXp4yolrHfc',
  authDomain: 'vue-firebase-5dcb6.firebaseapp.com',
  projectId: 'vue-firebase-5dcb6',
  storageBucket: 'vue-firebase-5dcb6.appspot.com',
  messagingSenderId: '1010356139519',
  appId: '1:1010356139519:web:6e1d2072327e56c9cf63ca',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
