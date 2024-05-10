"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { BsBoxArrowInUpRight } from "react-icons/bs";
import ModalGraduate from '@/components/share/ModalGraduate';
import { questions } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Whatsapp from '@/components/whatsapp/Index';

const Graduate = () => {

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [texts, setTexts] = useState([
    { id: 1, mainText: 'Certificación', isHovered: false, image: "/contact.jpg", hoverText: 'Tu certificación puede ser física y/o virtual según prefieras, te asignaremos un código QR para que valides tu certificado.' },
    { id: 2, mainText: 'Clases en vivo', isHovered: false, image: "/contact.jpg", hoverText: 'Aprende desde donde te encuentres en tiempo real.' },
    { id: 3, mainText: 'Docentes altamente capacitados', isHovered: false, image: "/contact.jpg", hoverText: 'Nuestra plana docente esta conformada por profesionales altamente capacitados.' },
    { id: 4, mainText: 'Actualización', isHovered: false, image: "/contact.jpg", hoverText: 'Actualizamos nuestro contenido constantemente, según la normativa, para brindarte la mejor calidad educativa.' }
  ]);

  const handleMouseEnter = (id: number) => {
    setTexts((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, isHovered: true };
        }
        return card;
      });
    });
  };

  const handleMouseLeave = (id: number) => {
    setTexts((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, isHovered: false };
        }
        return card;
      });
    });
  };

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 1024);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            Diplomados y cursos
          </h1>
          <p className='font-semibold mt-4 mb-10 lg:text-3xl'>
          Avanza en tu carrera con conocimientos especializados
          </p>
          <Link href="#diplomados" className='border px-5 py-2 font-extrabold rounded-xl text-2xl hover:bg-customYellow hover:text-customPurple800 hover:scale-110 duration-300'>
            Ver diplomados
          </Link>
        </div>
      </div>

      <div id='diplomados' className='relative'>
        <div className='absolute w-full h-full opacity-90 z-0 blur-sm'>
          <video autoPlay muted loop className='w-full h-full object-cover'>
            <source src='/video.webm' type='video/mp4' />
          </video>
        </div>
        <div className='relative w-screen bg-customPurple800/60 justify-center p-2'>
          <div className='bg-customPurple800/50 p-10 mt-10 mb-10'>
            <h1 className='flex justify-center text-center md:text-7xl text-3xl font-extrabold'>
              <p className='text-white'>Conoce nuestros
              <br/>
              <span className='text-customOrange md:text-8xl'> diplomados</span></p>
            </h1>
          </div>
         <div className='max-w-screen-xl mx-auto'>
          <div className='w-auto m-auto max-w-auto bg-white/10 md:p-8 p-4 rounded-lg shadow-md grid md:grid-cols-2'>
            <div className='gap-4'>
            {/* <h2 className='text-2xl mb-6 font-semibold'>
              Diplomados
            </h2> */}
              {questions.map((q) => (
                <div key={q.id} className='mb-4 last:mb-0'>
                  <button
                    className='uppercase text-white/80 font-extrabold w-full text-left md:text-2xl text-sm focus:outline-none p-4 bg-customPurple300/50 rounded-xl shadow-md flex justify-between items-center hover:scale-105 duration-300'
                    onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
                      {q.question}
                      {activeQuestion === q.id ?
                        <FaMinusCircle className='text-3xl text-customYellow flex-shrink-0'/> : <FaPlusCircle className='text-3xl text-customYellow flex-shrink-0'/>}
                  </button>
                    <AnimatePresence>
                      {activeQuestion === q.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className='mt-2 text-gray-600'>
                            <div className="lg:hidden grid grid-cols-1 gap-2">
                              {q.answers.map((answer, ansIndex) => (
                                <motion.p
                                  key={ansIndex}
                                  /* initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -20 }}
                                  transition={{ duration: 1 }} */
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1, transition: { duration: 3, delay: ansIndex * 0.4 } }}
                                  style={{ display: 'block', width: '100%' }}
                                  className='p-4 text-customYellow font-bold text-sm rounded-2xl bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:cursor-pointer hover:bg-gradient-to-bl hover:scale-110 duration-300'
                                  onClick={() => {
                                    if (typeof answer === 'string') {
                                      handleAnswerClick(answer);
                                    } else {
                                      handleAnswerClick(answer.title);
                                    }
                                  }}>
                                  <div className="flex justify-between items-center">
                                  {typeof answer === 'string' ? answer : answer.title}
                                    <BsBoxArrowInUpRight className='text-customYellow flex-shrink-0 text-xl'/>
                                  </div>
                                </motion.p>
                              ))}
                            </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
              ))}
              </div>
              {isLargeScreen && (
              <div className="md:col-start-2 md:ml-10 col-start-1">
                {questions.map((q) => (
                  <AnimatePresence key={q.id}>
                    {activeQuestion === q.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}>
                          <div className="grid grid-cols-1 gap-4">
                              {q.answers.map((answer, ansIndex) => (
                                <motion.p
                                key={ansIndex}
                                /* initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 1 }} */
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 3, delay: ansIndex * 0.4 } }}
                                style={{ display: 'block', width: '100%' }}
                                className='pl-4 text-customYellow font-semibold md:text-2xl rounded-xl bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:cursor-pointer hover:bg-gradient-to-bl hover:scale-110 duration-300'
                                onClick={() => {
                                  if (typeof answer === 'string') {
                                    handleAnswerClick(answer);
                                  } else {
                                    handleAnswerClick(answer.title);
                                  }
                                }}>
                                <div className="flex justify-between items-center">
                                  {typeof answer === 'string' ? answer : answer.title}
                                  {answer.image && (
                                    <div className='flex justify-items-center h-20 w-20 rounded-xl flex-shrink-0'>
                                      <Image src={answer.image} alt={`imagen ${q.id}`} className='rounded-xl' width={800} height={800}/>
                                    </div>
                                  )}
                                </div>
                              </motion.p>
                            ))}
                          </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
              </div>
            )}
          </div>


          </div>
            <div className='text-center font-extrabold md:mt-20 mt-10 mb-10'>
              <div className='bg-customPurple800/50 w-full p-10'>
                <h1 className='text-white md:text-7xl text-[27px]'>Por qu&eacute; estudiar en
                  <br />
                  <span className='text-customOrange md:text-8xl text-4xl'> Corporaci&oacute;n Rizo</span>
                </h1>
              </div>
            <div className='max-w-screen-xl mx-auto'>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 md:mt-20 mt-10 md:mb-20 lg:p-0 p-2">
                {texts.map((card) => (
                  <div
                    key={card.id}
                    className="relative flex justify-center items-center h-[500px] rounded-3xl duration-300"
                    onMouseEnter={() => handleMouseEnter(card.id)}
                    onMouseLeave={() => handleMouseLeave(card.id)}
                    style={{ backgroundColor: card.isHovered ? 'rgba(255, 165, 0, 0.5)' : 'transparent' }}>
                    <div className="absolute inset-0 bg-cover bg-center rounded-3xl opacity-50" style={{ backgroundImage: `url("${card.image}")` }} />
                    <p className="text-white z-10 cursor-pointer transition duration-500 p-2 text-xl">
                      {card.isHovered ? card.hoverText : card.mainText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Whatsapp />
      </div>

      <ModalGraduate open={selectedAnswer !== null} onClose={() => setSelectedAnswer(null)}>
        {questions.map((q) =>
          q.id === activeQuestion && selectedAnswer !== null ?
            q.answers
              .filter(ans => typeof ans !== 'string' && ans.title === selectedAnswer)
              .map(ans => {
                if (typeof ans !== 'string') {
                  return ans.contentComponent;
                } else {
                  return null;
                }
              }): null
        )}
      </ModalGraduate>
    </section>
  )
}

export default Graduate