import React, { useState } from 'react'
import Category from './Category';
import AddCategory from './AddCategory';

export default function Index() {

    const [action, setAction] = useState('category');
    return (
        <div>
            {action == "category" ? <Category setAction={setAction} /> :
                action == "add-category" ? <AddCategory setAction={setAction} /> :
                    ''}
        </div>
    )
}
