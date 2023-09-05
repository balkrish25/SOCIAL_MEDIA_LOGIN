import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNB-2sRFvbBKiIV71EhU-NTlsDG6ikFUQ",
  authDomain: "react-firebase-auth-8d33c.firebaseapp.com",
  projectId: "react-firebase-auth-8d33c",
  storageBucket: "react-firebase-auth-8d33c.appspot.com",
  messagingSenderId: "887733898712",
  appId: "1:887733898712:web:bbf4a5cf4ffeb2d0c376ad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const microsoftAuthProvider = new firebase.auth.OAuthProvider("microsoft.com");

export {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
  githubProvider,
  microsoftAuthProvider,
};
