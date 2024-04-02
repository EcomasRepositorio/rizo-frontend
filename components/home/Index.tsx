"use client";
import React, { useState, useEffect } from 'react';
import { motion, Variants } from "framer-motion";
import { slideInFromLeft, fadeInFrom, textVariants } from '@/components/utils/motion';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Style.css"

const titles = [
  "Diplomados y cursos para profesionales ",
  "La mejor opción para tu desarrollo profesional",
];

const slides = [
  {
    title:"Diplomados y cursos para profesionales",
    subtitle: "La mejor opción para tu desarrollo profesional"
  },
  {
    title: "Descubre el aprendizaje digital con Corporación Rizo",
    subtitle: "Cumple tu reto personal con nuestros diplomados y cursos virtuales"
  }
]

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
      }, 5000);
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
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className={`slide ${i === index ? 'active' : ''}`}>
            <Image src={`/banner${i + 1}.png`} alt="rizo" width={1200} height={1200} className=''/>
            <motion.div
              className="relative mx-auto text-right max-w-screen-xl p-2">
              <motion.h1
                initial="hidden"
                animate={i === index ? "visible" : "hidden"}
                exit="hidden"
                variants={textVariants}
                className="font-extrabold text-4xl lg:text-7xl lg:mt-96 mt-40 mb-4 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-customGradient-start to-customGradient-end">
                {slide.title.split(' ').map((word, j, array) => (
                  <React.Fragment key={j}>
                    {j > 0 && j % 2 === 0 && <br />}
                    {word}{' '}
                  </React.Fragment>
                  ))}
                  </span>
              </motion.h1>
              <motion.h2
                initial="hidden"
                animate={i === index ? 'visible' : 'hidden'}
                exit="hidden"
                variants={textVariants}
                className='font-extrabold text-xl lg:text-2xl text-black'>
                {slide.subtitle.split(' ').map((word, j, array) => (
                  <React.Fragment key={j}>
                    {j > 0 && j % 7 === 0 && <br />}
                    {word}{' '}
                  </React.Fragment>
                  ))}
              </motion.h2>
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
