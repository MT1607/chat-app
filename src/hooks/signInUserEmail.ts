import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const signInuserEmailAndPassword = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email.trim(), password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user.uid;
    })
    .catch((error) => {
      return error.code;
    });
};

export default signInuserEmailAndPassword;
