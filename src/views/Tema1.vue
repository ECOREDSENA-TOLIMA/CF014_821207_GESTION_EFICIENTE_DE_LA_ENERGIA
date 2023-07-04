<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Intercambiadores de calor

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los intercambiadores de calor son dispositivos que permiten transferir calor de un fluido a otro sin que se mezclen para que haya intercambio de calor, los fluidos deben estar a diferentes temperaturas. Los intercambiadores de calor se pueden encontrar en muchas aplicaciones domésticas e industriales como refrigeradores, calentadores de agua, aires acondicionados, en plantas de generación de energía, en procesos químicos y agroindustriales. Dependiendo de la aplicación, se puede buscar enfriar o calentar un fluido, líquido o gas; incluso, los intercambiadores pueden ser usados para condensar (pasar de estado gaseoso a líquido) o para evaporar fluidos (pasar de estado líquido a gaseoso).

    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Tipos de intercambiadores

    SlyderE(indicadores="derecha", data-aos="fade-right")
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p Para responder a las necesidades de las diversas aplicaciones de estos aparatos se han diseñado varias configuraciones y tipos de intercambiadores de calor, los más conocidos y de uso más extendido son:
        .col-md-8.col-12
          figure
            img(src='@/assets/curso/temas/tema1/tema1-03.png', alt='Para responder a las necesidades de las diversas aplicaciones de estos aparatos se han diseñado')
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p Es el diseño más simple entre los intercambiadores de calor. Consta de dos tubos de diámetro diferente dispuestos uno dentro del otro, de forma que a través del tubo central pasa un fluido y por el espacio anular entre el tubo central y el tubo exterior pasa otro fluido a distinta temperatura. Generalmente, a través del tubo central circula el fluido caliente y por el espacio anular entre los tubos pasa el líquido de menor temperatura. En la figura 1 se puede ver un esquema de los tubos concéntricos de un intercambiador de doble tubo, en la que se observa que los fluidos están a contracorriente.
        .col-md-8.col-12
          .titulo-sexto.color-acento-botones.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Intercambiador de calor de doble tubo</i>
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-02.png', alt='Es el diseño más simple entre los intercambiadores de calor.')
          figcaption Nota. A la izquierda se puede ver un esquema del flujo de líquidos caliente y frío en un intercambiador de doble tubo. Nota. Tomada de UPC. <br>A la derecha un intercambiador de doble tubo de la empresa Sacome. Nota. Tomada de Sacome.
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          .h4 Los intercambiadores de doble tubo se pueden usar de dos formas
          p Con flujo a contracorriente, cuando los fluidos viajan a través del dispositivo en direcciones opuestas; o con flujo paralelo, cuando los fluidos viajan por el dispositivo en una misma dirección.
        .col-md-8.col-12
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-04.png', alt='Los intercambiadores de doble tubo se pueden usar de dos formas')
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          .h4 Intercambiador de calor compacto
          p Para entender mejor estos intercambiadores, se debe hablar del término densidad de área β, que es la razón (división) entre el área de transferencia de calor y el volumen que ocupa el intercambiador, donde el área de transferencia de calor se trata del área superficial con la que un fluido tiene contacto en el intercambiador de calor y que transmite el calor del fluido que está al otro lado. Un intercambiador de calor compacto es uno en el que el área de transferencia de calor es muy grande comparada con el volumen que todo el intercambiador ocupa. 
        .col-md-8.col-12
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-05.png', alt='Intercambiador de calor compacto')
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p Se considera compacto cuando la densidad de área β es mayor a 700 m^2/m^3, esto se logra uniendo placas o aletas corrugadas a las paredes que separan los fluidos para que el material del que están hechas transfiera el calor a través de un área de contacto mayor (Cengel, 2007). Este tipo de intercambiador de calor es útil en aplicaciones en las que se dispone de un volumen muy pequeño en el cual se debe ubicar el intercambiador, por ejemplo, el radiador de automóvil o el condensador y el evaporador de muchos refrigeradores.
        .col-md-8.col-12
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-06.png', alt='Se considera compacto cuando la densidad de área β es mayor a 700 m^2/m^3')
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p Es común que en este tipo de intercambiadores, la dirección de los fluidos sea perpendicular entre ellos, ya que las aletas impedirían un flujo paralelo.
        .col-md-8.col-12
          .titulo-sexto.color-acento-botones.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Intercambiador de calor compacto</i>
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-07.png', alt='Intercambiador de calor compacto')
          figcaption Nota. El intercambiador de esta figura puede ser usado como condensador y evaporador.  Tomada de Direct Industry (2021). 
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p Son intercambiadores de calor compuestos por un gran número de tubos que se encuentran ubicados dentro de una coraza comúnmente cilíndrica, a través de la cual pasa un fluido; mientras que por los tubos pequeños pasa otro fluido. Los extremos de la coraza son cerrados y se conocen como cabezales. En el interior de la coraza se sitúan placas llamadas desviadores o deflectores, que sirven para dirigir el flujo a través de esta y para mantener un espaciamiento uniforme entre los tubos pequeños a lo largo de toda la coraza. La desviación del flujo se hace con el fin de generar más turbulencia, lo que en palabras coloquiales significa desordenar el flujo al interior de la coraza. 
        .col-md-8.col-12
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-08.png', alt='Son intercambiadores de calor compuestos por un gran número de tubos que se encuentran ubicados')
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p La turbulencia favorece el intercambio de calor. Debido a su gran tamaño, estos intercambiadores son comúnmente usados para tareas industriales, para la pasteurización de alimentos y bebidas, tratamiento de aceites y grasas animales o vegetales, producción de soluciones en la industria química, entre otros. En la figura 3 se puede ver un esquema de la configuración más básica de un intercambiador de tubo y coraza.
          .titulo-sexto.color-acento-botones.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Intercambiador de tubos y coraza de un solo paso</i>
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='',  @click="hacerVisible(10)")
            figcaption.text-small Nota. La zona rosada corresponde al fluido que pasa a través de los tubos, la zona blanca corresponde al fluido que pasa por la coraza. Tomado de Transferencia de calor y masa (p. 612), por Cengel, 2007, McGraw-Hill.
        .col-md-8.col-12
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-09.png', alt='Intercambiador de tubos y coraza de un solo paso')
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p Los intercambiadores de tubo y coraza se pueden clasificar por el número de veces o pasos que los fluidos hacen durante su recorrido por el intercambiador de calor. La configuración más sencilla es la de un paso por la coraza y un paso por los tubos, esto es, el fluido que pasa por los tubos hace su recorrido a través de la coraza una sola vez, al igual que el fluido que atraviesa la sección de coraza, como se ve en la figura 3, que es un intercambiador de este tipo.
        .col-md-8.col-12
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='Los intercambiadores de tubo y coraza se pueden clasificar por el número de veces o pasos que los fluidos hacen durante su recorrido por el intercambiador de calor')
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p La configuración siguiente en complejidad es la de un paso por la coraza y dos pasos por los tubos, como se muestra en el esquema de la figura 4. En este caso los tubos tienen forma de u, por lo que el fluido que pasa por ellos recorre dos veces la sección de coraza, mientras en esta última el flujo solo pasa una vez. También existe la configuración de dos pasos por la coraza y cuatro pasos por los tubos (figura 4), en la que el fluido que pasa por los tubos recorre en cuatro ocasiones la zona de carcasa, mientras el fluido que recorre la carcasa, lo hace en forma de u.
        .col-md-8.col-12
          .titulo-sexto.color-acento-botones.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Intercambiadores de tubo y coraza de varios pasos </i>
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='Intercambiadores de tubo y coraza de varios pasos')
          figcaption Nota. A la izquierda un intercambiador de un paso por la coraza y dos por los tubos. A la derecha uno de dos pasos por la coraza y cuatro por los tubos. Tomada de Cengel (2007).
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          .h4 Intercambiador de calor de placas
          p También conocido como intercambiador de calor de placas y armazón, consta de una serie de placas corrugadas dispuestas en un armazón. Están diseñadas de forma tal que al poner las placas juntas en el armazón quedan espacios entre ellas que sirven como canales por los que pasan los líquidos frío y caliente. Las placas tienen orificios y cuentan con empaques que impiden que se filtre el líquido y sirven para dar forma al canal. Por su diseño, los líquidos intercambian calor a través del área de las placas y, al ser pequeña la separación, el intercambio se da de forma muy eficiente, lo que permite que este tipo de intercambiador de calor sea muy compacto. Las placas se montan de forma que el fluido frío pase entre dos placas por las que fluye fluido caliente, mejorando la transferencia de calor al fluido frío. En la figura 5 se puede ver un esquema del intercambiador, en azul el fluido frío y en rojo el de mayor temperatura.
        .col-md-8.col-12
          .titulo-sexto.color-acento-botones.mb-0
            p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Intercambiador de calor de placas</i>
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='Intercambiador de calor de placas',  @click="hacerVisible(13)")
            figcaption Nota. A la izquierda el esquema de funcionamiento de un intercambiador de placas. Tomada de  Alfa Laval (s. f.). A la derecha un intercambiador de placas con sus partes. Tomada de Cengel (2007).
      .row
        .col-md-4.col-12.mb-4.mb-md-0
          p Los intercambiadores de placas fueron diseñados para el intercambio de calor de líquido a líquido, no así para intercambio entre líquido y gas. Comúnmente estos intercambiadores permiten variar su tamaño al ser posible poner o quitar placas y ajustar el armazón, sin embargo, existen intercambiadores de placas soldadas, esto impide cambiar su tamaño, pero permite su aplicación en condiciones de temperatura y presión elevadas. 
        .col-md-8.col-12
          figure.mt-2
            img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='Los intercambiadores de placas fueron diseñados para el intercambio de calor de líquido a líquido')
      

    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/link.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Cómo funciona un intercambiador de calor
              p.text-small En el siguiente enlace se puede ver un video que ilustra el funcionamiento de estos novedosos intercambiadores de calor.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://corporate.alfalaval.com/como-funciona-un-intercambiador-de" target="_blank")
                span Abrir
                i.fas.fa-link


    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Medidas para mejorar y mantener la eficiencia

    p.mb-5(data-aos="fade-left") En el siguiente recurso podrás explorar todo lo relacionado con las medidas para mejorar y mantener la eficiencia.

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="flip-right")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Para obtener una eficiencia térmica óptima en los intercambiadores de calor, se debe seleccionar el intercambiador que mejor se ajuste a las condiciones de operación. Los distintos tipos de intercambiadores se diseñaron para adaptarlos a las distintas condiciones de trabajo.  
            p Por ejemplo, los intercambiadores de placas están pensados para intercambiar calor entre fluidos líquidos mientras que un intercambiador compacto es más apropiado cuando se requiere intercambiar calor entre un líquido y un gas (como el aire). 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-16.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Por su parte, los intercambiadores de tubo y coraza son ideales para aplicaciones en las que se trabaja con grandes cantidades de fluido y los intercambiadores de doble tubo son más sencillos para aplicaciones que no requiere flujos muy grandes. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Un factor que afecta el desempeño de los intercambiadores de calor es la suciedad que se acumula en su interior debido a las partículas contaminantes o corrosión, que dificultan la transferencia de calor.  
            p Para mantener la eficiencia de un equipo, es necesario efectuar mantenimientos periódicos en los que se revise y elimine la acumulación de suciedad, de esta forma se evita que haya una pérdida significativa de la eficacia del intercambiador. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Ya que en muchos casos uno o ambos fluidos de trabajo en el intercambiador de calor son agua, se puede minimizar la acumulación de suciedad tratando el agua de entrada para reducir el material particulado y las sales, que pueden adherirse gradualmente a las paredes de los ductos.  
            p Otros factores importantes para mejorar la transferencia de calor son el material y el espesor de los tubos o placas a través de las cuales se conduce el calor. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Se debe escoger un material que conduzca muy bien el calor, como el cobre y cuando sea posible, el espesor del material de los tubos o placas. Los intercambiadores de placas son los más adaptables, ya que se pueden redimensionar añadiendo, quitando o cambiando placas, por otras más delgadas o de mejores materiales, por lo que es recomendable que se seleccionen cuando la aplicación lo permita (cuando el intercambio de calor es entre fluidos líquidos). 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')
      
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-12.col-lg-12.col-12.mb-4.mb-md-0
          figure.mt-2
            img(:src='img_show')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    modal1: false,
    img_show: require('@/assets/curso/temas/tema1/tema1-10.png'),
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
        this.img_show = require('@/assets/curso/temas/tema1/tema1-10.png')
      else if (item == 13)
        this.img_show = require('@/assets/curso/temas/tema1/tema1-13.png')
      this.modal1 = true
    },
  },
}
</script>

<style lang="sass"></style>
