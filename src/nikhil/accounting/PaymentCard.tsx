import React, { useState } from 'react'
import AddPaymentDrawer from './AddPaymentDrawer'

export default function PaymentCard({ title, imageSrc }) {
    const [showDrawer,setShowDrawer]=useState(false);
  return (
    <div>
            <AddPaymentDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
         <div className="border bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
        <img  src={imageSrc} alt={title} className="mb-4 h-20 w-20 object-contain" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <button onClick={()=>{setShowDrawer(true)}}  className="text-yellow-500">Explore Now &gt;</button>

    </div>
    </div>
  )
}
