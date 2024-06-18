import React, { useState } from 'react'
import Item from './Item';
import AddItem from './AddItem';
import EditItem from './EditItem';

export default function Index() {
    const [page, setPage] = useState('item');


    return (
        <div>
            {page == "item" ? <Item setPage={setPage} />
                : page == "add-item" ? <AddItem setPage={setPage} />
                    : page == "edit-item" ? <EditItem setPage={setPage} />
                        : ''}
        </div>
    )
}
