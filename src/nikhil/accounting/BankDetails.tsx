import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiHome4Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import IconTrashLines from "../../components/Icon/IconTrashLines";
import IconEdit from "../../components/Icon/IconEdit";
import { MdAdd } from "react-icons/md";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function BankDetails() {
    const tableData = [
        {
            id: 1,
            email: 'Beneficial@gmail.com',
            mobile: '+91 9988665566',
            accno: '22334443222',
            name: 'Benefical Name',
            ifsc: 'SBi001',
            bank: 'State Bank Of India',
            branch: 'Bangalore'

        },
        {
            id: 2,
            email: 'Beneficial@gmail.com',
            mobile: '+91 9988665566',
            accno: '22334443222',
            name: 'Benefical Name',
            ifsc: 'SBi001',
            bank: 'State Bank Of India',
            branch: 'Bangalore'

        },
        {
            id: 3,
            email: 'Beneficial@gmail.com',
            mobile: '+91 9988665566',
            accno: '22334443222',
            name: 'Benefical Name',
            ifsc: 'SBi001',
            bank: 'State Bank Of India',
            branch: 'Bangalore'

        },

    ];
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
                            <IoIosArrowForward className='opacity-25 font-thin m-auto' color='gray' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>Accounting</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className='opacity-25 font-thin m-auto' color='black' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>Bank Details</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                </div>
            </div>
            <div className='p-3 md:p-6'>

                <div className='bg-white rounded-lg'>
                    <div className='flex flex-col md:flex-row gap-3 justify-between p-5'>
                        <div className='flex gap-4'>
                            <input type="text" placeholder="Enter Item name..." className="form-input py-0" required />

                            <button className='btn btn-sm btn-dark shadow'>Search</button>
                            <button className='btn btn-sm shadow whitespace-nowrap'>Show All</button>
                        </div>


                        <div className='flex gap-4 justify-between'>
                            <NavLink to='/add-bank-details' >
                            <button type="button" className="btn btn-dark btn-sm shadow font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <MdAdd size={18} />  <span className='mx-1'>Add Bank Details</span></span>
                            </button>
                            </NavLink>



                        </div>

                    </div>

                    <div className="table-responsive mb-5">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        SL No
                                    </th>
                                    <th>Beneficial Name</th>
                                    <th>Beneficial Email</th>
                                    <th>Beneficial Mobile</th>
                                    <th>Beneficial Acc No</th>
                                    <th>IFSC Code</th>
                                    <th>Beneficial Branch</th>
                                    <th className="!text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data, index) => {
                                    return (
                                        <tr key={data.id}>
                                            <td>
                                                {index + 1}

                                            </td>
                                            <td>
                                                <div className="whitespace-nowrap">{data.name}</div>
                                            </td>
                                            <td>{data.email}</td>

                                            <td>{data.mobile}</td>
                                            <td>{data.accno}</td>
                                            <td>{data.ifsc}</td>
                                            <td>{data.branch}</td>



                                            <td className="text-center">
                                                <ul className="flex items-center justify-center gap-3">

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
