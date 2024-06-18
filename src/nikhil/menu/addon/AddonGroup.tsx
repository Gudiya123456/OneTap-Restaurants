import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FiTrash2 } from "react-icons/fi";
const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

export default function AddonGroup({ setAction }: any) {
    return (

        <form action="" className='m-4 panel'>

            <b>Department Details:</b>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                    <label >Department Name</label>
                    <input type="text" placeholder="Enter Category Name" className="form-input" />
                </div>
                <div>
                    <label >Online Display Name</label>
                    <input type="text" placeholder="Enter Category Name" className="form-input" />
                </div>

                <div>
                    <label >Addon Min</label>
                    <input type="text" placeholder="Enter Category Name" className="form-input" />
                </div>

                <div>
                    <label >Addon Max</label>
                    <input type="text" placeholder="Enter Category Name" className="form-input" />
                </div>



                <div>
                    <label >Addon Item Selection</label>
                    <select name="" id="" className="form-select" >
                        <option value="">One</option>
                        <option value="">Two</option>
                    </select>
                </div>

                <div>
                    <label >Max Selection Per Addon Allowed</label>
                    <input type="text" placeholder="Enter Category Name" className="form-input" />
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <label className="inline-flex">
                    <input type="radio" name="default_radio" className="form-radio text-dark" defaultChecked />
                    <span>Show in Online</span>
                </label>

                <label className="inline-flex">
                    <input type="radio" name="default_radio" className="form-radio text-dark" />
                    <span>Allow Open Quantity</span>
                </label>
            </div>

            <b>Addon Group Item Details:</b>


            <div className="table-responsive mb-5">
                <table className="table-hover">
                    <thead>
                        <tr>
                            <th>Department Name </th>
                            <th>Price </th>
                            <th>Sap Code</th>
                            <th>Attributes </th>
                            <th>Status </th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>
                                        <div className="whitespace-nowrap">

                                            <input type="text" placeholder="" className="form-input" required /></div>
                                    </td>
                                    <td><input type="text" placeholder="" className="form-input" required /></td>
                                    <td><input type="text" placeholder="" className="form-input" required /></td>
                                    <td>
                                        <select name="" id="" className='form-select'>
                                            <option value="">Veg</option>
                                            <option value="">Non-Veg</option>
                                            <option value="">Egg</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label className="w-12 h-6 relative">
                                            <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                                            <span className="outline_checkbox bg-icon border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute before:left-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center peer-checked:before:left-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
                                        </label>
                                    </td>
                                    <td className="text-center">
                                        <Tippy content="Delete">
                                            <button type="button">
                                                <FiTrash2 size={18} />
                                            </button>
                                        </Tippy>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className='my-4 m-auto'>
                <button className='btn shadow'>Add New</button>
            </div>


            <div className='flex justify-end gap-4 bg-[#DBE7FF] p-4 rounded'>
                <button className='btn btn-sm shadow bg-white' onClick={() => setAction('addon')}>Cancel</button>
                <button className='btn btn-sm btn-dark shadow'>Save Changes</button>
            </div>
        </form>
    )
}
