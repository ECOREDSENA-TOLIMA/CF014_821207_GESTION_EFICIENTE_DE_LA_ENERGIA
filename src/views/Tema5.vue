<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Cogeneración

    p(data-aos="fade-right") Se invita a explorar el siguiente recurso y seguir complementando el componente.

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La cogeneración o CHP #[i (Combined Heat and Power)], es la generación conjunta de dos formas de energía. Usualmente, se genera energía eléctrica y otra forma aprovechable de energía, ya sea energía térmica (calor residual en forma de vapor, agua caliente, gases calientes, frío) o mecánica, a partir de una sola fuente de energía primaria utilizada como combustible. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-01.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El combustible con el que funciona una planta de cogeneración puede ser fósil como carbón, gas natural, etc., o renovable como la energía solar, biomasa, gases excedentes de un proceso, entre otros. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-02.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La cogeneración puede ser usada en la industria del papel, en plantas procesadoras de alimentos y bebidas, sector automotriz, industria textil, industria minera, hospitales, entre otras aplicaciones. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Es una de las principales alternativas para aumentar la eficiencia energética en procesos industriales, ya que permite aprovechar la energía residual de la producción de electricidad en otros procesos. Su uso representa obtener rendimientos de hasta 90% en comparación con sistemas convencionales, donde la energía residual se desperdicia.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-04.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p La reducción de las pérdidas de energía con el uso de sistemas de cogeneración disminuye la cantidad de combustible requerido para los procesos y, por consiguiente, disminuye costos de operación, al tiempo que se minimiza el impacto ambiental al emitir menos cantidad de gases de efecto invernadero a la atmósfera.
          .col-md-7
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 15. </b> <i>Infografía de qué es la cogeneración</i>
            .row.justify-content-center.align-items-center
              .col-md-6.col-12
                figure
                  img(src='@/assets/curso/temas/tema5/tema5-05.png', alt='', @click="hacerVisible(5)")
            figcaption Nota. Tomada de https://www.bbva.com/es/sostenibilidad/que-es-la-cogeneracion-la-industria-frente-al-espejo-de-la-transicion-energetica/
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los sistemas de cogeneración cuentan, principalmente, con los siguientes componentes: elemento primario, que es una máquina o motor (turbinas de gas o de vapor o motor alternativo), un generador de electricidad y un sistema de recuperación de calor, que convierte en energía útil el calor de desecho del sistema primario. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-06.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El motor primario suele ser una turbina gas o de vapor o un motor de combustión interna, y se encargan de transformar la energía del combustible en energía mecánica y calor. La energía mecánica acciona el eje acoplado de un generador eléctrico, transformándose así en energía eléctrica. En algunas ocasiones se usa directamente la energía mecánica para accionar maquinaria, pero no es muy frecuente. Por su parte, el calor residual se puede aprovechar para subprocesos térmicos, mediante equipos como calderas, intercambiadores de calor, entre otros. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-07.png', alt='')

    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/tema1-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 La cogeneración como estrategia para el aprovechamiento de la energía
              p.text-small En el siguiente video se explican algunas de las generalidades de la cogeneración de energía eléctrica y calor.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=r0MFyzJAueI" target="_blank")
                span Abrir
                i.fas.fa-link

    .row.justify-content-center.align-items-center.mt-5.mb-4 
      .col-12(data-aos="fade-down")
        .cajon.color-acento-botones.p-4
          p.mb-0 Los sistemas de cogeneración se pueden clasificar como #[i topping] o #[i bottoming], según la manera en la que se use el combustible inicialmente. Ahora bien, la clasificación también puede hacerse de acuerdo con el motor primario que permite la generación eléctrica, en cuyo caso corresponde a ciclo con turbina de gas, ciclo con turbina de vapor (o combinado) y ciclo con motor alternativo (de combustión interna).

    Separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.1 Cogeneración tipo cabeza

    p(data-aos="fade-right") También conocido como tipo #[i topping], consiste en un motor primario que se encuentra acoplado a un generador de electricidad. El combustible se utiliza para producir electricidad en primera instancia. Luego, el calor residual del motor es enviado al sistema de recuperación que lo usa para producir vapor, agua caliente o cualquier forma de energía térmica.

    .row.justify-content-center.align-items-center.mt-5.mb-4  
      .col-md-8.col-12
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 16. </b> <i>Representación esquemática de la cogeneración tipo cabeza o topping</i>
        figure.mt-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema5/tema5-08.png', alt='', @click="hacerVisible(8)")
          figcaption Nota. Tomada de Banco de Desarrollo de América Latina (CAF). (s. f.). 
        

    Separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.2 Cogeneración tipo cola

    p(data-aos="fade-right") También llamada #[i bottoming], en este sistema, el combustible se utiliza inicialmente en un generador de energía térmica, como una caldera de vapor o un horno, mientras que el calor residual de los gases de desecho es direccionado a un sistema de recuperación que, a su vez, produce vapor para generar energía eléctrica mediante una turbina de vapor. Este tipo de configuración es usada en procesos que operan a altas temperaturas, por lo que la temperatura y cantidad de gases calientes iniciales se aprovechan para la generación de energía eléctrica.

    .row.justify-content-center.align-items-center.mt-5.mb-4  
      .col-md-8.col-12
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 17. </b> <i>Representación esquemática de la cogeneración tipo cola o bottoming</i>
        figure.mt-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema5/tema5-09.png', alt='', @click="hacerVisible(9)")
          figcaption Nota. Tomada de Banco de Desarrollo de América Latina (CAF). (s. f.).
        

    Separador
    #t_5_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.3 Cogeneración con turbina a gas 

    .row.justify-content-center.align-items-center.mt-5.mb-4  
      .col-md-6.col-12(data-aos="fade-right")
        p Consiste en la combustión de gas en una turbina que incluye compresor y cámara de combustión, y que se encuentra conectada a un generador eléctrico. Los gases de escape a alta temperatura de la combustión se aprovechan para producir energía mecánica que acciona al generador. La corriente de gases residuales es dirigida a una caldera de recuperación de calor para producir vapor, útil en otras aplicaciones industriales. 
        p Los gases también se pueden reutilizar para producir frío en un #[i chiller] de adsorción. Es una de las configuraciones más utilizadas en plantas medianas con equipos consumidores de vapor. Dentro de los fabricantes de turbinas a gas en el mundo se encuentran #[i Siemens, Rolls Royce, Kawasaki, Pratt & Whitney], entre otros.
      .col-md-6.col-12
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 18. </b> <i>Ciclo con turbina de gas</i>
        figure.mt-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema5/tema5-10.png', alt='', @click="hacerVisible(10)")
          figcaption Nota. En este caso se genera energía eléctrica y vapor de agua. Tomada de Naturgy (s. f.). 


    Separador
    #t_5_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.4 Cogeneración con turbina de vapor

    p(data-aos="fade-right") A partir de esta presentación interactiva, se podrá descubrir el tema de cogeneración con turbina de vapor. ¡Adelante!

    .tarjeta.tarjeta--gris.p-4.mb-5
      SlyderA(tipo="b")(data-aos="fade-down")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Cogeneración con turbina de vapor
            p Consiste en el uso de vapor a alta presión en una turbina para generar energía eléctrica. El vapor proviene de una caldera y es dirigido a una turbina en la que se produce energía mecánica. La turbina activa el eje de un generador y se produce energía eléctrica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-11.png', alt='Cogeneración con turbina de vapor')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El vapor que sale de la turbina porta calor, por lo que puede ser usado en procesos industriales o para la calefacción de edificios o viviendas. Es importante mencionar que la turbina requiere de una caldera donde se produzca vapor que puede ser a partir de la combustión o la recuperación de calor de otros procesos. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-12.png', alt='El vapor que sale de la turbina porta calor')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Dentro de los principales fabricantes de turbinas de vapor se encuentran General Electric, Siemens, Toshiba, entre otros. 
          .col-md-6
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 19. </b> <i>Ciclo con turbina de vapor</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema5/tema5-13.png', alt='Dentro de los principales fabricantes de turbinas de vapor se encuentran General Electric, Siemens, Toshiba, entre otros.',  @click="hacerVisible(13)")
              figcaption Nota. Este ciclo genera energía eléctrica con turbina de gas y turbina de vapor alimentada por vapor calentado por los gases de escape de la turbina. 
        .row.justify-content-center.align-items-center
          .col-md-6
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 20. </b> <i>Ciclo con turbina de vapor</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema5/tema5-14.png', alt='Ciclo con turbina de vapor.',  @click="hacerVisible(14)")
              figcaption Nota. Tomada de https://grebus.wordpress.com/tag/cogeneracion/


    Separador
    #t_5_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.5 Cogeneración con motor de combustión interna

    p(data-aos="fade-right") En esta configuración, se utiliza un motor de combustión interna como elemento primario. Estos motores utilizan gas o #[i fueloil] como combustible. Los gases de escape a alta temperatura pasan por una caldera de recuperación, en la que se produce vapor que se aprovecha en una turbina de vapor para generar energía eléctrica o energía mecánica. También es posible obtener calor a partir del circuito de refrigeración del motor, en el que se calienta el agua y se reutiliza, bien sea en otro proceso o para alimentar la caldera de vapor.

    .row.justify-content-center.align-items-center.mt-5.mb-4  
      .col-md-8.col-12
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 21. </b> <i>Ciclo con motor alternativo o de combustión interna</i>
        figure.mt-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema5/tema5-15.png', alt='', @click="hacerVisible(15)")
          figcaption Nota. En este caso además de energía eléctrica, se obtiene vapor de agua y agua caliente. Tomada de Absorsistem (s. f.).


    Separador
    #t_5_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.6 Ciclo combinado
    
    p(data-aos="fade-right") La cogeneración en ciclo combinado consiste en generar energía en un sistema a partir de dos ciclos termodinámicos, uno que funciona con gas y otro con vapor de agua. El primer fluido se genera por combustión y es el responsable de la generación de electricidad. Los gases a alta temperatura que salen de la turbina de gas se dirigen a una caldera en la que se produce vapor. 

    .row.justify-content-center.align-items-center.mt-5.mb-4(style="background-color: #F3F9FF")
      .col-md-10.col-12.p-3(data-aos="fade-right")
        p #[strong El vapor luego pasa a una turbina de vapor que se encuentra acoplada a un generador eléctrico, transformándose así la energía mecánica en energía eléctrica. El vapor sale de la turbina a baja presión, y puede condensarse para obtener agua caliente o sobrecalentada, útil para otro proceso asociado.]
        .row.justify-content-center
          .col-12.col-md-6
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 22. </b> <i>Ciclo combinado</i>
            figure.mt-3(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema5/tema5-16.png', alt='', @click="hacerVisible(16)")
              figcaption Nota. Este ciclo genera energía eléctrica con turbina de gas y turbina de vapor alimentada por vapor calentado por los gases de escape de la turbina. Tomada de naturgy (s. f.).
          .col-12.col-md-6
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 23. </b> <i>Ciclo combinado</i>
            figure.mt-3(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema5/tema5-17.jpeg', alt='', @click="hacerVisible(17)")
              figcaption Nota. Tomada de Pumps Bombas (s. f.). 


    Separador
    #t_5_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.7 Aumento de la eficiencia usando cogeneración

    p(data-aos="fade-right") Le invitamos a explorar la siguiente didáctica, con el fin de mejorar los conceptos aprendidos.

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5
      SlyderE(indicadores="derecha")(data-aos="fade-down")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El desarrollo de un proyecto de cogeneración se justifica por el aumento de la eficiencia térmica, que implica una reducción de los costos de operación del sistema. Al usar más eficientemente el combustible, el costo por unidad de energía generada disminuye, además de reducirse las emisiones de gases de efecto invernadero. El cambio de un sistema convencional de generación de electricidad y calor por separado, a un sistema de cogeneración puede reducir el consumo de energía entre 10% y 30% (MGM International, 2018). 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-18.png', alt='')

        .row.justify-content-center.align-items-center
          .col-12.mb-md-0
            p Para evaluar la viabilidad de un proyecto de cogeneración se debe determinar qué tanto aumenta la eficiencia del sistema, comparando el consumo de energía del sistema sin cogeneración frente al consumo que se daría al implementar cogeneración. Para determinar el ahorro de energía, comparando el consumo de combustible, que es la fuente primaria de energía, usamos la siguiente fórmula.
          .col-12
            figure
              img(src='@/assets/curso/temas/tema5/tema5-19.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p En el ejemplo de la figura 24 se puede observar que hay una disminución de combustible consumido de 21%, al pasar de requerir 215 unidades de gas natural a 170 para producir la misma cantidad de energía eléctrica y térmica, debido a que se pasó de tener una eficiencia térmica de 60% al 76,5%.
          .col-md-7
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 24. </b> <i>Comparación entre generación convencional y cogeneración</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema5/tema5-20.png', alt='', @click="hacerVisible(20)")

              
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-md-8.col-lg-6.col-10.mb-4.mb-md-0
          figure.mt-2
            img(:src='img_show')

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    modal1: false,
    img_show: require('@/assets/curso/temas/tema5/tema5-05.png'),
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
      if (item == 5)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-05.png')
      else if (item == 8)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-08.png')
      else if (item == 9)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-09.png')
      else if (item == 10)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-10.png')
      else if (item == 13)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-13.png')
      else if (item == 14)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-14.png')
      else if (item == 15)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-15.png')
      else if (item == 16)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-16.png')
      else if (item == 17)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-17.jpeg')
      else if (item == 20)
        this.img_show = require('@/assets/curso/temas/tema5/tema5-20.png')
      this.modal1 = true
    },
  },
}
</script>

<style lang="sass"></style>
