import React, { Suspense } from 'react';
import Banner from './Home-componensts/Banner';
import Count from './Home-componensts/Count';
import AllFriendsFatch from '../../AllFriends/AllFriendsFatch';

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Banner></Banner>
            <Count></Count>
            <div className="divider mt-4"></div>
            <Suspense fallback={<div className="flex flex-col items-center justify-center min-h-screen w-full gap-4">

                {/* Spinner */}
                <span className="loading loading-spinner loading-lg text-primary scale-150"></span>

                {/* Loading text */}
                <p className="text-sm text-gray-500 animate-pulse">
                    Loading friends...
                </p>

            </div>}>
                <AllFriendsFatch></AllFriendsFatch>
            </Suspense>
        </div>
    );
};

export default Home;