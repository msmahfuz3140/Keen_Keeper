"use client"
import { friendContext } from '@/Context/ContextProvider';
import { MessageSquareMore } from 'lucide-react';
import React, { useContext } from 'react';

const TextBtn = ({ matchedFriend }) => {
    const { handle } = useContext(friendContext)

    return (
        <div
            onClick={() => handle({ data: matchedFriend, type: 'Text' })}
            className='text-center border border-gray-200  bg-white rounded-md py-2 flex justify-center items-center flex-col gap-2 cursor-pointer'>
            <MessageSquareMore />
            <p className='text-gray-500 text-xl'>Text</p>
        </div>
    );
};

export default TextBtn;