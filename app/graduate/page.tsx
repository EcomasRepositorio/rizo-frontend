"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
//import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import Modal from '@/components/share/Modal';
import ModalGraduate from '@/components/share/ModalGraduate';
import Content1 from '@/components/graduate/Content1';
import Content2 from '@/components/graduate/Content2';
import { title } from 'process';

const Graduate = () => {

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

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

  const questions = [
    {
      id: 1,
      question: "Ingeniería civil",
      answers: [
        { title: "Asistente técnico en obras", contentComponent: <Content1 /> },
        { title: "Ingeniería vial", contentComponent: <Content2 /> },
        { title: "Ingeniería de puentes", contentComponent: <Content1 /> },
        { title: "Ingeniería estructural", contentComponent: <Content2 /> },
        { title: "Residencia y supervición de obras", contentComponent: <Content1 /> },
        { title: "Modelamiento BIM", contentComponent: <Content2 /> },
      ],
      image: "/contact.jpg",
    },
    {
      id: 2,
      question: "Ingeniería ambiental",
      answers: [
        "Gestión y manejo integral de residuos sólidos",
        "Monitoreo y evaluación de la calidad ambiental",
        "Estudio de impacto ambiental",
        "Gestión ambiental municipal y regional",
        "SSOMA (Seguridad y Salud Ocupacional y Medio Ambiente",
      ],
      image: "/phone.png",
    },
    {
      id: 3,
      question: "Ingeniería agrónoma",
      answers: [
        "Riego y fertirriego",
        "Sistema de riego técnificado",
      ],
      image: "/contact.jpg"
    },
    {
      id: 4,
      question: "Ingeniería de industrias alimentarias",
      answers: [
        "Gestión de cálidad e inocuidad alimentaria",
      ],
      image: "/contact.jpg"
    },
  ]

  return (
    <section>
      <div className="relative pt-20 lg:pt-60 pb-28 lg:pb-60">
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
        <h1 className="font-extrabold text-4xl lg:text-6xl mt-10">
          Conoce nuestros diplomados
        </h1>
        <p className='font-semibold mt-2 text-lg'>
            Somos un centro de capacitación profesional de amplia experiencia que desarrollamos cursos y diplomados
        </p>
        <button className='border px-4 py-1 mt-4 rounded-xl'>
            Contacto
        </button>
        </div>
      </div>

      <div className=''>
        <div className='w-screen h-screen bg-black flex justify-center items-center'>
          <div className='w-[89%] m-auto max-w-[1400px] bg-gray-300 p-8 rounded-lg shadow-md grid md:grid-cols-2'>
            <div className='gap-4'>
            {/* <h2 className='text-2xl mb-6 font-semibold'>
              Diplomados
            </h2> */}
              {questions.map((q) => (
                <div key={q.id} className='mb-4 last:mb-0'>
                  <button
                    className='uppercase font-extrabold w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-xl shadow-md flex justify-between items-center hover:scale-105 duration-300'
                    onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
                      {q.question}
                      {activeQuestion === q.id ?
                        <FaMinusCircle className='text-3xl text-customOrange flex-shrink-0'/> : <FaPlusCircle className='text-3xl text-customOrange flex-shrink-0'/>}
                  </button>
                    <AnimatePresence>
                      {activeQuestion === q.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className='mt-2 text-gray-600'>
                            <div className="md:hidden grid grid-cols-1 gap-8">
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
                                  className='p-5 text-white font-extrabold text-2xl rounded-2xl bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:cursor-pointer hover:bg-gradient-to-bl hover:scale-110 duration-300'
                                  onClick={() => {
                                    if (typeof answer === 'string') {
                                      handleAnswerClick(answer);
                                    } else {
                                      handleAnswerClick(answer.title);
                                    }
                                  }}>
                                  {typeof answer === 'string' ? answer : answer.title}
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
                                className='p-5 text-white font-extrabold text-2xl rounded-2xl bg-gradient-to-tr from-customPurple800 to-customPurple300 hover:cursor-pointer hover:bg-gradient-to-bl hover:scale-110 duration-300'
                                onClick={() => {
                                  if (typeof answer === 'string') {
                                    handleAnswerClick(answer);
                                  } else {
                                    handleAnswerClick(answer.title);
                                  }
                                }}>
                                {typeof answer === 'string' ? answer : answer.title}
                              </motion.p>
                              ))}
                            </div>
                            {/* <Image src={q.image} alt={`imagen ${q.id}`} className='' width={800} height={800}/> */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
              </div>
            )}
          </div>
        </div>
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