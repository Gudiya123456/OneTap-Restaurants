import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { TbStars } from 'react-icons/tb';
import { BiRupee } from 'react-icons/bi';

export default function OutletOrder() {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const mixedChart: any = {
        series: [
            {
                name: 'Dine In',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
            },
            {
                name: 'Take Away',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
            }

        ],
        options: {
            chart: {
                height: 300,
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
            colors: ['#8b5cf6', '#d946ef'],
            stroke: {
                width: [0, 2, 2],
                curve: 'smooth',
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            fill: {
                opacity: [1, 0.25, 1],
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
                show: 0,
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
                <ReactApexChart series={mixedChart.series} options={mixedChart.options}
                    className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={400} />
            </div>

            <div className='md:col-span-4 col-span-12'>
                <div className="mb-6 flex flex-col gap-4">
                    <div className="panel h-full bg-[#e3e7fc]">
                        {/* statistics */}
                        <div className="flex justify-between dark:text-white-light mb-5">
                            <h5 className="font-semibold text-lg ">No of Orders</h5>
                            <TbStars size={25} color='white' />
                        </div>
                        <div className=" text-[#e95f2b] text-3xl font-bold my-10 mb-4">
                            <span>1500</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8 text-sm text-[#515365] font-bold">
                            <div>
                                <div>
                                    <div>Dine In</div>
                                    <div className="text-[#f8538d] text-lg">1350</div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div>Take Away</div>
                                    <div className="text-[#f8538d] text-lg">150</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full bg-[#d9f2e6]">
                        {/* statistics */}
                        <div className="flex justify-between dark:text-white-light mb-5">
                            <h5 className="font-semibold text-lg ">Total Sales</h5>
                            <TbStars size={25} color='white' />
                        </div>
                        <div className="text-[#e95f2b] text-3xl font-bold my-10 mb-4">
                            <span className='inline-flex '><BiRupee />45000</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8 text-sm text-[#515365] font-bold">
                            <div>
                                <div>
                                    <div>Dine In</div>
                                    <div className="inline-flex text-[#f8538d] text-lg"><BiRupee className='m-auto' />35000</div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div>Take Away</div>
                                    <div className="inline-flex text-[#f8538d] text-lg"><BiRupee className='m-auto' />15000</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
