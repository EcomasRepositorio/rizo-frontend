//import Whatsapp from '@/components/whatsapp/Index'
import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
import './Style.css'
import Link from 'next/link'
import Whatsapp from '@/components/whatsapp/Index'

const About = () => {
  return (
    <section>
  <div className="relative pt-20 lg:pt-52 pb-28 lg:pb-80">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/fondo.jpeg")' }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-60 bg-gray-800"
      ></span>
    </div>
    <div className="relative mx-auto max-w-screen-xl p-2 text-white">
      <h1 className="font-extrabold text-4xl md:text-7xl mt-10">
        Acerca de nosotros
      </h1>
      <p className='font-semibold mt-4 lg:text-3xl mb-8'>
        Somos un centro de capacitaci&oacute;n profesional de amplia experiencia que desarrollamos cursos y diplomados
      </p>
      <Link href="https://wa.me/51961646248?text=Hola,%20deseo%20solicitar%20más%20información%20sobre%20Corporación%20Rizo..."
        className='border px-5 py-2 mt-4 rounded-xl text-2xl font-extrabold hover:bg-customYellow hover:text-customPurple800'>
        Contacto
      </Link>
    </div>
  </div>

  <div className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/about.png"
            alt="phone"
            width={800}
            height={800}
            className="feature-phone w-auto h-[1000px]"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="lg:text-8xl text-4xl text-customPurple300 font-extrabold">Corporación Rizo</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  <Whatsapp />
</section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-customOrange">
        <Image src={icon} alt="map" width={28} height={28} className='' />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize text-customPurple800">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}
export default About