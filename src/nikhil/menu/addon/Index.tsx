import React, { useState } from 'react'
import Addon from './Addon';
import AddonGroup from './AddonGroup';
import AddAddon from './AddAddon';

export default function Index() {
    const [action, setAction] = useState('addon');
    return (
        <div>
            {action == "addon" ? <Addon setAction={setAction} /> :
                action == "addon-group" ? <AddonGroup setAction={setAction} /> :
                    action == "add-addon" ? <AddAddon setAction={setAction} /> : ''}
        </div>
    )
}
