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
  href: string;
  index: number;
}

const Cards3D = () => {

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
      <div className="text-center md:text-5xl text-3xl font-extrabold  pt-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate='visible'
          variants={slideFromLeft}
          className="inline-block">
          <h1 className="bg-gradient-to-r from-customOrange to-customYellow text-transparent bg-clip-text">
            NUESTROS DIPLOMADOS
          </h1>
        </motion.div>
      </div>
      <div className="flex justify-center min-h-screen  py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-2">
          <TiltCard icon={<FiMousePointer />} text="Ingeniería vial" imageSrc="/graduate/ingenieria-vial.png" href="/graduate" index={0}/>
          <TiltCard icon={<FiMousePointer />} text="Estudio de impacto ambiental" imageSrc="/graduate/estudio-ambiental.png" href="/graduate" index={1}/>
          <TiltCard icon={<FiMousePointer />} text="Riego y fertirriego" imageSrc="/graduate/riego-fertirriego.png" href="/graduate" index={2}/>
          <TiltCard icon={<FiMousePointer />} text="Asistente técnico en obras" imageSrc="/graduate/asistente-obras.png"href="/graduate" index={3}/>
          <TiltCard icon={<FiMousePointer />} text="Ingeniería de puentes" imageSrc="/graduate/ingenieria-puentes.png" href="/graduate" index={4}/>
          <TiltCard icon={<FiMousePointer />} text="SSOMA" imageSrc="/graduate/ssoma.png" href="/graduate" index={5}/>
        </div>
      </div>
    </section>
  );
};

const ROTATION_RANGE = 92.5;
const HALF_ROTATION_RANGE = 92.5 ;

const TiltCard = ({ icon, text, imageSrc, href, index }: TiltCardProps) => {
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

  const variants = {
    hidden: { opacity: 0, scale: 2 },
    visible: { opacity: 1, scale: 2, transition: { duration: 2 } },
  };

  return (
    <CustomLink href={href}>
    <motion.div
      ref={(node) => { reff.current = node;
        inViewRef(node) }}
        initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50, translateY: -50 }}
        animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform,
        }}
      className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[400px] md:w-[380px] w-[340px] h-[500px] cursor-pointer max-w-screen-xl p-2">
      <div className="grid justify-center mx-auto">
        <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
          className="relative lg:w-[400px] md:w-[380px] w-[340px] h-[500px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
          <div
            className="absolute inset-4 grid place-content-center rounded-xl shadow-xl shadow-slate-950 text-white"
            style={{ transform: "translateZ(75px)" }}>
            {icon}
            <p className="uppercase text-center text-customYellow text-2xl font-extrabold mt-96">{text}</p>
          </div>
          <Image
            src={imageSrc}
            alt=""
            className="absolute w-full h-full rounded-xl"
            width={800}
            height={800}/>
        </div>
      </div>
    </motion.div>
    </CustomLink>
  );
};

const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a href={href} className="block">
      {children}
    </a>
  );
};

export default Cards3D;
