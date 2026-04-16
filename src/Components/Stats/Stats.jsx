'use client'
    ;

import useFriends from "@/Hooks/useFriends";

const Stats = () => {
    const { friends } = useFriends()

    const onTrack = friends.filter(item => item.status === 'on-track')
    const almostDue = friends.filter(item => item.status === 'almost due')



    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto">

            <div className=" shadow-sm border border-gray-200  rounded-xl  p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">{friends.length}</h2>
                <p className="text-gray-600 mt-2">Total Friends</p>
            </div>

            <div className=" shadow-sm border border-gray-200 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">{onTrack.length}</h2>
                <p className="text-gray-600 mt-2">On Track</p>
            </div>

            <div className=" shadow-sm border border-gray-200 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">{almostDue.length}</h2>
                <p className="text-gray-600 mt-2">Need Attention</p>
            </div>

            <div className=" shadow-sm border border-gray-200 rounded-xl p-6 text-center">
                <h2 className="text-3xl font-bold text-green-900">12</h2>
                <p className="text-gray-600 mt-2">Interactions This Month</p>
            </div>

        </div>

    )
};

export default Stats;