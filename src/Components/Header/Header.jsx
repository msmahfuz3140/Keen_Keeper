"use client"
import { ChartLine, Clock4, House } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
    const pathName = usePathname()
    // console.log(pathName);
    const nav = <div className='md:flex space-y-1 gap-2 font-bold'>
        <li><Link href={'/'} className={` ${pathName === '/' ? 'bg-green-800 text-white' : ''}`}> <House /> Home</Link></li>
        <li><Link href={'/time_line'} className={` ${pathName === '/time_line' ? 'bg-green-800 text-white' : ''}`}> <Clock4 /> Time Line</Link></li>
        <li><Link href={'/stats'} className={` ${pathName === '/stats' ? 'bg-green-800 text-white' : ''}`}> <ChartLine /> Stats</Link></li>
    </div>
    return (
        <div className=''>
            <div className="navbar max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#64748B]">
                            {nav}
                        </ul>
                    </div>

                    <Link href={'/'}>  <Image src={'/images/logo.png'} alt='logo keen keeper' height={100} width={200}></Image></Link>

                </div>
                <div className="navbar-end hidden md:flex text-[#64748B]" >
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;