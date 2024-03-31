"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { slideFromLeft } from '../utils/motion';
import { Fertirrigacion } from './modules';
import { FaWhatsapp } from "react-icons/fa6";
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
  <section>
    <div className="text-center text-5xl font-extrabold text-white bg-indigo-500 pt-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
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
      className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center max-w-screen-xl mx-auto">

      <div
        className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/fertirrigacion.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-3xl mb-4 text-gray-50 font-extrabold">
            Fertirrigación
          </h1>
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
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
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/INFORME-DE-OBRAS.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-3xl mb-4 text-gray-50 font-extrabold">
            Informe de obras
          </h1>
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
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
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
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
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/inpeccion-aliemetos.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-2xl text-gray-50 font-extrabold text-center">
            Inspección y muestreo de alimentos
          </h1>
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
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
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
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
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
          </div>
        </div>
      </div>

      <div className="card transform transition-transform cursor-pointer rounded-xl">
        <Image src="/course/esquema-22000.png" alt="" width={800} height={800}
          className="h-[500px] w-[440px] rounded-3 transition-transform hover:scale-110 hover:-rotate-3"/>
        <div className="intro">
          <h1 className="flex justify-center uppercase text-[25px] mb-4 text-gray-50 font-extrabold text-center">
            Esquema con fssc-22000
          </h1>
          <div className="p-2">
            {Fertirrigacion.map((module, index) => (
              <p key={index} className="inline-flex items-center font-semibold opacity-1 transition-opacity pb-2">
                <BsCaretRight className='text-center justify-center text-xl text-customPurple800'/>
                <span className='pl-2 items-center text-gray-700 font-bold'>{module.module}</span>
              </p>
            ))}
            <Link href='https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de Fertirriego' target='_blank'
              className='inline-flex font-extrabold bg-customPurple300 text-gray-200 mt-5 p-2 rounded-xl hover:scale-110 duration-300'>
              Más información
              <FaWhatsapp className='pl-2 text-3xl text-green-600'/>
            </Link>
          </div>
        </div>
      </div>

    </motion.div>
  </section>
  )
}

export default Course;