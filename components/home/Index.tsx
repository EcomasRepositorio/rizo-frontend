"use client";
import React, { useState, useEffect } from 'react';
import { motion, Variants } from "framer-motion";
import { slideInFromLeft, fadeInFrom, textVariants } from '@/components/utils/motion';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Style.css"

const texts = [
  "Tu puerta abierta al conocimiento en vivo, desde donde estes...",
  "Con nuestros Cursos y Diplomados de especialización...",
  "Bienvenidos a Corporacion Rizo",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const slides = document.querySelectorAll('.slide');
    const slideIcons = document.querySelectorAll('.slide-icon');
    const numberOfSlides = slides.length;
    let playSlider: ReturnType<typeof setInterval>;
    let slideNumber = 0;

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        slides[slideNumber].classList.remove("active");
        slideNumber = (slideNumber + 1) % numberOfSlides;
        slides[slideNumber].classList.add("active");
        setIndex(slideNumber);
      })
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        slides[slideNumber].classList.remove("active");
        slideNumber = (slideNumber - 1 + numberOfSlides) % numberOfSlides;
        slides[slideNumber].classList.add("active");
        setIndex(slideNumber);
      })
    };

    const repeat = () => {
      playSlider = setInterval(() => {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber--;

        if(slideNumber < 0){
          slideNumber = numberOfSlides - 1;
        }

        if (slides[slideNumber] !== undefined) {
          slides[slideNumber].classList.add("active");
        }
        if (slideIcons[slideNumber] !== undefined) {
          slideIcons[slideNumber].classList.add("active");
        }

        setIndex(slideNumber);
      }, 10000);
    }
    repeat();

    if (slider !== null) {
      slider.addEventListener("mouseover", () => {
        clearInterval(playSlider);
      });

      slider.addEventListener("mouseout", () => {
        repeat();
      });
    }
  }, []);

  return (
    <section className="">
      <div className='slider'>
        {texts.map((text, i) => (
          <motion.div
            key={i}
            className={`slide ${i === index ? 'active' : ''}`}>
            <Image src={`/banner${i + 1}.png`} alt="banner" width={1200} height={1200} className=''/>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={slideInFromLeft(1)}
              className="relative mx-auto text-right max-w-screen-xl p-2 text-white">
              <motion.h1
                initial="hidden"
                animate={i === index ? "visible" : "hidden"}
                exit="hidden"
                variants={textVariants}
                className="font-extrabold text-4xl lg:text-4xl mt-80 mb-20">
                {text.split(' ').map((word, j, array) => (
                  <React.Fragment key={j}>
                    {j > 0 && j % 4 === 0 && <br />} {/* Inserta un salto de línea cada 5 palabras */}
                    {word}{' '}
                  </React.Fragment>
                  ))}
              </motion.h1>
            </motion.div>
          </motion.div>
        ))}
        <div className="navigation md:text-2xl font-extrabold">
          <BsChevronLeft className="prev-btn"/>
          <BsChevronRight className="next-btn"/>
        </div>
      </div>
    </section>
  )
}

export default Home;
