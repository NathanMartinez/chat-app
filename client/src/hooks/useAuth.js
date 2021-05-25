import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const useAuth = (email, password) => {
  const [user, setUser] = useState(null);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      setUser(user);
    })
    .catch((error) => {
      // let errorCode = error.code;
      let errorMessage = error.message;
      setUser(errorMessage);
    });

  return user;
};

export default useAuth;
