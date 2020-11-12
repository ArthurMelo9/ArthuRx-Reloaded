import firebase from 'firebase';

try {
    firebase.initializeApp({
        apiKey: "AIzaSyDdF-ZLU77t8PZjThR0IN_iaqHQtHzYUUY",
        authDomain: "patientslogin-6b5f9.firebaseapp.com",
        databaseURL: "https://patientslogin-6b5f9.firebaseio.com",
        projectId: "patientslogin-6b5f9",
        storageBucket: "patientslogin-6b5f9.appspot.com",
        messagingSenderId: "182131579736",
        appId: "1:182131579736:web:4e9b3f71f6e2683654632d"
    })
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error raised', err.stack)
    }

}

const firebaseApp = firebase

export default firebaseApp;