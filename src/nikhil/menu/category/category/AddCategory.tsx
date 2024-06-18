import React from 'react'

export default function AddCategory({ setAction }: any) {
    return (
        <div>

            <form action="" className='mt-4'>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label >Category Name</label>
                        <input type="text" placeholder="Enter Category Name" className="form-input" />
                    </div>
                    <div>
                        <label >Category Group</label>
                        <select name="" id="" className="form-select" >
                            <option value="">One</option>
                            <option value="">Two</option>
                        </select>
                    </div>
                    <div>
                        <label >Online Display Name</label>
                        <input type="text" placeholder="Enter Online Display Name" className="form-input" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label >Logo</label>
                        <input type="file" placeholder="Enter Category Name" className="form-input" />
                    </div>
                    <div>
                        <label >Swiggy Image</label>
                        <input type="file" placeholder="Enter Category Name" className="form-input" />
                    </div>
                    <div>
                        <label >Kiosk Image</label>
                        <input type="file" placeholder="Enter Category Name" className="form-input" />
                    </div>
                </div>

                <div className='mb-4'>
                    <label htmlFor="gridPassword">Status</label>
                    <label className="w-12 h-6 relative">
                        <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                        <span className="outline_checkbox bg-icon border-2 border-danger dark:border-white-dark block h-full rounded-full before:absolute before:left-1 before:bg-danger dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center peer-checked:before:left-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-success peer-checked:before:bg-success before:transition-all before:duration-300"></span>
                    </label>
                </div>

                <div className='flex justify-end gap-4 bg-[#DBE7FF] p-4 rounded'>
                    <button className='btn btn-sm shadow bg-white' onClick={() => setAction('category')}>Cancel</button>
                    <button className='btn btn-sm btn-dark shadow'>Save Changes</button>
                </div>
            </form>
        </div>
    )
}
