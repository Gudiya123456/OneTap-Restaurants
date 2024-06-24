import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setPageTitle, toggleRTL } from '../store/themeConfigSlice';
import { IRootState } from '../store';
import Dropdown from '../components/Dropdown';
import IconUser from '../components/Icon/IconUser';
import IconMail from '../components/Icon/IconMail';
import IconPhoneCall from '../components/Icon/IconPhoneCall';
import IconPencil from '../components/Icon/IconPencil';
import IconMessageDots from '../components/Icon/IconMessageDots';
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const CrmSwal = withReactContent(Swal);
export default function Activation({ response }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(response)
    useEffect(() => {
        dispatch(setPageTitle('Activation'));
    });

    const defaultParams = {
        name: response.name,
        email: response.email,
        phone: response.phone,
        password: "",
        password_confirmation: ""
    };

    const [params, setParams] = useState<any>(defaultParams);


    const [btnLoading, setBtnLoading] = useState(false);
    const [errors, setErros] = useState<any>({});


    const changeValue = (e: any) => {
        const { value, name } = e.target;
        setErros({ ...errors, [name]: "" });
        setParams({ ...params, [name]: value });
    };



    const validate = () => {
        setErros({});
        let errors = {};
        if (!params.password) {
            errors = { ...errors, password: "password is required" };
        }
        if (!params.password_confirmation) {
            errors = { ...errors, password_confirmation: " password confirmation is required" };
        } else if (params.password_confirmation != params.password) {
            errors = { ...errors, password_confirmation: " password should be same" };
        }

        console.log(errors);
        setErros(errors);
        return { totalErrors: Object.keys(errors).length };
    };


    const storeOrUpdateApi = async (data: any) => {
        setBtnLoading(true)
        try {
            const response = await axios({
                method: 'post',
                url: window.location.origin + "/api/activation",
                data,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data)
            if (response.data.status == 'success') {
                navigate('/')
            } else if (response.data.status == 'error' && response.data.action == "login") {
                navigate('/')
            }

        } catch (error: any) {
            console.log(error)
            if (error?.response?.status === 422) {
                const serveErrors = error.response.data.errors;
                let serverErrors = {};
                for (var key in serveErrors) {
                    serverErrors = { ...serverErrors, [key]: serveErrors[key][0] };
                    console.log(serveErrors[key][0])
                }
                setErros(serverErrors);
                // CrmSwal.fire({
                //     name: "Server Validation Error! Please solve",
                //     toast: true,
                //     position: 'top',
                //     showConfirmButton: false,
                //     showCancelButton: false,
                //     width: 450,
                //     timer: 2000,
                //     customClass: {
                //         popup: "color-danger"
                //     }
                // });
            }
        } finally {
            setBtnLoading(false)
        }
    };

    const formSubmit = () => {
        const isValid = validate();
        if (isValid.totalErrors) return false;
        const data = new FormData();
        data.append("password", params.password);
        data.append("password_confirmation", params.password_confirmation);
        storeOrUpdateApi(data);
    };

    const [isLoading, setIsLoading] = useState(true);



    return (
        <div className="text-black dark:text-white-dark min-h-screen">

            <div>
                <div className="absolute inset-0">
                    <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
                </div>

                <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                    <img src="/assets/images/auth/coming-soon-object1.png" alt="image" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                    <img src="/assets/images/auth/coming-soon-object2.png" alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                    <img src="/assets/images/auth/coming-soon-object3.png" alt="image" className="absolute right-0 top-0 h-[300px]" />
                    <img src="/assets/images/auth/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />
                    <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                        <div className="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20">
                            <div className="absolute top-6 end-6">

                            </div>
                            <div className="mx-auto w-full max-w-[440px]">
                                <div className="mb-10">
                                    <h1 className="text-3xl text-center font-extrabold uppercase !leading-snug text-primary md:text-4xl">Admin Setup</h1>
                                </div>
                                <form className="space-y-5" >
                                    <div className="relative text-white-dark">
                                        <input type="text" placeholder="Name" value={params.name} disabled={true} className="form-input ps-10 placeholder:text-white-dark" />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconUser fill={true} />
                                        </span>
                                    </div>
                                    <div className="relative text-white-dark">
                                        <input type="email" placeholder="Email" value={params.email} disabled={true} className="form-input ps-10 placeholder:text-white-dark" />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconMail fill={true} />
                                        </span>
                                    </div>
                                    <div className="relative text-white-dark">
                                        <input type="tel" placeholder="Phone" value={params.phone} disabled={true} className="form-input ps-10 placeholder:text-white-dark" />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconPhoneCall fill={true} />
                                        </span>
                                    </div>
                                    <div>
                                        <div className="relative text-white-dark">
                                            <input type="text" placeholder="Enter Password" name='password' value={params.password} onChange={(e) => changeValue(e)} className="form-input ps-10 placeholder:text-white-dark" />
                                            <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                                <IconPencil fill={true} />
                                            </span>
                                        </div>

                                        {errors?.password ? (
                                            <div className="text-danger mt-1">
                                                {errors.password}
                                            </div>
                                        ) : ("")}
                                    </div>

                                    <div>
                                        <div className='relative text-white-dark'>
                                            <input type="text" placeholder="Enter Confirm Password" name='password_confirmation' value={params.password_confirmation} onChange={(e) => changeValue(e)} className="form-input ps-10 placeholder:text-white-dark" />
                                            <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                                <IconPencil fill={true} />
                                            </span>
                                        </div>

                                        {errors?.password_confirmation ? (
                                            <div className="text-danger mt-1">
                                                {errors.password_confirmation}
                                            </div>
                                        ) : ("")}
                                    </div>

                                    <button type="button" onClick={() => { formSubmit() }} disabled={btnLoading} className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                                        {
                                            btnLoading ? 'Please wait' : 'Submit'
                                        }
                                    </button>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
