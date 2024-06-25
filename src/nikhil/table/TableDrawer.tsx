import React, { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { Navigate, useNavigate } from 'react-router-dom';
import { setCrmToken, setPageTitle } from '../../store/themeConfigSlice';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import axios from 'axios';
const CrmSwal = withReactContent(Swal);

export default function TableDrawer({ showDrawer, setShowDrawer }: any) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectedBranch = useSelector((state: IRootState) => state.themeConfig.selectedBranch);
    const crmToken = useSelector((state: IRootState) => state.themeConfig.crmToken);
    const branches = useSelector((state: IRootState) => state.themeConfig.branches);

    const [isLoading, setIsLoading] = useState(0);

    useEffect(() => {
        if (!crmToken) navigate('/login')
        else {
            dispatch(setPageTitle('Marketplace | Integration | Swiggy'));
        }
    }, [crmToken])


    const defaultParams = {
        table_name: "",
        no_of_persons: "",
        extra_information: "",
        status: 1,
        branch_id: selectedBranch ? selectedBranch.id : '',
    };

    const [errors, setErrors] = useState<any>({});
    const [params, setParams] = useState<any>(defaultParams);

    const changeValue = (e: any) => {

        console.log(e)
        console.log(e.target.name)
        const { value, name } = e.target;
        setErrors({ ...errors, [name]: '' });
        setParams({ ...params, [name]: value });
        console.table(params)
    };

    const validate = () => {
        setErrors({});
        let errors = {};
        if (!params.table_name) {
            errors = { ...errors, table_name: 'table name is required.' };
        }

        if (!params.branch_id) {
            errors = { ...errors, branch_id: 'branch is required.' };
        }


        setErrors(errors);
        return { totalErrors: Object.keys(errors).length };
    };

    const [btnLoading, setBtnLoading] = useState(false);

    const storeOrUpdateApi = async (data: any) => {
        setBtnLoading(true)
        try {
            const response = await axios.post("https://waffle-daddy.onetapdine.com/api/tables",
                // const response = await axios.post(window.location.origin + "/api/tables",
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
                setShowDrawer(false)

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
        data.append("table_name", params.table_name);
        data.append("no_of_persons", params.no_of_persons);
        data.append("extra_information", params.extra_information);
        data.append("status", params.status);
        data.append("branch_id", params.branch_id);
        storeOrUpdateApi(data);
    };

    return (
        <div>
            <div className={`${(showDrawer && '!block') || ''} fixed inset-0 bg-[black]/60 z-[51] px-4 hidden transition-[display]`} ></div>

            <nav
                className={`${(showDrawer && 'ltr:!right-0 rtl:!left-0') || ''
                    } bg-white fixed ltr:-right-[800px] rtl:-left-[800px] top-0 bottom-0 w-full max-w-[800px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-1000 z-[51] dark:bg-black p-4`}
            >

                {showDrawer && (<button
                    type="button"
                    className="bg-danger ltr:rounded-tl-full rtl:rounded-tr-full ltr:rounded-bl-full rtl:rounded-br-full absolute ltr:-left-12 rtl:-right-12 top-0 bottom-0 my-auto w-12 h-10 flex justify-center items-center text-white cursor-pointer"
                    onClick={() => setShowDrawer(!showDrawer)}
                >
                    <IoCloseSharp className=" w-5 h-5" />
                </button>)}



                <div className="flex flex-col h-screen overflow-hidden">
                    <div className="w-full text-center border-b border-grey p-4">
                        <button type="button" className="px-4 py-4 absolute top-0 ltr:right-0 rtl:left-0 opacity-30 hover:opacity-100 dark:text-white" onClick={() => setShowDrawer(false)}>
                            <IoCloseSharp className=" w-5 h-5" />
                        </button>

                        <h4 className="mb-1 dark:text-white font-bold">Add Table(s)</h4>
                        <p className="text-white-dark">Set preferences that will be cookied for your live preview demonstration.</p>
                    </div>

                    <section className="flex-1 overflow-y-auto overflow-x-hidden perfect-scrollbar mt-5">

                        <form action="" method="post" className='p-5'>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className='text-white-dark'>Select Branch</label>

                                    <select name="branch_id" className="form-select" onChange={(e) => changeValue(e)}>
                                        <option value=" " disabled selected={!selectedBranch ? true : false}>Select Branch</option>
                                        {branches.filter((b) => b.status).map((branch) => (
                                            <option value={branch.id} selected={selectedBranch && selectedBranch.id == branch.id ? true : false}>
                                                {branch.branch_name} - {branch.area}</option>
                                        ))}

                                    </select>
                                    <div className="text-danger font-semibold text-sm">{errors.branch_id}</div>
                                </div>


                            </div>
                            <div className='mb-4'>
                                <label htmlFor="fullname" className='text-white-dark'>Table Name</label>
                                <input type="text" placeholder="Enter Table Name" className="form-input"
                                    name="table_name" onChange={(e) => changeValue(e)} value={params.table_name}
                                />
                                <div className="text-danger font-semibold text-sm">{errors.table_name}</div>
                            </div>

                            <div className=" items-center p-3.5 rounded text-secondary bg-secondary-light dark:bg-secondary-dark-light mb-4">
                                <span className="ltr:pr-2 rtl:pl-2">
                                    <strong className="ltr:mr-1 rtl:ml-1">Note: </strong>You can entered multiple table no or range using comma(,) and range using colon(:). <br />
                                    <strong className="ltr:mr-1 rtl:ml-1">Examples:</strong><br />
                                    <ol>
                                        <li>Table Range - A10:A20.</li>
                                        <li>Single Table and Table Range - A10:A20,B1.</li>
                                        <li>Multiple Table Range - A10:A100,B1:B20.</li>
                                        <li>Multiple Table - Table1,Table2,Table3</li>
                                    </ol>
                                </span>

                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className='text-white-dark'>No of Persons</label>
                                    <input type="number" placeholder="Enter no of persons" className="form-input"
                                        name="no_of_persons" onChange={(e) => changeValue(e)} value={params.no_of_persons}
                                    />
                                    <div className="text-danger font-semibold text-sm">{errors.no_of_persons}</div>
                                </div>


                                <div>
                                    <label className='text-white-dark'>Status</label>
                                    <label className="w-12 h-6 relative">
                                        <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer"
                                            onChange={(a) => {
                                                setErrors({ ...errors, status: '' });
                                                setParams({ ...params, status: a.target.checked })
                                            }
                                            } checked={params.status ? true : false}
                                        />
                                        <span className="outline_checkbox bg-icon border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute before:left-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center peer-checked:before:left-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
                                    </label>
                                    <div className="text-danger font-semibold text-sm">{errors.status}</div>
                                </div>


                            </div>

                            <div>
                                <label className='text-white-dark'>Extra Information</label>
                                <textarea rows={3} className="form-textarea" placeholder="Enter Extra Information"
                                    name="extra_information" onChange={(e) => changeValue(e)} defaultValue={params.extra_information}
                                ></textarea>
                                <div className="text-danger font-semibold text-sm">{errors.extra_information}</div>
                            </div>
                        </form>
                    </section>
                    <footer className="w-full text-center border-t border-grey p-4">
                        <div className='flex justify-end gap-5 py-2'>
                            <button className='btn shadow' onClick={() => setShowDrawer(false)}>Cancel</button>


                            <button type="button" onClick={() => formSubmit()} disabled={btnLoading} className="btn  btn-dark shadow bg-black">
                                {btnLoading ? 'Please Wait...' : 'Save Changes'}
                            </button>

                        </div>
                    </footer>
                </div>
            </nav>
        </div>
    )
}
