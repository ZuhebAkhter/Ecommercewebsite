import React, { createContext, useState } from "react";

const AuthContext=createContext({
    token:'',
    isLogged:false,
    login:(token)=>{},
    logout:()=>{},
    email:'',
    UserEmail:'',
    items1:[],
    totalamount1:0,
    Quantity:0

})

 export const AuthContextProvider=(props)=>{
    const initailToken=localStorage.getItem('token')
    const [token,setToken]=useState(initailToken);
   const [email,setEmail]=useState(null)
    const UserisLoggedIn= !!token;
    

    const loginhandler=(token)=>{
        localStorage.setItem('token',token)
       setToken(token)
    }
    const logouthandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
    }
    const gettingUsermail=(email)=>{
        setEmail(email)
    }

    const contextAuth={
        token:token,
        isLogged:UserisLoggedIn,
        login:loginhandler,
        logout:logouthandler,
        email:gettingUsermail,
        UserEmail:email,
        items1:[]
    }


    return(
        <AuthContext.Provider value={contextAuth}>
           {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;