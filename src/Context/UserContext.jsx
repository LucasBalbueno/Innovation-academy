import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [scheduler, setScheduler] = useState({})


    return <UserContext.Provider value={{user, setUser, scheduler, setScheduler }}>{children}</UserContext.Provider>
}