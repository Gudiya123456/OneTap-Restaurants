import React, { useState } from 'react'
import Variant from './Variant';
import AddVariant from './AddVariant';

export default function Index() {

    const [action, setAction] = useState('variant');
    return (
        <div>
            {action == "variant" ? <Variant setAction={setAction} /> :
                action == "add-variant" ? <AddVariant setAction={setAction} /> : ''}
        </div>
    )
}
