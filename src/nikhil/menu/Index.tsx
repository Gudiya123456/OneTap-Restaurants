import { url } from 'inspector';
import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbRefresh } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import Dropdown from '../../components/Dropdown';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrDocumentCsv } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import IconTrashLines from '../../components/Icon/IconTrashLines';
import IconEdit from '../../components/Icon/IconEdit';
import IconNotes from '../../components/Icon/IconNotes';
import { FaTrash } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Item from './Item/Index';
import Variant from './variant/Index';
import Addon from './addon/Index';
import Category from './category/Index';
import { RiHome4Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export default function Index() {


    const [page, setPage] = useState('item');

    return (
        <div>
            <div className='bg-[#3b3f5c] flex h-[50px] justify-between px-3 items-center bg-white border-b'>
                <div>
                    <ol className="flex items-center text-gray-500 font-semibold dark:text-white-dark">
                        <li>
                            <button className="flex hover:text-gray-500/70 dark:hover:text-white-dark/70">
                                <RiHome4Line size={20} className='m-auto' color='gray' />
                            </button>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='gray/50' />
                        </li>
                        <li className="">
                            <a href='#' className='breadcrumbs-text'>Menu Management</a>
                        </li>
                        {/* <li className="before:content-[''] before:px-1.5">
                            <button className="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">UI Kit</button>
                        </li> */}
                    </ol>
                </div>
                <div>
                    <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                </div>
            </div>
            <div className='bg-secondary/20 font-extrabold h-[40px] flex justify-around'>
                <button className={page == "item" ? 'btn shadow btn-sm btn-secondary px-8' : ''} onClick={() => setPage('item')}>Items</button>
                <button className={page == "category" ? 'btn shadow btn-sm btn-secondary px-8' : ''} onClick={() => setPage('category')}>Categories</button>
                <button className={page == "variant" ? 'btn shadow btn-sm btn-secondary px-8' : ''} onClick={() => setPage('variant')}>Variants</button>
                <button className={page == "addon" ? 'btn shadow btn-sm btn-secondary px-8' : ''} onClick={() => setPage('addon')}>Addons</button>
            </div>

            {page == "item" ? <Item /> :
                page == "category" ? <Category /> :
                    page == "variant" ? <Variant /> :
                        page == "addon" ? <Addon /> : ''}
        </div>
    )
}
