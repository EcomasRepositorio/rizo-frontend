import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { VscBook } from "react-icons/vsc";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=''>
    <footer
      className="bg-transparent bg-clip bg-gradient-to-b from-customPurple800 to-customPurple300 text-center text-gray-100 lg:text-left">
      <div className=" mx-auto px-4">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6
                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <Image
                  src="/logo/logo-footer.png"
                  alt="logo_promas"
                  width={800}
                  height={800}
                  priority={true}/>
              </h6>
              <p>
                Proporcionamos cursos y diplomados
              </p>
              <Link href="/book" className='inline-flex items-center mt-4 text-xl text-gray-100 font-semibold hover:underline'>
                <VscBook className='mr-2 text-2xl'/>
                <p>Libro de Reclamaciones</p>
              </Link>
            </div>
            <div className="">
              <h6
                className="font-extrabold mb-4 flex justify-center uppercase md:justify-start">
                Nuestra empresa:
              </h6>
              <h1 className="mb-4">
                <Link href="/" className="font-semibold text-gray-100 hover:underline"
                  >Inicio</Link>
              </h1>
              <p className="mb-4">
                <Link href="/certificate" className="font-semibold text-gray-100 hover:underline"
                  >Certificado </Link>
              </p>
              <p className="mb-4">
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline">
                  Diplomados</Link>
              </p>
              <p className='mb-4'>
                <Link href="/about" className="font-semibold text-gray-100 hover:underline"
                  >Nosotros</Link>
              </p>
              <p>
                <Link href="/" className="font-semibold text-gray-100 hover:underline"
                  >¡Inscr&iacute;bete!</Link>
              </p>
            </div>
            <div className="">
              <h6
                className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                Nuestros diplomados en:
              </h6>
              <p className="mb-4">
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenier&iacute;a Vial</Link>
              </p>
              <p className="mb-4">
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenier&iacute;a Agronoma</Link>
              </p>
              <p className="mb-4">
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenier&iacute;a Civil</Link>
              </p>
              <p className='mb-4'>
                <Link href="/graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenier&iacute;a Ambiental</Link>
              </p>
              <p>
                <Link href="graduate" className="font-semibold text-gray-100 hover:underline"
                  >Ingenier&iacute;a de industrias Alimentarias</Link>
              </p>
            </div>
            <div>
              <h6
                className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                Contacto
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Per&uacute;
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                capacitaciones@rizo.edu.pe
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd" />
                </svg>
                +51 961646248
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 text-center">
        <span>© 2024 Copyright:</span>
        <Link
          className="font-semibold text-neutral-300"
          href="/"
          > Corporaci&oacute;n Rizo</Link>
      </div>

    </footer>
</div>
  )
}

export default Footer