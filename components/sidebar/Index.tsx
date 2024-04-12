"use client";
import React, { useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";

const Sidebar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white py-3 top-0 left-0 right-0 shadow-md">
      <button className="ml-4" onClick={() => setOpen(true)}>
        <TfiMenuAlt />
      </button>

      <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={() => setOpen(false)}>
      </div>

      <div className={`${open ? 'w-80' : 'w-0'} bg-cyan-600 min-h-screen w-80 fixed top-0 left-0 z-50 transition-all duration-300`}>
        <div className={`${!open && 'hidden'} pt-3`}>
          <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
            <GrClose />
          </button>
          <div className='text-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 1</div>
          <div className='text-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 2</div>
          <div className='text-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 3</div>
          <div className='text-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 4</div>
          <div className='text-center text-white text-2xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 5</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar