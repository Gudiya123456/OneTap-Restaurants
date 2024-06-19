import React from 'react'

export default function PaymentCard({ title, imageSrc }) {
  return (
    <div>
         <div className="border bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
        <img  src={imageSrc} alt={title} className="mb-4 h-20 w-20 object-contain" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <button  className="text-yellow-500">Explore Now &gt;</button>

    </div>
    </div>
  )
}
