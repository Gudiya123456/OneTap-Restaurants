import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { RiHome4Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { IRootState } from '../../store';
import { setCrmToken, setPageTitle } from '../../store/themeConfigSlice';
import axios from 'axios';
import PageLoader from '../PageLoader';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const CrmSwal = withReactContent(Swal);

export default function Swiggy() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const crmToken = useSelector((state: IRootState) => state.themeConfig.crmToken);

    const [isLoading, setIsLoading] = useState(0);

    useEffect(() => {
        if (!crmToken) navigate('/login')
        else {
            dispatch(setPageTitle('Marketplace | Integration | Swiggy'));
            fetchSwiggyIntegration();
        }
    }, [crmToken])

    const [swiggy, setSwiggy] = useState<any>(null);

    const fetchSwiggyIntegration = async () => {
        setIsLoading(1)
        try {
            const response = await axios({
                method: 'get',
                url: window.location.origin + "/api/market-place/integration/swiggy",
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "Bearer " + crmToken,
                },
            });
            if (response.data.status == "success") {
                setSwiggy(response.data.swiggy)
            }
        } catch (error) {
            if (error.response.status == 401) {
                dispatch(setCrmToken(""))
            }
        } finally {
            setIsLoading(0)
        }
    }




    const defaultParams = {
        is_tie_up_with_swiggy: 1,
        is_gst: 1,
        is_packing_charge: 1,
        restaurant_name: '',
        restaurant_code: '',
        phone: '',
        email: '',
        orders_per_day: '',
        comment: '',
        menu_file: ''
    };
    const [errors, setErrors] = useState<any>({});
    const [params, setParams] = useState<any>(defaultParams);

    useEffect(() => {
        console.log(swiggy)
        if (swiggy) setParams({
            is_tie_up_with_swiggy: swiggy.is_tie_up_with_swiggy,
            is_gst: swiggy.is_gst,
            is_packing_charge: swiggy.is_packing_charge,
            restaurant_name: swiggy.restaurant_name,
            restaurant_code: swiggy.restaurant_code,
            phone: swiggy.phone,
            email: swiggy.email,
            orders_per_day: swiggy.orders_per_day,
            comment: swiggy.comment,
            menu_file: swiggy.menu_file
        })
    }, [swiggy])
    const [btnLoading, setBtnLoading] = useState(false);

    const changeValue = (e: any) => {
        const { value, name } = e.target;
        setErrors({ ...errors, [name]: '' });
        setParams({ ...params, [name]: value });

        console.table(params)
    };

    const validate = () => {
        setErrors({});
        let errors = {};
        if (!params.restaurant_code) {
            errors = { ...errors, restaurant_code: 'restaurant code is required.' };
        }

        setErrors(errors);
        return { totalErrors: Object.keys(errors).length };
    };

    const loginApi = async (data: any) => {
        setBtnLoading(true)
        try {
            const response = await axios.post(window.location.origin + "/api/market-place/integration/swiggy",
                data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + crmToken,
                },
            });

            if (response.data.status === 'success') {
                Swal.fire({
                    icon: response.data.status,
                    title: response.data.title,
                    text: response.data.message,
                    padding: "2em",
                    customClass: "sweet-alerts",
                });

            } else {
                alert("Error")
            }
        } catch (error: any) {
            if (error?.response?.status === 401) {
                dispatch(setCrmToken(""))
            } else if (error?.response?.status === 422) {

                const serveErrors = error.response.data.errors;
                let serverErrors = {};
                for (var key in serveErrors) {
                    serverErrors = { ...serverErrors, [key]: serveErrors[key][0] };
                    setErrors(serverErrors)
                    console.log(serveErrors[key][0])
                }

                CrmSwal.fire({
                    title: "Server Validation Error! Please solve",
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    showCancelButton: false,
                    width: 450,
                    timer: 2000,
                    customClass: {
                        popup: "color-danger"
                    }
                });
            }
        } finally {
            setBtnLoading(false)
        }
    };

    const formSubmit = () => {
        const isValid = validate();
        if (isValid.totalErrors) return false;
        const data = new FormData();
        data.append("is_tie_up_with_swiggy", params.is_tie_up_with_swiggy);
        data.append("is_gst", params.is_gst);
        data.append("is_packing_charge", params.is_packing_charge);
        data.append("restaurant_name", params.restaurant_name);
        data.append("restaurant_code", params.restaurant_code);
        data.append("phone", params.phone);
        data.append("email", params.email);
        data.append("orders_per_day", params.orders_per_day);
        data.append("comment", params.comment);
        data.append("menu_file", params.menu_file);
        loginApi(data);
    };

    return (
        <div>

            {isLoading ? <PageLoader /> : (
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
                                    <a type="button" className='breadcrumbs-text'>Market Place</a>
                                </li>
                                <li className='px-2 '>
                                    <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='black' />
                                </li>
                                <li className="">
                                    <a type="button" className='breadcrumbs-text'>Integration</a>
                                </li>
                                <li className='px-2 '>
                                    <IoIosArrowForward className=' opacity-25 font-thin m-auto' color='black' />
                                </li>
                                <li className="">
                                    <a type="button" className='breadcrumbs-text'>Swiggy</a>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <NavLink to={'/market-place'} className='flex  items-center gap-1'><IoIosArrowBack /> <span className='breadcrumbs-text'>Back</span></NavLink>
                        </div>
                    </div>

                    <div className='panel m-6 bg-[#DBE7FF]'>

                        <div className='grid grid-cols-12  gap-6  p-6 '>
                            <div className='md:col-span-2 col-span-12 m-auto'>
                                <img className="w-20 h-20 rounded-md overflow-hidden object-cover" src="/assets/marketplace/2.png" alt="img" />
                            </div>
                            <div className='md:col-span-10 col-span-12'>
                                <h1 className='text-2xl font-bold'>Swiggy</h1>
                                <p>
                                    Customize the ordering experience with Swiggy. One click order on your Petpooja PoS with menu synchronization. (Only for existing Swiggy enabled restaurants).
                                </p>
                                <div className='flex gap-6 mt-4'>
                                    <button className='btn btn-sm btn-dark'>Request for Integration (Main Kitchen)</button>
                                    {/* <button className='btn btn-sm btn-dark'>Request For Cloud Kitchen Integration</button> */}
                                </div>
                            </div>
                        </div>

                        <div className='panel '>



                            <form action="">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                                    <div>
                                        <div className='items-center inline-flex gap-4'>
                                            <label >Already tie up with Zomato ?</label>
                                            <div className='flex gap-4'>
                                                <label className="inline-flex">
                                                    <input type="radio" name="is_tie_up_with_swiggy" value={1} defaultChecked={params.is_tie_up_with_swiggy == '1' ? true : false} onChange={(e) => changeValue(e)} className="form-radio text-dark rounded-none" />
                                                    <span>Yes</span>
                                                </label>
                                                <label className="inline-flex">
                                                    <input type="radio" name="is_tie_up_with_swiggy" value={0} defaultChecked={params.is_tie_up_with_swiggy == '0' ? true : false} onChange={(e) => changeValue(e)} className="form-radio text-dark rounded-none" />
                                                    <span>No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="text-danger font-semibold text-sm">{errors.is_tie_up_with_swiggy}</div>
                                    </div>


                                    <div>
                                        <div className='items-center inline-flex gap-4'>
                                            <label >Do you charge GST on your zomato menu?</label>
                                            <div className='flex gap-4'>
                                                <label className="inline-flex">
                                                    <input type="radio" name="is_gst" onChange={(e) => changeValue(e)} className="form-radio text-dark rounded-none" defaultChecked />
                                                    <span>Yes</span>
                                                </label>

                                                <label className="inline-flex">
                                                    <input type="radio" name="is_gst" onChange={(e) => changeValue(e)} className="form-radio text-dark rounded-none" />
                                                    <span>No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="text-danger font-semibold text-sm">{errors.is_gst}</div>
                                    </div>

                                    <div>
                                        <div className='items-center inline-flex gap-4'>
                                            <label >Do you have packing charges applied on your zomato menu?</label>
                                            <div className='flex gap-4'>
                                                <label className="inline-flex">
                                                    <input type="radio" name="is_packing_charge" onChange={(e) => changeValue(e)} className="form-radio text-dark rounded-none" defaultChecked />
                                                    <span>Yes</span>
                                                </label>

                                                <label className="inline-flex">
                                                    <input type="radio" name="is_packing_charge" onChange={(e) => changeValue(e)} className="form-radio text-dark rounded-none" />
                                                    <span>No</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="text-danger font-semibold text-sm">{errors.is_packing_charge}</div>
                                    </div>



                                    <div>
                                        <label >Cloud Kitchen Restaurant Name</label>
                                        <input type="text" placeholder="Enter Kitchen Restaurant Name" name="restaurant_name" value={params.restaurant_name} onChange={(e) => changeValue(e)} className="form-input" />
                                        <div className="text-danger font-semibold text-sm">{errors.restaurant_name}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label >Restaurant Code </label>
                                        <input type="text" placeholder="Enter Restaurant Code " name="restaurant_code" value={params.restaurant_code} onChange={(e) => changeValue(e)} className="form-input" />
                                        <div className="text-danger font-semibold text-sm">{errors.restaurant_code}</div>
                                    </div>
                                    <div>
                                        <label >Reachable Contact No</label>
                                        <input type="tel" placeholder="Enter  Contact No" name="phone" value={params.phone} onChange={(e) => changeValue(e)} className="form-input" />
                                        <div className="text-danger font-semibold text-sm">{errors.phone}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label >Reachable Email Address.</label>
                                        <input type="text" placeholder="Enter Email Address" name='email' value={params.email} onChange={(e) => changeValue(e)} className="form-input" />
                                        <div className="text-danger font-semibold text-sm">{errors.email}</div>
                                    </div>
                                    <div>
                                        <label >Approximate Number of Orders Per Day</label>
                                        <input type="tel" placeholder="Enter Number of Orders Per Day" name='orders_per_day' value={params.orders_per_day} onChange={(e) => changeValue(e)} className="form-input" />
                                        <div className="text-danger font-semibold text-sm">{errors.orders_per_day}</div>
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <label >Comments</label>
                                    <textarea name="comment" onChange={(e) => changeValue(e)} className="form-textarea" defaultValue={params.comment}></textarea>
                                    <div className="text-danger font-semibold text-sm">{errors.comment}</div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label >Upload the menu to be used for Zomato integration. </label>
                                        <input type="file" className="form-file" name='menu_file' onChange={(e) => changeValue(e)} />
                                        <div className="text-danger font-semibold text-sm">{errors.menu_file}</div>
                                    </div>

                                </div>

                                <div className='flex gap-6 justify-end'>
                                    <NavLink to={'/market-place'} className='btn  shadow'>Cancel</NavLink>



                                    <button type="button" onClick={() => formSubmit()} disabled={btnLoading} className="btn  btn-dark shadow bg-black">
                                        {btnLoading ? 'Please Wait...' : 'Submit'}
                                    </button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
