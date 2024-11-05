"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { slideFromLeft } from '../utils/motion';
import { RiWhatsappFill } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css"; // Importamos los estilos de Swiper

// Exportamos los datos de los cursos
export const texts = [
  {
    description: "El uso de la fertirrigación ha evidenciado sus ventajas en la productividad como en la calidad, admite usar técnicas de Riego",
    image: "/course/fertirrigacion.png",
    title: "Fertirrigación"
  },
  {
    description: "Desarrolla conocimientos y habilidades del participante para evaluar y controlar el desarrollo de los presupuestos",
    image: "/course/Costos-con-S10.png",
    title: "Costos y presupuestos con S10"
  },
  {
    description: "Con este curso aprenderás de manera metódica a desarrollar una estructuración de los informes y analizar las brechas para la determinación del margen final.",
    image: "/course/INFORME-DE-OBRAS.png",
    title: "Informe de obras"
  },
  {
    description: "Las operaciones de conservación en carreteras son muy importantes y afectan de manera significativa al tráfico, por lo que requieren un estudio previo antes de acometerlas",
    image: "/course/MATENIMIENTO-EN-CARRETERAS-Y-PUENTES.png",
    title: "Mantenimiento en carreteras y puentes"
  },
  {
    description: "Analiza costos unitarios por partidas en base a rendimientos, cuadrillas, precios de los materiales, equipos y herramientas, realiza presupuestos de obra en edificaciones",
    image: "/course/Metrados,-costos-y-presupuesto.png",
    title: "Metrados, costos y presupuesto"
  },
  {
    description: "Como distribuidor de servicios de alimentos, es importante mantener ambientes saludables, higiénicos con el objetivo de salvaguardar la calidad y seguridad de sus productos",
    image: "/course/inpeccion-aliemetos.png",
    title: "Inspección y muestreo de alimentos"
  },
  {
    description: "Aplicar técnicas y herramientas de manejo hidrico que permitan un uso mas eficiente de los insumos para lograr una mayor producción y calidad de los cultivos",
    image: "/course/FERTIRRIEGO-DE-CULTIVOS.png",
    title: "Fertirriego de cultivos y monitoreo"
  },
  {
    description: "Aprende las técnicas para analizar parámetros, identificar contaminantes y garantizar la pureza del agua",
    image: "/course/monitoreo-de-agua.png",
    title: "Monitoreo de la calidad del agua"
  },
  {
    description: "Comprenderás e interpretarás los requerimientos y especificaciones que establece el esquema de certificación FSSC 22000 V6 para implementar de manera efectiva dicho esquema",
    image: "/course/esquema-22000.png",
    title: "Esquema con fssc-22000"
  }
];


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
    <section className='bg-customDarkPurple'>
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

      {/* Contenedor con max-width */}
      <div className="max-w-[1400px] mx-auto"> {/* Ajusta el valor de max-w según el límite que desees */}
        {/* Carrusel para todas las pantallas */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true} // Permitir el loop
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
            1400: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="w-full mx-auto"
        >
          {texts.map((course, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative transform transition-transform cursor-pointer rounded-xl max-w-md min-w-[300px] overflow-hidden shadow-lg m-5 group" style={{ height: '26vw' }}>
                <Image src={course.image} alt={course.title} width={800} height={500} className="h-[500px] w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-1 bg-purple-700 transition-all duration-500 ease-in-out h-16 group-hover:h-72">
                  <h1 className="uppercase text-2xl mb-2 text-white font-extrabold text-center">
                    {course.title}
                  </h1>
                  <p className="text-white text-center mb-4">{course.description}</p>
                  <div className='flex justify-center'>
                    <Link href={`https://wa.me/51961646248?text=Hola, deseo más información sobre el curso de ${course.title}`} target='_blank'
                      className='inline-flex items-center font-extrabold bg-white text-purple-800 mt-4 px-4 py-1 rounded-xl hover:scale-110 transition-transform duration-300'>
                      Más información
                      <RiWhatsappFill className='pl-2 text-4xl text-green-700' />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Course;
