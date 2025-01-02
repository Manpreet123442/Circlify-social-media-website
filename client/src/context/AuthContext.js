import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {
    const[currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    async function login(inputs) {
        const response = await axios.post("http://localhost:8080/login", inputs, {
            withCredentials : true
        });
        console.log(response.data);
        setCurrentUser(response.data);
    }

    useEffect(()=> {
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);

    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}