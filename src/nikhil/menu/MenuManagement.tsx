import { url } from 'inspector';
import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
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



export default function MenuManagement() {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <div>

            <div className='bg-[#3b3f5c] flex h-[50px] justify-between px-3 items-center bg-white border-b'>
                <div>
                    <ol className="flex items-center text-gray-500 font-semibold dark:text-white-dark">
                        <li>
                            <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                                <AiFillHome size={18} />
                            </button>
                        </li>
                        <li className="before:content-[''] before:px-1.5">
                            <button type="button">Menu</button>
                        </li>
                        {/* <li className="before:content-[''] before:px-1.5">
                            <button className="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">Running Orders</button>
                        </li> */}
                    </ol>
                </div>

                <div>
                    <button className='flex items-center gap-1'><IoIosArrowBack /> <span className='font-semibold'>Back</span></button>
                </div>
            </div>

            <div className='bg-secondary/20 font-extrabold h-[40px] flex justify-around'>
                <button>Items</button>
                <button className='btn shadow btn-sm btn-secondary px-8'>Categories</button>
                <button>Variants</button>
                <button>Addons</button>
            </div>


        </div>
    )
}
