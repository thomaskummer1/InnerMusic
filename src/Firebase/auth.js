import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updatePassword, sendEmailVerification } from 'firebase/auth';
import { auth } from './FirebaseInit.ts';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    // .then((response) => {
    //     sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    // });
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    // .then((response) => {
    //     sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    // });
};

export const doSignOut = () => {
    return signOut(auth);
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordUpdate = (password) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser);
}