import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { BiRupee } from "react-icons/bi";
import { TbStars } from "react-icons/tb";

export default function OnlineOrder() {

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const mixedChart: any = {
        series: [
            {
                name: 'Zomato',
                type: 'area',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
            },
            {
                name: 'Swiggy',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
            },
            {
                name: 'Uber Eats',
                type: 'area',
                data: [23, 55, 36, 67, 13, 43, 64, 41, 44, 27, 39],
            },
            {
                name: 'Oters',
                type: 'area',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
            },
        ],
        options: {



            chart: {
                height: 500,
                fontFamily: 'Nunito, sans-serif',
                // stacked: false,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#2196f3', '#00ab55', '#4361ee', '#d946ef'],

            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
                lineCap: 'square',
            },

            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22,
            },

            plotOptions: {
                bar: {
                    // columnWidth: '50%',
                },
            },
            // fill: {
            //     opacity: [0.25, 0.25, 0.25, 0.25],
            // },

            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 0.19 : 0.28,
                    opacityTo: 0.05,
                    stops: isDark ? [100, 100] : [45, 100],
                },
            },

            labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022'],
            markers: {
                size: 0,
            },


            xaxis: {
                type: 'datetime',
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                title: {
                    text: 'Points',
                },
                min: 0,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            grid: {
                show: false,
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
            },
            tooltip: {
                shared: true,
                intersect: false,
                theme: isDark ? 'dark' : 'light',
            },
            legend: {
                itemMargin: {
                    horizontal: 4,
                    vertical: 8,
                },
            },
        },
    };
    return (


        <div className='grid grid-cols-12'>
            <div className='md:col-span-8 col-span-12'>
                <ReactApexChart series={mixedChart.series} options={mixedChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />
            </div>
            <div className='md:col-span-4 col-span-12'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mb-5">
                    {/*  Bitcoin  */}
                    <div className="panel" style={{ background: ' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)' }}>
                        <div className="flex items-center font-semibold mb-5">
                            <div className="shrink-0 w-10 h-10  rounded-full grid place-content-center ">
                                <TbStars size={20} color='white' />
                            </div>
                            <div className="ltr:ml-2 rtl:mr-2">
                                <h6 className="text-white dark:text-white-light">Total Orders</h6>
                            </div>
                        </div>
                        <div className=" items-center font-bold text-base text-white">
                            150
                        </div>
                    </div>
                    {/*  Ethereum*/}
                    <div className="panel" style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 35%, rgba(244,145,6,1) 99%)' }}>
                        <div className="flex items-center font-semibold mb-5">
                            <div className="shrink-0 w-10 h-10 bg-warning rounded-full grid place-content-center ">
                                x
                            </div>
                            <div className="ltr:ml-2 rtl:mr-2">
                                <h6 className="text-white dark:text-white-light">Total Sales</h6>
                            </div>
                        </div>

                        <div className="inline-flex items-center font-bold text-base text-white">
                            <BiRupee />21,000
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:mb-5 md:mt-0 mt-4">
                    <div className="panel" style={{ background: '#ff485a' }}>
                        <div className="items-center font-semibold mb-5">
                            <div className="ltr:ml-2 rtl:mr-2">
                                <h6 className="text-white dark:text-white-light">Zomato</h6>
                            </div>
                        </div>
                        <div className="inline-flex items-center font-bold text-base text-white">
                            <BiRupee />50000
                        </div>
                    </div>
                    <div className="panel" style={{ background: '#fc8019' }}>
                        <div className="items-center font-semibold mb-5">
                            <div className="ltr:ml-2 rtl:mr-2">
                                <h6 className="text-white dark:text-white-light">Swiggy</h6>
                            </div>
                        </div>
                        <div className="inline-flex items-center font-bold text-base text-white">
                            <BiRupee />6500
                        </div>
                    </div>
                    <div className="panel bg-dark">
                        <div className="items-center font-semibold mb-5">
                            <div className="ltr:ml-2 rtl:mr-2">
                                <h6 className="text-white dark:text-white-light">Others</h6>
                            </div>
                        </div>
                        <div className="inline-flex items-center font-bold text-base text-white">
                            <BiRupee />20
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}




// mixedChartOptions
