import React from 'react'

export default function AddItem({ setPage }: any) {
    const tableData = [
        {
            id: 1,
            name: 'John Doe',
            category: 'johndoe@yahoo.com',
            price: '10/08/2020',
            description: 120,
            choice: 'Complete',
            type: '5 min ago',
            variation: '40%',
            addon: 'Developer',
        },

        {
            id: 2,
            name: 'John Doe',
            category: 'johndoe@yahoo.com',
            price: '10/08/2020',
            description: 120,
            choice: 'Complete',
            type: '5 min ago',
            variation: '40%',
            addon: 'Developer',
        },

        {
            id: 3,
            name: 'John Doe',
            category: 'johndoe@yahoo.com',
            price: '10/08/2020',
            description: 120,
            choice: 'Complete',
            type: '5 min ago',
            variation: '40%',
            addon: 'Developer',
        },

        {
            id: 4,
            name: 'John Doe',
            category: 'johndoe@yahoo.com',
            price: '10/08/2020',
            description: 120,
            choice: 'Complete',
            type: '5 min ago',
            variation: '40%',
            addon: 'Developer',
        },

        {
            id: 5,
            name: 'John Doe',
            category: 'johndoe@yahoo.com',
            price: '10/08/2020',
            description: 120,
            choice: 'Complete',
            type: '5 min ago',
            variation: '40%',
            addon: 'Developer',
        },

    ];
    return (
        <div className='m-4 panel'>
            <div className='flex gap-4 justify-end'>
                <button className='btn btn-sm btn-dark shadow' onClick={() => setPage('item')}>Save & Exit</button>
                <button className='btn btn-sm shadow'>Save & Add Menu Items</button>
                <button className='btn btn-sm shadow' onClick={() => setPage('item')}>Back</button>
            </div>

            <div className="table-responsive mb-5 mt-4">
                <table className="table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th >Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Choice</th>
                            <th >Type</th>
                            <th>Add Variation</th>
                            <th className="text-center">Add Addon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => {
                            return (
                                <tr key={data.id}>

                                    <td>
                                        <input type="text" className='form-input' />
                                    </td>

                                    <td>
                                        <select name="" id="" className='form-select'>
                                            <option disabled selected> Select Category</option>
                                            <option value="">BBQ</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" className='form-input' />
                                    </td>
                                    <td>
                                        <input type="text" className='form-input' />
                                    </td>


                                    <td>
                                        <select name="" id="" className='form-select'>
                                            <option disabled selected> Select Choice</option>
                                            <option value="Veg">Veg</option>
                                            <option value="Non-Veg">Non-Veg</option>
                                            <option value="Egg">Egg</option>
                                        </select>
                                    </td>


                                    <td>
                                        <select name="" id="" className='form-select'>
                                            <option disabled selected> Select Type</option>
                                            <option value="Dinein">Dinein</option>
                                            <option value="Pickup">Pickup</option>
                                            <option value="Online">Online</option>
                                            <option value="Delivery">Delivery</option>
                                        </select>
                                    </td>



                                    <td>
                                        <label className="inline-flex">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                        </label>
                                    </td>
                                    <td>
                                        <label className="inline-flex">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                        </label>
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
