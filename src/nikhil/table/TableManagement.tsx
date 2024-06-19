import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbRefresh } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import Dropdown from '../../components/Dropdown';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import IconTrashLines from '../../components/Icon/IconTrashLines';
import IconEdit from '../../components/Icon/IconEdit';
import IconNotes from '../../components/Icon/IconNotes';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import TableDrawer from './TableDrawer';
import { NavLink } from 'react-router-dom';
import { RiHome4Line } from 'react-icons/ri';

const tableData = [
    {
        id: 1,
        name: 'A1',
        email: '6',
        date: 'Text',
        sale: "A/C Room",
    },
    {
        id: 2,
        name: 'A2',
        email: '4',
        date: 'Text',
        sale: "A/C Room",
    },
    {
        id: 3,
        name: 'A3',
        email: '8',
        date: 'Test',
        sale: "Outdoor",
    },
    {
        id: 4,
        name: 'B1',
        email: '12',
        date: 'test',
        sale: "First Floor",
    },
    {
        id: 5,
        name: 'B2',
        email: '12',
        date: 'test',
        sale: "First Floor",
    },
];

export default function TableManagement() {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <div>
            <TableDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
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
                            <a className='breadcrumbs-text'>Tables</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='gray' />
                        </li>
                        <li className="">
                            <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                        </li>
                    </ol>
                </div>

                <div>

                    <button className='flex items-center gap-1'><IoIosArrowBack /> <span className='font-semibold'>Back</span></button>
                </div>
            </div>

            <div className='p-3 md:p-6'>

                <div className='bg-white rounded-lg'>


                    <div className=" items-center justify-between  pt-3 border-b-[1px]">
                        <div className='flex gap-5 font-semibold '>
                            <NavLink to={'/table-management'} className=' h-[50px] px-8 text-[#506690] border-b-2 border-b-[#000]'>Tables</NavLink>
                            <NavLink to={'/table-management/areas'} className=' h-[50px] px-8  text-[#506690]'>Areas</NavLink>
                        </div>

                    </div>



                    <div className='flex flex-col md:flex-row gap-3 justify-between p-5'>
                        <div className='flex gap-4'>
                            <input type="text" placeholder="Enter Table no..." className="form-input py-0" required />

                            <button className='btn btn-sm btn-dark shadow'>Search</button>
                            <button className='btn btn-sm shadow whitespace-nowrap'>Show All</button>
                        </div>


                        <div className='flex gap-4 justify-between'>
                            <button type="button" className="btn btn-dark btn-sm shadow font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <MdAdd size={18} />  <span className='mx-1' onClick={() => setShowDrawer(true)}>Add New Table</span></span>
                            </button>

                            <div className="dropdown">
                                <Dropdown
                                    placement={`bottom-start`}
                                    btnClassName="btn shadow btn-sm dropdown-toggle"
                                    button={
                                        <>
                                            Action
                                            <span>
                                                <MdOutlineKeyboardArrowDown size={18} />
                                            </span>
                                        </>
                                    }
                                >
                                    <ul className="!min-w-[100px]">
                                        <li>
                                            <button type="button">Active</button>
                                        </li>
                                        <li>
                                            <button type="button">In Active</button>
                                        </li>
                                        <li>
                                            <button type="button">Remove</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>




                            <button type="button" className="btn btn-sm shadow font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <TbRefresh size={18} />  <span className='mx-1'>Refresh</span></span>
                            </button>
                        </div>

                    </div>

                    <div className="table-responsive mb-5">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" className="form-checkbox  outline-dark" /> Table No
                                    </th>
                                    <th>No of Persons</th>
                                    <th>Extra Information</th>
                                    <th>Area Name</th>
                                    <th>Status</th>
                                    <th className="!text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td>
                                                <input type="checkbox" className="form-checkbox  outline-dark" />   {data.name}

                                            </td>
                                            <td>
                                                <div className="whitespace-nowrap">{data.email}</div>
                                            </td>
                                            <td>{data.date}</td>
                                            <td>{data.sale}</td>
                                            <td>
                                                <label className="w-12 h-6 relative">
                                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                                                    <span className="outline_checkbox bg-icon border-2 border-danger dark:border-white-dark block h-full rounded-full before:absolute before:left-1 before:bg-danger dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center peer-checked:before:left-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-success peer-checked:before:bg-success before:transition-all before:duration-300"></span>
                                                </label>
                                            </td>
                                            <td className="text-center">
                                                <ul className="flex items-center justify-center gap-3">
                                                    <li>
                                                        <Tippy content="History">
                                                            <button type="button">

                                                                <IconNotes className="shrink-0" />

                                                            </button>
                                                        </Tippy>
                                                    </li>
                                                    <li>
                                                        <Tippy content="Edit">
                                                            <button type="button">
                                                                <IconEdit className="shrink-0" />
                                                            </button>
                                                        </Tippy>
                                                    </li>
                                                    <li>
                                                        <Tippy content="Delete">
                                                            <button type="button">


                                                                <IconTrashLines className="shrink-0" />
                                                            </button>
                                                        </Tippy>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        <div className='mt-4 text-end mx-4'>
                            <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                    >
                                        First
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                                    >
                                        Last
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    )
}
