"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";  
import Image from "next/image";
import styles from "@/style/index";

//ESTUDIO DE IMPACTO AMBIENTAL

const modulesAmbientaly = [
  {name: "Elaboración de mapas temáticos con ArcGIS",image: "/CURSOS/costos.webp",},
  { name: "Participación ciudadana", image: "/CURSOS/esquema.webp" },
  {name: "Supervisión, Fiscalización y auditoría ambiental",image: "/CURSOS/fertirriego.webp",},
  { name: "Elaboración de informe de EIA", image: "/CURSOS/inersion-publica.webp" },
  //{ name: "Legislación ambiental", image: "/CURSOS/12.webp" },
  //{ name: "Instrumentos de gestión ambiental", image: "/CURSOS/13.webp" },
  //{ name: "Línea base de estudio de impacto ambiental", image: "/CURSOS/14.webp" },
  {name: "Identificación y evaluación de impacto ambiental",image: "/CURSOS/impacto.webp",},
  //{ name: "Valoración Económica Ambiental", image: "/CURSOS/16.webp" },
  //{ name: "Estrategias de manejo ambiental", image: "/CURSOS/17.webp" },
  //{ name: "Plan de cierre y post cierre de proyectos", image: "/CURSOS/18.webp" },
  //{ name: "Calidad ambiental, evaluación de riesgos y técnicas de remediación ambiental", image: "/CURSOS/19.webp" },
];

const GraduateAmbientalyCarousel = () => {
  
  
  const handleCardClick = (moduleName: string) => {
    const whatsappUrl = `https://wa.me/51984040264?text=${encodeURIComponent(
      `Hola, estoy interesado en el curso "${moduleName}" y me gustaría recibir más información.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white px-6">
      <div
        className={`${styles.paddings} relative z-10 max-w-[1400px] mx-auto`}
      >
        <Swiper
          modules={[Navigation,  Pagination, Autoplay]}
          loop
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 3000 }}
          grabCursor
          pagination={{ clickable: true }}
          breakpoints={{
            870: { slidesPerView: 2, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 20 },
            1100: { slidesPerView: 2, spaceBetween: 10 },
            1300: { slidesPerView: 2, spaceBetween: 10 },
            1400: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          {modulesAmbientaly.map((module, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative w-full h-full sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
                onClick={() => handleCardClick(module.name)}
              >

                <h3 className="sr-only">{module.name}</h3>
                <Image
                  src={module.image}
                  alt={module.name}
                  width={500} 
                  height={500}
                  objectFit="cover" 
                  className="rounded-xl"
                  priority={true}
                  unoptimized={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GraduateAmbientalyCarousel;
