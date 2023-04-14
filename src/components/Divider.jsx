import React from 'react'

function Divider({title}) {
  return (
    <div className='flex gap-x-3 items-center mt-20 mb-4'>
        <span className="bi bi-dash-circle text-xl text-primary"></span>
        <span className='text-text'> {title}</span>
        <span className='bg-grey grow h-[2px]'></span>
    </div>
  )
}

export default Divider