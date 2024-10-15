"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import SearchCode from "@/components/certs/SearchCode";
import SearchDNI from "@/components/certs/SearchDNI";
import SearchName from "@/components/certs/SearchName";
import { FaCheckCircle } from "react-icons/fa";
import "./Styles.css";

interface Props {
  // Define any props if needed
}

const TestingPage: React.FC<Props> = () => {
  const handleSearch = (data: any) => {
    console.log(data);
  };

  return (
    <section className="bg-fixed " style={{}}>
      <div className="" style={{ position: "relative", overflow: "hidden" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/video-certs.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className=""
          style={{
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" py-8 mx-auto max-w-screen-xl lg:py-10">
            <div className="" style={{ position: "relative", width: "100%" }}>
              <div
                className="bg-gradient-to-bl to-customPurple800/80 from-customPurple300/80 via-[#3A1078]/80 rounded-lg p-8 md:p-12 mb-50 mx-2"
                style={{
                  marginBottom: "20px",
                }}
              >
                <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl md:mr-0 md:p-4">
                  <div className="md:mr-12">
                    <div className="flex flex-col">
                      <div className="mb-10 text-2xl font-extrabold text-center text-white md:mb-6 lg:text-4xl flex items-center justify-center">
                        VERIFICA TU CERTIFICADO
                        <Image
                          src="/logo/check.png" // Ruta de la imagen
                          alt="Success Icon"
                          width={70} // Ancho de la imagen
                          height={70} // Alto de la imagen
                          className="" // Estilos adicionales, si los necesitas
                        />
                      </div>
                      <div className="text-white font-medium text-center md:text-xl mb-10">
                        Comprueba la validez de tu certificado ingresando tu
                        DNI, nombre o el código de certificación que te fue
                        entregado al recibirlo. Garantizamos la protección de tu
                        privacidad y la seguridad de tus datos.
                      </div>

                      <Tabs
                        aria-label="Options"
                        color="primary"
                        classNames={{
                          tabList:
                            "w-full flex flex-col md:flex-row bg-transparent rounded-md border border-gray-300/40",
                          cursor: "bg-[#FFC400]/85 text-gray-100 rounded-lg",
                          tab: "py-2 px-4 rounded-t-lg text-gray-100",
                          tabContent:
                            "group-data-[selected=true]:text-gray-100 text-g-100 ",
                        }}
                      >
                        <Tab key="dni" title="Buscar por DNI" className="">
                          <Card>
                            <CardBody className="bg-transparent">
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

                  <div className="grid grid-cols-2 gap-2 mt-4 md:mt-0 md:w-full md:grid-rows-2 md:gap-y-8 justify-items-center md:items-center">
                    <div className="row-span-2">
                      <Image
                        src="/logo/rizo.png"
                        alt="rizo"
                        width={130}
                        height={130}
                        className=""
                      />
                    </div>

                    <div className="self-center">
                      <Image
                        src="/logo/unp.png"
                        alt="rizo"
                        width={140}
                        height={140}
                      />
                    </div>
                    <div className="row-span-2">
                      <Image
                        src="/logo/funde.png"
                        alt="rizo"
                        width={120}
                        height={120}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingPage;
