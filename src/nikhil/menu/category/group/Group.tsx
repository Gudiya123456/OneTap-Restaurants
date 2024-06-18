import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdEdit } from "react-icons/md";
import { FaBook } from "react-icons/fa";
const tableData = [
    {
        id: 1,
        department_name: 'John Doe',
        sac_code: 'johndoe@yahoo.com',
        category: 'category,category,category',
        rank: '10/08/2020',
        status: 'Complete',
        created_at: '10/08/2020',
        updated_at: '10/08/2020',
    },



    {
        id: 2,
        department_name: 'John Doe',
        sac_code: 'johndoe@yahoo.com',
        category: 'category,category,category',
        rank: '10/08/2020',
        status: 'Complete',
        created_at: '10/08/2020',
        updated_at: '10/08/2020',
    },
    {
        id: 3,
        department_name: 'John Doe',
        sac_code: 'johndoe@yahoo.com',
        category: 'category,category,category',
        rank: '10/08/2020',
        status: 'Complete',
        created_at: '10/08/2020',
        updated_at: '10/08/2020',
    },
    {
        id: 4,
        department_name: 'John Doe',
        sac_code: 'johndoe@yahoo.com',
        category: 'category,category,category',
        rank: '10/08/2020',
        status: 'Complete',
        created_at: '10/08/2020',
        updated_at: '10/08/2020',
    },
];

export default function Group({ setAction }: any) {
    return (
        <div className='mt-4'>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <input type="text" placeholder="search" className="form-input py-0" required />
                    <button className='btn btn-sm btn-dark shadow whitespace-nowrap'>Search</button>
                    <button className='btn btn-sm  shadow whitespace-nowrap'>Show All</button>
                </div>
                <div className='flex gap-4'>
                    <button className='btn btn-sm btn-dark shadow whitespace-nowrap' onClick={() => setAction('add-group')}>Add Group</button>
                    {/* <button className='btn btn-sm  shadow whitespace-nowrap'>Action</button> */}
                </div>
            </div>

            <div className="table-responsive mt-4">
                <table className="table-hover">
                    <thead>
                        <tr>
                            <th>Department Name</th>
                            <th>SAC Code</th>
                            <th>Category</th>
                            <th>Rank</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Modified At</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => {

                            return (
                                <tr key={data.id}>
                                    <td>
                                        <div className="whitespace-nowrap">{data.department_name}</div>
                                    </td>
                                    <td>{data.sac_code}</td>
                                    <td>{data.category}</td>
                                    <td>{data.rank}</td>
                                    <td>
                                        <div
                                            className={`whitespace-nowrap ${data.status === 'completed'
                                                ? 'text-success'
                                                : data.status === 'Pending'
                                                    ? 'text-secondary'
                                                    : data.status === 'In Progress'
                                                        ? 'text-info'
                                                        : data.status === 'Canceled'
                                                            ? 'text-danger'
                                                            : 'text-success'
                                                }`}
                                        >
                                            {data.status}
                                        </div>
                                    </td>
                                    <td>{data.created_at}</td>
                                    <td>{data.updated_at}</td>
                                    <td className="text-center">
                                        <Tippy content="Edit">
                                            <button type="button" >
                                                <MdEdit size={18} />
                                            </button>
                                        </Tippy>
                                        <Tippy content="Delete">
                                            <button type="button">
                                                <FaBook size={18} />
                                            </button>
                                        </Tippy>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
