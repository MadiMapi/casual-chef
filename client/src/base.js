import firebase from "firebase";
import 'firebase/auth';

// const apiKey = `${process.env.REACT_APP_FIREBASE_KEY}`;
const authDomain = `${process.env.REACT_APP_FIREBASE_DOMAIN}`;
const databaseURL = `${process.env.REACT_APP_FIREBASE_DATABASE}`;
const projectId = `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`;
const storageBucket = `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`;
const messagingSenderId = `${process.env.REACT_APP_FIREBASE_SENDER_ID}`;

const config = {
  apiKey: "AIzaSyCo9e73vLzK8Xb5Ar3JD4VsfCUq - balC34",
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
};

const fire = firebase.initializeApp(config);
const auth = firebase.auth();
export {
  fire,
  auth, 
  config
}
