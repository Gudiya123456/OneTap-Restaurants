import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import { setCrmToken, setPageTitle } from '../store/themeConfigSlice';
import IconEye from '../components/Icon/IconEye';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaChair } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { GiStorkDelivery } from "react-icons/gi";
import OnlineOrder from './dashboard/OnlineOrder';
import OnlinePayment from './dashboard/OnlinePayment';
import OutletPayment from './dashboard/OutletPayment';
import OutletOrder from './dashboard/OutletOrder';
import { RiHome4Line } from 'react-icons/ri';
import axios from 'axios';
const Index = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const crmToken = useSelector((state: IRootState) => state.themeConfig.crmToken);
    console.log(crmToken)

    useEffect(() => {
        if (!crmToken) navigate('/login')
        else {
            dispatch(setPageTitle('Dashboard'));
            fetchDashboardData()
        }
    }, [crmToken]);

    const [isLoading, setIsLoading] = useState(1);


    const fetchDashboardData = async () => {
        setIsLoading(1)
        try {

            const response = await axios({
                method: 'get',
                url: window.location.origin + "/api/home-data",
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "Bearer " + crmToken,
                },
            });

            console.log(response)

            // 
        } catch (error) {

            if (error.response.status == 401) {
                dispatch(setCrmToken(""))
            }
        } finally {
            setIsLoading(0)
        }
    }

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const dailySales: any = {
        series: [
            {
                name: 'Dine In',
                data: [44, 55, 41, 67, 22, 43, 21],
            },
            {
                name: 'Delivery',
                data: [13, 23, 20, 8, 13, 27, 33],
            },
            {
                name: 'Take Away',
                data: [44, 23, 41, 8, 22, 27, 21],
            },
        ],
        options: {
            chart: {
                height: 200,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
                stacked: true,
                stackType: '100%',
            },
            dataLabels: {
                enabled: true,
            },
            stroke: {
                show: true,
                width: 1,
            },
            colors: ['#8b5cf6', '#3b82f6', '#d946ef'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            xaxis: {
                labels: {
                    show: true,
                    height: "50%",
                },
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            },
            yaxis: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                    borderRadius: 10,
                    borderRadiusApplication: 'end', // '', 'end'
                    borderRadiusWhenStacked: 'last', // '', 'last'
                },
            },
            legend: {
                show: false,
            },

            grid: {
                show: false,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 10,
                    right: -20,
                    bottom: -20,
                    left: -20,
                },
            },
        },
    };
    const salesByCategory: any = {
        series: [985, 737, 270],
        options: {
            chart: {
                type: 'donut',
                height: 400,
                fontFamily: 'Nunito, sans-serif',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 10,
                colors: '#fff',
            },
            colors: ['#8b5cf6', '#3b82f6', '#d946ef'],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                    width: 20,
                    height: 10,
                    offsetX: -2,
                },
                height: 50,
                offsetY: 20,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '29px',
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: '26px',

                                offsetY: 16,
                                formatter: (val: any) => {
                                    return val;
                                },
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#888ea8',
                                fontSize: '29px',
                                formatter: (w: any) => {
                                    return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                                        return a + b;
                                    }, 0);
                                },
                            },
                        },
                    },
                },
            },
            labels: ['Dine In', 'Delivery', 'Take Away'],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
            },
        },
    };

    const [dashboard, setDashboard] = useState('online-order')
    return (
        <div>

            {isLoading ? (<>Loading</>) : (
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
                                    <a href='#' className='breadcrumbs-text'>Dashboard</a>
                                </li>
                                {/* <li className="before:content-[''] before:px-1.5">
             <button className="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">UI Kit</button>
         </li> */}
                            </ol>
                        </div>
                        {/* 
 <div className="panel flex justify-between items-center overflow-x-auto whitespace-nowrap p-1.5 rounded-none ">
     <div className="flex  items-center overflow-x-auto whitespace-nowrap " >
         <div className="rounded-full p-1.5   ltr:mr-3 rtl:ml-3">
             <RiHome4Line className=' opacity' size={20} color='gray' />

         </div>
         <IoIosArrowForward className='ltr:mr-3 opacity-25 font-thin' color='gray' />

         <a href="/" className="block hover:underline text-gray-600  ltr:mr-3 rtl:ml-3 poppins-font" rel="noreferrer">
             Home
         </a>
         <IoIosArrowForward className='font-thin opacity-25' color='gray' />

         <p className='ltr:ml-3 text-blue-700 poppins-font' >Restaurants</p>

     </div>
     <div>
         <a href="/restaurants" className="flex poppins-font  items-center hover:underline text-gray-600 text-[13px]  ltr:mr-10 rtl:ml-3" rel="noreferrer">
             <IoIosArrowBack
                 className='font-thin ml-2 mr-2 ' color='gray' />  Back
         </a>


     </div>
 </div> */}

                        <div>

                            <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                        </div>
                    </div>


                    <div className='p-6'>

                        <div className="">
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
                                <div className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
                                    <div className="flex justify-between">
                                        <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total Sales</div>
                                        <FaMoneyBillTrendUp size={25} className="ltr:mr-2 rtl:ml-2 shrink-0" />


                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 inline-flex"> <BiRupee />170.46 </div>
                                    </div>
                                    <div className="flex items-center font-semibold mt-5 ">
                                        <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                        100 Orders
                                    </div>
                                </div>

                                {/* Sessions */}
                                <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
                                    <div className="flex justify-between">
                                        <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Dine In</div>
                                        <FaChair size={25} className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 inline-flex"> <BiRupee /> 74,137 </div>
                                    </div>
                                    <div className="flex items-center font-semibold mt-5">
                                        <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                        34 Orders
                                    </div>
                                </div>

                                {/*  Time On-Site */}
                                <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
                                    <div className="flex justify-between">
                                        <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Delivery</div>
                                        <MdDeliveryDining size={25} className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 inline-flex"> <BiRupee /> 74,137 </div>
                                    </div>
                                    <div className="flex items-center font-semibold mt-5">
                                        <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                        10 Orders
                                    </div>
                                </div>

                                {/* Bounce Rate */}
                                <div className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                                    <div className="flex justify-between">
                                        <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Take Away</div>
                                        <GiStorkDelivery size={25} className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3 inline-flex"> <BiRupee /> 53655 </div>
                                    </div>
                                    <div className="flex items-center font-semibold mt-5">
                                        <IconEye className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                        10 Orders
                                    </div>
                                </div>
                            </div>


                            <div className="grid grid-cols-12  gap-6">

                                {/*  Previous Statement  */}
                                <div className=" md:col-span-8 col-span-12 ">
                                    <div className="panel h-full sm:col-span-2 xl:col-span-1">
                                        <div>
                                            <div className="bg-white dark:bg-black rounded-lg overflow-hidden">

                                                <ReactApexChart series={dailySales.series} options={dailySales.options} type="bar" height={250} />
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/*  Recent Transactions  */}
                                <div className=" md:col-span-4 col-span-12">
                                    <div className="panel ">
                                        <div>
                                            <div className="bg-white dark:bg-black rounded-lg overflow-hidden">

                                                <ReactApexChart series={salesByCategory.series} options={salesByCategory.options} type="donut" height={460} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='panel mt-4'>
                                <div className='font-bold flex gap-10 mb-4'>
                                    <button className={`pb-3 border-b-[4px]
                 ${dashboard == "online-order" ? ' border-black' : ' border-transparent'}`}
                                        onClick={() => setDashboard('online-order')}
                                    >Online Orders</button>
                                    <button className={`pb-3 border-b-[4px]
                 ${dashboard == "online-payment" ? ' border-black' : ' border-transparent'}`}
                                        onClick={() => setDashboard('online-payment')}
                                    >Online Payments</button>
                                    <button className={`pb-3 border-b-[4px]
                 ${dashboard == "outlet-order" ? ' border-black' : ' border-transparent'}`}
                                        onClick={() => setDashboard('outlet-order')}
                                    >Outlet Orders</button>
                                    <button className={`pb-3 border-b-[4px]
                 ${dashboard == "outlet-payment" ? ' border-black' : ' border-transparent'}`}
                                        onClick={() => setDashboard('outlet-payment')}
                                    >Outlet Payments</button>
                                </div>

                                <div className='min-h-[200px]'>
                                    {dashboard == "online-order" ? <OnlineOrder /> :
                                        dashboard == "online-payment" ? <OnlinePayment /> :
                                            dashboard == "outlet-order" ? <OutletOrder /> :
                                                dashboard == "outlet-payment" ? <OutletPayment /> :

                                                    null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Index;
