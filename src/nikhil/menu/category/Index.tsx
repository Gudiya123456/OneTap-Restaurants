import React, { useState } from 'react'
import Category from './category/Index';
import ParentCategory from './parent-category/Index';

import MenuConfigaration from './MenuConfigaration';
import { NavLink } from 'react-router-dom';
import Group from './group/Index';

export default function Index() {

    const [page, setPage] = useState('category');
    return (
        <div>

            <div className='panel m-4'>
                <div className=" items-center justify-between  pt-3 border-b-[1px]">
                    <div className='flex flex-wrap gap-5 font-semibold '>
                        <button onClick={() => setPage('parent')}
                            className={`h-[40px] px-8 ${page == "parent" ? 'text-[#506690] border-b-2 border-b-[#000]' : 'text-[#506690]'} `}>Parent Category</button>
                        <button onClick={() => setPage('category')}
                            className={`h-[40px] px-8 ${page == "category" ? 'text-[#506690] border-b-2 border-b-[#000]' : 'text-[#506690]'} `}>Category</button>
                        <button onClick={() => setPage('group')}
                            className={`h-[40px] px-8 ${page == "group" ? 'text-[#506690] border-b-2 border-b-[#000]' : 'text-[#506690]'} `}>Grouping</button>
                        <button onClick={() => setPage('menu')}
                            className={`h-[40px] px-8 ${page == "menu" ? 'text-[#506690] border-b-2 border-b-[#000]' : 'text-[#506690]'} `}>Menu Configaration</button>
                    </div>
                </div>

                {page == "category" ? <Category />
                    : page == "parent" ? <ParentCategory />
                        : page == "group" ? <Group />
                            : page == "menu" ? <MenuConfigaration />
                                : ''}
            </div>

        </div>
    )
}
