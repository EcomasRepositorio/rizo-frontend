"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { useState } from 'react';
import { FaUserCog } from "react-icons/fa";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    animate="show"
    className= 'fixed z-50 mx-auto lg:pl-80 md:pl-0 backdrop-blur'
  >
      <nav className="w-full top-0 left-0 right-0 md:mx-auto">
      <div className='max-w-screen-xl flex items-center justify-center mx-auto p-0.5'>
        <div className='md:text-right text-center font-extrabold w-full border-b border-violet-500 py-1'>
          <Link href='/' className='hover:underline mr-4 text-[#FFD700] hover:text-white'>Verificar certificado</Link>
          <Link href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
            className='hover:underline mr-3 text-[#FFD700] hover:text-white'>Aula Virtual</Link>
        </div>
      </div>
        <div className="justify-between px-2 py-1 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex backdrop-blur">
          <div>
            <div className="items-center inline-flex justify-between md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo/LOGO-NAVBAR.png"
                  width={800}
                  height={800}
                  alt="rizo-logo"
                  className='w-40 h-auto mb-4'
                  priority={true}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden ml-44">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={40} height={40} alt="logo" className="text-white" priority={true}/>
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                      priority={true}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-10 md:text-[15px] text-xl lg:pl-20 items-center justify-center md:flex">
                <li className="font-extrabold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-[#FFD700] rounded transition-transform transform hover:scale-110">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="font-extrabold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-[#FFD700] rounded transition-transform transform hover:scale-110">
                  <Link href="/certificate" onClick={() => setNavbar(!navbar)}>
                    Certificado
                  </Link>
                </li>
                <li className="font-extrabold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-[#FFD700] rounded transition-transform transform hover:scale-110">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>
                <li className="font-extrabold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-[#FFD700] rounded transition-transform transform hover:scale-110">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="font-extrabold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-4 py-1 px-6 text-center md:border-b-0 hover:bg-[#FFD700] rounded transition-transform transform hover:scale-110">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    ¡Inscribete!
                  </Link>
                </li>
                <li className="lg:pl-20 flex  justify-center items-center hover:text-[#6D0083] md:mt-0 mt-20">
                  <Link href="/" className="bg-[#6D0083] py-1 px-4 rounded-xl text-[#FFD700] hover:bg-gray-100 hover:text-[#FFD700] hover:scale-125 duration-300">
                    <FaUserCog className='md:text-xl text-4xl'/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </motion.nav>
  );
}

export default Navbar;