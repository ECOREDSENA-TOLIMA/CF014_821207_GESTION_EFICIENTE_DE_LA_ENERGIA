<template lang="pug">
.curso-main-container.pb-3.tema11
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 11
      h1 Arquitectura bioclimática

    .cajon-b.color-primario.p-3.mb-4(data-aos="fade-down")
      p.mb-0 La arquitectura bioclimática es el diseño de edificaciones en función de las condiciones climáticas locales, centrándose en el aprovechamiento de los recursos naturales como el sol, el viento, la lluvia, etc., con el fin de disminuir los impactos ambientales y gestionar y reducir el consumo de energía. 
      
    .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-down")
      p El enfoque principal de la arquitectura bioclimática es proporcionar el máximo confort térmico con el menor consumo energético. Mediante la implementación de los principios de arquitectura bioclimática, existe el potencial de reducir sensiblemente el impacto ambiental del ser humano sobre el planeta, además de impactar positivamente la economía de los hogares.  
    
    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/tema1-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 ¿Qué es la arquitectura bioclimática?
              p.text-small En el siguiente video Carlos Placitelli Mañé explica algunas generalidades sobre la arquitectura bioclimática.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=dCYdFWGseCI" target="_blank")
                span Abrir
                i.fas.fa-link


    Separador
    #t_11_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 11.1 Características básicas de la arquitectura bioclimática

    p(data-aos="fade-right") El diseño de una construcción bioclimática implica tener en cuenta un conjunto de elementos o criterios técnicos encaminados a lograr los objetivos de bajo consumo energético, #[i confort] y menor impacto en el ambiente. Algunos de estos principios son la orientación, el clima y los materiales.

    .row.justify-content-center.align-items-center
      .col-md-10.col-12.mb-4.mb-md-0
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong La orientación:] el diseño arquitectónico tiene en cuenta la posición del sol con el fin de aprovechar la luz solar al máximo.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Soleamiento y protección solar:] se busca aprovechar la luz solar en las zonas interiores y exteriores del edificio, para brindar confort térmico a sus habitantes. Esto varía de acuerdo con el lugar donde esté ubicado y es preferible que los vidrios cuenten con protección solar para disminuir los efectos por la incidencia de la radiación solar.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Aislamiento térmico:] se utiliza para mantener la temperatura de #[i confort]. Las técnicas se aplican en fachadas, techos, puertas y ventanas, e incluyen muros de gran espesor, edificios completa o parcialmente enterrados, entre otras.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Ventilación:] se diseña para aprovechar las corrientes de aire en dirección opuesta (ventilación cruzada), renovar el aire y garantizar ventilación en todo el espacio; esta puede ser natural y convectiva. 
      .col-md-6.col-12.py-3
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 43. </b> <i>Trayectoria del sol en diferentes latitudes</i>
        figure.mt-2(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema11/tema11-01.png', alt='')
          figcaption Nota. Tomada de Seiscubos (2018). 

      .col-12.py-2
        .cajon.color-acento-contenido.p-4.mb-4
          p(data-aos="fade-right") Existen efectos que favorecen la ventilación y la salida del calor acumulado al interior. Entre ellos, el efecto Venturi, creando aberturas en la parte superior a lado y lado de las caras más comúnmente enfrentadas al viento, que cuando pasa a través de las aberturas succiona el aire del interior extrayendo calor. 
          p(data-aos="fade-right") También usa el efecto chimenea, que aprovecha que aire caliente es menos denso que el frío, y por tanto, tiende a ascender, se implementa haciendo pequeñas aberturas cerca al piso, por las que entra el aire frío más denso, en una parte alta de las paredes o en el techo se ubica una abertura por la que sale el aire cálido, esto crea un flujo de aire interior evitando la acumulación de calor.
          .row.justify-content-center.align-items-center
            .col-md-8.col-12
              .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
                p.titulo.pb-0.mb-0 <b>Figura 44. </b> <i>Efectos Venturi y chimenea</i>
              figure.mt-2(data-aos="fade-down")
                img(src='@/assets/curso/temas/tema11/tema11-02.png', alt='')
                figcaption Nota. Tomada de Arquitectura bioclimática.
          
          
      .col-12.py-2
        .cajon.color-acento-botones.p-4.mb-4
          p(data-aos="fade-right") Otra medida para evitar la acumulación de calor es el diseño de techos altos e inclinados, ya que la inclinación reduce la cantidad de radiación solar que se absorbe, frente a los techos planos. Cada 10 grados de inclinación permiten aproximadamente 10% menos de acumulación de calor de radiación solar (Arias, et al. 2013).
          .row.justify-content-center.align-items-center
            .col-md-8.col-12
              .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
                p.titulo.pb-0.mb-0 <b>Figura 45. </b> <i>Radiación solar en techos</i>
              figure.mt-2(data-aos="fade-down")
                img(src='@/assets/curso/temas/tema11/tema11-03.png', alt='')
                figcaption Nota. Tomada de Manual de diseño de edificaciones energéticamente eficientes en el trópico s.f. 
          
      p(data-aos="fade-right") Colombia y la mayor parte de Latinoamérica están en el trópico, por lo que las edificaciones no requieren adaptarse a los cambios de las estaciones. Es predominante el clima cálido, así que el principal objetivo de una construcción bioclimática en estas latitudes es evitar la acumulación de calor en la vivienda. 
          
    Separador
    #t_11_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 11.2 Estrategias de la arquitectura bioclimática
    
    p(data-aos="fade-right") Las construcciones bioclimáticas utilizan estrategias de diseño y uso diario, útiles para disminuir el consumo energético. Incluyen, entre otras:

    .row.justify-content-center.align-items-center
      .col-md-10.col-12.mb-4.mb-md-0
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Diseño bioclimático y eficiente:] las edificaciones se diseñan de manera que puedan adaptarse adaptan al medio que lo rodea.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Control y uso inteligente del espacio:] al construir un edificio se intenta dar las dimensiones adecuadas a la casa y sus estancias con el objetivo de optimizar el uso de energía.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Integración de energías renovables:] las construcciones bioclimáticas incorporan varios tipos de energías renovables para evitar consumir energía de la red.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Materiales:] los edificios bioclimáticos utilizan materiales sustentables, como la madera, fibras naturales, piedra, materiales reciclados, etc., que reducen los impactos de la construcción.

    Separador
    #t_11_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 11.3 Casas pasivas

    p(data-aos="fade-right") Conocidas como #[i Passivhaus] por su nombre en alemán, son un tipo de construcción que, además de adaptar la edificación a las condiciones del entorno, lo hacen con el consumo de energía interno, para reducir la necesidad de energía térmica. Estas construcciones deben cumplir con especificaciones establecidas en el estándar del #[i Passivhaus Institut] para obtener una certificación.


    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-12
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 46. </b> <i>Principios de una casa pasiva</i>
        figure.mt-2(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema11/tema11-04.png', alt='')
          figcaption Nota. Tomada de Iberdrola (s. f.). 

    p(data-aos="fade-right") Otra forma de construcción sostenible es la arquitectura vernácula, que incluye las técnicas con las que se construían casas en la antigüedad, cuando no existían los medios para climatizar, por lo que las viviendas se concebían para dar confort térmico, además de estar hechas de materiales sostenibles. La tapia o el bahareque son ejemplos de arquitectura vernácula sostenible.

</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
