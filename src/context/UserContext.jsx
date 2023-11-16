import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const initialState = JSON.parse(localStorage.getItem("user")) || false;

export default function UserContextProvider({children}){

    const [user, setUser] = useState(initialState);
    
    const logoutUser = () => {
        localStorage.setItem("user", JSON.stringify(false));
        setUser(false);
    }
    
    const loginUser = () => {
        localStorage.setItem("user", JSON.stringify(true))
        setUser(true)
    }

    return(
        <UserContext.Provider value={{user, setUser, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);