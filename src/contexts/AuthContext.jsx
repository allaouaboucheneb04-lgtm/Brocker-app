import React,{createContext,useContext,useEffect,useState}from'react';
import {auth,db} from '../lib/firebase';
import {onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut}from'firebase/auth';
import {doc,getDoc,setDoc,serverTimestamp}from'firebase/firestore';
const AuthContext=createContext();
export function AuthProvider({children}){const[user,setUser]=useState(null),[profile,setProfile]=useState(null),[loading,setLoading]=useState(true);useEffect(()=>onAuthStateChanged(auth,async u=>{setUser(u);if(u){const ref=doc(db,'users',u.uid);let snap=await getDoc(ref);if(!snap.exists()){await setDoc(ref,{email:u.email,role:'driver',createdAt:serverTimestamp()});snap=await getDoc(ref)}setProfile({id:u.uid,...snap.data()})}else setProfile(null);setLoading(false)}),[]);const login=(e,p)=>signInWithEmailAndPassword(auth,e,p);const register=async(e,p,name='')=>{const c=await createUserWithEmailAndPassword(auth,e,p);await setDoc(doc(db,'users',c.user.uid),{email:e,name,role:'driver',createdAt:serverTimestamp()});return c};return <AuthContext.Provider value={{user,profile,loading,login,register,logout:()=>signOut(auth)}}>{children}</AuthContext.Provider>}
export const useAuth=()=>useContext(AuthContext);
