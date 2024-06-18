import React from 'react'

export default function AddGroup({ setAction }: any) {
    return (
        <div className='mt-4'>
            <form action="">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                    <div>
                        <label >Group Name </label>
                        <input type="text" placeholder="Enter Group Name " className="form-input" />
                    </div>
                    <div>
                        <label >SAC Code</label>
                        <input type="text" placeholder="Enter SAC Code" className="form-input" />
                    </div>
                    <div>
                        <label >Parent Category</label>
                        <select name="" id="" className='form-select'>
                            <option value="">One</option>
                            <option value="">Two</option>
                        </select>
                    </div>
                </div>

                <div className='mb-2 mt-4'>
                    <b>Printer Settings</b>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mb-4">
                    <div>
                        <label >Restaurant Name</label>
                        <input type="text" placeholder="Enter Restaurant Name" className="form-input" />
                    </div>
                    <div>
                        <label >Logo</label>
                        <input type="file" className="form-input" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mb-4">
                    <div>
                        <label >Header Text</label>
                        <textarea name="" id="" className="form-textarea"></textarea>
                    </div>
                    <div>
                        <label >Footer Text</label>
                        <textarea name="" id="" className="form-textarea"></textarea>
                    </div>
                </div>

                <div className='flex justify-between mb-8 border-b-2'>
                    <div>
                        <b>Category</b>
                    </div>

                    <div>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Check All</span>
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">

                    <div className='flex flex-col gap-2'>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>One</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Two</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Three</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Four</span>
                        </label>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>One</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Two</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Three</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Four</span>
                        </label>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>One</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Two</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Three</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Four</span>
                        </label>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>One</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Two</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Three</span>
                        </label>
                        <label className="inline-flex">
                            <input type="checkbox" className="form-checkbox text-dark" />
                            <span>Four</span>
                        </label>
                    </div>
                </div>

                <div className='flex justify-end gap-4 bg-[#DBE7FF] p-4 rounded'>
                    <button className='btn btn-sm shadow bg-white' onClick={() => setAction('group')}>Cancel</button>
                    <button className='btn btn-sm btn-dark shadow'>Save Changes</button>
                </div>
            </form>
        </div>
    )
}
