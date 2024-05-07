import { getApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyD9Hq1LqOwthGsH82LdmcAMz6qsIKlZihc",
    authDomain: "inner-music.firebaseapp.com",
    projectId: "inner-music",
    storageBucket: "inner-music.appspot.com",
    messagingSenderId: "548389261148",
    appId: "1:548389261148:web:2f8dba61d860f644fdfb99",
    measurementId: "G-HW6NSJGJFE"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  // export const handleLogin = async (email: string, pass: string): Promise<boolean> => {
  //   const db = getFirestore(getApp());
  //   const docRef = doc(db, 'users', email);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     if (docSnap.data().password === pass) {
  //       return true;
  //     } 
  //   } 
  //   return false;
  // };

  // export const handleSignUp = async (email: string, userName:string, pass: string): Promise<boolean> => {
  //   const db = getFirestore(getApp());
  //   const docRef = doc(db, 'users', email);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     return false;
  //   } else {
  //     await setDoc(docRef, {
  //       userName: userName,
  //       password: pass,
  //     });
  //     return true;
  //   }
  // }