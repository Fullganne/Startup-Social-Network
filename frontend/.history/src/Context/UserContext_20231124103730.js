// UserContext.js
import { createContext, useEffect, useState } from "react";
import userService from "../services/userService";

export const UserContext = createContext({});

export const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        // Update userData when localStorage changes
        const handleStorageChange = () => {
            const storedUser = localStorage.getItem("user");
            setUserData(storedUser ? JSON.parse(storedUser) : null);
        };

        window.addEventListener("storage", handleStorageChange);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []); // The empty dependency array ensures that this effect runs only once

    const [userNotId, setUserNotId] = useState([]);
    const handleFetchUsers = async () => {
        console.log("handleFetchUsers");
        const tmp = await userService.getById(userData.id);
        console.log(tmp);

        // setDataPost(tmp.data.post);
        setUserData(tmp.data);
    };

    const handleFetchUserNotThisId = async () => {
        const tmp = await userService.getUserNotId(userData.id);
        console.log(userData.id);

        // setDataPost(tmp.data.post);
        setUserNotId(tmp.data);
    };
    useEffect(() => {
        handleFetchUserNotThisId();
    }, []);
    return (
        <UserContext.Provider value={{ userData, handleFetchUsers, userNotId }}>
            {children}
        </UserContext.Provider>
    );
};
