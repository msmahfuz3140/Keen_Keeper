"use client"
import { friendContext } from '@/Context/ContextProvider';
import { PhoneCall } from 'lucide-react';
import React, { useContext } from 'react';

const CallBtn = ({ matchedFriend }) => {
    const { handle } = useContext(friendContext)


    return (

        <div
            onClick={() => handle({ data: matchedFriend, type: 'Call' })}
            className='text-center border border-gray-200  bg-white rounded-md py-2 flex justify-center items-center flex-col gap-2 cursor-pointer'>
            <PhoneCall />
            <p className='text-gray-500 text-xl'>Call</p>
        </div>

    );
};

export default CallBtn;