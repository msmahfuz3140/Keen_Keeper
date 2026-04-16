"use client"
import useFriends from '@/Hooks/useFriends';
import FriendCard from './FriendCard';
import Loading from '../Loading/Loading';
import { Search } from 'lucide-react';
import { useState } from 'react';



const Friends = () => {
    const { friends, loading } = useFriends()
    const [search, setSearch] = useState('')
    const searchInput = search?.toLowerCase()
    const filterFrnds = friends.filter(item => item.name.toLowerCase().includes(searchInput))
    console.log(filterFrnds);

    if (loading) return <Loading />
    const searchFrnds = searchInput ? filterFrnds : friends

    return (
        <div className='mt-10 container mx-auto'>
            <div className='md:flex justify-between'>
                <h1 className='text-3xl font-bold my-5 text-green-950'>YOUR FRIENDS</h1>
                <div>
                    <p className='text-lg font-semibold text-gray-500'>Search </p>
                    <label className="input">
                        <Search />
                        <input
                            onChange={e => setSearch(e.target.value)}
                            type="search" required placeholder="Search your friends" />
                    </label>
                </div>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4'>
                {
                    searchFrnds.map(friend => <FriendCard key={friend.id} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;