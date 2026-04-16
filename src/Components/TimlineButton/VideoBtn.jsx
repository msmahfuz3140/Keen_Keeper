
'use client'
import { friendContext } from '@/Context/ContextProvider';
import { Video } from 'lucide-react';
import React, { useContext } from 'react';

const VideoBtn = ({ matchedFriend }) => {
    const { handle } = useContext(friendContext)


    return (
        <div
            onClick={() => handle({ data: matchedFriend, type: 'Video' })}
            className='text-center border border-gray-200  bg-white rounded-md py-2 flex justify-center items-center flex-col gap-2 cursor-pointer'>
            <Video />
            <p className='text-gray-500 text-xl'>Video</p>
        </div>
    );
};

export default VideoBtn;