import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const [user,setUser]=useState('sylla');

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
  //creation d'un hook personnalise
  export const useUser=()=> useContext(UserContext);