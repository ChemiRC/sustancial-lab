/**
 * SUSTANCIAL LAB — Contenido Editorial y Curatorial
 * Estructura de datos desacoplada lista para conectar con un gestor de contenidos (CMS).
 */

export const siteContent = {
  meta: {
    siteName: 'SUSTANCIAL',
    fullTitle: 'SUSTANCIAL LAB',
    subtitle: 'Colectivo y Laboratorio de Historia del Arte',
    city: 'Ciudad de México',
    editionLabel: 'Archivo Editorial y Curatorial',
  },

  navigation: {
    brandShort: 'SUSTANCIAL',
    brandSub: 'Historia del Arte',
    homeLabel: 'Inicio',
    menuOpenLabel: 'Menú',
    menuCloseLabel: 'Cerrar',
    indexDrawerTitle: 'Índice de Secciones',
    items: [
      {
        index: '01',
        id: 'manifiesto',
        label: 'Manifiesto',
        title: 'Manifiesto y Declaración Editorial',
        description:
          'Posicionamiento crítico del colectivo, líneas de investigación y vocación curatorial.',
      },
      {
        index: '02',
        id: 'exposiciones',
        label: 'Exposiciones',
        title: 'Archivo de Exposiciones',
        description:
          'Memoria de montajes curatoriales, fichas de sala, registro fotográfico y documentación audiovisual.',
      },
      {
        index: '03',
        id: 'entrevistas',
        label: 'Entrevistas',
        title: 'Conversaciones con Artistas',
        description:
          'Diálogos en taller con creadores, grabadores, curadores e investigadores visuales.',
      },
      {
        index: '04',
        id: 'ensayos',
        label: 'Ensayos',
        title: 'Ensayos y Crítica',
        description:
          'Textos de investigación historiográfica, análisis de la imagen y estudios sobre materialidad.',
      },
    ],
  },

  hero: {
    wordmark: 'SUSTANCIAL',
    kicker: 'Colectivo y Laboratorio de Historia del Arte',
    tagline:
      'Investigación visual, curaduría independiente y lectura crítica de la historia de las imágenes desde su materialidad.',
    placeholderNote:
      '[Espacio para frase introductoria o presentación breve del colectivo]',
    illustration: {
      src: '/assets/brand/hummingbird-cutout.png',
      alt: 'Grabado de colibrí sobre la retícula editorial de Sustancial Lab',
      caption: 'Estudio gráfico de archivo — Xilografía y tinta sobre retícula',
    },
    primaryCta: {
      label: 'Leer Manifiesto',
      targetScreen: 'manifiesto',
    },
    secondaryCta: {
      label: 'Archivo de Exposiciones',
      targetScreen: 'exposiciones',
    },
    highlights: [
      {
        label: 'Disciplina',
        value: 'Historia del Arte y Curaduría',
      },
      {
        label: 'Líneas de trabajo',
        value: 'Exposiciones · Entrevistas · Ensayos',
      },
      {
        label: 'Enfoque',
        value: 'Investigación visual y archivo',
      },
      {
        label: 'Sede',
        value: 'Ciudad de México',
      },
    ],
  },

  manifesto: {
    index: '01',
    id: 'manifiesto',
    headerTag: '01 · Manifiesto',
    categoryTag: 'Declaración de Principios',
    title: 'Por una Historia del Arte viva, crítica y tangible',
    subtitle:
      '[Espacio para subtítulo o síntesis conceptual del manifiesto del colectivo]',
    lead:
      'No estudiamos objetos aislados en vitrinas neutrales: abordamos la historia de las imágenes como una materia viva que dialoga con nuestro presente.',
    paragraphs: [
      'Sustancial Lab nace con el propósito de llevar la investigación en Historia del Arte más allá del ámbito estrictamente académico, vinculándola con la práctica curatorial independiente, la edición impresa y la conversación pública. Entendemos el laboratorio como un espacio de encuentro entre el archivo histórico y la creación contemporánea.',
      '[Espacio para segundo párrafo del manifiesto: aquí el colectivo puede detallar su metodología, su historia fundacional y sus objetivos a corto y mediano plazo.]',
    ],
    featuredQuote: {
      label: 'Tesis central',
      text: '«Toda imagen conserva la huella material de su época; nuestra labor curatorial consiste en activar esas memorias en el espacio expositivo.»',
      attribution: 'Colectivo Sustancial Lab',
    },
    secondaryQuote: {
      label: 'Vocación editorial',
      text: '«Pensar el arte desde el montaje, el impreso y la escritura accesible pero rigurosa.»',
    },
    specimen: {
      label: 'Gráfica de identidad',
      title: 'Sustancia Crítica',
      subtitle: 'Grabado y tinta carmesí',
      image: '/assets/brand/vial-cutout.png',
      alt: 'Grabado de frasco carmesí con el nombre Sustancial',
    },
    collectivePhoto: {
      label: 'El Colectivo',
      caption:
        'Integrantes de Sustancial Lab. [Espacio para pie de foto y nombres de los miembros del colectivo].',
      location: 'Ciudad de México',
      image: '/assets/brand/collective-portrait.jpg',
      alt: 'Retrato en blanco y negro de los integrantes del colectivo Sustancial Lab',
    },
    pillars: [
      {
        number: 'I',
        title: 'Curaduría Experimental',
        description:
          'Diseño de exposiciones que ponen en diálogo obras históricas, documentos de archivo y prácticas artísticas contemporáneas.',
      },
      {
        number: 'II',
        title: 'Memoria y Archivo Visual',
        description:
          'Rescate y estudio de gráfica, publicaciones independientes y repertorios visuales poco explorados por la historiografía tradicional.',
      },
      {
        number: 'III',
        title: 'Edición y Divulgación Crítica',
        description:
          'Publicación de entrevistas a artistas y ensayos de investigación abiertos al público y a la comunidad cultural.',
      },
    ],
  },

  exhibitions: {
    index: '02',
    id: 'exposiciones',
    headerTag: '02 · Exposiciones',
    categoryTag: 'Archivo Curatorial',
    title: 'Archivo de Exposiciones',
    subtitle:
      'Registro de muestras, proyectos curatoriales y montajes realizados por el colectivo. Selecciona una exposición para consultar su texto de sala, galería fotográfica y documentación en video.',
    labels: {
      listHeader: 'Exposiciones realizadas',
      yearHeader: 'Año y sede',
      technicalSheetTitle: 'Datos de la exposición',
      galleryTitle: 'Registro fotográfico de sala',
      videoTitle: 'Registro audiovisual',
      artistsLabel: 'Artistas participantes',
      curatorshipLabel: 'Curaduría',
      datesLabel: 'Fechas de exhibición',
      venueLabel: 'Sede / Espacio',
      videoActionLabel: 'Reproducir vista previa',
      videoCloseLabel: 'Detener vista previa',
      zoomHint: 'Haz clic en cualquier imagen para ampliarla',
    },
    items: [
      {
        id: 'exp-01',
        number: '01',
        year: '2026',
        status: 'Exposición reciente',
        title: 'Materia Residual: Arqueologías del Impreso',
        venue: 'Espacio Bucareli, Ciudad de México',
        dates: 'Febrero — Marzo 2026',
        curatorship: 'Sustancial Lab',
        format: 'Instalación de archivo, grabado y publicación',
        synopsis:
          'Una revisión del grabado calcográfico, los impresos independientes y las matrices de taller como documentos vivos de la memoria urbana. [Espacio para texto curatorial de la exposición: descripción conceptual, recorrido de sala y obras destacadas.]',
        artists: [
          'Valeria Mondragón',
          'Tomás Ibarra-Ríos',
          'Elena Kovács',
          '[Lista de artistas participantes]',
        ],
        gallery: [
          {
            id: 'g-01-a',
            label: 'Vista de sala I',
            caption: 'Vista general del montaje y mesas de consulta documental. [Espacio para cédula de obra o pie de foto].',
            src: '/assets/exhibitions/exh-materia-1.jpg',
          },
          {
            id: 'g-01-b',
            label: 'Vista de sala II',
            caption: 'Detalle de vitrina con manuscritos, planchas grabadas y obra gráfica.',
            src: '/assets/exhibitions/exh-materia-2.jpg',
          },
          {
            id: 'g-01-c',
            label: 'Vista de sala III',
            caption: 'Mesa de lectura cartográfica y pruebas de impresión.',
            src: '/assets/exhibitions/exh-cartografias-1.jpg',
          },
        ],
        video: {
          duration: '04:38 min',
          title: 'Recorrido comentado por la exposición',
          note: '[Espacio para video documental o recorrido de sala de la exposición]',
          poster: '/assets/exhibitions/exh-materia-1.jpg',
          videoUrl: null,
        },
      },
      {
        id: 'exp-02',
        number: '02',
        year: '2025',
        status: 'Archivo 2025',
        title: 'Iconoclasia Latente: Fragmento y Memoria',
        venue: 'Ex-Taller Santa María',
        dates: 'Octubre — Noviembre 2025',
        curatorship: 'Sustancial Lab',
        format: 'Escultura, gráfica y proyección audiovisual',
        synopsis:
          'Diálogo entre fragmentos escultóricos, fotografía documental y gráfica contemporánea en torno a la transformación de los monumentos en el espacio público. [Espacio para texto curatorial de la exposición.]',
        artists: [
          'Mateo Saldívar',
          'Daria Sokolova',
          'Colectivo Ruina Viva',
          '[Lista de artistas participantes]',
        ],
        gallery: [
          {
            id: 'g-02-a',
            label: 'Vista de sala I',
            caption: 'Montaje escultórico e iluminación en la sala principal.',
            src: '/assets/exhibitions/exh-iconoclasia-1.jpg',
          },
          {
            id: 'g-02-b',
            label: 'Vista de sala II',
            caption: 'Confrontación de escalas arquitectónicas y registro fotográfico.',
            src: '/assets/exhibitions/exh-materia-1.jpg',
          },
          {
            id: 'g-02-c',
            label: 'Gráfica de la muestra',
            caption: 'Cartel principal diseñado para la exposición.',
            src: '/assets/brand/poster-hummingbird.jpg',
          },
        ],
        video: {
          duration: '06:12 min',
          title: 'Registro del montaje y conversación inaugural',
          note: '[Espacio para video documental o registro de la exposición]',
          poster: '/assets/exhibitions/exh-iconoclasia-1.jpg',
          videoUrl: null,
        },
      },
      {
        id: 'exp-03',
        number: '03',
        year: '2025',
        status: 'Archivo 2025',
        title: 'Taxonomías del Vuelo: Historia Natural y Grabado',
        venue: 'Gabinete Gráfico San Cosme',
        dates: 'Mayo — Junio 2025',
        curatorship: 'Sustancial Lab',
        format: 'Gabinete de grabado y publicación impresa',
        synopsis:
          'A partir de láminas ornitológicas e ilustraciones científicas históricas, la muestra propuso una lectura crítica sobre cómo se representó la naturaleza desde el siglo XVIII hasta la gráfica actual. [Espacio para texto curatorial de la exposición.]',
        artists: [
          'Camila R. Villaurrutia',
          'Sebastián Orozco',
          'Inés Alarcón',
        ],
        gallery: [
          {
            id: 'g-03-a',
            label: 'Imagen principal',
            caption: 'Ilustración ornitológica que dio imagen a la exposición.',
            src: '/assets/brand/poster-hummingbird.jpg',
          },
          {
            id: 'g-03-b',
            label: 'Vista de gabinete',
            caption: 'Vitrina de tratados históricos y pruebas de grabado.',
            src: '/assets/exhibitions/exh-materia-2.jpg',
          },
          {
            id: 'g-03-c',
            label: 'Equipo curatorial',
            caption: 'Integrantes del colectivo durante las jornadas de montaje.',
            src: '/assets/brand/collective-portrait.jpg',
          },
        ],
        video: {
          duration: '03:54 min',
          title: 'Charla en sala sobre ilustración e historia natural',
          note: '[Espacio para video de la charla o recorrido de sala]',
          poster: '/assets/exhibitions/exh-materia-2.jpg',
          videoUrl: null,
        },
      },
      {
        id: 'exp-04',
        number: '04',
        year: '2024',
        status: 'Exposición inaugural',
        title: 'Cartografías de la Sustancia',
        venue: 'Estudio Doctores, Ciudad de México',
        dates: 'Noviembre — Diciembre 2024',
        curatorship: 'Colectivo Sustancial Lab',
        format: 'Exposición colectiva y presentación editorial',
        synopsis:
          'Primera muestra pública del colectivo, concebida como un ensayo espacial donde confluyeron carteles tipográficos, obra gráfica y mesas de discusión historiográfica. [Espacio para texto curatorial de la exposición.]',
        artists: [
          'Colectivo Sustancial Lab',
          'Julián Peralta',
          'Mónica Dzib',
        ],
        gallery: [
          {
            id: 'g-04-a',
            label: 'Vista de sala I',
            caption: 'Mesa de planos, impresos en tinta carmesí y archivo.',
            src: '/assets/exhibitions/exh-cartografias-1.jpg',
          },
          {
            id: 'g-04-b',
            label: 'Identidad gráfica',
            caption: 'Composición tipográfica sobre retícula constructiva.',
            src: '/assets/brand/poster-wordmark.jpg',
          },
          {
            id: 'g-04-c',
            label: 'Apertura',
            caption: 'Retrato del colectivo en la inauguración del proyecto.',
            src: '/assets/brand/collective-portrait.jpg',
          },
        ],
        video: {
          duration: '05:19 min',
          title: 'Presentación del colectivo en Estudio Doctores',
          note: '[Espacio para video de inauguración o presentación]',
          poster: '/assets/exhibitions/exh-cartografias-1.jpg',
          videoUrl: null,
        },
      },
    ],
  },

  interviews: {
    index: '03',
    id: 'entrevistas',
    headerTag: '03 · Entrevistas',
    categoryTag: 'Conversaciones con Artistas',
    title: 'Conversaciones con Artistas',
    subtitle:
      'Diálogos en profundidad con artistas visuales, grabadores, curadores e investigadores sobre sus procesos de trabajo, materiales y referencias históricas.',
    readPreviewLabel: 'Leer entrevista',
    closePreviewLabel: 'Cerrar',
    items: [
      {
        id: 'int-01',
        number: '01',
        category: 'Entrevista',
        date: 'Octubre 2026',
        readingTime: '10 min de lectura',
        subject: 'Valeria Mondragón',
        role: 'Grabadora e investigadora visual',
        author: 'Por Sustancial Lab',
        title: '«La plancha de metal guarda memoria física de cada trazo y de su tiempo»',
        excerpt:
          'Visitamos su taller para conversar sobre el oficio del grabado calcográfico, la investigación en archivos históricos y los cruces entre gráfica tradicional y arte contemporáneo.',
        extendedPreview:
          '[Espacio para el texto completo o extracto amplio de la entrevista. Al integrar el contenido definitivo del cliente, esta ventana mostrará las preguntas y respuestas completas acompañadas de fotografías del taller del artista.]',
        tags: ['Grabado', 'Taller', 'Archivo'],
        image: '/assets/exhibitions/exh-materia-2.jpg',
      },
      {
        id: 'int-02',
        number: '02',
        category: 'Entrevista',
        date: 'Septiembre 2026',
        readingTime: '12 min de lectura',
        subject: 'Daria Sokolova',
        role: 'Artista visual e historiadora',
        author: 'Por Sustancial Lab',
        title: '«En el diseño editorial y el cartel persiste un diálogo directo con la arquitectura»',
        excerpt:
          'Una conversación sobre estética brutalista, publicaciones independientes, fotografía en blanco y negro y memoria urbana.',
        extendedPreview:
          '[Espacio para el texto completo de la entrevista con la artista: reflexiones sobre su obra reciente, influencias historiográficas y procesos de montaje en sala.]',
        tags: ['Arquitectura', 'Gráfica', 'Espacio Público'],
        image: '/assets/exhibitions/exh-iconoclasia-1.jpg',
      },
      {
        id: 'int-03',
        number: '03',
        category: 'Entrevista',
        date: 'Agosto 2026',
        readingTime: '9 min de lectura',
        subject: 'Tomás Ibarra-Ríos',
        role: 'Curador independiente y editor',
        author: 'Por Sustancial Lab',
        title: '«Montar una exposición en un espacio independiente transforma la lectura de las obras»',
        excerpt:
          'Dialogamos sobre curaduría autogestionada, edición de catálogos impresos y nuevas formas de acercar la Historia del Arte a públicos diversos.',
        extendedPreview:
          '[Espacio para el texto completo de la entrevista: recorrido por sus proyectos curatoriales e iniciativas editoriales independientes.]',
        tags: ['Curaduría', 'Edición', 'Museografía'],
        image: '/assets/exhibitions/exh-materia-1.jpg',
      },
    ],
  },

  essays: {
    index: '04',
    id: 'ensayos',
    headerTag: '04 · Ensayos',
    categoryTag: 'Ensayos y Crítica',
    title: 'Ensayos y Crítica de Arte',
    subtitle:
      'Textos de investigación historiográfica, análisis crítico de exposiciones y estudios sobre la materialidad de la imagen.',
    readPreviewLabel: 'Leer ensayo',
    closePreviewLabel: 'Cerrar',
    items: [
      {
        id: 'ess-01',
        number: '01',
        category: 'Ensayo historiográfico',
        date: 'Octubre 2026',
        readingTime: '15 min de lectura',
        subject: 'Historia Material del Color',
        role: 'Investigación estética',
        author: 'Colectivo Sustancial Lab',
        title: 'Genealogía del carmesí: del pigmento histórico a la gráfica contemporánea',
        excerpt:
          'Un recorrido por la historia cultural y material del color rojo profundo (#800028), desde la grana cochinilla hasta su presencia en el cartel y la edición actual.',
        extendedPreview:
          '[Espacio para el texto íntegro del ensayo crítico: introducción, desarrollo argumental, aparato crítico y notas al pie elaboradas por los autores de Sustancial Lab.]',
        tags: ['Color', 'Historiografía', 'Materialidad'],
        image: '/assets/brand/vial-print.jpg',
      },
      {
        id: 'ess-02',
        number: '02',
        category: 'Teoría visual',
        date: 'Septiembre 2026',
        readingTime: '12 min de lectura',
        subject: 'Diseño y Estructura',
        role: 'Crítica de la imagen',
        author: 'Colectivo Sustancial Lab',
        title: 'La cuadrícula visible: apuntes sobre proporción, encuadre y mirada editorial',
        excerpt:
          'Reflexión sobre el uso de las líneas constructivas en el arte moderno y el diseño editorial como una herramienta para evidenciar la estructura compositiva.',
        extendedPreview:
          '[Espacio para el desarrollo completo del ensayo: análisis de casos históricos, referencias bibliográficas y conclusión crítica.]',
        tags: ['Retícula', 'Diseño Editorial', 'Teoría'],
        image: '/assets/brand/poster-wordmark.jpg',
      },
      {
        id: 'ess-03',
        number: '03',
        category: 'Estudio de archivo',
        date: 'Julio 2026',
        readingTime: '14 min de lectura',
        subject: 'Iconografía e Historia Natural',
        role: 'Investigación de archivo',
        author: 'Colectivo Sustancial Lab',
        title: 'El vuelo registrado: grabado naturalista y resignificación contemporánea',
        excerpt:
          'Análisis de las láminas ornitológicas de los siglos XVIII y XIX y su reinterpretación desde las prácticas gráficas y curatoriales del presente.',
        extendedPreview:
          '[Espacio para el texto completo del ensayo sobre historia natural, grabado calcográfico y lecturas contemporáneas del archivo.]',
        tags: ['Iconografía', 'Grabado', 'Historia Natural'],
        image: '/assets/brand/poster-hummingbird.jpg',
      },
    ],
  },

  footer: {
    wordmark: 'SUSTANCIAL',
    statement:
      'Colectivo independiente y laboratorio de Historia del Arte dedicado a la investigación curatorial, la edición crítica y la divulgación de archivos visuales.',
    contactTitle: 'Contacto y colaboraciones',
    email: 'contacto@sustanciallab.org',
    location: 'Ciudad de México',
    socialsTitle: 'Redes y canales',
    socials: [
      { label: 'Instagram · @sustanciallab', screen: 'inicio' },
      { label: 'Archivo de Exposiciones', screen: 'exposiciones' },
      { label: 'Publicaciones y Ensayos', screen: 'ensayos' },
    ],
    copyright:
      '© 2026 Sustancial Lab · Colectivo y Laboratorio de Historia del Arte.',
    backToTopLabel: '↑ Volver al inicio',
  },
};
