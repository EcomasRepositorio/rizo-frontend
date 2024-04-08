import React from 'react'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Content1 = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 items-center">
    <h2 className="text-xl font-bold mb-4">Contenido Modal 1</h2>
    <div className="mb-4 md:mb-0">
      <Image src="/phone.png" alt="Descripción de la imagen 1" width={400} height={300} />
    </div>
    <div className="md:hidden">
      <p className="text-center">Texto de ejemplo para el modal 1.</p>
    </div>
    <div className="md:flex md:flex-col md:items-center md:justify-center md:mt-4">
      <p className="hidden md:block text-center">Texto de ejemplo para el modal 1.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Botón
      </button>
      <div className="flex items-center mt-4">
        <span className="mr-2">Más información</span>
        <FaArrowRight />
      </div>
    </div>
  </div>
  )
}

export default Content1