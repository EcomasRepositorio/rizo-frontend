import React, { useState, FormEvent } from "react";
import { URL } from "@/components/utils/format/tokenConfig";
import axios from "axios";
import { SearchCodeProps, StudentCode } from "../../interface/interface";
import Modal from "../share/Modal";
import Image from "next/image";

const SearchCode: React.FC<SearchCodeProps> = ({ onSearchCode }) => {
  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<StudentCode>();
  const [open, setOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "onChange ejecutado");
    setQueryValue(event.target.value);
    setSearchType(event.target.value);
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchCode = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }
    try {
      const value = queryValue.trim();
      const apiUrl = `${URL()}/student/code/${value}/type/${searchType}`;
      console.log(apiUrl);
      const res = await axios.get(
        `${URL()}/student/code/${value.trim()}/type/${searchType}`
      );
      console.log(res);
      setStudentData(res.data);
      onSearchCode(res.data);
      if (queryValue.trim() !== "") {
        setOpen(true);
      }
    } catch (error) {
      console.error("Error: Codigo invalido", error);
      openErrorModal();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };
  const tableRows = [
    {
      imgSrc: "/icons/organizadopor.svg",
      label: "Organizado por:",
      value: studentData?.institute,
    },
    {
      imgSrc: "/icons/otorgado.svg",
      label: "Otorgado a:",
      value: studentData?.name,
    },
    {
      imgSrc: "/icons/nom_evento.svg",
      label: "Nombre del evento:",
      value: studentData?.activityAcademy,
    },
    {
      imgSrc: "/icons/creditos_horas.svg",
      label: "Creditos/Horas:",
      value: studentData?.hour,
    },
    {
      imgSrc: "/icons/fecha_emision.svg",
      label: "Fecha de emisión:",
      value: studentData?.date,
    },
  ];

  const splitText = (text: string): string[] => {
    // Elimina espacios innecesarios
    const cleanText = text.trim();

    // Identificamos las posiciones de las palabras clave dentro del texto
    const indexCorporacion = cleanText.indexOf("Corporación RIZO");
    const indexFundenorp = cleanText.indexOf("FUNDENORP");
    const indexEscuela = cleanText.indexOf("Escuela de Posgrado");
    const indexUniversidad = cleanText.indexOf("Universidad Nacional de Piura");

    // Si contiene "Escuela de Posgrado"
    if (
      indexCorporacion !== -1 &&
      indexFundenorp !== -1 &&
      indexEscuela !== -1
    ) {
      const corporacion = cleanText
        .substring(indexCorporacion, indexEscuela)
        .trim(); // Desde "Corporación SAYAN" hasta "Escuela de Posgrado"
      const escuela = cleanText.substring(indexEscuela, indexFundenorp).trim(); // Desde "Escuela de Posgrado" hasta "FUNDENORP"
      const fundenorp = cleanText.substring(indexFundenorp).trim(); // Desde "FUNDENORP" hasta el final

      return [corporacion, escuela, fundenorp];
    }

    // Si contiene "Universidad Nacional de Piura" (y no "Escuela de Posgrado")
    if (
      indexCorporacion !== -1 &&
      indexFundenorp !== -1 &&
      indexUniversidad !== -1
    ) {
      const corporacion = cleanText
        .substring(indexCorporacion, indexUniversidad)
        .trim(); // Desde "Corporación SAYAN" hasta "Universidad Nacional de Piura"
      const universidad = cleanText
        .substring(indexUniversidad, indexFundenorp)
        .trim(); // Desde "Universidad Nacional de Piura" hasta "FUNDENORP"
      const fundenorp = cleanText.substring(indexFundenorp).trim(); // Desde "FUNDENORP" hasta el final

      return [corporacion, universidad, fundenorp];
    }

    // Si no encuentra las palabras clave, devuelve el texto dividido en palabras
    const words = cleanText.split(" ");
    const firstLine = words.slice(0, 9).join(" "); // Primeras 9 palabras
    const secondLine = words.slice(9, 10).join(" "); // Palabra 10
    const thirdLine = words.slice(10).join(" "); // Resto de las palabras
    return [firstLine, secondLine, thirdLine].filter((line) => line.length > 0);
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-8 text-center lg:mb-12">
      <form
        onSubmit={searchCode}
        className="w-full md:w-2/3 lg:w-full xl:w-2/3 mx-auto"
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium "
        ></label>
        <div className="relative lg:mx-auto mr-4 ml-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full font-semibold p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder={`Buscar por código ${
              searchType === "code" ? "código" : ""
            }`}
            required
            onClick={toggleIsActive}
            onChange={onChange}
            value={queryValue}
          />
          <button
            type="submit"
            className="buttonGlobal absolute end-1.5 bottom-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-1.5"
            onClick={() => setOpen(true)}
          >
            Buscar
          </button>
        </div>
      </form>
      {loading && <p>Cargando...</p>}
      {studentData && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="flex justify-center mb-4 gap-1">
            <Image
              src={"/logo/logo_unp.png"}
              alt="rizo"
              className="md:w-36 md:h-36 w-32 h-32 object-contain mt-2"
              width={800}
              height={800}
              priority={true}
            />
            <Image
              src={"/logo/logo-certificate.png"}
              alt="rizo"
              className="md:w-[120px] md:h-[140px] w-32 h-[125px] md:mt-[13px] mt-[11px] object-contain"
              width={800}
              height={800}
              priority={true}
            />
            <Image
              src={"/logo/logo_cip_tacna.png"}
              alt="rizo"
              className="md:w-36 md:h-36 w-32 h-32 object-contain mt-2"
              width={800}
              height={800}
              priority={true}
            />
          </div>
          <div className="max-w-md text-center bg-white rounded-md mx-auto">
            {tableRows.map((row, index) => (
              <div key={index} className="mb-4">
                <div className="inline-flex items-center text-gray-100 text-sm p-1 md:w-80 w-72 rounded-lg bg-slate-600 font-semibold">
                  {row.imgSrc && (
                    <Image
                      src={row.imgSrc}
                      alt={row.label}
                      className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1"
                      width={800}
                      height={800}
                    />
                  )}
                  <div className="flex-1 text-center">{row.label}</div>
                </div>

                <div className="text-gray-900 mt-3 mb-5 text-sm font-semibold">
                  {row.value === studentData?.institute &&
                    row.value &&
                    splitText(row.value).map((line, index) => (
                      <p key={index} className="mb-1">
                        {line}
                      </p>
                    ))}
                  {row.value !== studentData?.institute && row.value}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className="border-2 p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-600 mb-4">
            Código incorrecto
          </h2>
          <h3 className="text-sm font-semibold text-gray-600">
            El código que ingresaste no se encuentra en nuestra base de datos.
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default SearchCode;
