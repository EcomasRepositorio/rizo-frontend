"use client";
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { FaUserCog } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" top-0">
      <section className="bg-gradient-to-r from-customPurple800 to-customPurple300">
        <div className="py-3 shadow-md max-w-screen-xl mx-auto p-2 flex justify-between items-center flex-wrap lg:flex-nowrap">
          {/* Botón a la izquierda */}

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/logo-navbar-3.png"
              width={800}
              height={800}
              alt="rizo-logo"
              className="md:w-48 w-36 h-auto mb-2"
              priority={true}
            />
          </Link>

          <button
            className="flex justify-center items-center md:hidden visible hover:scale-110 duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <GrClose className="text-3xl text-customYellow z-50" />
            ) : (
              <TfiMenuAlt className="text-3xl text-customYellow mb-3" />
            )}
          </button>

          <div className="flex lg:gap-10 text-customYellow font-extrabold md:text-sm text-[9.5px] text-center">
            <Link
              href="/certs"
              className="flex justify-center items-center border-customYellow hover:bg-customYellow hover:text-customPurple800 rounded-xl py-2 px-3 hover:scale-110 duration-300"
            >
              <span className="uppercase underline">Verificar certificado</span>
            </Link>
            <Link
              href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
              target="_blank"
              className="flex justify-center items-center border-customYellow hover:bg-customYellow hover:text-customPurple800 rounded-xl py-2 px-3 hover:scale-110 duration-300"
            >
              <span className="uppercase underline">Aula virtual UNP</span>
            </Link>
            <Link
              href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=efffcd33-0211-4598-8fa5-30f34ec79063"
              target="_blank"
              className="flex justify-center items-center border-customYellow hover:bg-customYellow hover:text-customPurple800 rounded-xl py-2 px-3 hover:scale-110 duration-300"
            >
              <span className="uppercase underline">Aula virtual UFRJ</span>
            </Link>
          </div>

          <button
            className="hidden md:flex justify-center items-center hover:scale-125 duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <GrClose className="text-5xl text-customYellow z-50" />
            ) : (
              <TfiMenuAlt className="text-5xl text-customYellow" />
            )}
          </button>

          {/* Menú lateral */}
          <div
            className={`${
              open ? "flex" : "hidden"
            } fixed z-50 inset top-20 lg:right-96 right-10 justify-center items-center transition-all duration-300`}
          >
            <div className="bg-customYellow/80 w-[300px] md:w-[450px] lg:w-[500px] rounded-2xl flex flex-col justify-center items-center">
              <div className={`${open ? "py-3" : "hidden"}`}>
                <ul className="text-xl items-center justify-center">
                  <li className="font-bold text-customPurple800 hover:text-white mt-6 mb-10 py-1 px-1 text-center hover:bg-customPurple300 transition-transform transform hover:scale-110 w-60 mx-auto">
                    <Link href="/" onClick={() => setOpen(!open)}>
                      Inicio
                    </Link>
                  </li>
                  <li className="font-bold text-customPurple800 hover:text-white mb-10 py-1 px-1 text-center hover:bg-customPurple300 rounded transition-transform transform hover:scale-110 w-60 mx-auto">
                    <Link href="/certs" onClick={() => setOpen(!open)}>
                      Certificado
                    </Link>
                  </li>
                  <li className="font-bold text-customPurple800 hover:text-white mb-10 py-1 px-1 text-center hover:bg-customPurple300 rounded transition-transform transform hover:scale-110 w-60 mx-auto">
                    <Link href="/graduate" onClick={() => setOpen(!open)}>
                      Diplomados
                    </Link>
                  </li>
                  <li className="font-bold text-customPurple800 hover:text-white mb-10 py-1 px-1 text-center hover:bg-customPurple300 rounded transition-transform transform hover:scale-110 w-60 mx-auto">
                    <Link href="/about" onClick={() => setOpen(!open)}>
                      Nosotros
                    </Link>
                  </li>
                  <li className="font-bold text-customPurple800 hover:text-white mb-10 py-1 px-1 text-center hover:bg-customPurple300 rounded transition-transform transform hover:scale-110 w-60 mx-auto">
                    <Link href="/" onClick={() => setOpen(!open)}>
                      ¡Inscribete!
                    </Link>
                  </li>
                  <li className="flex justify-center mb-6">
                    <Link
                      href="/login"
                      onClick={() => setOpen(!open)}
                      className="py-1 px-4 rounded-xl text-customPurple300 hover:bg-customPurple300 hover:text-customYellow hover:scale-125 duration-300"
                    >
                      <FaUserCog className="text-4xl" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Fondo gris */}
          {open && (
            <div
              className=" opacity-90 min-h-screen h-full fixed top-0 left-0 w-full z-40 backdrop-blur-md"
              onClick={() => setOpen(false)}
            ></div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
