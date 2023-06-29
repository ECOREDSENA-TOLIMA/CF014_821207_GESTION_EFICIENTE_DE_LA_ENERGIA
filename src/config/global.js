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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
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
