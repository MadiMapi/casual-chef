import {auth} from "./firebase";

// Sign up users
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign in users
export const doSignInWithEmailAndPassword = (email, password) => 
    auth.signInWithEmailAndPassword(email, password);

//Sign out
export const doSignOut = () => auth.signOut();

//Password reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

//Password change
export const doPasswordUpdate = password => auth.currentUser.updatePassword(password);