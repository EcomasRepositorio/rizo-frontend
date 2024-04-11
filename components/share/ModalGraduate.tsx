import React from 'react';

interface ModalGraduateProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

  const ModalGraduate: React.FC<ModalGraduateProps> = ({ open, onClose, children }) => {
  const overlayClass = open ? 'visible bg-black bg-opacity-50' : 'invisible';
  const modalClass = open ? 'scale-100 opacity-100 z-100' : 'scale-110 opacity-0';

  return (
    <div
      className={`fixed inset-0 p-4 pt-32 flex justify-center items-center transition-colors ${overlayClass}`}
      onClick={onClose}>
      <div
        className={`bg-white rounded-2xl shadow p-5 transition-all w-full md:max-w-4xl mx-auto max-h-full overflow-y-auto ${modalClass}`}
        onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-customPurple800/50 rounded-lg text-customPurple800 bg-white hover:bg-gray-50 hover:text-customOrange hover:scale-110"
          onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalGraduate;


