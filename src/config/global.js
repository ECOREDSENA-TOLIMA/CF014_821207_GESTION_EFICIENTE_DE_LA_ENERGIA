export default {
  global: {
    componenteFormativo:
      'Eficiencia energética en sistemas consumidores de energía',
    descripcionCurso:
      'Aquí se estudiarán aspectos sobre la operación de equipos consumidores de energía y conocerán sobre equipos para generación de energía térmica en forma de calor y frío, nuevas infraestructuras para abastecer de energía como los distritos térmicos, iluminación y automatización para la eficiencia energética, los principios de la arquitectura bioclimática. Y algunos métodos para implementar mantenimiento centrado en eficiencia energética.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Intercambiadores de calor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de intercambiadores',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Medidas para mejorar y mantener la eficiencia',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calderas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Componentes de una caldera',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Calderas pirotubulares',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Calderas acuotubulares',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Eficiencia de una caldera',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Acciones para mejorar la eficiencia',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Climatización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos básicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aire acondicionado',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Bomba de calor',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Medidas para mejorar y mantener la eficiencia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Refrigeración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Refrigerantes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Coeficiente de desempeño COP',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Medidas para mejorar el desempeño energético e impacto ambiental de sistemas de refrigeración',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cogeneración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Cogeneración tipo cabeza',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Cogeneración tipo cola',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Cogeneración con turbina a gas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Cogeneración con turbina de vapor',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Cogeneración con motor de combustión interna',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Ciclo combinado',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Aumento de la eficiencia usando cogeneración',
            hash: 't_5_7',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Motores eléctricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Partes del motor eléctrico',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Datos de placa',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Eficiencia del motor eléctrico',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Automatización y digitalización para generar eficiencia energética',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Aplicaciones industriales',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Aplicaciones edificios (residenciales, comerciales)',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Impacto en la eficiencia energética',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Distritos térmicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Componentes de un distrito térmico',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Tipos de redes de distribución de los distritos térmicos',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Fuentes energéticas',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Hornos industriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Hornos túnel',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Hornos rotatorios',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Altos hornos',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Hornos de arco eléctrico',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Eficiencia energética',
            hash: 't_9_5',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Sistemas de iluminación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Arquitectura bioclimática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Características de la arquitectura bioclimática',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Estrategias de la arquitectura bioclimática',
            hash: 't_11_2',
          },
          {
            numero: '11.3',
            titulo: 'Casas pasivas',
            hash: 't_11_3',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Mantenimiento Centrado en la Eficiencia Energética - MCEE',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Intercambiador de calor',
      referencia:
        'Alfa Laval. (2019). <em>Cómo funciona un intercambiador de calor.</em> ',
      tipo: 'Video',
      link:
        'https://corporate.alfalaval.com/como-funciona-un-intercambiador-de      ',
    },
    {
      tema: 'Componentes de una caldera',
      referencia:
        'Attsu Térmica. (2019). <em>ATTSU Caldera de vapor RL - Explicación funcionamiento.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QJRaP0BDt7I ',
    },
    {
      tema: 'Cogeneración',
      referencia:
        'Tecnológico de Monterrey Innovación Educativa. (2017). <em>La cogeneración como estrategia para el aprovechamiento de la energía.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r0MFyzJAueI',
    },
    {
      tema: 'Motores eléctricos',
      referencia:
        'Mentalidad de ingeniería. (2021). <em>Cómo funcionan los motores eléctricos - motores de inducción de CA trifásicos motor de CA.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MuNEI1b1F4w',
    },
    {
      tema: 'Automatización y digitalización para la eficiencia energética',
      referencia:
        'Refrigeración Industrial Beirute. (2019). <em>¿Qué es el BMS?.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H39neD0i0Vw',
    },
    {
      tema: 'Distritos térmicos',
      referencia:
        'Empresas Públicas de Medellín. (2017). <em>Distrito Térmico EPM, un proyecto que contribuye a la eficiencia energética y al cuidado del medio ambiente en Medellín.</em> EPM.',
      tipo: 'Página Web',
      link:
        'https://www.epm.com.co/site/inversionistas/inversionistas/noticias-y-novedades/distrito-t%C3%A9rmico-epm-un-proyecto-que-contribuye-a-la-eficiencia-energ%C3%A9tica',
    },
    {
      tema: 'Distritos térmicos',
      referencia: 'Celsia Energía. (2017). <em>Distrito Térmico - Celsia.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=D5FFNx_3zy0',
    },
    {
      tema: 'Hornos rotatorios',
      referencia:
        'Asseguratte. (s. f.). <em>Etapas de fabricación del cemento.</em>',
      tipo: 'Video (Recorrido virtual)',
      link: 'https://www.asseguratte.es/asseguratte360/videos/web/index.htm',
    },
    {
      tema: 'Altos hornos',
      referencia:
        'Documentales TV. (2014). <em>Funcionamiento alto horno.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WerjnkrTqI0',
    },
    {
      tema: 'Hornos de arco eléctrico',
      referencia:
        'Miquelmatias. (2012). <em>Horno de arco eléctrico - Herramientas.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0bKbBJUR7hk',
    },
    {
      tema: 'Arquitectura bioclimática',
      referencia:
        'Proyectartv. (2017). <em>¿Qué es la arquitectura bioclimática?.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dCYdFWGseCI',
    },
  ],
  glosario: [
    {
      termino: '<em>Big data</em>',
      significado:
        'Procesamiento de gran cantidad de datos generados por sistemas electrónicos.',
    },
    {
      termino: 'Ciencia de datos',
      significado:
        'Disciplina dedicada al análisis y extracción de información implícita contenida en grandes volúmenes de datos (<em>Big data</em>).',
    },
    {
      termino: 'Capa de ozono',
      significado:
        'Zona de la atmósfera con una concentración alta de O<sub>3</sub> (ozono). Bloquea parte de los rayos ultravioleta nocivos provenientes del sol.',
    },
    {
      termino: 'Casa pasiva',
      significado:
        'Edificación diseñada para mantener una temperatura confortable y estable de forma natural, sin recurrir a sistemas de climatización, o requiriéndolos en muy pocas ocasiones.',
    },
    {
      termino: 'Domótica',
      significado:
        'Implementación de sistemas automatizados de control de electrodomésticos, iluminación y climatización en casas.',
    },
    {
      termino: 'Eficiencia térmica',
      significado:
        'Relación entre la energía aportada a un sistema y la energía útil producida por el mismo para el propósito con el que fue diseñado.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Indica en qué medida se cumple el propósito para el que un sistema fue diseñado, sin tener en cuenta qué tan eficiente fue el proceso.',
    },
    {
      termino: 'Gases de Efecto Invernadero (GEI)',
      significado:
        'Gases que al llegar a la atmósfera tienen la capacidad de absorber calor del sol y mantenerlo. En grandes cantidades tiene el potencial de aumentar la temperatura media del planeta.',
    },
    {
      termino: '<em>Internet</em> de las cosas',
      significado:
        'Uso de dispositivos electrónicos conectados a internet para monitorear y controlar las funciones y el desempeño de un equipo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aiguasol Sistemes Avançats d’Energia Solar Tèrmica. (2011). <em>Guía básica de redes de distrito de calor y frío.</em> ',
      link:
        'https://www.idae.es/sites/default/files/documentos/idae/tecnologias/ahorro_y_eficiencia_energetica/edificacion/documentos_20110502_guia_basica_redes_de_calor_y_de_frio_es_5e18b14a.pdf',
    },
    {
      referencia:
        'Arch Daily. (2021). <em>Arquitectura bioclimática en Latinoamérica: Técnicas naturales para economizar energía.</em> ',
      link: 'https://www.archdaily.co/co/tag/arquitectura-bioclimatica',
    },
    {
      referencia:
        'Arias, A., Chicas, A., Contreras, I., Hernández, R., Leal, M., Roque, R., y Solórzano, R. (2013). Criterios Bioclimáticos Aplicables a Proyectos en el Trópico. ',
      link: 'https://issuu.com/aaarias/docs/criterios_bioclimaticos',
    },
    {
      referencia:
        'Arnabat, I. (2007). <em>Sistemas de refrigeración aire acondicionado: compresión y absorción.</em> ',
      link:
        'https://www.caloryfrio.com/aire-acondicionado/aire-instalaciones-componentes/sistemas-de-refrigeracion-compresion-absorcion.html',
    },
    {
      referencia:
        'Arnabat, I. (2015). <em>Funcionamiento de la bomba de calor para calefacción y agua caliente.</em> ',
      link:
        'https://www.caloryfrio.com/calefaccion/bomba-de-calor/bomba-de-calor.html',
    },
    {
      referencia:
        'Arnabat, I. (2016). <em>¿Cómo funciona el aire acondicionado? Infografía.</em> ',
      link:
        'https://www.caloryfrio.com/aire-acondicionado/como-funciona-el-aire-acondicionado-infografia.html',
    },
    {
      referencia:
        'Arquitectura Sostenible. (2018). <em>La arquitectura bioclimática: diseñar edificios en función de las condiciones del entorno.</em> ',
      link:
        'https://arquitectura-sostenible.es/la-arquitectura-bioclimatica-disenar-edificios-en-funcion-de-las-condiciones-del-entorno/',
    },
    {
      referencia:
        'BBVA. (2021). <em>Qué es la arquitectura bioclimática y cuánta energía permite ahorrar.</em> ',
      link:
        'https://www.bbva.com/es/sostenibilidad/que-es-la-arquitectura-bioclimatica-y-cuanta-energia-permite-ahorrar/',
    },
    {
      referencia:
        'BBVA. (2021). <em>Qué es la cogeneración: la industria frente al espejo de la transición energética.</em> ',
      link:
        'https://www.bbva.com/es/sostenibilidad/que-es-la-cogeneracion-la-industria-frente-al-espejo-de-la-transicion-energetica/',
    },
    {
      referencia:
        'Cabrera, M. (2019). <em>Modelo y herramienta para implementar en las industrias un sistema de mantenimiento centrado en la eficiencia energética “Green Reliability”.</em> Congreso de Mantenimiento y Confiabilidad. México D.F. ',
    },
    {
      referencia:
        'Cad y Lan. (s. f.). <em>La automatización de los edificios inteligentes.</em> ',
      link: 'https://www.cadlan.com/noticias/automatizacion-de-edificios/',
    },
    {
      referencia:
        'Calderería Lopez Hermanos S.A. (s. f.). <em>Caldera de agua caliente.</em> ',
      link: 'http://lopezhnos.es/products/caldera-de-agua-caliente-clh/',
    },
    {
      referencia:
        'Cengel, Y. A. (2007). <em>Transferencia de calor y masa. McGraw-Hill.</em> ',
    },
    {
      referencia: 'Cengel, Y. A. (2014). <em>Termodinámica. McGraw-Hill.</em> ',
    },
    {
      referencia: 'Danfoss. (s. f.). <em>El frigorífico: cómo funciona.</em> ',
      link:
        'https://www.danfoss.com/es-es/about-danfoss/our-businesses/cooling/the-fridge-how-it-works/#',
    },
    {
      referencia: 'Direct Industry. (2021). Kelvion Germany GMBH. ',
      link:
        'https://www.directindustry.es/prod/kelvion-germany-gmbh/product-105023-2268293.html',
    },
    {
      referencia:
        'Distritos Térmicos Colombia. (s. f.). <em>Eficiencia ¿Qué son los distritos térmicos y para qué sirven?</em> ',
      link:
        'https://www.distritoenergetico.com/que-son-los-distritos-termicos-y-para-que-sirven/',
    },
    {
      referencia:
        'Enersinc. (2017). <em>Energy Demand Situation in Colombia.</em> ',
      link:
        'https://www.dnp.gov.co/Crecimiento-Verde/Documents/ejes-tematicos/Energia/MCV%20-%20Energy%20Demand%20Situation%20VF.pdf',
    },
    {
      referencia:
        'Froztec. (2021). <em>Equipos de refrigeración industrial.</em> ',
      link:
        'https://www.froztec.com/como-elegir-tus-equipos-de-refrigeracion-industrial',
    },
    {
      referencia:
        'Garay, R. (2020). <em>District Heating & Cooling o redes urbanas de calor y frío; ventajas de un sistema eficiente - Pódcast.</em> ',
      link:
        'https://www.caloryfrio.com/calefaccion/district-heating-cooling-redes-urbanas-calor-y-frio-ventajas-de-sistema-eficiente.html',
    },
    {
      referencia:
        'García, E., Campos, J., y Vanegas, C. (2018). Metodología para la implementación de un sistema de Mantenimiento Centrado en la Eficiencia Energética (MCEE) en las organizaciones industriales a través de una herramienta informática. <em>Espacios, 40(11),</em> 19. ',
      link: 'https://www.revistaespacios.com/a19v40n11/a19v40n11p19.pdf',
    },
    {
      referencia: 'IDAE. (2008). Cogeneración. ',
      link:
        'https://www.idae.es/tecnologias/eficiencia-energetica/transformacion-de-la-energia/cogeneracion',
    },
    {
      referencia:
        'Kosner. (2016). <em>Un poco de teoría: Etapas del ciclo de refrigeración.</em> ',
      link: 'https://www.kosner.es/ciclo-de-refrigeracion/',
    },
    {
      referencia:
        'MGM International. (2018). <em>Guía para la evaluación de elegibilidad de financiación de proyectos de eficiencia energética. Tipo de proyecto: aire acondicionado.</em> ',
      link:
        'https://scioteca.caf.com/bitstream/handle/123456789/1295/GUIA%20-%20Aire%20Acondicionado.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'MGM International. (2018). <em>Guía para la evaluación de elegibilidad de financiación de proyectos de eficiencia energética. Tipo de proyecto: automatización y control de procesos.</em> ',
      link: 'https://scioteca.caf.com/handle/123456789/1297',
    },
    {
      referencia:
        'MGM International. (2018). <em>Guía para la evaluación de elegibilidad de financiación de proyectos de eficiencia energética. Tipo de proyecto: calderas de alta eficiencia.</em> ',
      link:
        'https://scioteca.caf.com/bitstream/handle/123456789/1298/GUIA%20-%20Calderas%20de%20Alta%20Eficiencia.pdf?sequence=1',
    },
    {
      referencia:
        'MGM International. (2018). <em>Guía para la evaluación de elegibilidad de financiación de proyectos de eficiencia energética. Tipo de proyecto: cogeneración de energía.</em> ',
      link: 'https://scioteca.caf.com/handle/123456789/1300',
    },
    {
      referencia:
        'MGM International. (2018). <em>Guía para la evaluación de elegibilidad de financiación de proyectos de eficiencia energética. Tipo de proyecto: iluminación de alta eficiencia.</em> ',
      link:
        'https://scioteca.caf.com/bitstream/handle/123456789/1303/GUIA%20-%20Iluminacion%20de%20Alta%20Eficiencia.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2019). <em>Distritos térmicos:</em> guía metodológica. Ministerio de Ambiente y Desarrollo Sostenible. ',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2019). <em>Los distritos térmicos: una apuesta de sostenibilidad urbana.</em> Ministerio de Ambiente y Desarrollo Sostenible. ',
    },
    {
      referencia:
        'MGM Internacioanal (s.f.) Guía para la Evaluación de Elegibilidad de Financiación de Proyectos de Eficiencia Energética, (p. 32), Banco de Desarrollo de América Latina, CAF. ',
      link:
        'https://scioteca.caf.com/bitstream/handle/123456789/1300/GUIA%20-%20Cogeneracio%cc%81n%20de%20Energi%cc%81a.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Paz, L. (2017). Automatización para la gestión eficiente de energía en el sector doméstico. <em>Revista Electrónica sobre Tecnología, Educación y Sociedad, 4(7).</em> ',
    },
    {
      referencia: 'Preciogas. (s. f.). <em>Aire acondicionado.</em> ',
      link:
        'https://preciogas.com/instalaciones/equipamiento/aire-acondicionado',
    },
    {
      referencia: 'Rankia. (s. f.). <em>Etiqueta energética.</em> ',
      link:
        'https://www.rankia.com/blog/luz-y-gas/2174744-electrodomesticos-etiqueta-energetica',
    },
    {
      referencia: 'Sogecal. (s. f.). <em>Caldera pirotubular.</em> ',
      link:
        'https://sogecal.com/servicios/caldera-pirotubular-fabricantes-instaladores-calderas-industriales-vapor/',
    },
    /*{
      referencia:
        'Idoia Arnabat (2016). <em>¿Cómo funciona el aire acondicionado?</em> ',
      link:
        'https://www.caloryfrio.com/aire-acondicionado/como-funciona-el-aire-acondicionado-infografia.html',
    },*/
    {
      referencia:
        'Universitat Politécnica de Catalunya. (s. f.). <em>Intercambiadores de calor.</em> Universitat Politécnica de Catalunya. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
