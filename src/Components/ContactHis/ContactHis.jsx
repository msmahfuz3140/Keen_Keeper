

import Image from 'next/image';
import React from 'react';

const ContactHis = ({ item }) => {
    console.log(item);

    return (
        <div className=''>
            <div className='flex items-center gap-3 border border-gray-200 p-4 rounded-md shadow-2xs mb-2'>
                {item.type === 'Call' && <Image src={'/Icons/call.png'} alt='Call' height={32} width={30}></Image>}
                {item.type === 'Text' && <Image src={'/Icons/text.png'} alt='Call' height={32} width={30}></Image>}
                {item.type === 'Video' && <Image src={'/Icons/video.png'} alt='Call' height={32} width={30}></Image>}
                <div>
                    <p> <span className='font-bold text-xl text-gray-600'>{item.type} </span>with  {item.name}</p>
                    <p className='font-bold text-gray-500'> {item.time} </p>
                </div>
            </div>
        </div>
    );
};

export default ContactHis;