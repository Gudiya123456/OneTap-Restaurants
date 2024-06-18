import React, { useState } from 'react'
import Group from './Group';
import AddGroup from './AddGroup';

export default function Index() {
    const [action, setAction] = useState('group');
    return (
        <div>
            {action == "group" ? <Group setAction={setAction} /> :
                action == "add-group" ? <AddGroup setAction={setAction} /> :
                    ''}
        </div>
    )
}
