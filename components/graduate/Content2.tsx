import React from 'react'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { PiCalendarFill } from "react-icons/pi";
import { HiVideoCamera } from "react-icons/hi2";
import { MdCalendarMonth } from "react-icons/md";
import { MdAlarmOn } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const Content2 = () => {
  return (
    <div className="">
      <h2 className=" flex justify-center text-5xl font-extrabold mb-10 bg-gradient-to-r from-customPurple300 to-customOrange text-transparent bg-clip-text p-2">Ingeniería de puentes</h2>
    <div className='grid md:grid-cols-2 grid-cols-1'>
    <div className="flex justify-center mb-4 md:mb-0">
      <Image src="/phone.png" alt="Descripción de la imagen 1" width={400} height={300} className='h-96 w-auto'/>
    </div>

    <div className="">
      <div className='flex items-center mb-5'>
        <PiCalendarFill className='text-5xl text-customOrange mr-2'/>
        <p className="text-2xl font-bold text-customPurple300">Inicio 18 de abril</p>
      </div>
      <div className='flex items-center mb-5'>
        <HiVideoCamera className='text-5xl border rounded-full p-2 bg-blue-500 text-white mr-2'/>
        <p className="text-2xl font-bold text-customPurple300">Modalidad Online via Zoom</p>
      </div>
      <div className='flex items-center mb-5'>
        <MdCalendarMonth className='text-5xl text-customOrange mr-2'/>
        <p className="text-2xl font-bold text-customPurple300">Duración 4 meses </p>
      </div>
      <div className='flex items-center mb-5'>
        <MdAlarmOn className='text-5xl text-customOrange mr-2 flex-shrink-0'/>
        <p className="text-2xl font-bold text-customPurple300">420 horas académicas (26 créditos)</p>
      </div>
    <div className='grid justify-between gap-4 md:grid-cols-2 grid-cols-1'>
      <button className="bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:bg-gradient-to-bl hover:scale-110 duration-300 text-white w-full font-bold py-4 px-4 rounded-xl mt-4 flex items-center">
        Más información
        <BsWhatsapp className='ml-4 text-2xl text-green-500'/>
      </button>
      <button className="bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:bg-gradient-to-bl hover:scale-110 duration-300 text-white w-full font-bold py-4 px-4 rounded-xl mt-4 flex items-center">
        Plan de estudios
        <FaRegFilePdf className='ml-4 text-2xl text-red-500'/>
      </button>
    </div>
    <div className='flex justify-between'>
      <button className="flex justify-between bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:bg-gradient-to-bl hover:scale-110 duration-300 text-white w-full font-bold py-4 px-4 rounded-xl mt-4 flex items-center">
        Lista de módulos
        <FaPlusCircle className='text-2xl'/>
      </button>
    </div>
      <div className="flex items-center mt-4">
        <span className="mr-2">Más información</span>
        <FaArrowRight />
      </div>
    </div>

    </div>
  </div>
  )
}

export default Content2;