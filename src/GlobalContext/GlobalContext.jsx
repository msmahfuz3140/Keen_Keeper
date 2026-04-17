import React, { createContext, use, useState } from 'react';
export const AllContext = createContext()
const allFriendsPromise = fetch('/allFriends.json').then(res =>res.json())

const GlobalContext = ({children}) => {
    const AllFriendsArray = use(allFriendsPromise)

    const [call , setCall] =useState([])
    const [text , setText] =useState([])
    const [videoCall , setVideoCall] =useState([])
    const [allInterection , setAllInterection] = useState([])
    const apple =[1,2]

    const allState = {
            call ,
            setCall ,
            text ,
            setText ,
            videoCall,
            setVideoCall ,
            AllFriendsArray ,
            allInterection ,
            setAllInterection ,
            apple
    }

    return (
        <AllContext.Provider value={allState}>
            {children}
        </AllContext.Provider>
    );
};

export default GlobalContext;