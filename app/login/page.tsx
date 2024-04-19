"use client";
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import PasswordInputs from '@/components/utils/format/passwordHash';
import Whatsapp from '@/components/whatsapp/Index';

type ResErrors = {
  message: string;
  errorContent: string;
};

type Auth = {
  email: string;
  password: string;
  role: boolean;
  token: string;
};

const dataForm = {
  email: '',
  password: '',
  role: true,
  token:'',
};

const { PasswordInput } = PasswordInputs;
const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<Auth>();
  const [ error, setError ] = useState<ResErrors | null>(null);
  const [ form, setForm ] = useState<Auth>(dataForm);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string,
  ) => {
    const { value } = target;
    setForm({ ... form, [textField]: value });
    if (error && (textField === 'email' || textField === 'password')) {
      setError(null);
    }
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post('https://backend.rizo.edu.pe/api/v1/user/login', form);
      if (response.data.token) {
        const token = response.data.token;
        saveToken(token);
        window.location.href = 'student';
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;
        if (data.message === 'email no existe') {
          setError({ message: 'El email no está registrado', errorContent: '' });
        } else if (data.message === 'password incorrecto') {
          setError({ message: 'La contraseña es incorrecta', errorContent: '' });
        } else {
          setError({ message: 'Datos incorrectos', errorContent: '' });
        }
      } else {
        setError({ message: 'Datos incorrectos', errorContent: '' });
      }
    }
  };

  useEffect(() => {
    if (error?.message === 'email | constraseña incorrecto') {
      setError(null);
    }
  }, [form.email, form.password, error?.message]);

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="relative flex flex-col text-gray-700 bg-white shadow-xl shadow-customOrange w-96 rounded-xl bg-clip-border">
  <div
    className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-customPurple300 to-gray-800 bg-clip-border shadow-customPurple800/50">
    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
      Iniciar sesión
    </h3>
  </div>
  <form className="flex flex-col gap-4 p-6" onSubmit={handleSubmit(onSubmit)}>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        type="email"
        className={`w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ${
          error?.message === 'El email no está registrado' ? 'border-red-500' : ''
        }`}
        placeholder=" "
        onChange={(event) => handleFormData(event, "email")}
        onKeyDown={handleKeyDown}/>
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Email
      </label>
      {error?.message === 'El email no está registrado' && (
            <span className="text-red-500 text-sm">El email no está registrado</span>
          )}
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        type='password'
        name='password'
        //register={register}
        className={`w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
        placeholder=" "
        onChange={(event) => handleFormData(event, 'password')}
        onKeyDown={(event) => handleKeyDown(event)}/>
        {error?.message === 'La contraseña es incorrecta' && (
            <span className="text-red-500 text-sm">La contraseña es incorrecta</span>
          )}
          <label
            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Password
          </label>
    </div>
    {error?.message === 'Datos incorrectos' && (
          <span className="text-red-500 text-sm">Datos incorrectos</span>
        )}
    <div className="-ml-2.5">
      <div className="inline-flex items-center">
        <label htmlFor="checkbox" className="relative flex items-center p-3 rounded-full cursor-pointer">
          <input type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id="checkbox" />
          <span
            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" strokeWidth="1">
              <path fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"></path>
            </svg>
          </span>
        </label>
        <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">
          Remember Me
        </label>
      </div>
    </div>
  </form>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-gradient-to-tr from-customPurple300 to-customPurple800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-customOrange/50 transition-all hover:shadow-lg hover:shadow-customPurple300/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      value='login'
      onClick={() => onSubmit()}>
      Login
    </button>
    <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
      Dont have an account?
      <a href="#signup"
        className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
        Sign up
      </a>
    </p>
  </div>
</div>
<Whatsapp />
</div>
  )
}

export default Login;