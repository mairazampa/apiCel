import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVo8pyDsfCioZt9fQiQ_aU1y18x4wys8M",
  authDomain: "tnt-58625.firebaseapp.com",
  databaseURL: "https://tnt-58625-default-rtdb.firebaseio.com",
  projectId: "tnt-58625",
  storageBucket: "tnt-58625.firebasestorage.app",
  messagingSenderId: "167269217952",
  appId: "1:167269217952:web:582e29bfeec3b491dffbc5",
};

const app = initializeApp(firebaseConfig);


export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const database = getDatabase(app);