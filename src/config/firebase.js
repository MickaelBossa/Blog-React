import { initializeApp } from "firebase/app";

let apiKey = process.env.REACT_APP_API_KEY;
let authDomain = process.env.REACT_APP_AUTH_DOMAIN;
let databaseURL = process.env.REACT_APP_DATA_BASE_URL;
let projectId = process.env.REACT_APP_PROJECT_ID;
let storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
let messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
let appId = process.env.REACT_APP_APP_ID;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
  };
  
  // Initialize Firebase
  const fire = initializeApp(firebaseConfig);

  export default fire;