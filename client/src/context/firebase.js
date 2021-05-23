import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfeibeHd6T4N8KSGbdtch9aFMEdUULDu8",
  authDomain: "chat-app-45dc6.firebaseapp.com",
  projectId: "chat-app-45dc6",
  storageBucket: "chat-app-45dc6.appspot.com",
  messagingSenderId: "93815186624",
  appId: "1:93815186624:web:e1f5f4ae3c185a02467925",
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);