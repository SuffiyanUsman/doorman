import { initializeApp } from 'firebase/app';
import {getFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAwJo8icO7X3BhRBkJTEBp-1mS9GNynyFI",
    authDomain: "thedoorman-e4d3d.firebaseapp.com",
    projectId: "thedoorman-e4d3d",
    storageBucket: "thedoorman-e4d3d.appspot.com",
    messagingSenderId: "632580762351",
    appId: "1:632580762351:web:29b17298d281741614891a"
  };

  const fire = initializeApp(firebaseConfig);
  const db = getFirestore(fire);
  const auth = getAuth(fire);

  export {db,auth}