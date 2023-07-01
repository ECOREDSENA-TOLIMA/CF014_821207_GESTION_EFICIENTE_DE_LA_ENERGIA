<template lang="pug">
.curso-main-container.pb-3.tema8
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 8
      h1 Distritos térmicos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/tema8-01.png')})`}"
      )
      .bloque-texto-g__texto.p-3
        p.mb-0.text-small Un distrito térmico es una alternativa de infraestructura energética que suministra calor y frío a los edificios que conforman un área urbana o localidad. La producción de calor y frío se realiza en un sistema centralizado urbano y no en los inmuebles individualmente. La configuración consiste en una planta central de generación en donde, a partir de la combinación de tecnologías, se obtiene energía térmica que luego se distribuye por redes de tuberías hasta los diferentes puntos de consumo de los clientes finales del distrito. 
          br
          | La energía térmica se transporta en forma de vapor, agua caliente, agua helada, y se utiliza para calefacción, producción de aire acondicionado y agua caliente sanitaria. Cabe destacar, que estos sistemas pueden utilizar diversas fuentes de energía, como, por ejemplo, las renovables, haciendo posible descarbonizar la refrigeración, la calefacción y el uso doméstico de agua caliente. 


    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/tema1-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Distríto Térmico - Celsia
              p.text-small En el siguiente video se puede encontrar una descripción de un distrito térmico y sus aplicaciones.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=D5FFNx_3zy0" target="_blank")
                span Abrir
                i.fas.fa-link


    .row.justify-content-center.align-items-center.mt-0
      .col-md-12.col-12.p-4(style="background-color: #D5CFE0")
        .row.justify-content-center.align-items-center
          .col-md-10.col-lg-9.col-12.p-2(data-aos="fade-right") 
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 29. </b> <i>Distrito térmico</i>
          .col-md-10.col-lg-9.col-12 
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema8/tema8-02.png', alt='')
              figcaption Nota. Tomada de Danfoss (s. f.). 
          .col-12.mt-5(data-aos="fade-right")
            p Los distritos térmicos son una alternativa eficiente que se ha venido popularizando en el mundo frente a los requerimientos de climatización de un gran número de ciudades en países con alta demanda de calor y frío. En el contexto internacional se conocen como #[i District Heating & Cooling].
        .row.justify-content-center.align-items-center
          .col-12.col-md-6
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 30. </b> <i>Representación de redes de frío</i>
            figure.mt-2(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema8/tema8-03.png', alt='', @click="hacerVisible(3)")
              figcaption Nota. Tomada de Engie (s. f.). 
          .col-12.col-md-6
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 31. </b> <i>Representación de redes de calor</i>
            figure.mt-2(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema8/tema8-04.png', alt='', @click="hacerVisible(4)")
              figcaption Nota. Tomada de Engie (s. f.). 

    p.mt-5(data-aos="fade-right") Dentro de los principales beneficios que ofrece la implementación de estos sistemas, se encuentran:

    .row.mt-4.mb-4.justify-content-center.align-items-center
      .col-md-10.col-12
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Eficiencia energética:] ya que se evita el uso de pequeños sistemas de climatización distribuidos, reemplazándolos por una central grande y más eficiente, representando ahorros de hasta el 30 % en eficiencia energética. Esto también influye en que se reduzcan los costos de operación y mantenimiento.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Menos GEI (Gases de Efecto Invernadero):] al reemplazar los equipos de aire acondicionado se disminuye el consumo de energía y se reduce o elimina el uso de refrigerantes, que son nocivos para la capa de ozono y que también tienen potencial de generar efecto invernadero y destruir la capa de ozono. Adicionalmente, se reducen las emisiones GEI porque es posible utilizar fuentes de energía renovable (solar, biomasa, etc.).
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Confort:] disminuye la contaminación por ruido dentro de los edificios y potencia la innovación en los diseños arquitectónicos, entre otros.

    .cajon-b.color-primario.p-3.mb-5(data-aos="zoom-in-down")
      p.mb-0 En Colombia, la implementación de distritos térmicos hace parte de unas de las medidas de eficiencia energética del PAI Proure 2017-2022, por consiguiente, el interés por desarrollarlos ha venido aumentando. Existe un potencial importante en el país para utilizar distritos térmicos en la generación de agua fría para reemplazar los aires acondicionados convencionales, especialmente en hospitales, hoteles, centros educativos y edificios administrativos o gubernamentales. 

    .cajon.color-acento-botones.p-4.mb-4.mt-0(data-aos="zoom-in-down")
      p La primera planta piloto instalada en el país se encuentra en el Centro Administrativo la Alpujarra en Medellín, provee solamente enfriamiento y es alimentada por gas natural y energía eléctrica. El sistema envía agua fría a 5 °C y la recibe a 12 °C, luego de haber climatizado los edificios del distrito (Enersinc, 2017). Con la integración del proyecto se redujeron en un 30% las emisiones de GEI de los edificios del distrito y se eliminaron en ellos el 100% de los refrigerantes, nocivos para la capa de ozono. En la siguiente figura, se puede ver el esquema del proyecto piloto de Distrito Térmico la Alpujarra. Se puede conocer más acerca de este proyecto piloto en 
        <a href="https://www.epm.com.co/site/inversionistas/inversionistas/noticias-y-novedades/distrito-t%C3%A9rmico-epm-un-proyecto-que-contribuye-a-la-eficiencia-energ%C3%A9tica" target="_blank">https://www.epm.com.co/site/inversionistas/inversionistas/noticias-y-novedades/distrito-t%C3%A9rmico-epm-un-proyecto-que-contribuye-a-la-eficiencia-energ%C3%A9tica.</a>


    .row.justify-content-center.align-items-center.mt-0.mb-5
      .col-md-12.col-12.p-4(style="background-color: #c3d4ed")
        .row.justify-content-center.align-items-center
          .col-12(data-aos="fade-right")
            p Puedes conocer más acerca de este proyecto piloto en 
              <a target="_blank" href="https://www.epm.com.co/site/inversionistas/inversionistas/noticias-y-novedades/distrito-t%C3%A9rmico-epm-un-proyecto-que-contribuye-a-la-eficiencia-energ%C3%A9tica">https://www.epm.com.co/site/inversionistas/inversionistas/noticias-y-novedades/distrito-t%C3%A9rmico-epm-un-proyecto-que-contribuye-a-la-eficiencia-energ%C3%A9tica.</a> 
          .col-md-9.col-lg-7.col-12.p-2(data-aos="fade-right") 
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 32. </b> <i>Distrito térmico La Alpujarra</i>
          .col-md-9.col-lg-7.col-12 
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema8/tema8-05.jpg', alt='')
              figcaption Nota. Tomada IUC, s.f. 
        
    p(data-aos="fade-right") Los principales retos que enfrenta el uso de los distritos térmicos en las ciudades se relacionan con las inversiones en la infraestructura requerida (acondicionamiento de las edificaciones para recibir la red de frío o calor, construcción de redes de distribución, etc.), la tecnología (falta de mediciones) y de los esquemas de financiación de proyectos de este tipo. Además, en el ámbito regulatorio aún falta consolidar la normativa de eficiencia energética que impulse el amplio desarrollo de distritos térmicos.

    Separador
    #t_8_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 8.1 Componentes de un distrito térmico

    p(data-aos="fade-right") En el siguiente recurso, se descubrirán los diferentes componentes de un distrito térmico.

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Los componentes característicos de un distrito térmico son la central de generación, la red de distribución compuesta por la tubería (aislada) y el sistema de bombeo y la subestación.
          .col-md-8
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 33. </b> <i>Componentes de un distrito térmico</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema8/tema8-06.png', alt='')
              figcaption Nota. Tomada de https://www.distritoenergetico.com/materializacion-del-distrito-termico-componentes/
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Central de generación
            p Se refiere a las grandes plantas en donde se encuentran los equipos de generación que permitirán suplir las necesidades de calefacción, refrigeración y agua del distrito. Pueden variar de acuerdo con el tipo de combustible y la tecnología que utilicen para generar energía térmica. Si esta se genera en forma de calor, los equipos utilizados son comúnmente calderas de gran tamaño y sistemas de cogeneración. En el caso de la producción de frío, los equipos que mayormente se usan son refrigeradores por compresión, que funcionan con energía eléctrica. También se puede utilizar tecnología de adsorción, como #[i chillers], a los que la energía necesaria les llega principalmente en forma de calor (residual), no obstante, se requerirá siempre el apoyo de la refrigeración por compresión. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/tema8-07.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Tubería 
            p Las redes de distribución de frío y/o calor incluyen la tubería que transporta el agua fría y/o caliente desde la central de generación hasta los edificios que conforman el distrito. Cuentan con una tubería de alimentación y una de retorno. El sistema se extiende y ramifica según las condiciones de la central de generación, el número de consumidores finales, la ubicación de estos y las pérdidas de energía que existan en la red. Las tuberías se conectan a una subestación ubicada en los puntos de consumo, que se encargan de la distribución interna en el inmueble. Es característico de las redes tubería incluir accesorios de tubería, válvulas e instrumentación y drenajes. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/tema8-08.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Poseer un buen aislamiento térmico para evitar las pérdidas por transferencia de calor.
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Estar bien selladas para evitar fugas o contaminación del fluido. 
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Comúnmente se adquieren preaisladas, para evitar así imperfecciones en la instalación del aislamiento. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/tema8-09.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Ser resistentes a la corrosión o al desgaste, para garantizar una durabilidad que las haga económicamente viables.
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Pueden ser subterráneas o superficiales y el material del que están hechas depende del caudal que transporten. 
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Las tuberías pueden ser flexibles, semiflexibles o rígidas. Las flexibles se instalan con mayor facilidad y rapidez, teniendo una duración de décadas. En la figura 34 se puede ver las partes que componen una tubería flexible preaislada de dos tubos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/tema8-10.png', alt='')

    .row.justify-content-center.align-items-center.mt-4
      .col-md-12.col-12.p-4(style="background-color: #CEDDF0")
        .row.justify-content-center.align-items-center
          .col-12.col-md-6
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 34. </b> <i>Tubería flexible preaislada</i>
            figure.mt-2(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema8/tema8-11.png', alt='Tubería flexible preaislada', @click="hacerVisible(11)")
              figcaption Nota. PE-HD es polietileno de alta densidad, PE-X es espuma polietileno reticulado, y el Eval PEX es polietileno reticulado en forma de tubo. Tomada de Ortega (s. f.).
          .col-12.col-md-6
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 35. </b> <i>Representación de dirección de tuberías en un Distrito térmico</i>
            figure.mt-2(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema8/tema8-12.png', alt='Representación de dirección de tuberías en un Distrito térmico', @click="hacerVisible(12)")
              figcaption Nota. La línea roja indica el agua que sale de la central del distrito térmico y la azul es el agua que retorna a la central. En algunos casos el distrito provee agua fría, en otros, agua caliente, e incluso hay los que distribuyen calor y frío al tiempo. Nota. Tomada de Red Española de Ciudades por el Clima (s. f.).

    p.mt-5(data-aos="fade-right") La tubería de un distrito térmico puede ser de tres tipos:

    .row.justify-content-center.align-items-center.mt-5
      .col-md-10.col-12
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Red troncal:] es la tubería principal, transporta el fluido que contiene la energía térmica (calor o frío) desde las centrales de generación hasta las redes de distribución secundarias o locales. Conduce altos caudales y presiones y suele ser de tubos de diámetros grandes, metálicos y preaislados. 
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Ramales:] llevan el calor o el frío desde la red troncal hasta el edificio o cliente. También pueden conducir el calor o el frío desde una central de generación de menor tamaño.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Acometidas:] son ramales de servicio al consumidor y conectan a los ramales con la subestación de cada edificio o cliente. Para diámetros pequeños suele emplearse tubería de plástico y preaislada.
      
      .col-md-10.col-12.mt-2
        p(data-aos="fade-right") #[i Sistemas de bombeo]
        p(data-aos="fade-right") Se utilizan para regular el flujo que transita por las tuberías. Pueden ser:

      .col-md-10.col-12
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Bombeo centralizado:] el fluido es impulsado por toda la red: planta de generación y tuberías (principales y de distribución).
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Bombeo distribuido a cada subestación:] existe un sistema de bombeo para cada central generadora y cada edificio consumidor. Es comúnmente utilizado en las redes de gran extensión.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Bombeo híbrido:] combinación de los anteriores. 

      .col-md-10.col-12.mt-2
        p(data-aos="fade-right") #[i Subestaciones]

      .col-md-10.col-12(data-aos="fade-right") 
        p La subestación es la infraestructura de transferencia entre la red de distribución de energía térmica y los edificios o viviendas (clientes). Se encarga de regular y controlar la temperatura y la presión de la red a las condiciones que requiere el cliente, y en ella se mide, además, el consumo de energía. Comúnmente la conforman un conjunto de intercambiadores de calor y los dispositivos de regulación y control. 
        p Además, las subestaciones pueden ser directas o indirectas. En las subestaciones directas, usadas principalmente en redes de baja temperatura, la conexión de la red general y la red del usuario son la misma. Las subestaciones indirectas usan un intercambiador de calor, estando separados el circuito de la red de distribución y el circuito interior del usuario.


    Separador
    #t_8_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 8.2 Tipos de redes de distribución de los distritos térmicos

    p(data-aos="fade-right") Las redes de distribución de los distritos térmicos pueden clasificarse según el trazado, según los circuitos y según el sector al que abastecen. Se describe a continuación el primero; y los trazados de las redes pueden ser tipo árbol, malla o anillo.

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.align-items-center(titulo="Tipo 1")
          .col-md-10.col-12.mb-4.mb-md-0
            p #[strong Tipo 1. Red tipo árbol o ramificado:] cada edificio está conectado directamente a una única central térmica, mediante una tubería de suministro y retorno.
        .row.justify-content-center.align-items-center(titulo="Tipo 2")
          .col-md-10.col-12.mb-4.mb-md-0
            p #[strong Tipo 2. Red tipo malla:] los edificios se conectan por múltiples puntos a una central térmica. En caso de cercanía a otras centrales térmicas o de avería, se puede conectar también a una o más de una. 
        .row.justify-content-center.align-items-center(titulo="Tipo 3")
          .col-md-10.col-12.mb-4.mb-md-0
            p #[strong Tipo 3. Red tipo anillo:] es una combinación entre los trazados árbol y malla. El punto final se interconecta con el punto inicial, generando un lazo cerrado.
        
        
    Separador
    #t_8_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 8.3 Fuentes energéticas

    .cajon-b.color-acento-contenido.p-3.mb-5(data-aos="fade-down")
      p.mb-0 Los distritos térmicos pueden utilizar diversas fuentes de energía. A escala mundial, existen distritos térmicos que utilizan fuentes renovables y no renovables, y además aguas profundas del mar. Dentro de las fuentes convencionales predomina el gas natural; también figura la electricidad para la refrigeración por compresión. 
        br
        br
        | Entre las fuentes de energía renovables se distinguen la solar (térmica y/o fotovoltaica) y la biomasa (de origen forestal, industrial, agropecuario, urbano, biogás, etc.). Una forma eficiente de generación de energía para el sistema es el uso de ciclos de cogeneración. En algunos casos es posible usar energía térmica “gratuita” contenida en fuentes geotérmicas para extraer calor de la tierra.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6
          .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
            p.titulo.pb-0.mb-0 <b>Figura 36. </b> <i>Posibles fuentes de energía para los distritos térmicos</i>
          figure.mt-2(data-aos="fade-down")
            img(src='@/assets/curso/temas/tema8/tema8-13.png', alt='Posibles fuentes de energía para los distritos térmicos', @click="hacerVisible(13)")
            figcaption Nota. Tomada del Distrito energético s.f. 

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-md-10.col-lg-9.col-11.mb-4.mb-md-0
          figure.mt-2
            img(:src='img_show')

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
    modal1: false,
    img_show: require('@/assets/curso/temas/tema8/tema8-03.png'),
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    hacerVisible(item) {
      if (item == 3)
        this.img_show = require('@/assets/curso/temas/tema8/tema8-03.png')
      else if (item == 4)
        this.img_show = require('@/assets/curso/temas/tema8/tema8-04.png')
      else if (item == 11)
        this.img_show = require('@/assets/curso/temas/tema8/tema8-11.png')
      else if (item == 12)
        this.img_show = require('@/assets/curso/temas/tema8/tema8-12.png')
      else if (item == 13)
        this.img_show = require('@/assets/curso/temas/tema8/tema8-13.png')
      this.modal1 = true
    },
  },
}
</script>

<style lang="sass"></style>
