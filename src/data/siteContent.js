/**
 * SUSTANCIAL LAB — Single Source of Truth (CMS-Ready Data Layer)
 * Fase 1: Todos los textos, fichas técnicas, metadatos y rutas de activos
 * viven estrictamente desacoplados de la capa de presentación JSX.
 */

export const siteContent = {
  meta: {
    siteName: 'SUSTANCIAL',
    fullTitle: 'SUSTANCIAL LAB',
    cyrillicTitle: 'САБСТЭНШАЛ ЛАБ',
    discipline: 'COLECTIVO & LABORATORIO DE HISTORIA DEL ARTE',
    catalogCode: 'SL—ARC // FASE 01',
    coordinates: '19°25′57″N 99°07′59″W',
    city: 'CIUDAD DE MÉXICO // ARCHIVO TRANSNACIONAL',
    foundedYear: '2024',
    editionLabel: 'EDICIÓN DIGITAL 01.2026',
    statusLabel: 'LABORATORIO ACTIVO',
  },

  navigation: {
    brandShort: 'SUSTANCIAL',
    brandSub: 'САБСТЭНШАЛ ЛАБ',
    mobileMenuOpenLabel: '[ABRIR ÍNDICE]',
    mobileMenuCloseLabel: '[CERRAR]',
    statusTag: 'LAB // ONLINE',
    items: [
      {
        index: '01',
        label: '[01. MANIFIESTO]',
        shortLabel: 'MANIFIESTO',
        href: '#manifiesto',
        sectionId: 'manifiesto',
      },
      {
        index: '02',
        label: '[02. EXPOSICIONES]',
        shortLabel: 'EXPOSICIONES',
        href: '#exposiciones',
        sectionId: 'exposiciones',
      },
      {
        index: '03',
        label: '[03. ENTREVISTAS]',
        shortLabel: 'ENTREVISTAS',
        href: '#entrevistas',
        sectionId: 'entrevistas',
      },
      {
        index: '04',
        label: '[04. ENSAYOS]',
        shortLabel: 'ENSAYOS',
        href: '#ensayos',
        sectionId: 'ensayos',
      },
    ],
  },

  hero: {
    wordmark: 'SUSTANCIAL',
    cyrillicSubtitle: 'САБСТЭНШАЛ ЛАБ',
    technicalKicker: '[ÍNDICE CURATORIAL & LABORATORIO HISTORIOGRÁFICO]',
    tagline:
      'Investigación visual, curaduría de subsuelo y desmontaje crítico de la imagen desde la materialidad histórica.',
    primaryCta: {
      label: 'EXPLORAR MANIFIESTO',
      index: '01',
      href: '#manifiesto',
    },
    secondaryCta: {
      label: 'DIRECTORIO DE EXPOSICIONES',
      index: '02',
      href: '#exposiciones',
    },
    layerControlsLabel: 'CAPA GRÁFICA:',
    layers: [
      {
        id: 'engraving',
        code: '[FIG. 01]',
        label: 'GRABADO',
        caption: 'ESTUDIO ORNITOLÓGICO // TINTA SOBRE RETÍCULA CONSTRUCTIVA',
        image: '/assets/brand/hummingbird-cutout.png',
        alt: 'Grabado en blanco y negro de colibrí superpuesto sobre tipografía Sustancial',
      },
      {
        id: 'typography',
        code: '[FIG. 02]',
        label: 'RETÍCULA PURA',
        caption: 'CONSTRUCCIÓN TIPOGRÁFICA // EJES DE CAPTURA Y LÍNEA BASE',
        image: null,
        alt: 'Construcción tipográfica pura Sustancial Lab',
      },
      {
        id: 'collective',
        code: '[FIG. 03]',
        label: 'ARCHIVO B&N',
        caption: 'REGISTRO ANALÓGICO 35MM // COLECTIVO SUSTANCIAL LAB',
        image: '/assets/brand/collective-portrait.jpg',
        alt: 'Retrato en blanco y negro de alto contraste del colectivo Sustancial Lab',
      },
    ],
    specs: [
      { key: 'CLASIFICACIÓN', value: 'HISTORIA DEL ARTE / CRÍTICA' },
      { key: 'FORMATO', value: 'EXPOSICIONES · ENSAYO · ARCHIVO' },
      { key: 'SISTEMA', value: 'САБСТЭНШАЛ // RETÍCULA 1PX' },
      { key: 'COORDENADAS', value: '19.4326° N, -99.1332° W' },
    ],
  },

  manifesto: {
    index: '01',
    headerTag: '[01. MANIFIESTO]',
    cyrillicTag: 'МАНИФЕСТ // ТЕОРИЯ И ПРАКТИКА',
    title: 'CONTRA LA HISTORIA DEL ARTE ANESTESIADA',
    lead:
      'No estudiamos objetos muertos en vitrinas neutrales: intervenimos la historia de las imágenes como una sustancia viva, conflictiva y políticamente cargada.',
    paragraphs: [
      'Sustancial Lab nace de una urgencia compartida: sacar la investigación historiográfica de la clausura burocrática para devolverla al espacio físico, al cartel callejero, al montaje experimental y a la escritura sin concesiones. Entendemos el laboratorio no como metáfora aséptica, sino como taller de fricción entre archivo, cuerpo y territorio.',
      'Trabajamos en los márgenes donde el grabado colonial dialoga con la gráfica underground, donde el brutalismo arquitectónico enmarca la memoria visual contemporánea y donde cada exposición opera como un ensayo espacial abierto a la disputa pública.',
    ],
    featuredQuote: {
      code: '[CITA DE ARCHIVO // SL-M01]',
      text: '«Toda imagen arrastra un sedimento material y una violencia de origen; nuestra tarea curatorial consiste en exponer sus costuras en lugar de maquillarlas.»',
      attribution: 'COLECTIVO SUSTANCIAL LAB — CUADERNO FUNDACIONAL',
    },
    secondaryQuote: {
      code: '[NOTA METODOLÓGICA // 02]',
      text: '«Hacer visible la cuadrícula es declarar que ninguna mirada es neutral: todo encuadre es ya una toma de posición histórica.»',
    },
    specimen: {
      code: 'ESPÉCIMEN // SL-VIAL-08',
      title: 'SUSTANCIA CRÍTICA',
      subtitle: 'XILOGRAFÍA & TINTA CARMESÍ #800028',
      image: '/assets/brand/vial-cutout.png',
      alt: 'Grabado de frasco de laboratorio carmesí con inscripción vertical Sustancial',
    },
    collectivePhoto: {
      code: 'REGISTRO // COLECTIVO SL-04',
      caption: 'NÚCLEO EDITORIAL Y CURATORIAL DE SUSTANCIAL LAB — REGISTRO EN PLATA / 35MM.',
      location: 'PASILLO DE MONTAJE // ARCHIVO CENTRAL',
      image: '/assets/brand/collective-portrait.jpg',
      alt: 'Integrantes del colectivo Sustancial Lab en fotografía blanco y negro de alto contraste',
    },
    pillars: [
      {
        code: '[EJE A]',
        title: 'CURADURÍA DE FRICCIÓN',
        description:
          'Montajes en espacios independientes, sótanos y arquitecturas no convencionales que cuestionan el cubo blanco.',
      },
      {
        code: '[EJE B]',
        title: 'CONTRA-ARCHIVO VISUAL',
        description:
          'Rescate de genealogías gráficas, impresos efímeros, iconografías disidentes y documentos omitidos por el canon.',
      },
      {
        code: '[EJE C]',
        title: 'CRÍTICA & EDICIÓN PÚBLICA',
        description:
          'Entrevistas en profundidad y ensayos historiográficos rigurosos escritos para incidir en la escena viva.',
      },
    ],
  },

  exhibitions: {
    index: '02',
    headerTag: '[02. EXPOSICIONES]',
    cyrillicTag: 'ВЫСТАВОЧНЫЙ АРХИВ // CURATORIAL INDEX',
    title: 'DIRECTORIO DE EXPOSICIONES',
    subtitle:
      'Índice curatorial de montajes, intervenciones de archivo y dispositivos espaciales activados por el laboratorio. Selecciona o recorre cada registro para inspeccionar su ficha técnica, documentación fotográfica y módulo audiovisual.',
    labels: {
      indexColumn: 'CATÁLOGO // PROYECTO',
      venueColumn: 'SEDE & AÑO',
      technicalSheetTitle: 'FICHA TÉCNICA CURATORIAL',
      galleryTitle: 'REGISTRO FOTOGRÁFICO [B&N → COLOR EN HOVER]',
      videoTitle: 'ESPACIO DE VIDEO // REGISTRO DOCUMENTAL DE SALA',
      artistsLabel: 'ARTISTAS & ARCHIVOS PARTICIPANTES',
      curatorshipLabel: 'CURADURÍA',
      datesLabel: 'TEMPORALIDAD',
      venueLabel: 'ESPACIO / SEDE',
      coordinatesLabel: 'COORDENADAS',
      formatLabel: 'TIPOLOGÍA',
      videoActionLabel: 'ACTIVAR SEÑAL DE REEL DOCUMENTAL',
      videoCloseLabel: 'DETENER PREVISUALIZACIÓN',
      zoomHint: '[CLIC PARA AMPLIAR LÁMINA]',
    },
    items: [
      {
        id: 'exp-01',
        code: 'EXP // 01',
        year: '2026',
        status: 'ARCHIVO DOCUMENTADO',
        title: 'MATERIA RESIDUAL: ARQUEOLOGÍAS DEL IMPRESO',
        venue: 'BÓVEDA SUBTERRÁNEA BUCARELI',
        dates: '14 FEB — 28 MAR 2026',
        coordinates: '19°25′48″N 99°09′04″W',
        curatorship: 'Núcleo Curatorial Sustancial Lab',
        format: 'INSTALACIÓN DE ARCHIVO, GRABADO & VIDEO-ENSAYO',
        synopsis:
          'Una revisión materialista del grabado calcográfico, el panfleto político y las matrices descartadas como testigos de contrahistorias urbanas. El montaje dispuso mesas de acero quirúrgico e iluminación cenital sobre textiles teñidos en carmesí profundo.',
        artists: [
          'Valeria Mondragón',
          'Fondo Calcográfico 1971',
          'Tomás Ibarra-Ríos',
          'Taller de Gráfica Subterránea',
          'Elena Kovács',
        ],
        gallery: [
          {
            id: 'g-01-a',
            code: 'LÁMINA 01.A',
            caption: 'Vista general de sala: textiles suspendidos y mesas de inspección documental.',
            src: '/assets/exhibitions/exh-materia-1.jpg',
          },
          {
            id: 'g-01-b',
            code: 'LÁMINA 01.B',
            caption: 'Detalle de vitrina: manuscritos, planchas de cobre y sellos de lacre carmesí.',
            src: '/assets/exhibitions/exh-materia-2.jpg',
          },
          {
            id: 'g-01-c',
            code: 'LÁMINA 01.C',
            caption: 'Mesa de lectura cartográfica y pruebas de estado xilo-tipográficas.',
            src: '/assets/exhibitions/exh-cartografias-1.jpg',
          },
        ],
        video: {
          code: 'VID // SL-DOC-01',
          duration: '04:38',
          resolution: '1080P · 24FPS · B&N / CARMESÍ',
          title: 'RECORRIDO DE MONTAJE & LECTURA DE SALA — BUCARELI',
          note: 'Espacio reservado para stream documental (HLS / MP4) en conexión con el repositorio audiovisual de Fase 2.',
          poster: '/assets/exhibitions/exh-materia-1.jpg',
          videoUrl: null,
        },
      },
      {
        id: 'exp-02',
        code: 'EXP // 02',
        year: '2025',
        status: 'CATÁLOGO PUBLICADO',
        title: 'ICONOCLASIA LATENTE: FRAGMENTO Y RUINA INDUSTRIAL',
        venue: 'EX-TALLER MECÁNICO SANTA MARÍA',
        dates: '09 OCT — 22 NOV 2025',
        coordinates: '19°26′55″N 99°09′27″W',
        curatorship: 'Sustancial Lab + Invitados Críticos',
        format: 'ESCULTURA EXPANDIDA, PROYECCIÓN CRT & DOCUMENTO',
        synopsis:
          'Diálogo tenso entre vaciados escultóricos neoclásicos fragmentados y monitores industriales de luz roja. La muestra interrogó cómo sobreviven los gestos iconoclastas en la memoria monumental latinoamericana.',
        artists: [
          'Mateo Saldívar',
          'Colectivo Ruina Viva',
          'Daria Sokolova',
          'Archivo Fotográfico Obrero',
        ],
        gallery: [
          {
            id: 'g-02-a',
            code: 'LÁMINA 02.A',
            caption: 'Plintos de concreto crudo con fragmentos en yeso bajo luminaria CRT carmesí.',
            src: '/assets/exhibitions/exh-iconoclasia-1.jpg',
          },
          {
            id: 'g-02-b',
            code: 'LÁMINA 02.B',
            caption: 'Registro de archivo y confrontación de escalas arquitectónicas en nave central.',
            src: '/assets/exhibitions/exh-materia-1.jpg',
          },
          {
            id: 'g-02-c',
            code: 'LÁMINA 02.C',
            caption: 'Gráfica de sala: cartel constructivo sobre fondo carbón #1D1E22.',
            src: '/assets/brand/poster-hummingbird.jpg',
          },
        ],
        video: {
          code: 'VID // SL-DOC-02',
          duration: '06:12',
          resolution: '4K ARCHIVAL MASTER · ESTÉREO',
          title: 'REGISTRO SONORO Y ESPACIAL — EX-TALLER SANTA MARÍA',
          note: 'Módulo preparado para reproducción embebida del ensayo audiovisual de sala.',
          poster: '/assets/exhibitions/exh-iconoclasia-1.jpg',
          videoUrl: null,
        },
      },
      {
        id: 'exp-03',
        code: 'EXP // 03',
        year: '2025',
        status: 'MEMORIA DE ARCHIVO',
        title: 'TAXONOMÍAS DEL VUELO: HISTORIA NATURAL Y DISIDENCIA',
        venue: 'GABINETE GRÁFICO SAN COSME',
        dates: '16 MAY — 30 JUN 2025',
        coordinates: '19°26′29″N 99°09′44″W',
        curatorship: 'Mesa Historiográfica Sustancial',
        format: 'GABINETE DE GRABADO, HERBARIO CRÍTICO & PUBLICACIÓN',
        synopsis:
          'A partir de láminas ornitológicas y tratados coloniales de historia natural, la exposición desmontó la mirada extractiva de las expediciones científicas oponiéndole prácticas contemporáneas de grabado insurgente.',
        artists: [
          'Camila R. Villaurrutia',
          'Sebastián Orozco',
          'Acervo Naturalista Independiente',
          'Inés Alarcón',
        ],
        gallery: [
          {
            id: 'g-03-a',
            code: 'LÁMINA 03.A',
            caption: 'Cartel rector de la exposición con grabado ornitológico sobre retícula.',
            src: '/assets/brand/poster-hummingbird.jpg',
          },
          {
            id: 'g-03-b',
            code: 'LÁMINA 03.B',
            caption: 'Vitrina de tratados históricos, lupas de medición y pruebas calcográficas.',
            src: '/assets/exhibitions/exh-materia-2.jpg',
          },
          {
            id: 'g-03-c',
            code: 'LÁMINA 03.C',
            caption: 'Núcleo curatorial durante las jornadas nocturnas de montaje.',
            src: '/assets/brand/collective-portrait.jpg',
          },
        ],
        video: {
          code: 'VID // SL-DOC-03',
          duration: '03:54',
          resolution: '16MM TRANSFER DIGITAL · MONO',
          title: 'CONVERSATORIO INAUGURAL & ACTIVACIÓN DE PLACAS',
          note: 'Canal de video listo para vinculación directa con CMS en Fase 2.',
          poster: '/assets/exhibitions/exh-materia-2.jpg',
          videoUrl: null,
        },
      },
      {
        id: 'exp-04',
        code: 'EXP // 04',
        year: '2024',
        status: 'ACTO FUNDACIONAL',
        title: 'DOSIS 00: CARTOGRAFÍAS DE LA SUSTANCIA',
        venue: 'SÓTANO EDITORIAL DOCTORES',
        dates: '08 NOV — 14 DIC 2024',
        coordinates: '19°25′14″N 99°08′36″W',
        curatorship: 'Colectivo Sustancial Lab',
        format: 'MANIFIESTO ESPACIAL, SERIGRAFÍA & MESA ABIERTA',
        synopsis:
          'Primera activación pública del colectivo. Una sala trazada físicamente con hilos blancos tensados a modo de cuadrícula arquitectónica donde confluían carteles tipográficos, frascos numerados y pliegos de ensayo crítico.',
        artists: [
          'Colectivo Sustancial Lab',
          'Julián Peralta',
          'Mónica Dzib',
          'Imprenta Fantasma',
        ],
        gallery: [
          {
            id: 'g-04-a',
            code: 'LÁMINA 04.A',
            caption: 'Mesa de planos, matrices en tinta carmesí #800028 y etiquetas de inventario.',
            src: '/assets/exhibitions/exh-cartografias-1.jpg',
          },
          {
            id: 'g-04-b',
            code: 'LÁMINA 04.B',
            caption: 'Gráfica en cirílico САБСТЭНШАЛ ЛАБ sobre retícula constructiva expuesta.',
            src: '/assets/brand/poster-cyrillic.jpg',
          },
          {
            id: 'g-04-c',
            code: 'LÁMINA 04.C',
            caption: 'Registro fotográfico del colectivo en la apertura del laboratorio.',
            src: '/assets/brand/collective-portrait.jpg',
          },
        ],
        video: {
          code: 'VID // SL-DOC-04',
          duration: '05:19',
          resolution: 'SUPER-8 / HD ARCHIVE SCAN',
          title: 'MANIFIESTO EN VOZ ALTA — APERTURA SÓTANO DOCTORES',
          note: 'Archivo matriz digitalizado listo para streaming en el portal expandido.',
          poster: '/assets/exhibitions/exh-cartografias-1.jpg',
          videoUrl: null,
        },
      },
    ],
  },

  editorial: {
    previewBadge: 'VISTA PREVIA FASE 01 // PORTAL COMPLETO EN FASE 02',
    readPreviewLabel: 'ABRIR AVANCE DE ARCHIVO',
    closePreviewLabel: '[CERRAR FICHA]',
    phase2Notice:
      'Este registro forma parte del índice anticipado de Sustancial Lab. En la Fase 2 del portal se habilitarán las rutas dinámicas (/entrevistas/:slug y /ensayos/:slug), notas al pie interactivas y descarga en PDF maquetado.',

    interviewsSection: {
      index: '03',
      id: 'entrevistas',
      headerTag: '[03. ENTREVISTAS]',
      cyrillicTag: 'ИНТЕРВЬЮ // DIÁLOGOS EN TALLER',
      title: 'ENTREVISTAS & DIÁLOGOS CRÍTICOS',
      subtitle:
        'Conversaciones sin filtro con artistas visuales, archiveros independientes, grabadores e historiadores que operan fuera de los circuitos complacientes.',
      items: [
        {
          id: 'int-01',
          slug: 'valeria-mondragon-matriz-y-cicatriz',
          code: 'ENT // 01',
          category: 'ENTREVISTA',
          date: 'OCT 2026',
          readingTime: '11 MIN LECTURA',
          subject: 'VALERIA MONDRAGÓN',
          role: 'GRABADORA & ARQUEÓLOGA VISUAL',
          author: 'Por Mesa Editorial Sustancial',
          title: '«La plancha de metal guarda memoria física de cada golpe, igual que un edificio ocupado»',
          excerpt:
            'Visitamos su taller en el centro histórico para discutir la obsolescencia técnica como resistencia estética, el uso político del rojo carmesí y la vida póstuma de los archivos sindicales.',
          extendedPreview:
            'Durante más de tres horas entre prensas calcográficas del siglo XIX y ácidos de mordida lenta, Mondragón desarma la falsa dicotomía entre oficio tradicional y pensamiento contemporáneo. La conversación recorre sus recientes intervenciones en bóvedas subterráneas y la urgencia de construir archivos autónomos frente a la amnesia institucional.',
          tags: ['GRABADO', 'MATERIALIDAD', 'TALLER'],
          image: '/assets/exhibitions/exh-materia-2.jpg',
        },
        {
          id: 'int-02',
          slug: 'daria-sokolova-brutalismo-y-senal',
          code: 'ENT // 02',
          category: 'ENTREVISTA',
          date: 'SEP 2026',
          readingTime: '14 MIN LECTURA',
          subject: 'DARIA SOKOLOVA',
          role: 'ARTISTA DE MEDIOS & TEÓRICA DEL ESPACIO',
          author: 'Por Núcleo Curatorial SL',
          title: '«Entre Moscú y Ciudad de México persiste una gramática secreta del concreto y la tipografía»',
          excerpt:
            'Un diálogo sobre constructivismo tardío, pantallas de rayos catódicos, carteles callejeros y las afinidades subterráneas entre vanguardias periféricas.',
          extendedPreview:
            'Sokolova analiza cómo las retículas constructivas del diseño soviético de los años veinte reaparecen mutadas en las publicaciones independientes latinoamericanas. Una entrevista clave para comprender el cruce estético que también atraviesa la identidad gráfica de Sustancial Lab.',
          tags: ['CONSTRUCTIVISMO', 'ARQUITECTURA', 'MEDIA ART'],
          image: '/assets/exhibitions/exh-iconoclasia-1.jpg',
        },
        {
          id: 'int-03',
          slug: 'tomas-ibarra-rios-contra-el-cubo-blanco',
          code: 'ENT // 03',
          category: 'ENTREVISTA',
          date: 'AGO 2026',
          readingTime: '09 MIN LECTURA',
          subject: 'TOMÁS IBARRA-RÍOS',
          role: 'CURADOR INDEPENDIENTE & EDITOR',
          author: 'Por Colectivo Sustancial Lab',
          title: '«Montar una exposición en un sótano húmedo obliga a repensar toda la conservación moderna»',
          excerpt:
            'Sobre precariedad productiva, autonomía curatorial y por qué los espacios autogestionados están reescribiendo la historiografía reciente.',
          extendedPreview:
            'Frente a la homogeneización ferial, Ibarra-Ríos defiende la escala táctica del laboratorio independiente: presupuestos austeros compensados con rigor conceptual extremo, publicaciones en risografía y montajes que dialogan con la pátina real del inmueble.',
          tags: ['CURADURÍA', 'AUTOGESTIÓN', 'ESPACIO'],
          image: '/assets/exhibitions/exh-materia-1.jpg',
        },
      ],
    },

    essaysSection: {
      index: '04',
      id: 'ensayos',
      headerTag: '[04. ENSAYOS]',
      cyrillicTag: 'ЭССЕ // CRÍTICA HISTORIOGRÁFICA',
      title: 'ENSAYOS & CUADERNOS DE INVESTIGACIÓN',
      subtitle:
        'Textos críticos de largo aliento donde la Historia del Arte se cruza con la teoría de medios, la semiótica política del color y la genealogía de las exposiciones.',
      items: [
        {
          id: 'ess-01',
          slug: 'genealogia-del-carmesi-pigmento-poder-subversion',
          code: 'ENS // 01',
          category: 'ENSAYO CRÍTICO',
          date: 'OCT 2026',
          readingTime: '18 MIN LECTURA',
          subject: 'CUADERNO #04',
          role: 'HISTORIA MATERIAL DEL COLOR',
          author: 'Colectivo Sustancial Lab',
          title: 'Genealogía del carmesí: de la grana cochinilla novohispana a la tinta insurgente',
          excerpt:
            'Un recorrido historiográfico por la economía política del rojo profundo (#800028): tributo colonial, ostentación litúrgica y reapropiación gráfica en los impresos radicales del siglo XX.',
          extendedPreview:
            'Ningún pigmento condensa mejor la historia atlántica del extractivismo y la representación que el carmesí de cochinilla. Este ensayo rastrea su tránsito desde los códices tributarios hasta las tintas de cartelismo subterráneo contemporáneo, proponiendo una lectura cromática del poder.',
          tags: ['PIGMENTOS', 'HISTORIOGRAFÍA', 'ECONOMÍA VISUAL'],
          image: '/assets/brand/vial-print.jpg',
        },
        {
          id: 'ess-02',
          slug: 'la-cuadricula-expuesta-como-dispositivo-critico',
          code: 'ENS // 02',
          category: 'ENSAYO TEÓRICO',
          date: 'SEP 2026',
          readingTime: '15 MIN LECTURA',
          subject: 'CUADERNO #03',
          role: 'TEORÍA DEL DISEÑO & MONTAJE',
          author: 'Mesa Teórica Sustancial',
          title: 'La cuadrícula expuesta: contra la transparencia ideológica del diseño moderno',
          excerpt:
            'Desde Rosalind Krauss hasta el brutalismo editorial contemporáneo, examinamos qué ocurre cuando la estructura constructiva deja de ocultarse bajo la superficie.',
          extendedPreview:
            'Cuando el diseño suizo ocultó sus líneas guía tras la página impresa, naturalizó un orden racionalista como si fuera espontáneo. Dejar visibles las líneas de 1px sobre el carbón oscuro invierte esa operación: revela el andamiaje, la medida y la tensión material de cada fragmento.',
          tags: ['RETÍCULA', 'BRUTALISMO', 'TEORÍA DEL ARTE'],
          image: '/assets/brand/poster-wordmark.jpg',
        },
        {
          id: 'ess-03',
          slug: 'ornitologia-de-archivo-grabado-y-mirada-imperial',
          code: 'ENS // 03',
          category: 'ENSAYO VISUAL',
          date: 'JUL 2026',
          readingTime: '16 MIN LECTURA',
          subject: 'CUADERNO #02',
          role: 'ICONOGRAFÍA & CONTRA-ARCHIVO',
          author: 'Núcleo de Investigación SL',
          title: 'Anatomía de un vuelo disecado: el grabado naturalista frente a su descolonización visual',
          excerpt:
            'Cómo las aves americanas fueron aisladas sobre fondos blancos para el inventario imperial, y qué significa devolverlas hoy a la penumbra crítica del laboratorio.',
          extendedPreview:
            'El fondo blanco de las láminas ilustradas del siglo XVIII operaba como una violencia epistemológica: arrancaba al espécimen de su ecosistema y de sus cosmologías locales. Superponer el grabado ornitológico sobre nuestra retícula nocturna propone una relectura de esa captura.',
          tags: ['ICONOGRAFÍA', 'HISTORIA NATURAL', 'ARCHIVO'],
          image: '/assets/brand/poster-hummingbird.jpg',
        },
      ],
    },
  },

  footer: {
    wordmark: 'SUSTANCIAL',
    cyrillicMark: 'САБСТЭНШАЛ ЛАБ',
    statement:
      'Colectivo independiente y laboratorio de Historia del Arte dedicado a la investigación curatorial, la edición crítica y la activación de archivos visuales.',
    contactTitle: 'CONTACTO & PROPUESTAS CURATORIALES',
    email: 'archivo@sustanciallab.org',
    location: 'CIUDAD DE MÉXICO // LAT. 19.4326° N · LON. -99.1332° W',
    socialsTitle: 'CANALES DE DIFUSIÓN',
    socials: [
      { label: 'INSTAGRAM // @SUSTANCIALLAB', href: '#top' },
      { label: 'ARE.NA // ARCHIVO ABIERTO', href: '#exposiciones' },
      { label: 'BOLETÍN // CUADERNOS CRÍTICOS', href: '#ensayos' },
    ],
    architectureNote: 'ARQUITECTURA MODULAR FASE 01 — PREPARADA PARA INTEGRACIÓN HEADLESS CMS (FASE 02)',
    copyright: '© 2026 SUSTANCIAL LAB (САБСТЭНШАЛ ЛАБ). TODOS LOS DERECHOS DE EDICIÓN Y CURADURÍA RESERVADOS.',
    backToTopLabel: '[↑ VOLVER AL ORIGEN]',
  },
};
