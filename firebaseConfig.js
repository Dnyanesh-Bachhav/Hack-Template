import { initializeApp } from 'firebase/app';
import {getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCB6UmGsvAY4uH6Gaiz6Vz0gjhhVeWc1B0",
    authDomain: "coinstack-ce1c2.firebaseapp.com",
    projectId: "coinstack-ce1c2",
    storageBucket: "coinstack-ce1c2.appspot.com",
    messagingSenderId: "674721262423",
    appId: "1:674721262423:web:7fe944dc4ef1ff977f6c12",
    measurementId: "G-TVDEJ6GNLL"
};


const app = initializeApp(firebaseConfig);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
export const auth = getAuth(app);
export default app;
