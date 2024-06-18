import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { ReactSortable } from 'react-sortablejs';
import { MdDragIndicator } from "react-icons/md";
export default function CategoryDrawer({ showDrawer, setShowDrawer }: any) {
    const items1 = [
        {
            id: 1,
            text: 'Need to be approved',
            name: 'Kelly Young',
        },
        {
            id: 2,
            text: 'Meeting with client',
            name: 'Andy King',
        },
        {
            id: 3,
            text: 'Project Detail',
            name: 'Judy Holmes',
        },
        {
            id: 4,
            text: 'Edited Post Apporval',
            name: 'Vincent Carpenter',
        },
        {
            id: 5,
            text: 'Project Lead Pickup',
            name: 'Mary McDonald',
        },
    ];
    const [handler1, setHandler1] = useState(items1);
    return (
        <div>
            <div className={`${(showDrawer && '!block') || ''} fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]`} ></div>

            <nav
                className={`${(showDrawer && 'ltr:!right-0 rtl:!left-0') || ''
                    } bg-white fixed ltr:-right-[400px] rtl:-left-[400px] top-0 bottom-0 w-full max-w-[400px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-1000 z-[51] dark:bg-black p-4`}
            >



                <div className="flex flex-col h-screen overflow-hidden">
                    <div className="w-full  border-b border-grey p-4">
                        <button type="button" className="px-4 py-4 absolute top-0 ltr:right-0 rtl:left-0 opacity-30 hover:opacity-100 dark:text-white" onClick={() => setShowDrawer(false)}>
                            <IoCloseSharp className=" w-5 h-5" />
                        </button>
                        <h4 className="mb-1 dark:text-white font-bold">Categories</h4>
                        <select name="" id="" className='form-select'>
                            <option value="">One</option>
                            <option value="">One</option>
                        </select>
                    </div>
                    <section className="flex-1 overflow-y-auto overflow-x-hidden perfect-scrollbar mt-5">
                        <ul >
                            <ReactSortable list={handler1} setList={setHandler1} animation={200} handle=".handle" group="handler" ghostClass="gu-transit">
                                {handler1.map((item) => {
                                    return (
                                        <li key={item.id} className=" cursor-grab">
                                            <div className="bg-white dark:bg-[#1b2e4b]  py-1 border-b border-white-light dark:border-dark px-2.5  flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center">

                                                <div className="flex flex-row  justify-between items-center flex-1 text-center md:text-left">
                                                    <div className="font-semibold md:my-0 my-3">
                                                        <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                    </div>
                                                    <div className="text-white-dark">
                                                        <span className="handle px-2 ltr:mr-2 rtl:ml-2  dark:bg-black rounded cursor-move">
                                                            <MdDragIndicator />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ReactSortable>
                        </ul>
                    </section>

                </div>
            </nav>
        </div>
    )
}
