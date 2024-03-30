"use client";
import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

interface TiltCardProps {
  icon: React.ReactNode;
  text: string;
}

const Example = () => {
    return (
        <div className="flex justify-center h-screen bg-gradient-to-br from-indigo-500 to-violet-500 py-12">
            <div className="grid grid-cols-3 gap-4">
            <TiltCard icon={<FiMousePointer />} text="Ingenieria civil" />
            <TiltCard icon={<FiMousePointer />} text="Diseño de interiores" />
            <TiltCard icon={<FiMousePointer />} text="Arquitectura" />
            <TiltCard icon={<FiMousePointer />} text="Arquitectura" />
            <TiltCard icon={<FiMousePointer />} text="Arquitectura" />
            <TiltCard icon={<FiMousePointer />} text="Arquitectura" />
            </div>
        </div>
        );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ icon, text }: TiltCardProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: any) => {
    const current = ref.current;
    if (!current || typeof current !== "object" || !(current instanceof HTMLElement)) return;

    const rect = current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className="flex-none w-[450px] h-96 mx-4">
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative w-{450px} h-[600px] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300">
        <div
          className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
          style={{ transform: "translateZ(75px)" }}>
          {icon}
          <p className="text-center text-2xl font-bold">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Example;
