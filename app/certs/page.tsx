"use client";
import React, { useState } from 'react';
import SearchCode from '@/components/certs/SearchCode';
import SearchDNI from '@/components/certs/SearchDNI';
import SearchName from '@/components/certs/SearchName';
import { BsQrCodeScan } from "react-icons/bs";
import { BsPersonVcard, BsPersonSquare } from "react-icons/bs";
import Image from 'next/image';
import './Styles.css';
import Whatsapp from '@/components/whatsapp/Index';
//import Whatsapp from '@/components/whatsapp/Index';

const Certificate: React.FC = () => {

  const [isActive, setIsActive] = useState(false);
  const [searchType, setSearchType] = useState<string | null>(null);

  const handleButton = (type: string) => {
    setSearchType(type);
    setIsActive(true);
  };

  const handleSearch = (data: string) => {
    console.log(data);
  };

  return (
  <section id='/certs'  className='relative pt-20 pb-20 p-2 items-center justify-center bg-gray-700'>
    <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-45 blur-sm">
      <video autoPlay muted loop className='w-full h-full object-cover'>
        <source src='/video-certs.webm' type='video/mp4' />
      </video>
    </div>
    <div className=" max-w-screen-lg mx-auto  bg-gray-700/50 shadow-customOrange backdrop-blur-md rounded-3xl text-center md:mb-20 relative">
      <div className='grid md:grid-cols-3 md:py-10'>
      <div className="md:col-span-1 text-5xl font-extrabold text-gray-500 md:flex md:justify-center">
        <div className='flex justify-center md:inline-block mb-4 lg:gap-32 gap-6'>
          <Image src={'/logo/unp.png'} className="md:w-44 md:h-auto w-28 h-auto object-contain md:mt-2 mt-6 md:mx-auto md:mb-10" width={800} height={700} alt='logo_promas'  priority={true}/>
          <Image src={'/logo/rizo.png'} className="md:w-[124px] md:h-auto w-[85px] h-auto object-contain md:mt-2 mt-6 md:mx-auto md:mb-10" width={800} height={700} alt='logo_promas'  priority={true}/>
          <Image src={'/logo/cip.png'} className="md:w-36 md:h-auto w-24 h-auto object-contain md:mt-2 mt-6 md:mx-auto" width={800} height={700} alt='logo_promas'  priority={true}/>
        </div>
      </div>
        <div className="md:col-span-2">
          <h2 className="mb-4 md:mb-10 md:mt-10 mt-20 md:text-6xl text-4xl font-extrabold uppercase bg-gradient-to-r from-customOrange to-customYellow text-transparent bg-clip-text">
            Certificados
          </h2>
          <p className="font-extrabold text-white sm:text-xl">
            Valida la b&uacute;squeda de certificados de los diferentes eventos ofrecidos por Corporaci&oacute;n RIZO.
          </p>
          <p className="mb-6 mt-6 md:mt-10 text-xl tracking-tight font-extrabold text-white">
            Buscar por:
          </p>
          <div className='grid justify-center items-center text-center'>
            <button
            onClick={() => handleButton('documentNumber')}
            className={`md:mb-10 mb-4 font-bold border border-customYellow rounded-lg text-md px-5 py-3 text-customYellow text-center inline-block hover:text-customPurple800 hover:bg-customYellow hover:scale-110 duration-300
              ${searchType === 'documentNumber' && ''}`}>
              <BsPersonVcard className='text-xl inline-block align-text-top mr-2' />Buscar por DNI
            </button>
            <button
            onClick={() => handleButton('name')}
            className={`md:mb-10 mb-4 border border-customYellow font-bold rounded-lg text-md px-5 py-3 text-customYellow text-center hover:text-customPurple800 hover:bg-customYellow hover:scale-110 duration-300
              ${searchType === 'name' && ''}`}>
              <BsPersonSquare className='text-lg inline-block align-text-top mr-2' />Buscar por nombre
            </button>
            <button
            onClick={() => handleButton('code')}
            className={`md:mb-10 mb-5 font-bold border border-customYellow rounded-lg text-customYellow text-md px-5 py-3 text-center inline-block hover:text-customPurple800 hover:bg-customYellow hover:scale-110 duration-300
            ${searchType === 'code' && ''}`}>
              <BsQrCodeScan className='text-lg inline-block align-text-top mr-2' /> Buscar por código
            </button>
          </div>
          </div>
        </div>
      {isActive && (
        <div className='w-full'>
          {searchType === 'documentNumber' && (<SearchDNI onSearchDNI={handleSearch} />)}
          {searchType === 'name' && (<SearchName onSearchName={handleSearch} />)}
          {searchType === 'code' && (<SearchCode onSearchCode={handleSearch} />)}
        </div>
      )}
    </div>
  <Whatsapp />
  </section>
  )
}

export default Certificate;