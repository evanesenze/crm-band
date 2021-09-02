import React from 'react';
import Rebase from "re-base";
import 'firebase/database';
import firebase from "firebase/app";


const config = {
    apiKey: "AIzaSyDhlva29mYISq9zevElQ5KYrSr1virO9Gg",
    authDomain: "crm-band.firebaseapp.com",
    databaseURL: "https://crm-band-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "crm-band",
    storageBucket: "crm-band.appspot.com",
    messagingSenderId: "343300697046",
    appId: "1:343300697046:web:e69be17e37fdfb42ecd277"
};

// const delaymessage_config = {
//     apiKey: "AIzaSyBS8f_DO_aheUdZS79qS-H5unVKyZt28Jc",
//     authDomain: "delaymessage-3c2a9.firebaseapp.com",
//     databaseURL: "https://delaymessage-3c2a9-default-rtdb.firebaseio.com",
//     projectId: "delaymessage-3c2a9",
//     storageBucket: "delaymessage-3c2a9.appspot.com",
//     messagingSenderId: "601508113080",
//     appId: "1:601508113080:web:74fc961c2cda5be52ba24d",
//     measurementId: "G-993QTSW1XJ"
// };


const firebaseApp = firebase.initializeApp(config);
// const firebaseApp_2 = firebase.initializeApp(delaymessage_config, 'delay_message');
const database = firebaseApp.database();
// const database_delay = firebaseApp_2.database();
const base = Rebase.createClass(database);

export {firebaseApp, database};

export default base;