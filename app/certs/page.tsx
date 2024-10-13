"use client";
import React, { useState } from "react";
import SearchCode from "@/components/certs/SearchCode";
import SearchDNI from "@/components/certs/SearchDNI";
import SearchName from "@/components/certs/SearchName";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { BsQrCodeScan } from "react-icons/bs";
import { BsPersonVcard, BsPersonSquare } from "react-icons/bs";
import Image from "next/image";
import "./Styles.css";
import Whatsapp from "@/components/whatsapp/Index";
//import Whatsapp from '@/components/whatsapp/Index';

const Certificate: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchType, setSearchType] = useState<string | null>(null);

  const handleButton = (type: string) => {
    setSearchType(type);
    setIsActive(true);
  };

  const handleSearch = (data: string) => {
    console.log(data);
  };

  return (
    <section
      id="/certs"
      className="relative pt-20 pb-20 p-2 items-center justify-center bg-gray-700"
    >
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-45 blur-sm">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/video-certs.webm" type="video/mp4" />
        </video>
      </div>
      <div
        className="bg-primaryblue/75 rounded-lg p-8 md:p-12 mb-50 mx-2"
        style={{
          marginBottom: "20px",
        }}
      >
        <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl  md:mr-0 md:p-4  ">
          <div className="md:mr-12">
            <div className="flex flex-col">
              <h2 className=" mb-4 text-2xl font-extrabold text-center text-white md:mb-6 lg:text-4xl">
                VERIFICA TU CERTIFICADO
              </h2>
              <p className="text-white  font-light text-center md:text-xl mb-8  ">
                Verifica la autenticidad de tu certificado ingresando tu DNI,
                nombres o código de certificación proporcionado al obtenerlo.
                Nos aseguramos de proteger tu privacidad y la confidencialidad
                de tus datos.
              </p>

              <Tabs
                aria-label="Options"
                color="primary"
                classNames={{
                  tabList:
                    "w-full flex flex-col md:flex-row bg-transparent rounded-md border border-gray-300/40",
                  cursor: "bg-primarygreen/80 text-gray-100 rounded-lg",
                  tab: "py-2 px-4 rounded-t-lg text-gray-100",
                  tabContent:
                    "group-data-[selected=true]:text-gray-100 text-g-100 ",
                }}
              >
                <Tab key="dni" title="Buscar por DNI" className="">
                  <Card>
                    <CardBody className="bg-transparent roun">
                      <div className="">
                        <SearchDNI onSearchDNI={handleSearch} />
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="name" title="Buscar por Código">
                  <Card>
                    <CardBody className="bg-transparent dark:bg-blackblue2">
                      <div>
                        <SearchCode onSearchCode={handleSearch} />
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="code" title="Buscar por nombres">
                  <Card>
                    <CardBody className="bg-transparent dark:bg-blackblue2">
                      <div>
                        <SearchName onSearchName={handleSearch} />
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 mt-4 md:mt-0 md:w-full  md:grid-cols-1 md:grid-rows-1 md:gap-y-8  justify-items-center md:items-center ">
            <div>
              <Image
                src="/certificate/uni.png"
                alt="ecomas"
                width={150}
                height={150}
                className=""
              />
            </div>

            <div>
              <Image
                src="/certificate/logo_sayan.png"
                alt="ecomas"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
    </section>
  );
};

export default Certificate;
