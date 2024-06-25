import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { TbRefresh } from 'react-icons/tb'
import Dropdown from '../../../components/Dropdown'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { AiFillHome } from 'react-icons/ai'
import axios from 'axios'
import Swiggy from './Swiggy'
import Zomato from './Zomato'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import PageLoader from '../../PageLoader'
import { setCrmToken } from '../../../store/themeConfigSlice'
export default function OnlineMenu() {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const crmToken = useSelector((state: IRootState) => state.themeConfig.crmToken);


    const [isLoading, setIsLoading] = useState(1);

    const [tab, setTab] = useState('');

    useEffect(() => {
        if (!crmToken) navigate('/login')
        fetchOnlinePartners()
    }, [crmToken])

    const [menues, setMenues] = useState([]);
    const fetchOnlinePartners = async () => {


        try {
            const response = await axios({
                method: 'get',
                url: window.location.origin + '/api/menu-management/online-menus',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + crmToken,
                },
            });


            if (response.data.status == "success") {
                setMenues(response.data.menues)
                setTab(response.data.menues[0].name)
            }
            console.log(response);
        } catch (error) {
            if (error.response.status == 401) {
                dispatch(setCrmToken(""))
            }
        } finally {
            setIsLoading(0)
        }
    }

    return (
        <div>

            <div className='bg-[#3b3f5c] flex h-[50px] justify-between px-3 items-center bg-white border-b'>
                <div>
                    <ol className="flex items-center text-gray-500 font-semibold dark:text-white-dark">
                        <li>
                            <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                                <AiFillHome size={18} />
                            </button>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='gray' />
                        </li>
                        <li className="before:content-[''] before:px-1.5">
                            <a className='breadcrumbs-text'>Menu Management</a>
                        </li>
                        <li className='px-2 '>
                            <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='gray' />
                        </li>
                        <li className="before:content-[''] before:px-1.5">
                            <a className='breadcrumbs-text'>Online Menu</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <NavLink to={'/'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                </div>
            </div>

            <div>
                <div>
                    {isLoading ? (<PageLoader />) : (
                        <>
                            <div className='bg-[#DBE7FF] flex gap-10 py-1.5 px-3'>
                                {menues.map((menu: any, index) => (
                                    <div
                                        onClick={() => menu.isEnabled ? setTab(menu.name) : null}
                                        className={`flex gap-2 items-center ${tab == menu.name ? 'bg-white' : 'bg-[#f3f2ee]'} rounded px-2 py-1`}>
                                        <div>
                                            <img className="w-8 h-8 rounded-md overflow-hidden object-cover" src={menu.logo} alt="" />
                                        </div>
                                        <div>
                                            <b className='text-[14px]'>{menu.name}</b>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className='p-3 md:p-6'>
                    {tab == "Swiggy" ? <Swiggy /> :
                        tab == "Zomato" ? <Zomato /> : null}
                </div>
            </div>
        </div>
    )
}
