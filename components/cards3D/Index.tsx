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
import { slideFromLeft, slideFromTop, slideInFromLeft } from "../utils/motion";

interface TiltCardProps {
  icon: React.ReactNode;
  text: string;
  imageSrc: string;
}

const Cards3D = () => {

  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activar una vez
    threshold: 0.5, // Activar cuando el 50% del componente está en pantalla
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
          NUESTROS DIPLOMADOS
        </motion.div>
      </div>
      <div className="flex justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-violet-500 py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-2">
        <TiltCard icon={<FiMousePointer />} text="Ingeniería vial" imageSrc="/logo/logo-certificate.png" />
        <TiltCard icon={<FiMousePointer />} text="Estudio de impacto ambiental" imageSrc="/logo/logo-certificate.png"/>
        <TiltCard icon={<FiMousePointer />} text="Riego y fertirriego" imageSrc="/logo/logo-certificate.png"/>
        <TiltCard icon={<FiMousePointer />} text="Asistente técnico en obras" imageSrc="/logo/logo-certificate.png"/>
        <TiltCard icon={<FiMousePointer />} text="Ingeniería de puentes" imageSrc="/logo/logo-certificate.png"/>
        <TiltCard icon={<FiMousePointer />} text="SSOMA" imageSrc="/logo/logo-certificate.png"/>
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({ icon, text, imageSrc }: TiltCardProps) => {
  const reff = React.useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 10, damping: 10 }); // Ajustar la rigidez y amortiguación
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
    if (!current || typeof current !== "object" || !(current instanceof HTMLElement)) return;

    const rect = current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width - 0;
    const mouseY = (e.clientY - rect.top) / height - 0;

    const rX = mouseX * 0.1;
    const rY = mouseX * 0.1;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    hidden: { opacity: 0, scale: 2 },
    visible: { opacity: 1, scale: 2, transition: { duration: 2 } },
  };

  return (
    <motion.div
      ref={(node) => {
        reff.current = node;
        inViewRef(node);
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center",
        transform,
      }}
      className="flex-none w-[400px] h-[500px]"
    >
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative w-[400px] h-[500px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
        <div
          className="absolute inset-4 grid place-content-center rounded-xl shadow-lg text-white"
          style={{ transform: "translateZ(75px)" }}
        >
          {icon}
          <p className="text-center text-white text-2xl font-bold mt-10">{text}</p>
        </div>
        <Image
          src={imageSrc}
          alt=""
          className="absolute inset-0 object-cover w-full h-full rounded-xl"
          width={800}
          height={800}
        />
      </div>
    </motion.div>
  );
};


export default Cards3D;
