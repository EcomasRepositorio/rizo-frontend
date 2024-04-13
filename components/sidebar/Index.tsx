"use client";
import React, { useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';
import { FaUserCog } from 'react-icons/fa';

const Sidebar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50'>
    <section className='bg-customPurple300'>
      <div className="py-3 shadow-md max-w-screen-xl mx-auto p-2 flex justify-between items-center flex-wrap lg:flex-nowrap">
        {/* Botón a la izquierda */}

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo/logo-navbar-3.png"
            width={800}
            height={800}
            alt="rizo-logo"
            className='w-48 h-auto'
            priority={true}
          />
        </Link>

        <button className="flex justify-center items-center md:hidden visible" onClick={() => setOpen(!open)}>
          {open ? <GrClose className='text-5xl text-customYellow z-50'/> : <TfiMenuAlt className='text-5xl text-customYellow' />}
        </button>

        <div className='flex gap-10 text-customYellow font-extrabold md:text-sm text-xs'>
        <Link href="/certs" className="flex justify-center items-center border-[3px] border-customYellow rounded-xl py-2 px-6">
          <span className='uppercase'>Verificar certificado</span>
        </Link>
        <Link href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3" target='_blank'
          className="flex justify-center items-center border-[3px] border-customYellow rounded-xl py-2 px-6">
          <span className='uppercase'>Aula virtual</span>
        </Link>
        </div>

        <button className="hidden md:flex justify-center items-center" onClick={() => setOpen(!open)}>
          {open ? <GrClose className='text-5xl text-customYellow z-50'/> : <TfiMenuAlt className='text-5xl text-customYellow' />}
        </button>

        {/* Menú lateral */}
        <div className={`${open ? 'block' : 'hidden'} bg-customPurple300 fixed w-80 z-50 lg:right-96 top-20 transition-all duration-300`}>
          <div className={`${open ? 'py-3' : 'hidden'}`}>
          <ul className="text-xl items-center justify-center">
                <li className="font-bold text-[#FFD700] hover:text-white mt-6 mb-10 py-1 px-1 text-center hover:bg-customYellow transition-transform transform hover:scale-110 w-60 mx-auto">
                  <Link href="/" onClick={() => setOpen(!open)}>
                    Inicio
                  </Link>
                </li>
                <li className="font-bold text-[#FFD700] hover:text-white mb-10 py-1 px-1 text-center hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125 w-60 mx-auto">
                  <Link href="/certs" onClick={() => setOpen(!open)}>
                    Certificado
                  </Link>
                </li>
                <li className="font-bold text-[#FFD700] hover:text-white mb-10 py-1 px-1 text-center hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125 w-60 mx-auto">
                  <Link href="/graduate" onClick={() => setOpen(!open)}>
                    Diplomados
                  </Link>
                </li>
                <li className="font-bold text-[#FFD700] hover:text-white mb-10 py-1 px-1 text-center hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125 w-60 mx-auto">
                  <Link href="/about" onClick={() => setOpen(!open)}>
                    Nosotros
                  </Link>
                </li>
                <li className="font-bold text-[#FFD700] hover:text-white mb-10 py-1 px-1 text-center hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125 w-60 mx-auto">
                  <Link href="/" onClick={() => setOpen(!open)}>
                    ¡Inscribete!
                  </Link>
                </li>
                <li className="flex  justify-center items-center hover:text-pink-600 mb-6">
                  <Link href="/login" className="bg-[#FFD700] py-1 px-4 rounded-xl text-[#6D0083] hover:bg-[#6D0083] hover:text-[#FFD700] hover:scale-125 duration-300">
                    <FaUserCog className='text-4xl'/>
                  </Link>
                </li>
              </ul>
          </div>
        </div>
        {/* Fondo gris */}
        {open && <div className="bg-customPurple800/50 opacity-90 min-h-screen h-full fixed top-0 left-0 w-full z-40 backdrop-blur-md" onClick={() => setOpen(false)}></div>}
      </div>
    </section>
    </div>
  )
}

export default Sidebar
