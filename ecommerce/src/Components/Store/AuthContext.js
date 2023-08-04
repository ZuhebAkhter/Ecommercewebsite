import React, { createContext, useState } from "react";

const AuthContext=createContext({
    token:'',
    isLogged:false,
    login:(token)=>{},
    logout:()=>{}
})

 export const AuthContextProvider=(props)=>{
    const initailToken=localStorage.getItem('token')
    const [token,setToken]=useState(initailToken);

    const UserisLoggedIn= !!token;

    const loginhandler=(token)=>{
        localStorage.setItem('token',token)
       setToken(token)
    }
    const logouthandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
    }

    const contextAuth={
        token:token,
        isLogged:UserisLoggedIn,
        login:loginhandler,
        logout:logouthandler
    }


    return(
        <AuthContext.Provider value={contextAuth}>
           {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;