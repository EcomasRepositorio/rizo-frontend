"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { InView } from "react-intersection-observer";

const HoverDevCards = () => {
  return (
    <div className="p-4 mb-10 mt-10 max-w-screen-xl mx-auto">
      <p className="text-xl font-semibold mb-2">Settings</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="Educación a tu alcance"
          subtitle="Manage profile"
          Icon={FiUser}
          index={0}/>
        <Card
          title="Docentes especializados"
          subtitle="Docentes capcitados para una educacion de calidad"
          Icon={FiMail}
          index={1}/>
        <Card
          title="A tu propio ritmo"
          subtitle="Puedes adaptar tu horario de estudios al resto de compromisos de tu dia"
          Icon={FiUsers}
          index={2}/>
        <Card
          title="Precios comodos"
          subtitle="Manage cards"
          Icon={FiCreditCard}
          index={3}/>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, index }: { title: string, subtitle: string, Icon: React.ElementType, index:number }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50, translateY: -50 }}
          animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
          <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
          <Icon className="mb-2 text-5xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
          <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
            {title}
          </h3>
          <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
            {subtitle}
          </p>
        </motion.div>
      )}
    </InView>
  );
};

export default HoverDevCards;