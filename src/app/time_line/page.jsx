"use client"
import ContactHis from '@/Components/ContactHis/ContactHis';
import NoTimeline from '@/Components/NoTimeLine/NoTimeLine';
import { friendContext } from '@/Context/ContextProvider';
import React, { useContext, useState } from 'react';




const TimeLine = () => {
    const { friendData } = useContext(friendContext)
    const [data, setData] = useState(friendData)
    const handle = (e) => {

        if (e === 'All') {
            setData(friendData)
        } else {
            const filteredData = friendData.filter(item => item.type === e)
            setData(filteredData)
        }


    }

    return (
        <div className='container mx-auto md:mt-10 '>
            <h1 className='text-4xl font-bold text-green-950 my-4'> Timeline </h1>
            <fieldset className="fieldset my-5 mt-8">
                <select defaultValue="Filter Timeline" onChange={(e) => handle(e.target.value)} className="select">
                    <option disabled={true} >Filter Timeline</option>
                    <option >All</option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>
            </fieldset>
            <div className='space-y-2'>
                {
                    data.length === 0 ? <NoTimeline /> : data.map((item, ind) => <ContactHis key={ind} item={item}></ContactHis>)
                }
            </div>
        </div>
    );
};

export default TimeLine;