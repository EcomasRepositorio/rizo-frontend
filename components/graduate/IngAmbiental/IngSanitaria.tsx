"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { moduleIngSanitaria } from "@/components/utils/courses/course";
import { MdOutlineBookOnline, MdCalendarMonth, MdAlarmOn } from "react-icons/md";
import { PiCalendarFill } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Link from "next/link";

const IngSanitaria = () => {
  const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
  const [openWindow, setOpenWindow] = useState<Window | null>(null);

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
  };

  const handleClick = () => {
    const newWindow = window.open("/BROCHURE/S.pdf");
    setOpenWindow(newWindow);

    // Descargar el archivo PDF
    const link = document.createElement("a");
    link.href = "/BROCHURE/S.pdf";
    link.download = "S.pdf";
    link.click();
  };

  return (
    <div className="">
      <h2 className="uppercase flex justify-center text-center md:text-4xl text-2xl font-extrabold mb-5 bg-gradient-to-r from-customPurple300 to-customOrange text-transparent bg-clip-text p-2">
        Ingeniería sanitaria
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center mb-4 md:mb-0">
          <Image
            src="/phone.png"
            alt="Descripción de la imagen 1"
            width={400}
            height={300}
            className="h-96 w-auto"/>
        </div>

        <div className="">
          <div className="flex items-center md:mb-3 mb-2">
            <PiCalendarFill className="md:text-5xl text-4xl text-customOrange mr-2 flex-shrink-0" />
            <p className="md:text-2xl font-bold text-customPurple300">
              Inicio 26 de mayo
            </p>
          </div>
          <div className="flex items-center md:mb-3 mb-2">
            <MdOutlineBookOnline className="md:text-5xl text-4xl text-customOrange mr-2 flex-shrink-0" />
            <p className="md:text-2xl font-bold text-customPurple300">
              Modalidad Online via Zoom
            </p>
          </div>
          <div className="flex items-center md:mb-3 mb-2">
            <MdCalendarMonth className="md:text-5xl text-4xl text-customOrange mr-2 flex-shrink-0" />
            <p className="md:text-2xl font-bold text-customPurple300">
              Duración 4 meses
            </p>
          </div>
          <div className="flex items-center mb-3">
            <MdAlarmOn className="md:text-5xl text-4xl text-customOrange mr-2 flex-shrink-0" />
            <p className="md:text-2xl font-bold text-customPurple300">
              420 horas académicas (26 créditos)
            </p>
          </div>
          <div className="grid justify-between gap-4 md:grid-cols-2 grid-cols-1">
            <Link
              className="bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:bg-gradient-to-bl hover:scale-110 duration-300 text-white w-full font-bold py-4 px-4 rounded-xl mt-4 flex justify-between items-center"
              href="https://wa.me/51961646248?text=Hola,%20deseo%20más%20información%20sobre%20el%20diplomado%20de%20Ingeniería%20Sanitaria"
              target="_blank">
                Más información
              <BsWhatsapp className="ml-4 text-2xl text-green-500" />
            </Link>

            <button
              onClick={handleClick}
              className="bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:bg-gradient-to-bl hover:scale-110 duration-300 text-white w-full font-bold py-4 px-4 rounded-xl md:mt-4 flex justify-between items-center"
              rel="noopener noreferrer">
                Plan de estudios
              <FaRegFilePdf className="ml-4 text-2xl text-red-500" />
            </button>
          </div>
          <div className="flex justify-between">
            <button
              onClick={toggleAccordion1}
              className="flex justify-between bg-gradient-to-tr mb-4 from-customPurple800 to-customPurple300 hover:bg-gradient-to-bl hover:scale-110 duration-300 text-white w-full font-bold py-4 px-4 rounded-xl mt-4 items-center">
                Lista de módulos
              {isAccordionOpen1 ? (
                <FaMinusCircle className="z-0 text-3xl hover:scale-150 duration-300" />
              ) : (
                <FaPlusCircle className="z-0 text-3xl hover:scale-150 duration-300" />
              )}
            </button>
          </div>
          {isAccordionOpen1 && (
            <motion.div
              className="bg-white rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.1 } }}>
              <div className="text-sm font-sans font-semibold">
                <ul className="">
                  {moduleIngSanitaria.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 1, delay: index * 0.2 },
                      }}
                      className="lg:p-2 p-2 mb-3 border rounded-md bg-slate-50 hover:bg-customYellow border-customOrange hover:scale-110 duration-300 cursor-pointer"
                      style={{ display: "block", width: "100%" }}
                      onClick={() =>
                        window.open(
                          `https://wa.me/51961646248/?text=${encodeURIComponent(item.text)}`, "_blank"
                        )
                      }>
                      <div className="flex items-center text-customPurple800">
                        <BsWhatsapp className="mr-2 text-green-600 text-lg flex-shrink-0" />
                        {item.name}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngSanitaria;
