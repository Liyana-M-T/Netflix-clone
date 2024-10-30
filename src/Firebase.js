
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBsxH9CrtiiWsGy-Zv8PvYfcIcGQKNWnGY",
  authDomain: "netflix-clone-561fa.firebaseapp.com",
  projectId: "netflix-clone-561fa",
  storageBucket: "netflix-clone-561fa.appspot.com",
  messagingSenderId: "709138898536",
  appId: "1:709138898536:web:1fbd68145b16e037d8a5dd",
  measurementId: "G-ZMM7768CC6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);

const signup= async(name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password)
       const user= res.user;
       await addDoc(collection(db,'user'),{
        uid:user.uid,
        name,
        authProvider:'local',
        email,
       });
    } catch (error) {
        console.log(error)
        alert(error);
    }
};
const login = async(email,password)=>{
try {
    await signInWithEmailAndPassword(auth,email,password)
} catch (error) {
    console.log(error);
    alert(error);
}
}

const logout = ()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout}