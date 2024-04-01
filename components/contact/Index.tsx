import Image from 'next/image';
import React from 'react'
import { BsAlarmFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  return (
    <section className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-customPurple300 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='relative font-bold text-4xl tracking-wide z-10'>Contactanos</h1>
            </div>
            <div className='relative z-10'>
              <Image
                src="/contact.jpg"
                alt='rizo contacto'
                width={800}
                height={800}
                className='w-96 h-56 rounded-xl'/>
            </div>
            <div className='flex flex-col space-y-4 font-bold'>
              <div className='inline-flex space-x-2 items-center'>
                <FaHome className='text-customYellow text-2xl' />
                <span>Perú</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <FaPhoneAlt className='text-customYellow text-2xl' />
                <span>+51 961646248</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <MdMarkEmailRead className='text-customYellow text-2xl' />
                <span>capacitaciones@rizo.edu.pe</span>
              </div>
            </div>
            <div  className='flex space-x-4 text-3xl gap-10'>
              <a href="https://web.facebook.com/corp.rizo" target='_blank'>
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/corporacion.rizo/" target='_blank'>
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@corporacion.rizo" target='_blank'>
                <FaTiktok />
              </a>
              <a href="https://wa.me/51961646248?text=Hola, deseo más información sobre los diplomados" target='_blank'>
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute z-0 w-48 h-48 bg-customPurple800 rounded-full -left-96 -top-28'></div>
            <div className='absolute z-0 w-48 h-48 bg-customPurple800 rounded-full -right-28 -top-28'></div>
            <div className='absolute z-0 w-48 h-48 bg-customPurple800 rounded-full -left-6 -bottom-28'></div>
            <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full'>
              <form action="" className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="" className='text-sm font-semibold'>Nombres:</label>
                  <input type="text" placeholder='Nombres y Apellidos' className='ring-1 ring-customPurple300 text-gray-100 w-full mt-1 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-customYellow'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm font-semibold'>Correo eléctronico:</label>
                  <input type="email" placeholder='Email' className='ring-1 ring-customPurple300 w-full mt-1 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-customYellow'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm font-semibold'>Teléfono:</label>
                  <input type="email" placeholder='N° teléfono' className='ring-1 ring-customPurple300 w-full mt-1 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-customYellow'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm font-semibold'>Mensaje:</label>
                  <textarea placeholder='Mensaje' rows={4} className='ring-1 ring-customPurple300 w-full mt-1 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-customYellow'></textarea>
                </div>
                <button className='inline-block self-end bg-customPurple300 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;