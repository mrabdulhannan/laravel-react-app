import { createContext, useState } from "react";

const StateContext = createContext({
    user:null,
    token:null
})

export const ContextProvider = ({children})=>{
    const [user, setUser] = useState({});
    const [token, __setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const setToken = (token)=>{
        __setToken(token);
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}

        </StateContext.Provider>
    )
}


