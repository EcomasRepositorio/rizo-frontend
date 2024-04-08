import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ModalGraduateProps {
  open: boolean;
  onClose: () => void;
  //content: ReactNode;
  children?: ReactNode;
}

const ModalGraduate: React.FC<ModalGraduateProps> = ({ open, onClose, children }) => {
    const overlayClass = open ? 'visible bg-black bg-opacity-50' : 'invisible';
    const modalClass = open ? 'scale-100 opacity-100 z-50' : 'scale-110 opacity-0';

  return (
    <div
      className={`fixed inset-0 p-4 flex justify-center items-center transition-colors ${overlayClass}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow p-5 transition-all max-w-4xl mx-auto w-full ${modalClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        {/* <Image src={content.image} alt="Modal Image" className="w-full mb-4" width={800} height={800}/>
        <p className="mb-4">{content.text}</p>
        <div className="flex space-x-2">{content.icons}</div> */}
        {children}
      </div>
    </div>
  );
};

export default ModalGraduate;
