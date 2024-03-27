import Whatsapp from '@/components/whatsapp/Index'
import React from 'react'

const About = () => {
  return (
    <section>
  <div className="relative pt-20 lg:pt-40 pb-28 lg:pb-40">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/fondo_certificate.jpg")' }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-60 bg-gray-800"
      ></span>
    </div>
    <div className="relative mx-auto max-w-screen-xl p-2 text-white">
      <h1 className="font-extrabold text-4xl lg:text-6xl mt-10">
        Acerca de nosotros
      </h1>
      <p className='font-semibold mt-2 text-lg'>
        Somos un centro de capacitación profesional de amplia experiencia que desarrollamos cursos y diplomados
      </p>
      <button className='border px-4 py-1 mt-4 rounded-xl'>
        Contacto
      </button>
    </div>
  </div>
  <Whatsapp />
</section>
  )
}
export default About