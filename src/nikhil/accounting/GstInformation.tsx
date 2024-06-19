import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { RiHome4Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';



export default function GstInformation() {
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
                            <a type="button" className='breadcrumbs-text'>GST Information</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                </div>
            </div>
            <div className="p-4 px-40" >
               <div className="" >
               <form action="" className='mt-4 panel p-0 '>
                    <div className="p-4" >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                        <div className=" ">
                            <label >Do you have gst no</label>

                            <label onClick={() => { setYes(true) }} className="inline-flex">
                                <input
                                    id="status5"
                                    name="status"
                                    type="radio"
                                    className="form-radio text-success peer"
                                    defaultChecked={false}
                                    value={1}
                                />

                                <span className="peer-checked:text-success">Yes</span>
                            </label>

                            <label onClick={() => { setYes(false) }} className="inline-flex ml-3">
                                <input
                                    id="status4"
                                    name="status"
                                    type="radio"
                                    defaultChecked={true}
                                    value={0}
                                    className="form-radio text-success peer"
                                />
                                <span className="peer-checked:text-success">No</span>
                            </label>

                        </div>
                        <div>
                            {
                                yes == true && <div className="" >
                                    <div className="flex gap-3  " >
                                        <div className="">
                                            <label >Gst No</label>
                                            <input type="text" placeholder="" className="form-input w-[350px]" />
                                        </div>
                                        <div>
                                            <label className="text-white" >Gst No</label>
                                            <button className='btn  btn-dark shadow whitespace-nowrap'>Verify Gst No</button>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className=" mb-4">
                        <label >Registered Name For Invoice</label>
                        <input type="text" placeholder="" className="form-input" />
                    </div>
                    <div className="mb-4" >
                        <label >Registered Address For Invoice</label>
                        <textarea className=" form-input" name="" id=""></textarea>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">

                        <div>
                            <label >State</label>
                            <select name="" id="" className="form-select" >
                                <option value="">Tamil Nadu</option>
                                <option value="">Karnataka</option>
                                <option value="">Bihar</option>
                            </select>
                        </div>
                        <div>
                            <label >City</label>
                            <select name="" id="" className="form-select" >
                                <option value="">Chennai</option>
                                <option value="">Bangalore</option>
                                <option value="">Patna</option>
                            </select>
                        </div>
                        <div className="" >
                            <label >Vat No(if any)</label>
                            <input type="text" placeholder="" className="form-input" />

                        </div>
                        <div className="" >
                            <label >PIN</label>
                            <input type="text" placeholder="" className="form-input" />

                        </div>
                        <div className="" >
                            <label >CIN</label>
                            <input type="text" placeholder="" className="form-input" />

                        </div>
                        <div className="" >
                            <label >Location</label>
                            <input type="text" placeholder="" className="form-input" />

                        </div>
                        <div className="" >
                            <label >Zip code</label>
                            <input type="text" placeholder="" className="form-input" />

                        </div>

                    </div>
                    </div>

                    <div className='flex justify-end gap-4 bg-[#DBE7FF] p-4 rounded'>
                        <button className='btn btn-sm shadow bg-white' onClick={() => setAction('category')}>Cancel</button>
                        <button className='btn btn-sm btn-dark shadow'>Save Changes</button>
                    </div>
                </form>
               </div>
            </div>



        </div>
    )
}
