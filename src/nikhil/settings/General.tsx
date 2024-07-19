
import React, { useEffect, useState } from 'react'
import PageLoader from '../../components/Layouts/PageLoader';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiHome4Line } from 'react-icons/ri';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const CrmSwal = withReactContent(Swal);
export default function InvoiceSetting() {
    return (
        <>
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
                            <a type="button" className='breadcrumbs-text'>Settings</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='black' />
                        </li>
                        <li className="">
                            <a type="button" className='breadcrumbs-text'>General Setting</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                </div>
            </div>
        <div className='p-3 flex flex-col sm:flex-row justify-between gap-5'>


<div className='panel w-full'>
    <div className='grid grid-cols-2 gap-2'>


        <div className="mb-1">
            <label>Company Name</label>
            <input type="text" placeholder="Enter Company Name" className="form-input" />
        </div>
        <div className="mb-1">
            <label>Header Line 1</label>
            <input type="text" placeholder="Enter Header line 1" className="form-input"  />

        </div>
        <div className="mb-1">
            <label>Header Line 2</label>
            <input type="text" placeholder="Enter Header line 2" className="form-input"  />

        </div>
        <div className="mb-1">
            <label>Header Line 3</label>
            <input type="text" placeholder="Enter Header Line 3" className="form-input"  />

        </div>
        <div className="mb-1">
            <label>Company Tax Code</label>
            <input type="text" placeholder="Enter Company Tax Code" className="form-input"  />
        </div>




        <div className="mb-1">
            <div className="mt-1">
                <label htmlFor="status">Tax</label>
                <div className="mt-1">
                    <label className="inline-flex">
                        <input type="radio" name="is_tax" value={1}  className="form-radio text-success peer" />
                        <span className="peer-checked:text-success">Enabled</span>
                    </label>
                    <label className="inline-flex px-5">
                        <input type="radio" name="is_tax" value={0}  className="form-radio text-secondary peer" />
                        <span className="peer-checked:text-secondary">Disabled</span>
                    </label>
                </div>
            </div>
        </div>



            <div className="mb-1">
                <label>Tax Name</label>
                <input type="text" placeholder="Enter Tax Name" className="form-input"  />

            </div>

            <div className="mb-1">
                <label>Tax Value</label>
                <input type="text" placeholder="Enter Company Tax Code" className="form-input"  />
            </div>


        <div className="mb-1">
            <div className="mt-1">
                <label htmlFor="status">Feedback Qr</label>
                <div className="mt-1">
                    <label className="inline-flex">
                        <input type="radio" name="is_feedback_qr" value={1}  className="form-radio text-success peer" />
                        <span className="peer-checked:text-success">Enabled</span>
                    </label>
                    <label className="inline-flex px-5">
                        <input type="radio" name="is_feedback_qr" value={0} className="form-radio text-secondary peer" />
                        <span className="peer-checked:text-secondary">Disabled</span>
                    </label>
                </div>
            </div>
        </div>


        <div className="mb-1">
            <label>Footer Thanks</label>
            <input type="text" placeholder="Enter  footer thanks" className="form-input"  />
        </div>



    </div>
    <div className="mb-1">
        <label>Footer Note</label>
        <input type="text" placeholder="Enter footer note" className="form-input"  />
    </div>

    <div className='mt-4'>
        <button className='btn btn-dark m-auto' >
           Add
        </button>

    </div>

</div>

<div style={{ width: '525px' }} className='panel shadow-3xl'>
    <div className='grid grid-cols-1 gap-2'>
        <h1 className='text-center text-lg' > Company Name</h1>
        <div className='text-center ' >
            <p className='text-[12px] font-bold'>Header line one
                <br />Header line two
                <br />Header line two
                <br />
                Header line two
            </p>
        </div>
        <hr />

        <div className=''>
            <div className='flex justify-between font-bold' >
                <h1>Order ID</h1>
                <h1>FGB-125478</h1>
            </div>
            <div className='flex justify-between font-bold text-xs'>
                <h6>Date Time</h6>
                <h6>May 22,2023 11:20</h6>
            </div>
            <div className='flex justify-between font-light text-xs'>
                <p>Type</p>
                <p>Dine In</p>
            </div>
            <div className='flex justify-between font-light text-xs'>
                <p>Table Id</p>
                <p>Table 1</p>
            </div>
            <div className='flex justify-between font-light text-xs'>
                <p>Waiter Id</p>
                <p>07</p>
            </div>
            <div className='flex mb-2 justify-between font-light text-xs'>
                <p>Client Id</p>
                <p>201</p>
            </div>
            <hr />
            <div className="table-responsive    ">
                <table>
                    <tbody className='' >
                        <tr className='border-b-2 border-black border-dotted'>
                            <th>SL</th>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </tbody>
                    <tbody className='text-xs ' >
                        <tr className='border-b-2 border-black border-dotted' >
                            <td className='text-[12px]'>01</td>
                            <td className='text-[12px]'>One</td>
                            <td className='text-[12px]'>1</td>
                            <td className='text-[12px]'>100.00</td>
                            <td className='text-[12px]'>100.00</td>
                        </tr>
                        <tr className='border-b-2 border-black border-dotted' >
                            <td className='text-[12px]'>02</td>
                            <td className='text-[12px]'>Two</td>
                            <td className='text-[12px]'>3</td>
                            <td className='text-[12px]'>150.00</td>
                            <td className='text-[12px]'>450.00</td>
                        </tr>
                        <tr className='border-b-2 border-black border-dotted' >
                            <td className='text-[12px] '>03</td>
                            <td className='text-[12px]'>Three</td>
                            <td className='text-[12px]'>2</td>
                            <td className='text-[12px]'>200.00</td>
                            <td className='text-[12px]'>400.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>



            <div className='mt-3'>
                <div className='flex justify-between font-bold text-xs'>
                    <h6>Gross Amount</h6>
                    <h6>₹950.00</h6>
                </div>
            </div>
            <hr />

            <div className='flex mt-1 justify-between font-light text-xs'>
                <p>Service Charge @ 10%</p>
                <p>₹487.50</p>
            </div>
            <div className='flex mt-1 justify-between font-light text-xs'>
                <p>Convenience Fee @ 0%</p>
                <p>₹0.00</p>
            </div>

            <hr />


                <div className='flex mt-1 justify-between font-light text-xs mt-1'>
                    <p>Tax%</p>
                    <p>₹ 670</p>
                </div>

                <div className='flex justify-between font-bold text-xs'>
                    <h6>Tax Total</h6>
                    <h6>₹ 671</h6>
                </div>
                <hr />


            <div className='flex mt-1 justify-between font-light text-xs'>
                <p> Round off</p>
                <p>₹00.00</p>
            </div>
            <hr />
            <div className='flex mt-1 justify-between font-bold text-xs'>
                <h6>Net Amount To Pay</h6>
                <h6>988</h6>
            </div>

      <div className='mb-2 mt-4'>
                <p>Leave feedback at</p>
                <img src="data:image/png;base64,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" alt="" />
            </div>


            <div className='text-center mt-5'>
                <h1>***Thank You, Visit Again***</h1>
                <p>kj</p>
            </div>
        </div>
    </div>
</div>

        </div>
        </div>

        </>
    )
}
