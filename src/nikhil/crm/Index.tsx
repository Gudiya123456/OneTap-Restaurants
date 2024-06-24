import React,{ Fragment, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { RiHome4Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import IconTrashLines from "../../components/Icon/IconTrashLines";
import IconEdit from "../../components/Icon/IconEdit";
import { MdAdd } from "react-icons/md";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Dialog, Transition } from '@headlessui/react';
import { CiViewList } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi2";


export default function Index() {
    const tableData = [
        {
            id: 1,
            name: 'Rohan Sarraf',
            phone: '+91 9988776644',
            email: 'Rohan.sarraf@gmail.com',
            created_at: '20-sep-2023',

        },
        {
            id: 2,
            name: 'Pooja Sarraf',
            phone: '+91 9988776644',
            email: 'Pooja.sarraf@gmail.com',
            created_at: '20-sep-2023',

        },
        {
            id: 3,
            name: 'Neha Sarraf',
            phone: '+91 9988776644',
            email: 'Neha.sarraf@gmail.com',
            created_at: '20-sep-2023',

        },
        {
            id: 4,
            name: 'Doll Sarraf',
            phone: '+91 9988776644',
            email: 'Doll.sarraf@gmail.com',
            created_at: '20-sep-2023',

        },
        {
            id: 5,
            name: 'Nikhil Sarraf',
            phone: '+91 9988776644',
            email: 'Nikhil.sarraf@gmail.com',
            created_at: '20-sep-2023',
        },

    ];
    const itemDetails = [
        {
            id: 1,
            name: 'Biryani',
            not: '-----',
            qty: '2',
            unitprice: '200',
            totalprice: '2000',
            created_at: '20-sep-2023',

        },
        {
            id: 2,
            name: 'Chicken Tikka',
            phone: '+91 9988776644',
            email: 'Pooja.sarraf@gmail.com',
            not: '-----',
            qty: '2',
            unitprice: '200',
            totalprice: '2000',
            created_at: '20-sep-2023',

        },
        {
            id: 3,
            name: 'Rice',
            phone: '+91 9988776644',
            email: 'Neha.sarraf@gmail.com',
            not: '-----',
            qty: '2',
            unitprice: '200',
            totalprice: '2000',
            created_at: '20-sep-2023',

        },
        {
            id: 4,
            name: 'Dal',
            phone: '+91 9988776644',
            email: 'Doll.sarraf@gmail.com',
            not: '-----',
            qty: '2',
            unitprice: '200',
            totalprice: '2000',
            created_at: '20-sep-2023',

        },
        {
            id: 5,
            name: 'Chapati',
            phone: '+91 9988776644',
            email: 'Nikhil.sarraf@gmail.com',

            not: '-----',
            qty: '2',
            unitprice: '200',
            totalprice: '2000',
            created_at: '20-sep-2023',
        },

    ];

    const feedback=[
        {
            question:'Service',
            answer:'Good'
        },
        {
            question:'Service',
            answer:'Good'
        },
        {
            question:'Service',
            answer:'Good'
        },
        {
            question:'Service',
            answer:'Good'
        }
    ]
    const [customerModel, setCustomerModel] = useState(false);
    const[feedbackModel,setFeedbackModel]=useState(false);

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
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='gray' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>CRM</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='black' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>Customers</a>
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
                            <input type="text" placeholder="Enter Name..." className="form-input py-0" required />

                            <button className='btn btn-sm btn-dark shadow'>Search</button>
                            <button className='btn btn-sm shadow whitespace-nowrap'>Show All</button>
                        </div>

                        {/*
                        <div className='flex gap-4 justify-between'>
                            <button type="button" className="btn btn-dark btn-sm shadow font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <MdAdd size={18} />  <span className='mx-1' onClick={() => setCustomerModel(true)}>Add Items</span></span>
                            </button>
                        </div> */}

                    </div>

                    <div className="table-responsive mb-5">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        SL No
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Created At</th>
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

                                            <td>{data.phone}</td>
                                            <td>{data.created_at}</td>
                                            {/* <td>{data.tax}</td> */}


                                            <td className="text-center">
                                                <ul className="flex items-center justify-center gap-3">
                                                    <li>
                                                        <Tippy content="View Order Details">
                                                            <button onClick={() => { setCustomerModel(true) }} type="button">
                                                                <CiViewList className="shrink-0" size={20} />
                                                            </button>
                                                        </Tippy>
                                                    </li>
                                                    <li>
                                                        <Tippy content="View Feedback">
                                                            <button onClick={()=>setFeedbackModel(true)} type="button">
                                                                <HiOutlineDocumentText className="shrink-0" size={20} />
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
                {/* customer details modal  */}
            <Transition appear show={customerModel} as={Fragment}>
                <Dialog as="div" open={customerModel} onClose={() => setCustomerModel(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg  w-full max-w-3xl my-8 max-h-[600px] overflow-auto text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Order Details</h5>
                                        <button type="button" className="text-white-dark hover:text-dark" onClick={() => setCustomerModel(false)}>
                                            x
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="table-responsive  mb-5">
                                            <table className="border border-[#f6f8fa]" >

                                                <tbody>

                                                    <tr>

                                                        <td>
                                                            <div className="whitespace-nowrap"> <b>Order No.</b> : 1670</div>
                                                        </td>
                                                        <td> <b>Billing User</b> : RISWIN NAWAZ</td>
                                                        <td> <b>Customer Name</b> : Rahmathullah</td>

                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="whitespace-nowrap"> <b>Customer Phone</b> : 9962577769</div>
                                                        </td>
                                                        <td> <b>Customer Address</b> : </td>
                                                        <td> <b>Customer Locality</b> : </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="whitespace-nowrap"> <b>No of Persons</b> : 9962577769</div>
                                                        </td>
                                                        <td> <b>Order Type</b> : Dine In (Table: A8) </td>
                                                        <td> <b>Assign to</b> : </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="whitespace-nowrap"> <b>Total Tax</b> : 18.68</div>
                                                        </td>
                                                        <td> <b>Total Discount</b> : (16.50) </td>
                                                        <td> <b>Grand Total</b> : 376.00 </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="whitespace-nowrap"> <b>Settlement Amount</b> : 0.0</div>
                                                        </td>
                                                        <td> <b>Order Status</b> : Printed </td>
                                                        <td> <b>Printed</b> : Yes (1 time(s))</td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="whitespace-nowrap"> <b>Tip</b> : 0.0</div>
                                                        </td>
                                                        <td> <b>Sub Order Type:</b> : AC </td>
                                                    </tr>



                                                </tbody>
                                            </table>

                                        </div>
                                        <h3 className="mb-5" >Order Item</h3>
                                        <div className="table-responsive  mb-5">
                                            <table className="border border-[#f6f8fa]" >
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Item Name
                                                        </th>
                                                        <th>Special note</th>
                                                        <th>Quantity</th>
                                                        <th>Unit price</th>
                                                        <th>Total Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {itemDetails.map((data, index) => {
                                                        return (
                                                            <tr key={data.id}>

                                                                <td>
                                                                    <div className="whitespace-nowrap">{data.name}</div>
                                                                </td>
                                                                <td>{data.not}</td>

                                                                <td>{data.qty}</td>
                                                                <td>{data.unitprice}</td>
                                                                <td>{data.totalprice}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* feedbacks modal  */}

            <Transition appear show={feedbackModel} as={Fragment}>
                <Dialog as="div" open={feedbackModel} onClose={() => setFeedbackModel(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg  w-full max-w-3xl my-8 max-h-[600px] overflow-auto text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Feedback</h5>
                                        <button type="button" className="text-white-dark hover:text-dark" onClick={() => setFeedbackModel(false)}>
                                            x
                                        </button>
                                    </div>
                                    <div className="p-5">

                                        <div className="table-responsive  mb-5">
                                            <table className="border border-[#f6f8fa]" >
                                                <thead>
                                                    <tr>
                                                        <th>
                                                           Question
                                                        </th>
                                                        <th>Answer</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {feedback.map((data, index) => {
                                                        return (
                                                            <tr key={data.id}>

                                                                <td>
                                                                    <div className="whitespace-nowrap">{data.question}</div>
                                                                </td>
                                                                <td>{data.answer}</td>

                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>


        </div>
    )
}

