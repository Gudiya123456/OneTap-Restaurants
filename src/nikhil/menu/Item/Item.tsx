
import React, { useState, Fragment, useEffect, useCallback } from 'react'
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconEdit from '../../../components/Icon/IconEdit';
import IconNotes from '../../../components/Icon/IconNotes';
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { IoMdAdd } from "react-icons/io";
import { MdDragIndicator } from "react-icons/md";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { RiBatteryShareLine } from "react-icons/ri";
import CategoryDrawer from './CategoryDrawer';
import { AiOutlineMenu } from "react-icons/ai";
import { ReactSortable } from 'react-sortablejs';
import { Dialog, Transition } from '@headlessui/react';

import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconBell from '../../../components/Icon/IconBell';

import 'tippy.js/dist/tippy.css';
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import Cropper from 'react-easy-crop'
const rowData = [
    {
        id: 1,
        item_name: 'BBQ Gun(full Leg)',
        price: '500',
        description: 'Test description',
        action: '2004-05-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        item_image: '+1 (821) 447-3782',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 2,
        item_name: 'BBQ Strips',
        price: '750',
        description: 'Fake Description',
        action: '1989-11-19',
        address: {
            street: '639 Kimball Street',
            city: 'Bascom',
            zipcode: 8907,
            geo: {
                lat: 65.954483,
                lng: 98.906478,
            },
        },
        item_image: '+1 (838) 515-3408',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    },
    {
        id: 2,
        item_name: 'BBQ Strips 2',
        price: '350',
        description: 'Another Description',
        action: 'Browse',
        address: {
            street: '639 Kimball Street',
            city: 'Bascom',
            zipcode: 8907,
            geo: {
                lat: 65.954483,
                lng: 98.906478,
            },
        },
        item_image: 'sssss',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    }
];




