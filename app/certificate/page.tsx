"use client";
import React, { useState } from 'react';
import SearchCode from '@/components/certificate/SearchCode';
import SearchDNI from '@/components/certificate/SearchDNI';
import SearchName from '@/components/certificate/SearchName';
import { BsQrCodeScan } from "react-icons/bs";
import { BsPersonVcard, BsPersonSquare } from "react-icons/bs";
import Image from 'next/image';
import './Styles.css';
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
  <section id='/certs'  className='relative pt-48 pb-20 p-2 items-center justify-center bg-customPurple300'>
    <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-50 blur-sm">
      <video autoPlay muted loop className='w-full h-full object-cover'>
        <source src='/video.webm' type='video/mp4' />
      </video>
    </div>
    <div className="max-w-screen-lg mx-auto rounded-3xl text-center lg:mb-20 p-4 relative">
      <div className="mb-4 lg:mt-0 justify-center text-5xl font-extrabold tracking-tight text-gray-500">
      <div className='flex justify-center mb-4 lg:gap-32 gap-8'>
        <Image src={'/logo/logo-certificate.png'} className="lg:w-44 lg:h-48 w-32 h-32 object-contain lg:mt-8 mt-7" width={800} height={700} alt='logo_promas'  priority={true}/>
        <Image src={'/logo/unp-piura.png'} className="lg:w-40 lg:h-36 w-32 h-32 object-contain mt-12" width={800} height={800} alt='logo_promas'  priority={true}/>
      </div>
      </div>
        <div className="">
          <h2 className="mb-4 mt-20 md:text-5xl text-4xl font-extrabold text-customOrange uppercase">
            Certificados
          </h2>
          <p className="font-extrabold text-white sm:text-xl lg:px-36">
            En este módulo podrá realizar la búsqueda de certificados de los diferentes eventos ofrecidos por coporación RIZO.
          </p>
          <p className="mb-6 mt-6 lg:mt-10 text-xl tracking-tight font-extrabold text-white">
            Buscar por:
          </p>
          <div className='lg:flex flex-wrap justify-center items-center text-center lg:ml-40 lg:mr-40'>
            <button
            onClick={() => handleButton('documentNumber')}
            className={`lg:mb-20 mb-4 font-bold border border-customOrange rounded-lg text-md px-7 py-3 text-customOrange text-center inline-block hover:text-customPurple800 hover:bg-customYellow hover:scale-110 duration-300
              ${searchType === 'documentNumber' && ''}`}>
              <BsPersonVcard className='text-xl inline-block align-text-top mr-2' />Buscar por DNI
            </button>
            <button
            onClick={() => handleButton('name')}
            className={`lg:mb-20 mb-4 ml-6 mr-6 border border-customOrange font-bold rounded-lg text-md px-3 py-3 text-customOrange text-center hover:text-customPurple800 hover:bg-customYellow hover:scale-110 duration-300
              ${searchType === 'name' && ''}`}>
              <BsPersonSquare className='text-lg inline-block align-text-top mr-2' />Buscar por nombre
            </button>
            <button
            onClick={() => handleButton('code')}
            className={`lg:mb-20 mb-5 font-bold border border-customOrange rounded-lg text-customOrange text-md px-4 py-3 text-center inline-block hover:text-customPurple800 hover:bg-customYellow hover:scale-110 duration-300
            ${searchType === 'code' && ''}`}>
              <BsQrCodeScan className='text-lg inline-block align-text-top mr-2' /> Buscar por código
            </button>
          </div>

          {isActive && (
        <div>
          {searchType === 'documentNumber' && (<SearchDNI onSearchDNI={handleSearch} />)}
          {searchType === 'name' && (<SearchName onSearchName={handleSearch} />)}
          {searchType === 'code' && (<SearchCode onSearchCode={handleSearch} />)}
        </div>
      )}
        </div>
    </div>
    {/* <Whatsapp /> */}
  </section>
  )
}

export default Certificate;