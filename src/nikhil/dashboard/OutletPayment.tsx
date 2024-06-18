import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../../components/Dropdown';
import { useEffect } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import IconTrendingUp from '../../components/Icon/IconTrendingUp';
import IconPlus from '../../components/Icon/IconPlus';
import IconCreditCard from '../../components/Icon/IconCreditCard';
import IconMail from '../../components/Icon/IconMail';
import IconChecks from '../../components/Icon/IconChecks';
import IconFile from '../../components/Icon/IconFile';
import IconServer from '../../components/Icon/IconServer';
import IconChrome from '../../components/Icon/IconChrome';
import IconSafari from '../../components/Icon/IconSafari';
import IconGlobe from '../../components/Icon/IconGlobe';
import IconUsersGroup from '../../components/Icon/IconUsersGroup';
import IconLink from '../../components/Icon/IconLink';
import IconChatDots from '../../components/Icon/IconChatDots';
import IconThumbUp from '../../components/Icon/IconThumbUp';
import IconCaretsDown from '../../components/Icon/IconCaretsDown';
import IconSquareCheck from '../../components/Icon/IconSquareCheck';
import IconClock from '../../components/Icon/IconClock';
import { BiRupee } from "react-icons/bi";
import { TbStars } from 'react-icons/tb';
export default function OutletPayment() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Analytics Admin'));
    });

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // totalVisitOptions
    const totalVisit: any = {
        series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#009688',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#009688'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // paidVisitOptions
    const paidVisit: any = {
        series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#e2a03f',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e2a03f'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };

    return (
        <div className="pt-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="panel h-full bg-gradient-to-r from-[#FF5722] to-[#FFC107]">
                    <div className="flex justify-between dark:text-white-light mb-5">
                        <h5 className="font-semibold text-lg text-white">Total Sales</h5>

                        <TbStars size={25} color='white' />
                    </div>
                    <div className=" text-white text-3xl font-bold my-10">
                        <span className='inline-flex'><BiRupee /> 45,000 </span>

                        <IconTrendingUp className="text-success inline mx-2" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:shadow-none dark:bg-dark-light/10">
                            <div
                                className="bg-gradient-to-r from-[#FFC107] to-[#FF5722] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto"
                                style={{ width: '100%' }}
                            ></div>
                        </div>
                        <span className="ltr:ml-5 rtl:mr-5 text-white dark:text-white-light">100%</span>
                    </div>
                </div>

                <div className="panel h-full bg-gradient-to-r from-[#290979] to-[#e506f4]">
                    <div className="flex justify-between dark:text-white-light mb-5">
                        <h5 className="font-semibold text-lg text-white">Cash</h5>

                        <TbStars size={25} color='white' />
                    </div>
                    <div className=" text-white text-3xl font-bold my-10">
                        <span className='inline-flex'><BiRupee />7500 </span>

                        <IconTrendingUp className="text-success inline mx-2" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:shadow-none dark:bg-dark-light/10">
                            <div
                                className="bg-gradient-to-r from-[#e506f4] to-[#290979] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto"
                                style={{ width: '20%' }}
                            ></div>
                        </div>
                        <span className="ltr:ml-5 rtl:mr-5 text-white dark:text-white-light">20%</span>
                    </div>
                </div>

                <div className="panel h-full bg-gradient-to-r from-[#14176f] to-[#0074c3]">
                    <div className="flex justify-between dark:text-white-light mb-5">
                        <h5 className="font-semibold text-lg text-white">Paid</h5>

                        <TbStars size={25} color='white' />
                    </div>
                    <div className=" text-white text-3xl font-bold my-10">
                        <span className='inline-flex'><BiRupee />37500 </span>

                        <IconTrendingUp className="text-success inline mx-2" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:shadow-none dark:bg-dark-light/10">
                            <div
                                className="bg-gradient-to-r from-[#0074c3] to-[#14176f] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto"
                                style={{ width: '80%' }}
                            ></div>
                        </div>
                        <span className="ltr:ml-5 rtl:mr-5 text-white dark:text-white-light">80%</span>
                    </div>
                </div>
            </div>


        </div>
    )
}
