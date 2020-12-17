import firebaseDB from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDW8atDnZctKEuoR_0VgWCYex-sCLBVqD4",
    authDomain: "webmobilehybridapp.firebaseapp.com",
    databaseURL: "https://webmobilehybridapp.firebaseio.com",
    projectId: "webmobilehybridapp",
    storageBucket: "webmobilehybridapp.appspot.com",
    messagingSenderId: "1065788689805",
    appId: "1:1065788689805:web:beb352a7c7149321b801c4",
    measurementId: "G-RS5D3BHHJ4"
};

const firebase = firebaseDB.initializeApp(firebaseConfig);

export default firebase