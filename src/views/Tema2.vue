<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Calderas

    .row.justify-content-center.align-items-center.mt-5.mb-0
      .col-md-9.col-12.p-4(data-aos="fade-right")
        .cajon-b.color-acento-botones.p-3
          p.mb-0 Las calderas son dispositivos usados para convertir agua líquida en vapor a presión, usando una fuente de energía en forma de calor. Con la revolución industrial, cuando las máquinas a vapor eran el motor que impulsaba las economías industrializadas, las calderas eran usadas en diversas fábricas y en el transporte, generando vapor en las locomotoras y barcos. 
            br
            br
            | Actualmente, se usan para generar el vapor que mueve las turbinas a vapor de las plantas generadoras de energía eléctrica, en la producción de calor para climatización de edificaciones y distritos térmicos, además de procesos industriales en los que se requiere calor, como en la producción y pasteurización de alimentos, y también en la fabricación de productos químicos. 
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 La fuente de calor con la que funcionan las calderas es muy variada, usándose, desde la combustión de algún tipo de combustible fósil hasta el calor generado por material nuclear fisible en las centrales de energía nuclear. Los combustibles más usados para su funcionamiento son hidrocarburos como gas natural, carbón, fueloil, entre otros. 
      .col-md-3.col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-01.png', alt='Calderas')  


    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Componentes de una caldera

    p(data-aos="fade-right") Los principales componentes de una caldera se describen a continuación:

    .row.mt-5.justify-content-center
      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-02.png' alt='Quemador')
          .tarjeta.color-acento-contenido
            .p-4
              h4 Quemador
              p Mezcla el combustible con aire para iniciar la combustión y sirve también para regular la llama según las necesidades de la operación.

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-03.png' alt='Cámara de combustión u hogar')
          .tarjeta.color-acento-contenido
            .p-4
              h4 Cámara de combustión u hogar
              p Aquí se quema el combustible y se generan las temperaturas más altas.

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-04.png' alt='Circuito de humos')
          .tarjeta.color-acento-contenido
            .p-4
              h4 Circuito de humos
              p Por este circuito fluye el humo resultante de la combustión hacia la caja de humos.
            
      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-05.png' alt='Caja de humos')
          .tarjeta.color-acento-contenido
            .p-4
              h4 Caja de humos
              p Es la zona a la que llega el humo de la combustión antes de salir a través de una chimenea.
   
      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-06.png' alt='Chimenea')
          .tarjeta.color-acento-contenido
            .p-4
              h4 Chimenea
              p Conducto por el que el humo de la combustión sale a la atmósfera.

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-07.png' alt='Salida de vapor')
          .tarjeta.color-acento-contenido
            .p-4
              h4 Salida de vapor
              p Válvula por la que sale el vapor de agua hacia el sistema que lo aprovecha.

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tema2-08.png' alt='Entrada de agua')
          .tarjeta.color-acento-contenido
            .p-4
              h4 Entrada de agua
              p Válvula por la que entra el agua a la caldera. Las calderas usan una parte de agua que ingresa por primera vez y agua condensada del vapor generado en la caldera.


    .row.mt-5.justify-content-center
      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        h4 Circuito de agua
        p Es la zona por la que circula el agua cuando está siendo calentada en la caldera y se puede visualizar en la siguiente figura, excepto el quemador.
        .titulo-sexto.color-acento-botones.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Partes de una caldera</i>
        figure.mt-3
          img(src='@/assets/curso/temas/tema2/tema2-09.png' alt='Circuito de agua', style="padding-right: 5rem!important; padding-left: 5rem!important;")
          figcaption.mt-3 Nota. Las partes más importantes corresponden a los números 1. Circuito de humos. 2. Salida de vapor. 5. Chimenea. 6. Caja de humos. 7. Entrada de agua. 11. Hogar. <br> Dado que la imagen corresponde a una caldera pirotubular, el espacio que rodea el circuito de humos y el hogar es el circuito del agua.  

    p.mt-5(data-aos="fade-right") En el siguiente video se puede ver el funcionamiento de una caldera.

    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/tema1-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Las calderas se pueden clasificar de muchas formas:
              p.text-small Según el material del que están hechas, la disposición de los fluidos, el combustible usado, la presión de operación, entre otros criterios. La clasificación más común es según la disposición de los fluidos, y se dividen en pirotubulares y acuotubulares.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=QJRaP0BDt7I." target="_blank")
                span Abrir
                i.fas.fa-link

    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Calderas pirotubulares

    .row 
      .col-md-6.col-12(data-aos="fade-down")
        .cajon.color-primario.p-4.mb-4
          p En estas calderas, los gases calientes de la combustión (humos) circulan por tubos sumergidos en el agua que se va a calentar, de esta forma, a través de las paredes de los tubos se transfiere el calor de la combustión para hacer hervir el agua hasta convertirla en vapor. Se pueden clasificar en función de la disposición de los tubos como calderas horizontales y verticales; también se clasifican según el número de pasos que los gases de combustión hacen a través del agua como, calderas de dos pasos, tres pasos, etc. 
          p En las de dos pasos, los gases de la cámara de combustión pasan a través del circuito de humos pasando en dos pasos por el agua, siendo el primer paso a través de un tubo de mayor dimensión que los tubos en el segundo paso. En las calderas de tres pasos los gases recorren tres veces el agua que calientan. Estas últimas son más eficientes que las de dos pasos porque el calor contenido en los gases se aprovecha mejor.
      .col-md-6.col-12(data-aos="fade-down")
        .titulo-sexto.color-acento-botones.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Caldera pirotubular</i>
        figure.mt-3
          img(src='@/assets/curso/temas/tema2/tema2-10.png' alt='Caldera pirotubular', @click="hacerVisible(10)")
          figcaption.mt-3 Nota. El número 10 corresponde al quemador. Tomada de Sogecal (s. f.) 


    Separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 Calderas acuotubulares
    
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-md-12.col-12(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p En las calderas acuotubulares, a diferencia de las pirotubulares, el agua circula por el interior de los tubos, formando un circuito de tubos rodeados por los gases de la cámara de combustión. Este tipo de calderas permite trabajar a presiones más altas que las pirotubulares, aunque con caudales de agua menores, y son muy utilizadas en plantas termoeléctricas, con altos requerimientos de vapor.
      
      .col-md-6.col-12(data-aos="fade-down")
        .titulo-sexto.color-acento-botones.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Esquema de funcionamiento de una caldera acuotubular</i>
        figure.mt-3
          img(src='@/assets/curso/temas/tema2/tema2-11.png' alt='Esquema de funcionamiento de una caldera acuotubular',  @click="hacerVisible(11)")
          figcaption.mt-3 Nota. Los tubos con agua están rodeados por los gases de combustión. Tomada de Portal Electromecánico (s. f.).


    Separador
    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.4 Eficiencia de una caldera

    p.mt-5.mb-5(data-aos="fade-right") Con el siguiente recurso, se podrán conocer las ecuaciones para comprobar la eficiencia de una caldera.
    
    .tarjeta.tarjeta--gris.p-3
      SlyderE(indicadores="derecha")(data-aos="fade-down")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La eficiencia térmica de una caldera se define como la relación entre la energía útil, usada para convertir el agua en vapor, y la energía aportada por el combustible. La energía aportada por el combustible siempre será mayor a la útil, ya que esta no solo debe suplir el consumo de energía útil, sino también las pérdidas que se generan durante el proceso.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-12.png', alt='La eficiencia térmica de una caldera se define como la relación entre la energía útil')
        .row.justify-content-center.align-items-center
          .col-md-9.col-12.mb-4.mb-md-0
            p Hay pérdidas de energía y partículas no quemadas de combustible (conocidas como inquemados). La eficiencia es un indicador de qué tan bien aprovecha el dispositivo la energía que se le entrega. Cuanta más eficiente es una caldera, menos combustible se desperdicia y, en consecuencia, la operación es más económica y ecológica. Para determinar la eficiencia térmica de una caldera se puede usar la siguiente ecuación:
          .col-md-3.col-8
            figure
              img(src='@/assets/curso/temas/tema2/tema2-13.svg', alt='Hay pérdidas de energía y partículas no quemadas de combustible (conocidas como inquemados)', @click="hacerVisible(13)")
        .row.justify-content-center.align-items-center
          .col-md-6.col-12.mb-4.mb-md-0
            p Donde Ev representa la energía útil, es decir, la gastada para producir el vapor y Ec Expresa la energía aportada por el combustible. La energía útil se puede calcular con la siguiente ecuación:
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema2/tema2-14.svg', alt='Donde Ev representa la energía útil, es decir, la gastada para producir el vapor y Ec Expresa la energía aportada por el combustible.', @click="hacerVisible(14)")

        .row.justify-content-center.align-items-center
          .col-12.mb-md-0
            p Donde mv es el flujo másico de vapor dado en kg/segundo; %purga es el porcentaje de agua dentro de la caldera que se extrae para ser reemplazada por agua de alimentación, es decir, agua que entra por primera vez al sistema: hv es la entalpía del agua en condiciones de entrada al sistema.
            p Por ultimo, es necesario calcular la energía aportada por el combustible, de la siguiente manera:
          .col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema2/tema2-15.svg', alt='Donde mv es el flujo másico de vapor dado en kg/segundo', @click="hacerVisible(15)")
          .col-12 
            p Donde mc es el flujo másico de combustible y PCI es el poder calorífico inferior del combustible.
            p Haciendo uso de estas ecuaciones se puede determinar qué tan eficiente es la caldera. Una caída en la eficiencia de la caldera puede indicar que hay problemas de corrosión, contaminantes en el combustible, inquemados u obstrucciones, etc.  


    Separador
    #t_2_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.5 Acciones para mejorar la eficiencia

    p.mt-5.mb-5(data-aos="fade-right") Para mantener una eficiencia aceptable, o mejorarla cuando esta disminuye, se deben tomar medidas que incluyen, entre otras, las siguientes:

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-md-10.col-12.mb-4.mb-md-0
            p #[strong Paso 1:] reducir las pérdidas por inquemados, ajustando los quemadores para asegurar una buena pulverización del combustible, ajustar la relación aire/combustible y hacer más fina la molienda del carbón, si se usa ese combustible. 

        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-md-10.col-12.mb-4.mb-md-0
            p #[strong Paso 2:] también se puede mejorar el agua que alimenta la caldera para prevenir acumulación de sedimentos, ya que estos hacen más difícil la transferencia de calor al agua.

        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-md-10.col-12.mb-4.mb-md-0
            p #[strong Paso 3:] implementar un economizador, que es un intercambiador de calor que se instala a la salida de los humos que van camino a la atmósfera. Estos humos ya no están lo suficientemente calientes para generar vapor de agua, pero sí lo suficiente para precalentar el agua que entrará en la caldera, lo cual reduce la cantidad de energía que la caldera debe emplear para evaporar el agua de alimentación, mejorando de esta forma la eficiencia térmica y reduciendo el consumo de combustible necesario para operar, lo que se traduce en un menor impacto ambiental.	

        .row.justify-content-center.align-items-center(titulo="Paso 4")
          .col-md-10.col-12.mb-4.mb-md-0
            p #[strong Paso 4:] es posible recuperar calor de las purgas de agua que se deben hacer periódicamente para evitar la acumulación de sales e impurezas del agua. El agua de purga sale a alta temperatura, por lo que se puede aprovechar usando un intercambiador de calor con el cual precalentar el agua que ingresa en la caldera.

        .row.justify-content-center.align-items-center(titulo="Paso 5")
          .col-md-10.col-12.mb-4.mb-md-0
            p #[strong Paso 5:] cuando las calderas son equipos antiguos, más ineficientes por su diseño y por el desgaste, es recomendable cambiarlas por equipos nuevos, más eficientes.

              
    p.mt-5.mb-5(data-aos="fade-right") En la siguiente tabla se resume el impacto de las medidas para mejorar la eficiencia.

    .titulo-sexto.color-acento-botones.mt-2(data-aos="fade-right")
      p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Resultados esperados de las medidas para mejorar la eficiencia de las calderas</i>
    .tabla-a.color-acento-botones.mb-5(data-aos="fade-down")
      table
        caption Nota. Tomada de MGM International (2018).
        thead
          tr
            th Medida
            th Aplicación
            th Incremento de eficiencia
            th Reducción de CO2
        tbody
          tr
            th Reemplazo o actualización del quemador.
            td Todas las calderas con combustibles diferentes a sólidos.
            td Hasta 5%.
            td Hasta 6%.
          tr
            th Mejoras en la combustión mediante calibración manual, Sistema de control.
            td La implementación de un sistema de control solo aplica para calderas de gran capacidad.
            td 0,5% - 6%.
            td Hasta 8%.
          tr
            th Economizador.
            td En calderas con capacidades superiores a 25.000 lb/h.
            td Por cada 40 °C de reducción en los gases de combustión, la eficiencia aumenta en 1%.
            td Depende del aumento de la eficiencia alcanzado.
          tr
            th Precalentador de aire.
            td En calderas con capacidades superiores a 25,000 lb/h.
            td Una disminución de 300 °F representa un aumento del 6% de la eficiencia.
            td 1% por cada 40 °C disminuido.
          tr
            th Recuperador de calor en purgas.
            td En calderas de purgas continuas que excedan el 5% de su capacidad de producción de vapor.
            td Hasta el 7%.
            td 3% de las emisiones de la caldera.

    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-md-10.col-lg-10.col-12.mb-4.mb-md-0
          figure.mt-2
            img(:src='img_show')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    modal1: false,
    img_show: require('@/assets/curso/temas/tema2/tema2-10.png'),
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
      if (item == 10)
        this.img_show = require('@/assets/curso/temas/tema2/tema2-10.png')
      else if (item == 11)
        this.img_show = require('@/assets/curso/temas/tema2/tema2-11.png')
      else if (item == 13)
        this.img_show = require('@/assets/curso/temas/tema2/tema2-13.svg')
      else if (item == 14)
        this.img_show = require('@/assets/curso/temas/tema2/tema2-14.svg')
      else if (item == 15)
        this.img_show = require('@/assets/curso/temas/tema2/tema2-15.svg')
      this.modal1 = true
    },
  },
}
</script>

<style lang="sass"></style>
