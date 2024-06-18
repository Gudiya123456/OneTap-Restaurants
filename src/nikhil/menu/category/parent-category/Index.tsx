import React, { useState } from 'react'
import ParentCategory from './ParentCategory';
import AddparentCategory from './AddparentCategory';

export default function Index() {
    const [action, setAction] = useState('parent-category');
    return (
        <div>
            {action == 'parent-category' ? <ParentCategory setAction={setAction} /> :
                action == 'add-parent-category' ? <AddparentCategory setAction={setAction} />
                    : ''}
        </div>
    )
}
