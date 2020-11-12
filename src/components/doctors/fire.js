import firebase from 'firebase';

try {
    firebase.initializeApp({
        apiKey: "AIzaSyDynVV83kam8tG8z1OEjRN2V-2zUjS2Ci0",
        authDomain: "arthurx-login.firebaseapp.com",
        databaseURL: "https://arthurx-login.firebaseio.com",
        projectId: "arthurx-login",
        storageBucket: "arthurx-login.appspot.com",
        messagingSenderId: "155281522815",
        appId: "1:155281522815:web:74461936c1ef0ce09a3f4a"
    })
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error raised', err.stack)
    }

}

const firebaseApp = firebase

export default firebaseApp;