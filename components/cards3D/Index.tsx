"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation /* Pagination */, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Importamos los estilos de Swiper
import { slideFromLeft } from "../utils/motion";
import Link from "next/link";

interface TiltCardProps {
  icon: React.ReactNode;
  text: string;
  imageSrc: string;
  href: string;
  index: number;
}

const Cards3D = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize(); // Verificar inicialmente
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño

    return () => window.removeEventListener("resize", handleResize); // Limpiar el listener
  }, []);

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div className="px-4 py-6 relative z-10 max-w-[1400px] mx-auto">
      <section>
        <div className="text-center md:text-3xl text-3xl font-extrabold pt-12 ">
          <motion.div
            ref={ref}
            initial="hidden"
            animate="visible"
            variants={slideFromLeft}
            className="inline-block"
          >
            <h1 className="bg-gradient-to-r from-customOrange to-customYellow text-transparent bg-clip-text mb-20">
              NUESTROS DIPLOMADOS
            </h1>
          </motion.div>
        </div>

        {/* Carrusel para todas las pantallas */}
        <Swiper
          modules={[Navigation /* Pagination */, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={false}
          navigation
          /*           pagination={{ clickable: true }}
           */ autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            940: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 2, spaceBetween: 30 },
            1400: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="w-full mx-auto"
        >
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Asistente técnico en obras"
              imageSrc="/dip/1.webp"
              href="/graduate"
              index={0}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Ingeniería vial"
              imageSrc="/dip/2.webp"
              href="/graduate"
              index={1}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Ingeniería de puentes"
              imageSrc="/dip/3.webp"
              href="/graduate"
              index={2}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Ingeniería estructural"
              imageSrc="/dip/4.webp"
              href="/graduate"
              index={3}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Residencia y supervisión de obras"
              imageSrc="/dip/5.webp"
              href="/graduate"
              index={4}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Modelamiento BIM"
              imageSrc="/dip/6.webp"
              href="/graduate"
              index={5}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Gestión y manejo integral de residuos sólidos"
              imageSrc="/dip/7.webp"
              href="/graduate"
              index={6}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Monitoreo y evaluación de la calidad ambiental"
              imageSrc="/dip/8.webp"
              href="/graduate"
              index={7}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Estudio de impacto ambiental"
              imageSrc="/dip/9.webp"
              href="/graduate"
              index={8}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Gestión ambiental municipal y regional"
              imageSrc="/dip/10.webp"
              href="/graduate"
              index={9}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Ingeniería Sanitaria"
              imageSrc="/dip/11.webp"
              href="/graduate"
              index={10}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="SSOMA"
              imageSrc="/dip/SSOMA.webp"
              href="/graduate"
              index={11}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Riego y fertirriego"
              imageSrc="/dip/13.webp"
              href="/graduate"
              index={12}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Sistema de riego tecnificado"
              imageSrc="/dip/14.webp"
              href="/graduate"
              index={13}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <TiltCard
              icon={<FiMousePointer />}
              text="Gestión de calidad e inocuidad alimentaria"
              imageSrc="/dip/15.webp"
              href="/graduate"
              index={14}
            />
          </SwiperSlide>
        </Swiper>

        {/* Botón Ver Más */}
        <div className="flex justify-center mt-8">
          <Link href="/graduate">
            <button className="uppercase text-sm font-light flex items-center justify-center text-white p-2 md:mt-2 mt-6 mb-4 w-52 h-16 rounded-lg border border-testCian/50 bg-customDarkPurple">
              VER MÁS
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const ROTATION_RANGE = 92.5;
const HALF_ROTATION_RANGE = 92.5;

const TiltCard = ({ icon, text, imageSrc, href, index }: TiltCardProps) => {
  const reff = React.useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 10, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 10, damping: 10 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      x.set(0);
      y.set(0);
    }
  }, [inView, x, y]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const current = reff.current;
    if (!current) return;

    const rect = current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * 6;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <CustomLink
      href={`https://api.whatsapp.com/send/?phone=51961646248&text=${encodeURIComponent(
        `Hola, busco mas informacion sobre el diplomado de ${text}`
      )}`}
    >
      <motion.div
        ref={(node) => {
          reff.current = node;
          inViewRef(node);
        }}
        initial={{
          opacity: 0,
          translateX: index % 2 === 0 ? -50 : 50,
          translateY: -50,
        }}
        animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform,
        }}
        className="lg:w-[380px] md:w-[580px] w-[340px] h-[500px] cursor-pointer max-w-screen-xl p-2 md-20 mx-auto"
      >
        <div className="grid justify-center mx-auto">
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="relative lg:w-[400px] md:w-[280px] w-[340px] h-[500px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
          >
            <div
              className="absolute inset-4 grid place-content-center rounded-xl shadow-xl shadow-slate-950 text-white"
              style={{ transform: "translateZ(75px)" }}
            >
              {icon}
              <p className="uppercase text-center text-customYellow text-2xl font-extrabold mt-96"></p>
            </div>
            <Image
              src={imageSrc}
              alt=""
              className="absolute w-full h-full rounded-xl"
              width={800}
              height={800}
            />
          </div>
        </div>
      </motion.div>
    </CustomLink>
  );
};

const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {children}
    </a>
  );
};

export default Cards3D;
