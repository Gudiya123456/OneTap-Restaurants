
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GiRoundStar } from "react-icons/gi";
import { MdStars } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { FaIndianRupeeSign } from "react-icons/fa6";
import AnimateHeight from 'react-animate-height';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IRootState } from '../../../store';
import PageLoader from '../../PageLoader';
import { setCrmToken } from '../../../store/themeConfigSlice';

export default function () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const crmToken = useSelector((state: IRootState) => state.themeConfig.crmToken);

    useEffect(() => {
        if (!crmToken) navigate('/login')
        fetchMenues()
    }, [crmToken])

    const [isLoading, setIsLoading] = useState(true);
    const [restaurantData, setRestaurantData] = useState<any>([]);

    const [menuItems, setMenuItems] = useState([]);

    const [active, setActive] = useState<string>('1');
    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    const fetchMenues = async () => {

        setIsLoading(true)
        try {
            const response = await axios({
                method: 'get',
                url: window.location.origin + '/api/menu-management/online-menus/swiggy',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + crmToken,
                },
            });


            if (response.data.status == "success") {
                setRestaurantData(response.data.data.data.cards[2].card.card.info)
            }
            // console.log(response.data.data.data.cards[0].card.card.text)
            // console.log(response.data.data.data.cards[1].card.card.tabs)
            // console.log(response.data.data.data.cards[2].card.relevance)
            // console.log(response.data.data.data.cards[2].card.card.analytics)
            // console.log(response.data.data.data.cards[2].card.card.info)

            // console.log(response.data.data.data.cards[3].card.card)

            console.log(response.data.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
            setMenuItems(response.data.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)



        } catch (error) {
            if (error.response.status == 401) {
                dispatch(setCrmToken(""))
            }
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div>

            {
                isLoading ? (<PageLoader />) : (

                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 lg:col-span-4'>

                            <div className='bg-white rounded px-4 py-4 shadow'>
                                <h1 className='font-bold text-[20px]'>{restaurantData.name} - {restaurantData.id}</h1>
                                <b>{restaurantData.areaName}, {restaurantData.city}</b>

                                <div className='mt-4 flex gap-3 text-center items-center'>

                                    <div>
                                        <img className="w-20 h-20 rounded-md overflow-hidden object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${restaurantData.cloudinaryImageId}`} alt="" />
                                    </div>
                                    <div>
                                        <div  >
                                            <span className='flex gap-2 items-center m-auto'>
                                                <MdStars color='green' size={20} /> <b>{restaurantData.avgRating} ({restaurantData.totalRatingsString})  {restaurantData.costForTwoMessage
                                                }</b>
                                            </span>
                                        </div>

                                        <div className='mt-4 flex gap-2'>
                                            {restaurantData.cuisines.map((cuisine) => (
                                                <span className='badge badge-outline-dark'>{cuisine}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4 flex justify-between items-center'>
                                    <span className={`badge ${restaurantData.availability.opened ? 'bg-success' : 'bg-danger'} `}>{restaurantData.availability.opened ? 'Opened' : 'Closed'}</span>
                                    <span className='font-semibold'> Close at {restaurantData.availability.nextCloseTime}</span>

                                </div>

                                <div className='mt-4'>
                                    <b>Address</b>

                                    <p className='text-[12px] font-semibold'>{restaurantData.labels[1].message}</p>

                                    <iframe className='mt-2 w-full' src="https://maps.google.com/maps?q=12.8737534,77.6429144&hl=es;z=14&amp;output=embed"></iframe>
                                </div>

                                <div className='mt-4'>
                                    <div className="mb-5">
                                        <div className="space-y-2 font-semibold">
                                            <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
                                                <button
                                                    type="button"
                                                    className={`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] !text-primary`}
                                                    onClick={() => togglePara('1')}
                                                >
                                                    Aggregated Discount Info
                                                    <div className={`ltr:ml-auto rtl:mr-auto rotate-180`}>
                                                        <FaAngleUp />
                                                    </div>
                                                </button>
                                                <div>
                                                    <AnimateHeight duration={300} height={active === '1' ? 'auto' : 0}>
                                                        <div className="space-y-2 py-4 px-2 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                                                            {restaurantData.aggregatedDiscountInfo.descriptionList.map((discount) => (
                                                                <div className='border rounded px-2 shadow mb-3'>
                                                                    <b>{discount.meta}</b> <br />
                                                                    <small>{discount.operationType}</small>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </AnimateHeight>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-8 bg-white rounded px-4 py-4 shadow'>

                            <div>
                                <b> Menues</b>
                            </div>


                            <div>
                                {menuItems.map((menu, index) => (
                                    <>
                                        <CategoryMenu menu={menu} index={index} />
                                    </>
                                ))}
                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    )
}


const CategoryMenu = ({ menu, index }) => {

    const items = menu.card.card?.itemCards;





    return (
        <>
            {items ? (<>
                <div className=' border-b-[12px] border-[#f6f8fa]'>
                    <div className='flex items-center justify-between px-3 h-14'>
                        <div><h4 className='text-[16px] font-bold'>{menu.card.card.title} ({menu.card.card?.itemCards.length})</h4></div>
                        <div><button onClick={(e) => {
                            console.log(e)
                            let a = document.getElementById(`category-${index}`);
                            if (a?.classList.contains('hidden')) {
                                document.getElementById(`category-${index}`)?.classList.remove('hidden');
                                document.getElementById(`svg-${index}`)?.classList.add('rotate-180');
                            } else {
                                document.getElementById(`category-${index}`)?.classList.add('hidden');
                                document.getElementById(`svg-${index}`)?.classList.remove('rotate-180');
                            }

                        }} >
                            <FaAngleDown size={20} id={`svg-${index}`} /> </button> </div>
                    </div>

                    <div id={`category-${index}`} className='hidden'>
                        <ItemsCard items={items} />
                    </div>
                </div>



            </>) : null
            }

        </>
    )
}


const ItemsCard = ({ items }) => {

    // console.log(items)
    return (
        <>
            <div>

                {items.map((item, index) => (
                    <>
                        <ItemCard ite={item} />
                    </>
                ))}
            </div>
        </>
    )
}

const ItemCard = ({ ite }) => {

    const item = ite.card.info;
    // console.log(item)
    return (
        <>
            <div className={`${item.imageId ? 'flex gap-5' : ''} border-t py-8 `}>
                <div className={`w-32 h-32 ${!item.imageId ? 'hidden' : ''}`}>
                    <img className='w-32 h-32 rounded-md overflow-hidden object-cover'
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`} alt="" />

                </div>

                <div className={`${item.imageId ? 'flex-1 ' : ''}`}>
                    <div className='flex gap-3 mb-2 items-center'>
                        <span>
                            <img className='w-[20px]' src={`/assets/${item.isVeg ? 'veg.png' : 'non-veg.png'}`} />
                        </span>

                        <span className='font-bold text-[#e95f2b]'>{item.isBestseller ? 'Bestseller' : ''}</span>

                        <span className={`badge  ${item.inStock ? 'bg-success' : 'bg-danger'}`}>{item.inStock ? 'Available' : 'Not Available'}</span>

                    </div>

                    <h4 className='text-[18px] font-bold'>{item.name}</h4>
                    <h6 className='inline-flex items-center text-[16px] font-bold'><FaIndianRupeeSign />{item.price / 100}</h6>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    )
}