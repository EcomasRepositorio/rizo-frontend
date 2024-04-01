import React from 'react'
import { BsAlarmFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
              <p className='pt-2 text-cyan-100 text-sm'>asdasdasdasdasdasdasdasdwaerwetertert</p>
            </div>
            <div className='flex flex-col space-y-4'>
              <div className='inline-flex space-x-2 items-center'>
                <BsAlarmFill className='text-teal-300 text-xl' />
                <span>+8721563545653232</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <BsAlarmFill className='text-teal-300 text-xl' />
                <span>+8721563545653232</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <BsAlarmFill className='text-teal-300 text-xl' />
                <span>+8721563545653232</span>
              </div>
            </div>
            <div  className='flex space-x-4 text-lg'>
              <a href="">
                <BsAlarmFill/>
              </a>
              <a href="">
                <BsAlarmFill/>
              </a>
              <a href="">
                <BsAlarmFill/>
              </a>
              <a href="">
                <BsAlarmFill/>
              </a>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute z-0 w-48 h-48 bg-teal-400 rounded-full -right-28 -top-28'></div>
            <div className='absolute z-0 w-48 h-48 bg-teal-400 rounded-full -left-28 -bottom-16'></div>
            <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full'>
              <form action="" className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="" className='text-sm'>Your Name</label>
                  <input type="text" placeholder='Your name' className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm'>Email Address</label>
                  <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'/>
                </div>
                <div>
                  <label htmlFor="" className='text-sm'>Message</label>
                  <textarea placeholder='Message' rows={4} className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                </div>
                <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;