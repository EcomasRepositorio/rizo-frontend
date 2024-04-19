"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { slideFromLeft } from '../utils/motion';
import { texts } from './modules';
import { FaWhatsapp } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { InView } from "react-intersection-observer";
import Image from 'next/image';
import './Style.css'
import { BsCaretRight } from "react-icons/bs";
import Link from 'next/link';

const Course = () => {

  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
    setIsInView(true);
    }
  }, [inView]);

  return (
  <section className='bg-customPurple800'>
    <div className="text-center text-5xl font-extrabold text-white mb-10 pt-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate='visible'
        variants={slideFromLeft}
        className="inline-block">
        NUESTROS CURSOS
      </motion.div>
    </div>

    <motion.div
      //ref={ref}
      /* initial="hiden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideFromLeft} */
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center max-w-screen-xl mx-auto">

      <div
        className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/fertirrigacion.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-3xl mb-4 text-gray-50 font-extrabold">
            Fertirrigación
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex justify-center items-center font-semibold opacity-1 transition-opacity">
                <span className='items-center text-center text-gray-100 font-bold'>{module.fertirrigacion}</span>
              </p>
            ))}
            <div className='flex justify-center'>
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
                Más información
                <RiWhatsappFill className='pl-2 text-4xl text-green-700'/>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/Costos-con-S10.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-2xl text-gray-50 font-extrabold text-center">
            Costos y presupuestos con S10
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex items-center font-semibold opacity-1 transition-opacity">
                <span className='items-center text-gray-100 font-bold text-center'>{module.costos}</span>
              </p>
            ))}
            <div className='flex justify-center'>
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Costos y presupuestos con S10' target='_blank'
              className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
                Más información
                <RiWhatsappFill className='pl-2 text-4xl text-green-600'/>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/INFORME-DE-OBRAS.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-3xl mb-4 text-gray-50 font-extrabold text-center">
            Informe de obras
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex items-center font-semibold opacity-1 transition-opacity">
                <span className='items-center text-white font-bold text-center'>{module.obras}</span>
              </p>
            ))}
            <div className='flex justify-center'>
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Informe de obras' target='_blank'
              className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
                Más información
                <RiWhatsappFill className='pl-2 text-4xl text-green-600'/>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/MATENIMIENTO-EN-CARRETERAS-Y-PUENTES.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-2xl text-gray-50 font-extrabold text-center">
            Mantenimiento en carreteras y puentes
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex items-center font-semibold opacity-1 transition-opacity">
                <span className='items-center text-gray-100 font-bold text-center text-sm'>{module.puentes}</span>
              </p>
            ))}
            <div className='flex justify-center'>
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Mantenimiento en carreteras y puentes' target='_blank'
              className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
              Más información
              <RiWhatsappFill className='pl-2 text-4xl text-green-600'/>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/Metrados,-costos-y-presupuesto.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-2xl text-gray-50 font-extrabold text-center">
            Metrados, costos y presupuesto
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex items-center font-semibold opacity-1 transition-opacity">
                <span className='pl-2 items-center text-gray-100 font-bold text-center text-sm'>{module.metrados}</span>
              </p>
            ))}
            <div className='flex justify-center'>
              <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Metrados, costos y presupuesto' target='_blank'
                className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
                  Más información
                <RiWhatsappFill className='pl-2 text-4xl text-green-600'/>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/inpeccion-aliemetos.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-[22px] text-gray-50 font-extrabold text-center">
            Inspección y muestreo de alimentos
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex items-center font-semibold opacity-1 transition-opacity">
                <span className='items-center text-gray-100 font-bold text-center text-sm'>{module.alimentos}</span>
              </p>
            ))}
            <div className='flex justify-center'>
              <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Inspección y muestreo de alimentos' target='_blank'
                className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
                Más información
                <RiWhatsappFill className='pl-2 text-4xl text-green-600'/>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/FERTIRRIEGO-DE-CULTIVOS.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-2xl text-gray-50 font-extrabold text-center">
            Fertirriego de cultivos y monitoreo
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex items-center font-semibold opacity-1 transition-opacity">
                <span className='items-center text-gray-100 font-bold text-center text-sm'>{module.cultivos}</span>
              </p>
            ))}
            <div className='flex justify-center'>
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego de cultivos y monitoreo' target='_blank'
              className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
              Más información
              <RiWhatsappFill className='pl-2 text-4xl text-green-600'/>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/monitoreo-de-agua.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-2xl text-gray-50 font-extrabold text-center">
            Monitoreo de la calidad del agua
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex items-center font-semibold opacity-1 transition-opacity">
                <span className='items-center text-gray-100 font-bold text-center'>{module.agua}</span>
              </p>
            ))}
            <div>
              <div className='flex justify-center'>
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Monitoreo de la calidad del agua' target='_blank'
              className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
                Más información
                <RiWhatsappFill className='pl-2 text-4xl text-green-600'/>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/esquema-22000.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-2xl lg:mb-6 mb-4 text-gray-50 font-extrabold text-center">
            Esquema con fssc-22000
          </h1>
          <div className="p-1">
            {texts.map((module, index) => (
              <p key={index} className="flex items-center font-semibold opacity-1 transition-opacity">
                <span className='items-center text-gray-100 font-bold text-center text-sm'>{module.esquema}</span>
              </p>
            ))}
            <div className='flex justify-center'>
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Esquema con fssc-22000' target='_blank'
              className='inline-flex items-center font-extrabold bg-white text-customPurple800 mt-4 px-4 py-1 rounded-xl hover:scale-110 duration-300'>
              Más información
              <RiWhatsappFill className='pl-2 text-4xl text-green-600'/>
            </Link>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  </section>
  )
}

export default Course;