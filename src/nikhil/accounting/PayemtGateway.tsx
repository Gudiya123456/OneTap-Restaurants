import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { RiHome4Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import PaymentCard from "./PaymentCard";
import React, { useState } from "react";

import amazon from "../../assets/images/amazon.png"
import phonepe from '../../assets/images/phonepay.png';
import stripe from '../../assets/images/stripe.png'
import razor from "../../assets/images/rozorpay.png"
import paypal from "../../assets/images/paypal.png"
import google from '../../assets/images/gpay.png'
import AddPaymentDrawer from "./AddPaymentDrawer";


export default function PayemtGateway() {
    const[showDrawer,setShowDrawer]=useState(false);
    const accountingTools = [
        { title: 'Phone Pay', imageSrc: phonepe },
        { title: 'Google Pay', imageSrc: google },
        { title: 'Stripe', imageSrc: stripe },
        { title: 'Amazon Pay', imageSrc: amazon },
        { title: 'Rozorpay', imageSrc: razor },
        { title: 'Paypal', imageSrc: paypal },
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
                            <a type="button" className='breadcrumbs-text'>Payemt Gateway</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                </div>
            </div>


            <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Payment</h1>

       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {accountingTools.map((tool, index) => (
          <PaymentCard key={index} title={tool.title} imageSrc={tool.imageSrc}  />
        ))}
      </div>


        </div>
        </div>
    )
}
