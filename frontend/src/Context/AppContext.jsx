import React, { useState } from "react";

export const AuthContext = React.createContext();

function AppContextProvider({children}) {
const [isAuth,setIsAuth]=useState(false)

const [token,setToken]=useState(null)
const toggle=()=>{
    setIsAuth(!isAuth)
}
const loginUser=(token)=>{
   
    setToken(token)
    setIsAuth(true)
}
const logoutUser=()=>{
   
    setToken(null)
    setIsAuth(false)
}

    return(
    <AuthContext.Provider value={{isAuth,toggle,token,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
    )

}

export default AppContextProvider;
