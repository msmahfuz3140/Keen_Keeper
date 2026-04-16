import CallBtn from '@/Components/TimlineButton/CallBtn';
import TextBtn from '@/Components/TimlineButton/TextBtn';
import VideoBtn from '@/Components/TimlineButton/VideoBtn';
import { Archive, BellDot, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata = {
  title: "Details",
};


const page = async ({ params }) => {
    const { id } = await params


    const dataPromise = async () => {
        const res = await fetch('https://keen-keeper-mu.vercel.app/friends.json', {
            cache: 'no-store'
        })
        const data = await res.json()
        return data
    }
    const friends = await dataPromise()
    const matchedFriend = friends.find(frnd => frnd.id === Number(id))

    if (!matchedFriend) {
        notFound()
    }

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = matchedFriend
    return (
        <div className='bg-[#F8FAFC]  my-8 py-10'>
            <div className='max-w-5xl grid mx-auto md:grid-cols-12 gap-4 p-4'>
                <div className='md:col-span-4 '>
                    <div className=" flex flex-col gap-1">
                        {/* Main Card Container */}
                        <div
                            className="bg-white w-full rounded-md shadow-sm border border-gray-200 p-4 flex flex-col items-center hover:shadow-xl transition duration-150 cursor-pointer">

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
                            {/* Badges Container */}
                            <div className="flex flex-col gap-3 items-center">
                                <span className={` text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider ${status === 'almost due' ? 'bg-[#EFAD44]' : status === 'overdue' ? 'bg-red-600' : status === 'on-track' ? 'bg-green-800' : ''}`}>
                                    {
                                        status
                                    }
                                </span>
                                {/* Family Tag */}
                                <div className='flex gap-1 '>
                                    {
                                        tags.map((tag, ind) =>
                                            <div key={ind}><p className="bg-[#D1FAE5] text-[#065F46] px-2 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                                                {tag}
                                            </p> </div>)
                                    }
                                </div>
                                <div>
                                    <p className='italic text-gray-500 text-center'>{`"${bio}"`}</p>
                                    <p className='italic text-gray-500 text-center'> Email: {email} </p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center flex flex-col gap-1'>
                            <div className='flex items-center gap-1 justify-center py-2 px-1 bg-white rounded-md border border-gray-200 shadow-md text-gray-600'><BellDot size={18} /> <p>Snooze 2 weeks</p></div>
                            <div className='flex items-center gap-1 justify-center py-2 px-1 bg-white rounded-md border border-gray-200 shadow-md text-gray-600'> <Archive size={18} /><p>Snooze 2 weeks</p></div>
                            <div className='flex items-center gap-1 justify-center py-2 px-1 bg-white rounded-md border border-gray-200 text-red-600 shadow-md '><Trash2 size={18} /><p>Snooze 2 weeks</p></div>
                        </div>
                    </div>
                </div>
                {/* ------------------ */}
                <div className='md:col-span-8 space-y-4'>
                    <div className='grid md:grid-cols-3 gap-3'>
                        <div className='text-center py-8 bg-white rounded-md shadow-md border-gray-200 border '>
                            <h1 className='font-bold text-3xl text-green-950'>{days_since_contact}</h1>
                            <p className='text-gray-500 text-xl'>Days since contacts</p>
                        </div>
                        <div className='text-center py-8 bg-white rounded-md shadow-md border-gray-200 border '>
                            <h1 className='font-bold text-3xl text-green-950'>{goal}</h1>
                            <p className='text-gray-500 text-xl'>Goal(Days)</p>
                        </div>
                        <div className='text-center py-8 bg-white rounded-md shadow-md border-gray-200 border '>
                            <h1 className='font-bold text-3xl text-green-950'>{next_due_date}</h1>
                            <p className='text-gray-500 text-xl'>Next Due</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 bg-white p-4 border border-gray-200 rounded-md shadow-md'>
                        <div>
                            <div className='flex justify-between'>
                                <h1 className='font-bold text-lg text-green-900'> Relationship Goal</h1>
                                <button className='py-1 px-3 border border-gray-200 rounded-md'>Edit</button>
                            </div>
                            <p className='text-gray-500 text-md'>Connect every <span className='text-xl font-bold text-green-900'>30 days</span></p>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 bg-white p-4 border border-gray-200 rounded-md shadow-md min-h-fit space-y-5'>
                        <h1 className='text-lg font-bold text-green-900'>Quick Check-In</h1>
                        <div className='grid md:grid-cols-3  p-4 border border-gray-200 rounded-md shadow-md gap-2'>
                            <CallBtn matchedFriend={matchedFriend} />
                            <TextBtn matchedFriend={matchedFriend} />
                            <VideoBtn matchedFriend={matchedFriend} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;