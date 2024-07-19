import React,{ useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiHome4Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
export default function AddBankDetails() {
    const [yes, setYes] = useState(false)

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
            <div className="p-4 " >
                <div className="" >
                    <form action="" className='mt-4 panel p-0 '>
                        <div className="p-4" >




                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">


                                <div className="" >
                                    <label >Beneficiary Email </label>
                                    <input type="text" placeholder="" className="form-input" />
                                    <p className="text-[#56819b]" >Note: Enter Email for payment transaction.</p>

                                </div>
                                <div className="" >
                                    <label >Owner Mobile No</label>
                                    <input type="text" placeholder="" className="form-input" />
                                    <p className=" text-[#56819b]" >Note: You can add more than one with , separated.</p>

                                </div>
                                <div className="" >
                                    <label >Beneficiary Account Number</label>
                                    <input type="text" placeholder="" className="form-input" />

                                </div>
                                <div className="" >
                                    <label >Beneficiary Name</label>
                                    <input type="text" placeholder="" className="form-input" />

                                </div>

                                {/* <div className="flex gap-2 items-center">
                                    <div>
                                        <label>IFSC CODE</label>
                                        <input type="text" placeholder="" className="form-input w-[550px]" />
                                        <p className="text-[#56819b]">Note: Click on validate button for bank information.</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <button className="btn btn-dark shadow whitespace-nowrap">Validate</button>
                                    </div>
                                </div> */}

                                <div className="flex flex-col md:flex-row gap-2 items-center">
                                    <div className="w-full md:w-auto">
                                        <label>IFSC CODE</label>
                                        <input type="text" placeholder="" className="form-input w-full xl:w-[615px]" />
                                        <p className="text-[#56819b]">Note: Click on validate button for bank information.</p>
                                    </div>
                                    <div className="flex flex-col justify-center mt-2 md:mt-0">
                                        <button className="btn btn-dark shadow whitespace-nowrap">Validate</button>
                                    </div>
                                </div>





                                <div className=" ">
                                    <label >Beneficiary Bank Name </label>
                                    <input type="text" placeholder="" className="form-input" />
                                </div>
                                <div className=" ">
                                    <label >Beneficiary Bank Branch </label>
                                    <input type="text" placeholder="" className="form-input" />
                                </div>

                            </div>
                        </div>

                        <div className='flex justify-end gap-4 bg-[#DBE7FF] p-4 rounded'>
                            <button className='btn btn-sm shadow bg-white' >Cancel</button>
                            <button className='btn btn-sm btn-dark shadow'>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

