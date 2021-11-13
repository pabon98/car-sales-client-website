import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../../components/Firebase/Firebase.init"

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({})
  const [isLodaing,setIsLoading]=useState(true)

    const auth=getAuth();
    const signInUsingGoogle=()=>{
        setIsLoading(true)
   const googleProvider = new GoogleAuthProvider()
      signInWithPopup(auth,googleProvider)
      .then(result=>{
          setUser(result.user)
      })
      .finally(()=>{setIsLoading(false)})
    }
useEffect(()=>{
  const unsubcribed=  onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)

        }
        else{
            setUser({})
        }
        setIsLoading(false)
    });
    return()=>unsubcribed;

},[auth])

    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{

        })
        .finally(()=>setIsLoading(false))
    }
    return{
        user,
        isLodaing,
        signInUsingGoogle,
        logOut
    }

}


export default useFirebase;