export default function Item({ setPage }: any) {


    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
        console.log(croppedArea, croppedAreaPixels)
    }
    const [modal3, setModal3] = useState(false);

    const [showCategories, setShowCategories] = useState(window.innerWidth < 768 ? false : true);
    const [showDrawer, setShowDrawer] = useState(false);
    const items1 = [
        {
            id: 1,
            text: 'Need to be approved',
            name: 'Kelly Young',
        },
        {
            id: 2,
            text: 'Meeting with client',
            name: 'Andy King',
        },
        {
            id: 3,
            text: 'Project Detail',
            name: 'Judy Holmes',
        },
        {
            id: 4,
            text: 'Edited Post Apporval',
            name: 'Vincent Carpenter',
        },
        {
            id: 5,
            text: 'Project Lead Pickup',
            name: 'Mary McDonald',
        },
    ];
    const [handler1, setHandler1] = useState(items1);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Checkbox Table'));
    });
    const [page, setPages] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [selectedRecords, setSelectedRecords] = useState<any>([]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    useEffect(() => {
        setPages(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item) => {
                return (
                    item.item_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.price.toLowerCase().includes(search.toLowerCase()) ||
                    item.description.toLowerCase().includes(search.toLowerCase()) ||
                    item.item_image.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);
    return (
        <div className='p-4'>
            <CategoryDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
            <div className={`${showCategories ? 'grid grid-cols-12 gap-5' : ''}`}>
                <div className={`bg-white shadow rounded-lg ${showCategories ? ' col-span-3 ' : 'hidden'}`}>
                    <div className='p-4'>
                        <b>Categories</b>
                        <select name="" id="" className='form-select mt-2'>
                            <option value="">One</option>
                            <option value="">Two</option>
                        </select>
                    </div>

                    <ul >
                        <ReactSortable list={handler1} setList={setHandler1} animation={200} handle=".handle" group="handler" ghostClass="gu-transit">
                            {handler1.map((item) => {
                                return (
                                    <li key={item.id} className=" cursor-grab">
                                        <div className="bg-white dark:bg-[#1b2e4b]  py-1 border-b border-white-light dark:border-dark px-2.5  flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center">

                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left">
                                                <div className="font-semibold md:my-0 my-3">
                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                </div>
                                                <div className="text-white-dark">
                                                    <span className="handle px-2 ltr:mr-2 rtl:ml-2  dark:bg-black rounded cursor-move">
                                                        <MdDragIndicator />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ReactSortable>
                    </ul>
                </div>
                <div className={`panel ${showCategories ? 'col-span-9 ' : ''}`}>


                    <div>
                        <div className='md:flex justify-between'>
                            <div className='flex flex-wrap gap-2'>
                                <button className='btn shadow btn-sm font-bold' onClick={() =>
                                    window.innerWidth < 768 ? setShowDrawer(true) :
                                        setShowCategories(!showCategories)}>{showCategories || showDrawer ? <AiOutlineMenu /> : <IoMdArrowRoundBack />}</button>
                                <button className='btn shadow btn-sm font-bold'><IoMdSearch size={18} /> <span className='mx-2'>Search</span></button>
                                <button className='btn shadow btn-sm font-bold'>Action</button>
                                <button className='btn shadow btn-sm font-bold'>Quick Actions</button>
                                <button className='btn shadow btn-sm font-bold'><RiBatteryShareLine size={18} /></button>
                                <button className='btn shadow btn-sm font-bold'>Copy Menu</button>
                                <button className='btn shadow btn-sm font-bold btn-dark'>Save</button>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <button className='btn shadow btn-sm font-bold'>Priority Wise</button>
                                <button className='btn shadow btn-sm font-bold'>Available</button>
                                <button className='btn shadow btn-sm font-bold btn-dark'
                                    onClick={() => setPage('add-item')}
                                ><IoMdAdd /><span className='mx-2'>Add Items</span> </button>
                            </div>
                        </div>
                    </div>



                    <div className="datatables mt-4">
                        <DataTable
                            className="whitespace-nowrap table-hover"
                            records={recordsData}
                            columns={[

                                {
                                    accessor: 'item_name',
                                    sortable: true,
                                    title: 'Name',
                                    render: (item_name) => <input type="text" className="form-input w-auto" value={item_name.item_name} />,
                                },


                                {
                                    accessor: 'price',
                                    sortable: true,
                                    title: 'Price',
                                    render: (item) => <input type="text" className="form-input w-100" value={item.price} />,
                                },

                                {
                                    accessor: 'description',
                                    sortable: true,
                                    title: 'Description',
                                    render: (item) => <input type="text" className="form-input w-100" value={item.description} />,
                                },


                                {
                                    accessor: 'item_image',
                                    sortable: false,
                                    title: 'Image',
                                    titleClassName: '!text-center',
                                    render: () => <button className='btn btn-white shadow btn-sm' onClick={() => setModal3(true)}>Browse</button>,
                                },


                                {
                                    accessor: 'action',
                                    sortable: false,
                                    title: 'Action',
                                    titleClassName: '!text-center',
                                    render: () => (
                                        <div className="flex items-center w-max mx-auto gap-2">
                                            <Tippy content="Edit">
                                                <button type="button">
                                                    <FaEye size={18} />
                                                </button>
                                            </Tippy>
                                            <Tippy content="Edit">
                                                <button type="button" onClick={() => setPage('edit-item')}>
                                                    <MdEdit size={18} />
                                                </button>
                                            </Tippy>
                                            <Tippy content="Delete">
                                                <button type="button">
                                                    <FaBook size={18} />
                                                </button>
                                            </Tippy>
                                        </div>
                                    ),
                                },
                            ]}
                            highlightOnHover
                            totalRecords={initialRecords.length}
                            recordsPerPage={pageSize}
                            page={page}
                            onPageChange={(p) => setPage(p)}
                            recordsPerPageOptions={PAGE_SIZES}
                            onRecordsPerPageChange={setPageSize}
                            sortStatus={sortStatus}
                            onSortStatusChange={setSortStatus}
                            selectedRecords={selectedRecords}
                            onSelectedRecordsChange={setSelectedRecords}
                            minHeight={200}
                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                        />
                    </div>






                    <div className="mb-5">

                        <Transition appear show={modal3} as={Fragment}>
                            <Dialog as="div" open={modal3} onClose={() => setModal3(true)}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0" />
                                </Transition.Child>
                                <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                                    <div className="flex items-start justify-center min-h-screen px-4">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                                    <div className="font-bold text-lg">Upload Image For Item Name</div>
                                                    <button type="button" onClick={() => setModal3(false)} className="text-white-dark hover:text-dark">
                                                        <IoCloseSharp className='m-auto' />
                                                    </button>
                                                </div>
                                                <div className="p-5">

                                                    <div>
                                                        <span className='btn btn-sm shadow w-20'>Browse</span>
                                                    </div>

                                                    <div className='flex justify-around mt-4'>

                                                        <div className='text-center'>
                                                            <label htmlFor="">Online Site</label>
                                                            <div className='bg-white-light/30  relative flex-none'>
                                                                <img className='w-[150px] h-[150px] object-cover' src="https://menu.petpooja.com/structure_new/images/No-Image-Placeholder 1.svg" alt="" />
                                                                <div className="absolute top-0 ltr:right-0 rtl:left-0 m-1">
                                                                    <div className="w-6 h-6 bg-white rounded  flex">
                                                                        <IoCloseSharp className='m-auto' />
                                                                    </div>
                                                                </div>
                                                                <div className="absolute bottom-0 ltr:right-0 rtl:left-0 m-1">
                                                                    <div className="w-6 h-6 bg-white rounded  flex">
                                                                        <MdModeEdit className='m-auto' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='text-center'>
                                                            <label htmlFor="">Kisok</label>
                                                            <div className='bg-white-light/30  relative flex-none'>
                                                                <img className='w-[150px] h-[150px] object-cover' src="https://menu.petpooja.com/structure_new/images/No-Image-Placeholder 1.svg" alt="" />
                                                                <div className="absolute top-0 ltr:right-0 rtl:left-0 m-1">
                                                                    <div className="w-6 h-6 bg-white rounded  flex">
                                                                        <IoCloseSharp className='m-auto' />
                                                                    </div>
                                                                </div>
                                                                <div className="absolute bottom-0 ltr:right-0 rtl:left-0 m-1">
                                                                    <div className="w-6 h-6 bg-white rounded  flex">
                                                                        <MdModeEdit className='m-auto' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* <div className='h-100'>
                                                        <Cropper
                                                            image={'https://www.geeky-gadgets.com/wp-content/uploads/2023/09/How-to-train-AI-to-recognize-images.jpg'}
                                                            crop={crop}
                                                            zoom={zoom}
                                                            aspect={1 / 1}
                                                            onCropChange={setCrop}
                                                            onCropComplete={onCropComplete}
                                                            onZoomChange={setZoom}
                                                        />
                                                    </div> */}
                                                    <div className="flex justify-end items-center mt-8">
                                                        <button type="button" onClick={() => setModal3(false)} className="btn btn-outline-danger">
                                                            Discard
                                                        </button>
                                                        <button type="button" onClick={() => setModal3(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    )
}
