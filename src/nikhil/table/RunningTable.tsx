import { url } from 'inspector';
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiHome4Line } from 'react-icons/ri';
import { TbRefresh } from "react-icons/tb";
export default function RunningTable() {
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
                            <a className='breadcrumbs-text'>Tables</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='gray' />
                        </li>
                        <li className="">
                            <a className='breadcrumbs-text'>Running Orders</a>
                        </li>
                    </ol>
                </div>



                <div>

                    <button className='flex items-center gap-1'><IoIosArrowBack /> <span className='font-semibold'>Back</span></button>
                </div>
            </div>

            <div className='p-3 md:p-6'>

                <div className='bg-white rounded-lg'>

                    <div className="flex items-center justify-between  pt-3">
                        <div className='flex gap-5 font-semibold '>
                            <button className=' h-[50px] px-8 text-[#506690] '>Running Tables</button>
                            <button className=' h-[50px] px-8 border-b-2 border-b-[#000]'>Running Orders</button>
                        </div>
                        <div className='px-5'>
                            <button type="button" className="btn btn-sm shadow font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <TbRefresh size={18} />  <span className='mx-1'>Refresh</span></span>
                            </button>
                        </div>
                    </div>

                    <div className='bg-secondary/10 '>
                        <div className='p-5'>
                            <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
                                <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818] min-w-[320px]">
                                    <span className="flex justify-center items-center mb-4 dark:text-white font-bold ">Number of Orders
                                    </span>
                                    <div className=" font-extrabold btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">
                                        15</div>
                                </div>
                                <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818] min-w-[320px]">
                                    <span className="flex justify-center items-center mb-4 dark:text-white font-bold ">Estimated Total Amount
                                    </span>
                                    <div className="font-extrabold btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">
                                        ₹53.00</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='min-h-[400px] mt-5'>
                        <div className='p-5'>

                            <div className='grid gap-4 grid-cols-2 md:grid-cols-4'>
                                <div className='test' style={{ backgroundImage: "url('/assets/images/green-bg-new.svg' )" }}>
                                    <h4 className='pb-5 font-bold md:text-[14px]' >Dine In</h4>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50  text-[12px] md:text-[14px]'>Orders</span>
                                        <span>0</span>
                                    </div>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50 text-[12px] md:text-[14px]'>Estimated Total Amount</span>
                                        <span>0</span>
                                    </div>
                                </div>

                                <div className='test' style={{ backgroundImage: "url('/assets/images/green-bg-new.svg' )" }}>
                                    <h4 className='pb-5 font-bold md:text-[14px]' >Pick Up</h4>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50  text-[12px] md:text-[14px]'>Orders</span>
                                        <span>0</span>
                                    </div>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50 text-[12px] md:text-[14px]'>Estimated Total Amount</span>
                                        <span>0</span>
                                    </div>
                                </div>

                                <div className='test' style={{ backgroundImage: "url('/assets/images/green-bg-new.svg' )" }}>
                                    <h4 className='pb-5 font-bold md:text-[14px]' >Delivery</h4>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50  text-[12px] md:text-[14px]'>Orders</span>
                                        <span>0</span>
                                    </div>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50 text-[12px] md:text-[14px]'>Estimated Total Amount</span>
                                        <span>0</span>
                                    </div>
                                </div>

                                <div className='test' style={{ backgroundImage: "url('/assets/images/green-bg-new.svg' )" }}>
                                    <h4 className='pb-5 font-bold md:text-[14px]' >Order yet to be marked ready</h4>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50  text-[12px] md:text-[14px]'>Orders</span>
                                        <span>0</span>
                                    </div>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50 text-[12px] md:text-[14px]'>Estimated Total Amount</span>
                                        <span>0</span>
                                    </div>
                                </div>


                                <div className='test' style={{ backgroundImage: "url('/assets/images/green-bg-new.svg' )" }}>
                                    <h4 className='pb-5 font-bold md:text-[14px]' >Order yet to be picked up</h4>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50  text-[12px] md:text-[14px]'>Orders</span>
                                        <span>0</span>
                                    </div>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50 text-[12px] md:text-[14px]'>Estimated Total Amount</span>
                                        <span>0</span>
                                    </div>
                                </div>

                                <div className='test' style={{ backgroundImage: "url('/assets/images/green-bg-new.svg' )" }}>
                                    <h4 className='pb-5 font-bold md:text-[14px]' >Order yet to be marked ready</h4>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50  text-[12px] md:text-[14px]'>Orders</span>
                                        <span>0</span>
                                    </div>
                                    <div className='flex flex-col pb-5 md:pb-8 font-bold'>
                                        <span className='text-black/50 text-[12px] md:text-[14px]'>Estimated Total Amount</span>
                                        <span>0</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
