import IngVial from "@/components/graduate/IngCivil/IngVial";
import AsistenteTecnico from "@/components/graduate/IngCivil/AsistenteTecnico";
import IngPuentes from "@/components/graduate/IngCivil/IngPuentes";
import IngEstructural from "@/components/graduate/IngCivil/IngEstructural";
import ResidenciaObras from "@/components/graduate/IngCivil/ResidenciaObras";
import ModelamientoBIM from "@/components/graduate/IngCivil/ModelamientoBIM";
import GestionResiduosSolidos from "@/components/graduate/IngAmbiental/GestionResiduosSolidos";
import MonitoreoAmbiental from "@/components/graduate/IngAmbiental/MonitoreoAmbiental";
import EstudioAmbiental from "@/components/graduate/IngAmbiental/EstudioAmbiental";
import GestionMunicipal from "@/components/graduate/IngAmbiental/GestionMunicipal";
import Ssoma from "@/components/graduate/IngAmbiental/Ssoma";
import Riego from "@/components/graduate/IngAgronoma/Riego";
import SistemaRiego from "@/components/graduate/IngAgronoma/SistemaRiego";
import GestionAlimentaria from "@/components/graduate/IngAlimentaria/GestionAlimentaria";
import IngSanitaria from "@/components/graduate/IngAmbiental/IngSanitaria";

export const FEATURES = [
    {
      title: 'Visión',
      icon: '/map.svg',
      variant: 'green',
      description:
        'Generar conocimientos e innovación comprometida con la formación sólida e integral de profesionales, especialistas e investigadores de excelencia, brindando una oferta académica flexible y dinámica que responda a las necesidades del mundo globalizado y contribuya al bienestar y sostenibilidad de nuestro país y del mundo.',
    },
    {
      title: 'Misión',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "Garantizar una inserción rápida y eficiente en el mundo laboral o la actualización de conocimientos que mejoren y hagan más competitivo su perfil profesional y preparados para afrontar cualquier exigencia laboral del mercado nacional e internacional.",
    },
    {
      title: 'Objetivos',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'Lograr que seas una persona de “más mundo”, no solo porque adquieres habilidades que enriquecen tu nivel cultural; sino porque ampliar tus conocimientos en un área específica también te ayudará a ser un profesional más preparado.',
    },
    {
      title: 'Valores',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'Todo ser humano tiene Derecho a Formarse y acceder a programas de calidad, especialmente aquellas personas con recursos limitados y comprender mejor sus necesidades formativas y ofrecerle las mejores soluciones.',
    },
  ];

export const questions = [
    {
      id: 1,
      question: "Ingeniería civil",
      answers: [
        { title: "Asistente técnico en obras", contentComponent: <AsistenteTecnico />, image: "/contact.jpg" },
        { title: "Ingeniería vial", contentComponent: <IngVial />, image: "/contact.jpg"  },
        { title: "Ingeniería de puentes", contentComponent: <IngPuentes />, image: "/contact.jpg"  },
        { title: "Ingeniería estructural", contentComponent: <IngEstructural />, image: "/contact.jpg"  },
        { title: "Residencia y supervición de obras", contentComponent: <ResidenciaObras />, image: "/contact.jpg"  },
        { title: "Modelamiento BIM", contentComponent: <ModelamientoBIM />, image: "/contact.jpg"  },
      ],
    },
    {
      id: 2,
      question: "Ingeniería ambiental",
      answers: [
        { title: "Gestión y manejo integral de residuos sólidos", contentComponent: <GestionResiduosSolidos />, image: "/contact.jpg" },
        { title: "Monitoreo y evaluación de la calidad ambiental", contentComponent: <MonitoreoAmbiental />, image: "/contact.jpg"  },
        { title: "Estudio de impacto ambiental", contentComponent: <EstudioAmbiental />, image: "/contact.jpg" },
        { title: "Gestión ambiental municipal y regional",contentComponent: <GestionMunicipal />, image: "/contact.jpg" },
        { title: "Ingeniería Sanitaria", contentComponent: <IngSanitaria />, image: "/contact.jpg" },
        { title: "SSOMA (Seguridad y Salud Ocupacional y Medio Ambiente", contentComponent: <Ssoma />, image: "/contact.jpg" },
      ],
    },
    {
      id: 3,
      question: "Ingeniería agrónoma",
      answers: [
        { title: "Riego y fertirriego", contentComponent: <Riego />, image: "/contact.jpg" },
        { title: "Sistema de riego técnificado", contentComponent: <SistemaRiego/>, image: "/contact.jpg" },
      ],
    },
    {
      id: 4,
      question: "Ingeniería de industrias alimentarias",
      answers: [
        { title: "Gestión de cálidad e inocuidad alimentaria", contentComponent: <GestionAlimentaria />, image: "/contact.jpg" },
      ],
    },
  ]