import React from 'react'

const Maintenance = () => {
  return (
    <div className="relative pt-20 lg:pt-96 pb-28 lg:pb-96">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{ backgroundImage: 'url("/fondo.jpeg")' }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-20 bg-gray-800"
      ></span>
    </div>
    <div className="relative mx-auto text-center max-w-screen-xl p-2 text-white border rounded-2xl backdrop-blur-lg">
      <h1 className="font-extrabold text-4xl lg:text-8xl mt-20 mb-20">
        Pagina en mantenimiento
      </h1>
    </div>
  </div>
  )
}

export default Maintenance;