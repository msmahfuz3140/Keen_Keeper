import React from 'react';
import Banner from './Home-componensts/Banner';
import Count from './Home-componensts/Count';
import AllFriendsFatch from '../../AllFriends/AllFriendsFatch';

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Banner></Banner>
            <Count></Count>
              <div className="divider mt-4"></div>
              <AllFriendsFatch></AllFriendsFatch>
        </div>
    );
};

export default Home;