import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      // Navegación
      nav: {
        inicio: 'Inicio',
        quienSoy: 'Quién Soy',
        comoTrabajo: 'Cómo Trabajo',
        servicios: 'Servicios',
        clubHipic: 'Club Hípic Julivert',
        blog: 'Blog',
        contacto: 'Contacto',
      },
      // Inicio
      inicio: {
        titulo: 'Bienvenida',
        subtitulo: 'Psicología con enfoque sistémico adaptado a cada persona',
        cta: 'Conoce mis servicios',
      },
      // Quién Soy
      quienSoy: {
        titulo: 'Quién Soy',
        presentacion: 'Me llamo Núria Llurba y soy psicóloga, especializada en terapia sexual y de pareja, con formación complementaria en psicología perinatal, y próximamente también en neuropsicología.',
        experiencia: {
          titulo: 'Experiencia',
          texto: 'Trayectoria en psicología forense (Juzgados de Barcelona) y en psicoterapias en la Universidad de Barcelona.',
        },
        enfoque: {
          titulo: 'Enfoque',
          texto: 'Mi enfoque es sistémico pero incorporo herramientas de otras corrientes para poder ofrecer sesiones más adaptadas a cada persona y circunstancia. Las dificultades de una persona se entienden dentro del contexto de sus relaciones.',
        },
      },
      // Cómo Trabajo
      comoTrabajo: {
        titulo: 'Cómo Trabajo',
        modalidad: {
          titulo: 'Modalidad Online',
          texto: 'Permite ahorro de tiempo, conciliación y acceso desde cualquier lugar en un entorno seguro.',
        },
        primerContacto: {
          titulo: 'Primer Contacto',
          texto: 'Se realiza una entrevista telefónica inicial gratuita para conocer la demanda y valorar si soy la profesional adecuada.',
        },
        filosofia: {
          titulo: 'Filosofía',
          texto: 'Los objetivos siempre los marca la persona o personas consultoras. Yo no impongo metas ni caminos concretos. Garantizo confidencialidad absoluta.',
        },
      },
      // Servicios
      servicios: {
        titulo: 'Servicios',
        consulta: {
          titulo: 'Consulta Psicológica',
          pareja: {
            titulo: 'Terapia de Pareja',
            descripcion: 'Espacio para mejorar la comunicación, resolver conflictos o cerrar etapas de manera consciente.',
            publico: 'Parejas',
            tarifa: '70€/sesión',
          },
          familiar: {
            titulo: 'Terapia Familiar',
            descripcion: 'Enfocada en revisar dinámicas y roles que ya no funcionan para encontrar nuevas formas de estar juntos.',
            publico: 'Familias',
            tarifa: '70€/sesión',
          },
          sexual: {
            titulo: 'Terapia Sexual',
            descripcion: 'Para explorar la intimidad sin juicios, tratando bloqueos, deseos o dificultades tanto individuales como en pareja.',
            publico: 'Individual o pareja',
            tarifa: '70€/sesión',
          },
          perinatal: {
            titulo: 'Psicología Perinatal',
            descripcion: 'Acompañamiento en embarazo, reproducción asistida, crianza inicial y duelo gestacional o neonatal.',
            publico: 'Mujeres y parejas',
            tarifa: '70€/sesión',
          },
          asesoramiento: {
            titulo: 'Asesoramiento y Acompañamiento',
            descripcion: 'Para adolescentes y adultos que enfrentan retos como ansiedad, estrés o inseguridad.',
            publico: 'Adolescentes y adultos',
            tarifa: '50€/sesión',
          },
        },
        talleres: {
          titulo: 'Talleres de Psicoeducación',
          duracion: 'Duración: 90 minutos',
          ninos: {
            titulo: 'Para Niños y Adolescentes',
            acoso: {
              titulo: 'Acoso Escolar (Romper el Silencio)',
              objetivos: 'Prevención y detección del acoso escolar.',
            },
            emocional: {
              titulo: 'Gestión Emocional (Me siento, me escucho, me entiendo)',
              objetivos: 'Identificar y expresar emociones de manera saludable.',
            },
            sexualidad: {
              titulo: 'Sexualidad y Afectividad',
              objetivos: 'Hablar sin tabús sobre consentimiento y respeto.',
            },
            relaciones: {
              titulo: 'Relaciones Sanas',
              objetivos: 'Prevención de violencia y mitos del amor romántico.',
            },
            comunicacion: {
              titulo: 'Comunicación Asertiva',
              objetivos: 'Habilidades para resolver conflictos de manera constructiva.',
            },
            identidad: {
              titulo: 'Identidad Adolescente',
              objetivos: 'Entender los cambios y establecer límites saludables.',
            },
          },
          familias: {
            titulo: 'Para Familias',
            comunicar: {
              titulo: 'Comunicar con Adolescentes',
              objetivos: 'Estrategias para recuperar la confianza y mejorar la comunicación.',
            },
            sexualidad: {
              titulo: 'Sexualidad en Familia',
              objetivos: 'Cómo hablar del tema con naturalidad según la edad.',
            },
            acoso: {
              titulo: 'Afrontar el Acoso Escolar',
              objetivos: 'Herramientas para detectar cambios desde casa.',
            },
          },
        },
      },
      // Club Hípic
      clubHipic: {
        titulo: 'Club Hípic Julivert',
        subtitulo: 'Terapia con caballos',
        actividades: {
          mindfulness: {
            titulo: 'Mindfulness con Caballos',
            descripcion: 'Atención plena y conexión emocional mediante la interacción con caballos.',
          },
          miedos: {
            titulo: 'Superar Miedos y Traumas',
            descripcion: 'Procesar experiencias marcadas mediante interacción directa con el animal.',
          },
          refuerzo: {
            titulo: 'Refuerzo Emocional',
            descripcion: 'Trabajar autoestima y empoderamiento usando al caballo como "espejo".',
          },
          teambuilding: {
            titulo: 'Team Building',
            descripcion: 'Dinámicas para empresas sobre liderazgo y cohesión de equipo.',
          },
          clinic: {
            titulo: 'Hípic Clínic',
            descripcion: 'Seminarios para jinetes que quieren mejorar técnica y gestión emocional bajo presión.',
          },
        },
      },
      // Formularios
      formularios: {
        informacion: {
          titulo: 'Solicitar Información',
          nombre: 'Nombre',
          apellidos: 'Apellidos',
          email: 'Email',
          telefono: 'Teléfono',
          tipoServicio: 'Tipo de servicio',
          consulta: 'Consulta',
          taller: 'Taller',
          modalidad: 'Modalidad específica',
          observaciones: 'Observaciones',
          enviar: 'Enviar',
        },
        cita: {
          titulo: 'Solicitar Cita Previa',
          seleccionarFecha: 'Seleccionar fecha',
          hora: 'Hora preferida',
        },
      },
      // Footer
      footer: {
        derechos: '© 2025 Núria Llurba Puig. Todos los derechos reservados',
        privacidad: 'Política de Privacidad',
        cookies: 'Política de Cookies',
        avisoLegal: 'Aviso Legal',
        email: 'Email',
        rrss: 'Redes Sociales',
      },
      // Blog
      blog: {
        titulo: 'Blog',
        leerMas: 'Leer más',
        volver: 'Volver al blog',
      },
    },
  },
  ca: {
    translation: {
      // Navegación
      nav: {
        inicio: 'Inici',
        quienSoy: 'Qui Sóc',
        comoTrabajo: 'Com Treballo',
        servicios: 'Serveis',
        clubHipic: 'Club Hípic Julivert',
        blog: 'Blog',
        contacto: 'Contacte',
      },
      // Inicio
      inicio: {
        titulo: 'Benvinguda',
        subtitulo: 'Psicologia amb enfocament sistèmic adaptat a cada persona',
        cta: 'Coneix els meus serveis',
      },
      // Quién Soy
      quienSoy: {
        titulo: 'Qui Sóc',
        presentacion: 'Em dic Núria Llurba i soc psicòloga, especialitzada en teràpia sexual i de parella, amb formació complementària en psicologia perinatal, i properament també en neuropsicologia.',
        experiencia: {
          titulo: 'Experiència',
          texto: 'Trajectòria en psicologia forense (Jutjats de Barcelona) i en psicoteràpies a la Universitat de Barcelona.',
        },
        enfoque: {
          titulo: 'Enfocament',
          texto: 'El meu enfocament és sistèmic però incorporo eines d\'altres corrents per poder oferir unes sessions més adaptades a cada persona i circumstància. Les dificultats d\'una persona s\'entenen dins del context de les seves relacions.',
        },
      },
      // Cómo Trabajo
      comoTrabajo: {
        titulo: 'Com Treballo',
        modalidad: {
          titulo: 'Modalitat Online',
          texto: 'Permet estalvi de temps, conciliació i accés des de qualsevol lloc en un entorn segur.',
        },
        primerContacto: {
          titulo: 'Primer Contacte',
          texto: 'Es realitza una entrevista telefònica inicial gratuïta per conèixer la demanda i valorar si sóc la professional adequada.',
        },
        filosofia: {
          titulo: 'Filosofia',
          texto: 'Els objectius sempre els marca la persona o persones consultores. Jo no imposo metes ni camins concrets. Garanteixo confidencialitat absoluta.',
        },
      },
      // Servicios
      servicios: {
        titulo: 'Serveis',
        consulta: {
          titulo: 'Consulta Psicològica',
          pareja: {
            titulo: 'Teràpia de Parella',
            descripcion: 'Espai per millorar la comunicació, resoldre conflictes o tancar etapes de manera conscient.',
            publico: 'Parelles',
            tarifa: '70€/sessió',
          },
          familiar: {
            titulo: 'Teràpia Familiar',
            descripcion: 'Enfocada en revisar dinàmiques i rols que ja no funcionen per trobar noves formes d\'estar junts.',
            publico: 'Famílies',
            tarifa: '70€/sessió',
          },
          sexual: {
            titulo: 'Teràpia Sexual',
            descripcion: 'Per explorar la intimitat sense judicis, tractant bloquejos, desitjos o dificultats tant individuals com en parella.',
            publico: 'Individual o parella',
            tarifa: '70€/sessió',
          },
          perinatal: {
            titulo: 'Psicologia Perinatal',
            descripcion: 'Acompanyament en embaràs, reproducció assistida, criança inicial i dol gestacional o neonatal.',
            publico: 'Dones i parelles',
            tarifa: '70€/sessió',
          },
          asesoramiento: {
            titulo: 'Assessorament i Acompanyament',
            descripcion: 'Per a adolescents i adults que enfronten reptes com ansietat, estrès o inseguretat.',
            publico: 'Adolescents i adults',
            tarifa: '50€/sessió',
          },
        },
        talleres: {
          titulo: 'Tallers de Psicoeducació',
          duracion: 'Durada: 90 minuts',
          ninos: {
            titulo: 'Per a Nens i Adolescents',
            acoso: {
              titulo: 'Assetjament Escolar (Trencar el Silenci)',
              objetivos: 'Prevenció i detecció de l\'assetjament escolar.',
            },
            emocional: {
              titulo: 'Gestió Emocional (Em sento, m\'escolto, m\'entenc)',
              objetivos: 'Identificar i expressar emocions de manera saludable.',
            },
            sexualidad: {
              titulo: 'Sexualitat i Afectivitat',
              objetivos: 'Parlar sense tabús sobre consentiment i respecte.',
            },
            relaciones: {
              titulo: 'Relacions Sanes',
              objetivos: 'Prevenció de violència i mites de l\'amor romàntic.',
            },
            comunicacion: {
              titulo: 'Comunicació Assertiva',
              objetivos: 'Habilitats per resoldre conflictes de manera constructiva.',
            },
            identidad: {
              titulo: 'Identitat Adolescent',
              objetivos: 'Entendre els canvis i establir límits saludables.',
            },
          },
          familias: {
            titulo: 'Per a Famílies',
            comunicar: {
              titulo: 'Comunicar amb Adolescents',
              objetivos: 'Estratègies per recuperar la confiança i millorar la comunicació.',
            },
            sexualidad: {
              titulo: 'Sexualitat en Família',
              objetivos: 'Com parlar del tema amb naturalitat segons l\'edat.',
            },
            acoso: {
              titulo: 'Afrontar l\'Assetjament Escolar',
              objetivos: 'Eines per detectar canvis des de casa.',
            },
          },
        },
      },
      // Club Hípic
      clubHipic: {
        titulo: 'Club Hípic Julivert',
        subtitulo: 'Teràpia amb cavalls',
        actividades: {
          mindfulness: {
            titulo: 'Mindfulness amb Cavalls',
            descripcion: 'Atenció plena i connexió emocional mitjançant la interacció amb cavalls.',
          },
          miedos: {
            titulo: 'Superar Pors i Traumes',
            descripcion: 'Processar experiències marcades mitjançant interacció directa amb l\'animal.',
          },
          refuerzo: {
            titulo: 'Reforç Emocional',
            descripcion: 'Treballar autoestima i empoderament usant el cavall com a "mirall".',
          },
          teambuilding: {
            titulo: 'Team Building',
            descripcion: 'Dinàmiques per a empreses sobre lideratge i cohesió d\'equip.',
          },
          clinic: {
            titulo: 'Hípic Clínic',
            descripcion: 'Seminaris per a genets que volen millorar tècnica i gestió emocional sota pressió.',
          },
        },
      },
      // Formularios
      formularios: {
        informacion: {
          titulo: 'Sol·licitar Informació',
          nombre: 'Nom',
          apellidos: 'Cognoms',
          email: 'Email',
          telefono: 'Telèfon',
          tipoServicio: 'Tipus de servei',
          consulta: 'Consulta',
          taller: 'Taller',
          modalidad: 'Modalitat específica',
          observaciones: 'Observacions',
          enviar: 'Enviar',
        },
        cita: {
          titulo: 'Sol·licitar Cita Prèvia',
          seleccionarFecha: 'Seleccionar data',
          hora: 'Hora preferida',
        },
      },
      // Footer
      footer: {
        derechos: '© 2025 Núria Llurba Puig. Tots els drets reservats',
        privacidad: 'Política de Privacitat',
        cookies: 'Política de Cookies',
        avisoLegal: 'Avís Legal',
        email: 'Email',
        rrss: 'Xarxes Socials',
      },
      // Blog
      blog: {
        titulo: 'Blog',
        leerMas: 'Llegir més',
        volver: 'Tornar al blog',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ca', // idioma por defecto (catalán)
    fallbackLng: 'ca',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
