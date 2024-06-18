import React, { useState, Fragment, useEffect, useCallback } from 'react'



import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';

import 'tippy.js/dist/tippy.css';
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaBook } from "react-icons/fa";
const rowData = [
    {
        id: 1,
        item_name: 'BBQ Gun(full Leg)',
        online_display_name: 'BBQ Gun(full Leg)',
        price: '500',
        rank: 1,
        created_at: '2004-05-28',
        updated_at: '2004-05-28',
        item_image: '+1 (821) 447-3782',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 2,
        item_name: 'BBQ Strips',
        online_display_name: 'BBQ Strips',
        price: '750',
        rank: 2,
        created_at: '2004-05-28',
        updated_at: '2004-05-28',
        item_image: '+1 (838) 515-3408',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    },
    {
        id: 2,
        item_name: 'BBQ Strips 2',
        online_display_name: 'BBQ Strips 2',
        price: '350',
        rank: 3,
        created_at: '2004-05-28',
        updated_at: '2004-05-28',
        item_image: 'sssss',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    }
];

export default function Category({ setAction }: any) {




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
        <div className='mt-4'>
            <div className='flex gap-2 flex-wrap justify-between'>
                <div className='flex gap-4'>
                    <input type="text" placeholder="search" className="form-input py-0" required />
                    <select name="" id="" className="form-select py-0">
                        <option value="">One</option>
                    </select>
                    <button className='btn btn-sm btn-dark shadow whitespace-nowrap'>Search</button>
                    <button className='btn btn-sm  shadow whitespace-nowrap'>Show All</button>
                </div>
                <div className='flex gap-4'>
                    <button className='btn btn-sm btn-dark shadow whitespace-nowrap' onClick={() => setAction('add-category')}>Add Category</button>
                    <button className='btn btn-sm  shadow whitespace-nowrap'>Action</button>
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
                            render: (item_name) => <div><b>{item_name.item_name}</b> <br />(Parent Category : NON-VEG)</div>,
                        },


                        {
                            accessor: 'online_display_name',
                            sortable: true,
                            title: 'Online Display Name',
                            render: (item) => item.online_display_name,
                        },

                        {
                            accessor: 'rank',
                            sortable: true,
                            title: 'Rank',
                            render: (item) => item.rank,
                        },


                        {
                            accessor: 'item_image',
                            sortable: false,
                            title: 'Status',
                            render: () => <label className="w-12 h-6 relative">
                                <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                                <span className="outline_checkbox bg-icon border-2 border-danger dark:border-white-dark block h-full rounded-full before:absolute before:left-1 before:bg-danger dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center peer-checked:before:left-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-success peer-checked:before:bg-success before:transition-all before:duration-300"></span>
                            </label>,
                        },

                        {
                            accessor: 'item_image',
                            sortable: false,
                            title: 'Created At',
                            render: (item) => item.created_at,
                        },

                        {
                            accessor: 'item_image',
                            sortable: false,
                            title: 'Modified At',
                            render: (item) => item.updated_at,
                        },


                        {
                            accessor: 'action',
                            sortable: false,
                            title: 'Action',
                            titleClassName: '!text-center',
                            render: () => (
                                <div className="flex items-center w-max mx-auto gap-2">

                                    <Tippy content="Edit">
                                        <button type="button" onClick={() => setAction('edit-item')}>
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
                    onPageChange={(p) => setPages(p)}
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


        </div>
    )
}
