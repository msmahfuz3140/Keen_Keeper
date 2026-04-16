"use client"
import { friendContext } from '@/Context/ContextProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';



const Stats = () => {

    const { friendData } = useContext(friendContext)
    const callFilter = friendData.filter(item => item.type === 'Call')
    const textFilter = friendData.filter(item => item.type === 'Text')
    const videoFilter = friendData.filter(item => item.type === 'Video')

    const chartData = [
        {
            name: 'Call',
            value: callFilter.length,
            fill: '#0088FE'
        },
        {
            name: 'Text',
            value: textFilter.length,
            fill: '#00C49F'
        },
        {
            name: 'Video',
            value: videoFilter.length,
            fill: '#FFBB28'
        }
    ]

    return (
        <div className='py-10 bg-[#F8FAFC]'>
            <div className='max-w-5xl mx-auto '>
                <h1 className='text-3xl font-bold text-green-950 my-5'>Friendship Analytics</h1>
                <div className=' bg-white p-5 border border-gray-200'>
                    <p className='font-semibold'>By Interaction Type</p>
                    <div className='flex justify-center'>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={chartData}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                dataKey="value"
                                name='name'
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Stats;