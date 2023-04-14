import React from 'react'

function Header() {
  return (
    <header className='flex justify-between p-3 px-6 items-center fixed top-0 inset-x-0 h-16 bg-white border-b-[1px] border-grey    '>
        <div className='flex gap-x-2'>
            <img className='rounded-full w-7 h-7' src="/user.jpg" alt="" />
            <select className='bg-[transparent] text-text hidden md:block'>
                <option value=""> abbasebadian</option>
            </select>
            <span className='bi bi-chevron-down text-text md:hidden'>
                
            </span>
            <span className='bi bi-search text-text'></span>
        </div>
        <div>
            
            <img src="/logo-sm.png" className='md:hidden w-[30px]' alt="logo" />
            <img src="/logo.png"    className='hidden md:block w-[144px]' alt="logo" />
        </div>
        <div>
            <i className="text-text text-xl bi bi-plus-circle"></i>
            <i className="text-text text-xl bi bi-globe-central-south-asia mx-5"></i>
            <i className="text-text text-xl bi bi-chat-left"></i>
        </div>
    </header>
  )
}

export default Header