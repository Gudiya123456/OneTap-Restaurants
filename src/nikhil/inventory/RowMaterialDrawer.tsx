
import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";

export default function RowMaterialDrawer({ showDrawer, setShowDrawer }: any) {

    return (
        <div>
            <div className={`${(showDrawer && '!block') || ''} fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]`} ></div>

            <nav
                className={`${(showDrawer && 'ltr:!right-0 rtl:!left-0') || ''
                    } bg-white fixed ltr:-right-[800px] rtl:-left-[800px] top-0 bottom-0 w-full max-w-[600px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-1000 z-[51] dark:bg-black p-4`}
            >

                <div className="flex flex-col h-screen overflow-hidden">
                    <div className="w-full text-center border-b border-grey p-4">
                        <button type="button" className="px-4 py-4 absolute top-0 ltr:right-0 rtl:left-0 opacity-30 hover:opacity-100 dark:text-white" onClick={() => setShowDrawer(false)}>
                            <IoCloseSharp className=" w-5 h-5" />
                        </button>

                        <h4 className="mb-1 dark:text-white font-bold">Add Items</h4>
                    </div>

                    <section className="flex-1 overflow-y-auto overflow-x-hidden perfect-scrollbar mt-5">

                        <form action="" method="post" className='p-5'>
                            <div className='mb-4'>
                                <label htmlFor="fullname" className='text-white-dark'>Name</label>
                                <input id="fullname" type="text" placeholder="Enter Name" className="form-input" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="fullname" className='text-white-dark'>Qty</label>
                                <input id="fullname" type="text" placeholder="Enter Qty" className="form-input" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="fullname" className='text-white-dark'>Unit</label>
                                <select className='form-input' >
                                    <option value="">Select Unit</option>
                                    <option value="">Kg</option>
                                    <option value="">Pkt</option>

                                </select>
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="fullname" className='text-white-dark'>Price</label>
                                <input id="fullname" type="text" placeholder="Enter Price" className="form-input" />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="fullname" className='text-white-dark'>Amount</label>
                                <input id="fullname" type="text" placeholder="Enter Amount" className="form-input" />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="fullname" className='text-white-dark'>Tax</label>
                                <input id="fullname" type="text" placeholder="Enter Tax" className="form-input" />
                            </div>

                        </form>
                    </section>
                    <footer className="w-full text-center border-t border-grey p-4">
                        <div className='flex justify-end gap-5 py-2'>
                            <button className='btn shadow' onClick={() => setShowDrawer(false)}>Cancel</button>
                            <button className='btn btn-dark'>Save </button>
                        </div>
                    </footer>
                </div>
            </nav>
        </div>
    )
}

