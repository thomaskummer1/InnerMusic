import { getApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyD9Hq1LqOwthGsH82LdmcAMz6qsIKlZihc",
    authDomain: "inner-music.firebaseapp.com",
    projectId: "inner-music",
    storageBucket: "inner-music.appspot.com",
    messagingSenderId: "548389261148",
    appId: "1:548389261148:web:2f8dba61d860f644fdfb99",
    measurementId: "G-HW6NSJGJFE"
  };

  export const handleLogin = async (userName: string, pass: string): Promise<boolean> => {
    const db = getFirestore(getApp());
    const docRef = doc(db, 'users', userName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if (docSnap.data().password === pass) {
        return true;
      } else {
        return false;
      }
    } else {
      await setDoc(docRef, {
        userName: userName,
        password: pass,
      });
      return true;
    }
  };