import Content1 from "@/components/graduate/Content1";
import Content2 from "@/components/graduate/Content2";

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
        { title: "Asistente técnico en obras", contentComponent: <Content1 /> },
        { title: "Ingeniería vial", contentComponent: <Content2 /> },
        { title: "Ingeniería de puentes", contentComponent: <Content1 /> },
        { title: "Ingeniería estructural", contentComponent: <Content2 /> },
        { title: "Residencia y supervición de obras", contentComponent: <Content1 /> },
        { title: "Modelamiento BIM", contentComponent: <Content2 /> },
      ],
      image: "/contact.jpg",
    },
    {
      id: 2,
      question: "Ingeniería ambiental",
      answers: [
        "Gestión y manejo integral de residuos sólidos",
        "Monitoreo y evaluación de la calidad ambiental",
        "Estudio de impacto ambiental",
        "Gestión ambiental municipal y regional",
        "SSOMA (Seguridad y Salud Ocupacional y Medio Ambiente",
      ],
      image: "/phone.png",
    },
    {
      id: 3,
      question: "Ingeniería agrónoma",
      answers: [
        "Riego y fertirriego",
        "Sistema de riego técnificado",
      ],
      image: "/contact.jpg"
    },
    {
      id: 4,
      question: "Ingeniería de industrias alimentarias",
      answers: [
        "Gestión de cálidad e inocuidad alimentaria",
      ],
      image: "/contact.jpg"
    },
  ]