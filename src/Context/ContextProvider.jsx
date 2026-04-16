"use client"
import React, { Children, createContext, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

export const friendContext = createContext()
const ContextProvider = ({ children }) => {
    const [friendData, setFriendData] = useState([])


    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const handle = ({ data, type }) => {
        const newData = {
            ...data,
            type,
            time: formattedDate
        }
        setFriendData([...friendData, newData])
        toast.success(`${type} successful to ${data.name}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
    console.log(friendData);

    const data = {
        friendData,
        setFriendData,
        handle
    }

    return <friendContext.Provider value={data}>
        {children}
    </friendContext.Provider>

};

export default ContextProvider;