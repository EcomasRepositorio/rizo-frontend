import React, { useState } from 'react'
import tokenConfig, { URL } from '@/components/utils/format/tokenConfig';
import axios from 'axios'
import { useRouteData } from '@/hooks/hooks';
import { AiFillDelete } from 'react-icons/ai';
import Modal from '@/components/share/Modal';

const DeleteAllStudent = () => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const token = useRouteData("parameter") as string;
  const validToken: string = token || '';

  const handleOpenDelete = () => {
    setDeleteOpen(true);
  };

  const handleCloseDelete = () => {
    setDeleteOpen(false);
  };

  const handleDeleteAllData = async () => {
    try {
      // Realiza la solicitud DELETE al backend
      await axios.delete(`${URL()}/delete/students/many`, tokenConfig(validToken));
      // Cierra el modal después de eliminar los datos
      handleCloseDelete();
    } catch (error) {
      console.error('Error deleting all students:', error);
      // Aquí puedes manejar cualquier error que ocurra durante la eliminación
    }
  };

  return (
    <section className="p-2">
      <button
        type="button"
        className="text-red-500 uppercase hover:text-white border-2 border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-xs px-2 py-2 text-center mb-1 dark:hover:text-white dark:focus:ring-red-200"
        onClick={handleOpenDelete}
      >
        <AiFillDelete className="text-lg mr-1" />
        Borrar todos los datos
      </button>

      <Modal
        open={deleteOpen}
        onClose={handleCloseDelete}>
        <div className="border-2 border-red-500 p-4 rounded-2xl">
          <p className='mb-5'>¿Estás seguro de que deseas eliminar todos los datos?</p>
          <div className="flex justify-between">
            <button
              onClick={handleDeleteAllData}
              className='border border-red-500 px-6 py-1 rounded-lg'>
                Confirmar</button>
            <button onClick={handleCloseDelete}>Cancelar</button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default DeleteAllStudent;
