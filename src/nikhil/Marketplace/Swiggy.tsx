import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { RiHome4Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

export default function Swiggy() {
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
                            <a type="button" className='breadcrumbs-text'>Market Place</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='black' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>Integration</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='black' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>Swiggy</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <NavLink to={'/market-place'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                </div>
            </div>

            <div className='panel m-6 bg-[#DBE7FF]'>

                <div className='grid grid-cols-12  gap-6  p-6 '>
                    <div className='md:col-span-2 col-span-12 m-auto'>
                        <img className="w-20 h-20 rounded-md overflow-hidden object-cover" src="/assets/marketplace/2.png" alt="img" />
                    </div>
                    <div className='md:col-span-10 col-span-12'>
                        <h1 className='text-2xl font-bold'>Swiggy</h1>
                        <p>
                            Customize the ordering experience with Swiggy. One click order on your Petpooja PoS with menu synchronization. (Only for existing Swiggy enabled restaurants).
                        </p>
                        <div className='flex gap-6 mt-4'>
                            <button className='btn btn-sm btn-dark'>Request for Integration (Main Kitchen)</button>
                            {/* <button className='btn btn-sm btn-dark'>Request For Cloud Kitchen Integration</button> */}
                        </div>
                    </div>
                </div>

                <div className='panel '>

                    <form action="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className='items-center inline-flex gap-4'>
                                <label >Already tie up with Zomato ?</label>
                                <div className='flex gap-4'>
                                    <label className="inline-flex">
                                        <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" defaultChecked />
                                        <span>Yes</span>
                                    </label>

                                    <label className="inline-flex">
                                        <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>

                            <div className='items-center inline-flex gap-4'>
                                <label >Do you charge GST on your zomato menu?</label>
                                <div className='flex gap-4'>
                                    <label className="inline-flex">
                                        <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" defaultChecked />
                                        <span>Yes</span>
                                    </label>

                                    <label className="inline-flex">
                                        <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>

                            <div className='items-center inline-flex gap-4'>
                                <label >Do you have packing charges applied on your zomato menu?</label>
                                <div className='flex gap-4'>
                                    <label className="inline-flex">
                                        <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" defaultChecked />
                                        <span>Yes</span>
                                    </label>

                                    <label className="inline-flex">
                                        <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label >Cloud Kitchen Restaurant Name</label>
                                <input type="text" placeholder="Enter Kitchen Restaurant Name" className="form-input" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label >Vendor Code </label>
                                <input type="text" placeholder="Enter Vendor Code " className="form-input" />
                            </div>
                            <div>
                                <label >Reachable Contact No</label>
                                <input type="tel" placeholder="Enter  Contact No" className="form-input" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label >Reachable Email Address.</label>
                                <input type="text" placeholder="Enter Email Address" className="form-input" />
                            </div>
                            <div>
                                <label >Approximate Number of Orders Per Day</label>
                                <input type="tel" placeholder="Enter Number of Orders Per Day" className="form-input" />
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label >Comments</label>
                            <textarea name="" id="" className="form-textarea"></textarea>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label >Upload the menu to be used for Zomato integration. </label>
                                <input type="file" className="form-file" />
                            </div>

                        </div>

                        <div className='flex gap-6 justify-end'>
                            <NavLink to={'/market-place'} className='btn  shadow'>Cancel</NavLink>
                            <button className='btn  btn-dark shadow'>Submit</button>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    )
}
