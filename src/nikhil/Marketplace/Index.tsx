import { url } from 'inspector';
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";







import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { RiHome4Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import MarketplaceDrawer from './MarketplaceDrawer';



export default function Index() {

    const accountingTools = [
        { title: 'Zomato', src: '/assets/marketplace/1.png', link: '/market-place/zomato' },
        { title: 'Swiggy', src: '/assets/marketplace/2.png', link: '/market-place/swiggy' },
        { title: "Domino's", src: '/assets/marketplace/3.png', link: '#' },
        { title: 'Uber Eats', src: '/assets/marketplace/4.png', link: '#' },
        { title: 'Eatsure', src: '/assets/marketplace/5.png', link: '#' },

    ];


    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <div>

            <MarketplaceDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
            <div className='bg-[#3b3f5c] flex h-[50px] justify-between px-3 items-center bg-white border-b'>
                <div>
                    <ol className="flex items-center text-gray-500 font-semibold dark:text-white-dark">
                        <li>
                            <button className="flex hover:text-gray-500/70 dark:hover:text-white-dark/70">
                                <RiHome4Line size={20} className='m-auto' color='gray' />
                            </button>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='gray' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>Market Place</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='black' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>Integration</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
                {accountingTools.map((tool, index) => (

                    <div className="border bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                        <img src={tool.src} alt={tool.title} className="mb-4 h-20 w-20 object-contain" />
                        <h3 className="text-lg font-medium mb-2">{tool.title}</h3>
                        <NavLink to={tool.link} className="text-yellow-500">Integrat Now &gt;</NavLink>


                    </div>
                ))}
            </div>

        </div>
    )
}
