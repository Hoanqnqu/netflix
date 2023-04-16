// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDt3nhATGJTaKPayUDPQaeR5OyMzXd-zok',
    authDomain: 'netflix-12ba9.firebaseapp.com',
    projectId: 'netflix-12ba9',
    storageBucket: 'netflix-12ba9.appspot.com',
    messagingSenderId: '758030125722',
    appId: '1:758030125722:web:13f025794af51f8b4a2d23',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
