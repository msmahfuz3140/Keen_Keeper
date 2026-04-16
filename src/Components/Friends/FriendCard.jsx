
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {

    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend

    console.log();


    return (
        <Link
         href={`/friendDetails/${id}`}

        className=" p-4">
            {/* Main Card Container */}
            <div 

            className="bg-white w-full rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col items-center hover:shadow-xl transition duration-150 cursor-pointer">

                {/* Profile Image Wrapper */}
                <div className="h-32 w-32 rounded-full  mb-6 relative">
                    <Image
                        fill
                        src={picture}
                        alt={name}
                        className='object-cover rounded-full'
                    ></Image>
                </div>

                {/* Name */}
                <h2 className="text-[#2D3748] text-2xl font-bold mb-1">
                    {name}
                </h2>

                {/* Timestamp */}
                <span className="text-[#718096] text-sm mb-4">
                    {days_since_contact}d ago
                </span>

                {/* Badges Container */}
                <div className="flex flex-col gap-3 items-center">
                    {/* Family Tag */}
                    <div className='flex gap-1 '>
                        {
                            tags.map((tag, ind) =>
                                <div key={ind}><p className="bg-[#D1FAE5] text-[#065F46] px-2 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                                    {tag}
                                </p> </div>)
                        }
                    </div>


                    {/* Overdue Tag */}
                    <span className={` text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider ${status === 'almost due' ? 'bg-[#EFAD44]' : status === 'overdue' ? 'bg-red-600' : status === 'on-track' ? 'bg-green-800' : ''}`}>
                        {
                            status
                        }
                    </span>
                </div>

            </div>
        </Link>
    );
};

export default FriendCard;