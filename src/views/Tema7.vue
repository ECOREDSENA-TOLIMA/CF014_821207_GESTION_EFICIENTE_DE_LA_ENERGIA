<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 7
      h1 Automatización y digitalización para generar eficiencia energética

    .row.justify-content-center.align-items-center.mt-0
      .col-md-12.col-12.p-4(data-aos="fade-right")
        .cajon.color-acento-contenido.p-3
          p.mb-0 En este apartado verá, aplicaciones industriales, automatización, aplicaciones en edificios (residenciales, comerciales), digitalización para generar eficiencia energética e impacto en la eficiencia energética.
       
    Separador
    #t_7_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 7.1 Aplicaciones industriales

    p(data-aos="fade-right") A partir del siguiente recurso usted podrá descubrir cómo automatizar y digitalizar procesos relacionados con la eficiencia energética en la industria.

    .h1 PENDIENTE VIDEO = SLIDER 


    Separador
    #t_7_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 7.2 Aplicaciones en edificios (residenciales, comerciales) 

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La automatización se usa en edificios comerciales y residenciales para optimizar el consumo de energía o recursos como el agua. Esto se conoce como Sistema de Control de Edificios, o BMS por sus siglas en inglés. Un ejemplo de BSM son los sistemas de control de climatización, que automáticamente pueden optimizar el uso de las plantas de aire acondicionado o calefacción, controlando la temperatura en las zonas climatizadas según los datos de temperatura de las distintas áreas de un edificio. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-01.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p De esa forma, si una habitación tiene una temperatura poco confortable, el sistema automáticamente actúa regulando la temperatura, bajándola o aumentándola, según la demanda de climatización; incluso, si el sistema detecta que alguna habitación o área está deshabitada en un momento, puede apagar el aire acondicionado o la calefacción para evitar el consumo inoficioso de energía, ahorrando costos y reduciendo el consumo de electricidad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-02.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En países en los que el valor de la energía térmica varía según la hora del día, se implementan sistemas automáticos de control que regulan el almacenamiento de frío para los sistemas de aire acondicionado, según la demanda. Para ello, en las horas en las que el valor de la energía es menor, se almacena agua fría en tanques diseñados para ese propósito, esta agua es usada para climatizar en las horas en las que las tarifas son más caras, logrando un ahorro de dinero.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Un sistema automatizado también puede regular el uso de las redes de iluminación, atenuando, apagando y encendiendo las luces dependiendo de si hay o no personas en la zona, o según el nivel de luz ambiental disponible. Los BMS pueden implementarse para el control de ascensores y bombas de agua; además, es posible implementar sistemas de seguridad automáticos para el reconocimiento de personas, control de ingreso, vigilancia y seguridad frente a accidentes como incendios o fugas de gas, agua o daños eléctricos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-04.png', alt='')


    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/tema1-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 ¿Qué es el BMS?
              p.text-small En este video se explican algunas de las capacidades que ofrece una empresa de implementación de control automático de edificios
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=H39neD0i0Vw" target="_blank")
                span Abrir
                i.fas.fa-link


    .row.justify-content-center.align-items-center.mt-0
      .col-md-12.col-12.p-4(data-aos="fade-right")
        .cajon.color-primario.p-4
          p Algunos elementos importantes de un sistema de control de edificios son, según Cad y Lan (s. f.):
          .col.mx-3
            ul.lista-ul
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | #[strong Sensores:] miden variables de interés para el sistema. Hay sensores de movimiento, temperatura, humedad, gases, corriente o tensión eléctrica y cualquier otra variable importante. Envían los datos recogidos a un controlador que los procesa.
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | #[strong Controladores:] reciben datos de los sensores, los procesa y controla los dispositivos para regular variables de forma que el conjunto de sistema de control garantice el confort, seguridad y eficiencia energética.
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                |#[strong Dispositivos de salida:] reciben órdenes del controlador, para manejar variables, como apagar, encender o atenuar luces, encender o apagar el aire acondicionado o graduar su potencia para disminuir o aumentar la temperatura e incluso abrir o cerrar ventanas y cortinas.
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | #[strong Interfaz de control:] es el panel o pantalla de control, en la que se pueden ver datos relacionados con la operación de los equipos controlados, también puede estar en forma de interfaz gráfica en una computadora o #[i Smartphone].

    .row.justify-content-center.align-items-center.mt-0.p-4
      .col-md-12.col-12.p-4(style="background-color: #D5CFE0")
        .row.justify-content-center.align-items-center
          .col-12(data-aos="fade-right")
            p El sistema de control automático puede estar conectado a servidores en la nube para el monitoreo del desempeño, toma de decisiones mediante algoritmos y control desde dispositivos electrónicos a distancia. En la figura se puede ver un diagrama de los componentes de un sistema de control de edificios basado en un controlador #[i Arduino].
          .col-md-10.col-12.p-2(data-aos="fade-right") 
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 28. </b> <i>Componentes de un sistema de control de edificios</i>
          .col-md-10.col-12(data-aos="fade-right") 
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema7/tema7-05.png', alt='')
              figcaption Nota. Tomada de Ikastaroak (2020). 

    Separador
    #t_7_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 7.3 Impacto en la eficiencia energética

    .row.justify-content-center.align-items-center.mt-0
      .col-md-12.col-12.p-4(data-aos="fade-right")
        .cajon.color-acento-botones.p-4
          p La implementación de la automatización y digitalización de procesos y la gestión energética puede representar reducciones de consumo de entre 20% y 35% de energía respecto a las condiciones previas a la implementación y se pueden lograr desarrollando proyectos de monitoreo de consumo eléctrico y térmico, sistemas de acumulación de energía, control de iluminación u optimizando los procesos de combustión en las empresas industriales. Esto implica también una reducción en las emisiones de gases de efecto invernadero y un ahorro económico que puede amortizar la inversión hecha para su puesta en marcha (MGM International, 2018).



</template>

<script>
export default {
  name: 'Tema7',
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
