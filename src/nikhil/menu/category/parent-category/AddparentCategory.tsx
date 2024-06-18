import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
export default function AddparentCategory({ setAction }: any) {
    return (
        <div>


            <form action="" className='mt-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="gridEmail">Name</label>
                        <input id="gridEmail" type="text" placeholder="Enter Parent Category Name" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="gridPassword">Online Display Name</label>
                        <input id="gridPassword" type="Password" placeholder="Enter Online Display Name" className="form-input" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="gridEmail">Logo</label>
                        <input id="gridEmail" type="file" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="gridPassword">Swiggy Image</label>
                        <input id="gridPassword" type="file" className="form-input" />
                    </div>
                </div>

                <div className='mb-4'>
                    <label htmlFor="gridPassword">Status</label>
                    <label className="w-12 h-6 relative">
                        <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                        <span className="outline_checkbox bg-icon border-2 border-danger dark:border-white-dark block h-full rounded-full before:absolute before:left-1 before:bg-danger dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center peer-checked:before:left-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-success peer-checked:before:bg-success before:transition-all before:duration-300"></span>
                    </label>
                </div>

                <div className='flex justify-between mb-8 border-b-2'>
                    <div>
                        <b>Category</b>
                    </div>

                    <div>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Check All</span>
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">

                    <div className='flex flex-col gap-2'>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>One</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Two</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Three</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Four</span>
                        </label>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>One</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Two</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Three</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Four</span>
                        </label>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>One</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Two</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Three</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Four</span>
                        </label>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>One</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Two</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Three</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Four</span>
                        </label>
                    </div>
                </div>

                <div className='flex justify-end gap-4 bg-[#DBE7FF] p-4 rounded'>
                    <button className='btn btn-sm shadow bg-white' onClick={() => setAction('parent-category')}>Cancel</button>
                    <button className='btn btn-sm btn-dark shadow'>Save Changes</button>
                </div>
            </form>



        </div>
    )
}
