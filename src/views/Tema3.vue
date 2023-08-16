<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Climatización

    .row.justify-content-center.align-items-center
      .col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-01.png', alt='Climatización')

      .col-12(data-aos="fade-right")
        p.mt-4 La climatización consiste en tratar el aire dentro de un ambiente ocupado por personas, de manera que se logre mantener un confort ambiental. En otras palabras, su objetivo es modificar las condiciones de temperatura, humedad y calidad del aire de forma que las personas que trabajan o viven en el ambiente tratado se sientan cómodas, sin que haya una sensación de mucho calor o mucho frío, y que exista un nivel de humedad adecuado y una ventilación que permita la circulación de aire.
        
    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Conceptos básicos

    p(data-aos="fade-right") Para modificar las condiciones del aire en búsqueda de confort, este se puede tratar calentándolo, enfriándolo, retirando o añadiendo humedad e incluso, en casos muy especiales, comprimiéndolo. Es decir, cambiar alguno de los siguientes conceptos.

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-15.png', alt='Temperatura seca')
          .col-md-6.mb-4.mb-md-0
            .h4 Temperatura seca
            p Se trata de la temperatura indicada por los termómetros comunes, sin tener en cuenta el nivel de humedad del aire.

        .row.justify-content-center.align-items-center
          .col-md-6
            figure(style="padding-left:5rem; padding-right:5rem;")
              img(src='@/assets/curso/temas/tema3/tema3-16.png', alt='Temperatura de bulbo húmedo')
          .col-md-6.mb-4.mb-md-0
            .h4 Temperatura de bulbo húmedo
            p Es la temperatura del aire húmedo, es medida con un termómetro cuyo bulbo está envuelto en un material impregnado de agua. Esta temperatura permite tener una medida de la humedad del aire.

        .row.justify-content-center.align-items-center
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-17.png', alt='Humedad relativa ')
          .col-md-6.mb-4.mb-md-0
            .h4 Humedad relativa 
            p Es la medida que indica la capacidad del aire de absorber humedad. Es importante, porque afecta directamente la sensación de confort de las personas.

        .row.justify-content-center.align-items-center
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-18.png', alt='Cuando un ser humano está en un ambiente caluroso')
          .col-md-6.mb-4.mb-md-0
            .h4 Cuando un ser humano está en un ambiente caluroso
            p Su cuerpo transpira para desechar calor por medio de calor latente, esto ocurre porque el cambio de estado del sudor al evaporarse absorbe energía térmica del cuerpo. Si la humedad relativa del aire es baja, el cuerpo puede desechar fácilmente calor al evaporar sudor, porque el aire circundante tiene la capacidad de absorber humedad. 
        
        .row.justify-content-center.align-items-center
          .col-md-6
            figure(style="padding-left:7rem; padding-right:7rem;")
              img(src='@/assets/curso/temas/tema3/tema3-19.png', alt='Sin embargo')
          .col-md-6.mb-4.mb-md-0
            .h4 Sin embargo
            p Cuando la humedad relativa es muy alta, la capacidad del aire de absorber humedad disminuye, dificultando al cuerpo deshacerse del calor, afectando negativamente su confort, es por esta razón que en los ambientes cálidos húmedos la sensación de calor es más agobiante que en los ambientes cálidos secos. 

        .row.justify-content-center.align-items-center
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema3/tema3-20.png', alt='En resumen')
          .col-md-6.mb-4.mb-md-0
            .h4 En resumen
            p La humedad relativa afecta la sensación térmica del cuerpo y controlarla, ya sea aumentando o disminuyendo, permite influir en la sensación térmica de las personas.
        
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-21.png', alt='Teniendo en cuenta el concepto de humedad relativa')
          .col-md-6.mb-4.mb-md-0
            .h4 Teniendo en cuenta el concepto de humedad relativa
            p Se pueden modificar las condiciones de confort en un ambiente cerrado a partir del tratamiento que se brinde al aire, que puede ser: disminuir su temperatura, aumentar su temperatura, agregar humedad (humidificar), retirar humedad (deshumidificar) o combinando varios mecanismos para garantizar un ambiente agradable a las personas. 

    p(data-aos="fade-right") #[span.etiqueta A continuación, se describen los principales mecanismos de climatización.]

    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Aire acondicionado

    p(data-aos="fade-right") Se invita a observar el siguiente recurso que orientará en términos de aire acondicionado:

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-02.png', alt='En climas cálidos')
          .col-md-6.mb-4.mb-md-0
            .h4 En climas cálidos
            p Que predomina en gran parte del territorio colombiano, el sistema de climatización más utilizado es el aire acondicionado. Su función es enfriar el aire dentro del espacio a climatizar, haciéndolo pasar alrededor de un evaporador con refrigerante a baja temperatura. El sistema toma el aire del lugar que se desea enfriar, lo pasa por el evaporador y lo impulsa nuevamente dentro del ambiente a una menor temperatura.

        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-03.png', alt='En la parte exterior')
          .col-md-6.mb-4.mb-md-0
            .h4 En la parte exterior
            p Ocurre un proceso opuesto, el condensador aspira el aire del exterior, elimina el calor del refrigerante y lo expulsa a una temperatura más alta. La configuración de estos equipos puede variar de acuerdo con la disposición de algunas de las partes que lo componen. 

        .row.justify-content-center.align-items-center
          .col-md-6.col-12
            .titulo-sexto.color-acento-botones.mb-0
              p.titulo.pb-0.mb-0 <b>Figura 9. </b> <i>Sistema de aire acondicionado</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema3/tema3-05.png', alt='Dichas variantes')
              figcaption Nota. Tomada de Colocho et al. (2011).
          .col-md-6.mb-4.mb-md-0
            .h4 Dichas variantes
            p Se originan para atender a las diferentes necesidades de los lugares en los que se usan, por ejemplo, en casas unifamiliares, edificios de apartamentos o bloques de oficinas. Sin embargo, el ciclo termodinámico y las partes principales que lo componen son las mismas y se muestran en la figura 9.

        .row.justify-content-center.align-items-center
          .col-md-6.col-12
            .titulo-sexto.color-acento-botones.mb-0
              p.titulo.pb-0.mb-0 <b>Figura 10. </b> <i>Descripción del funcionamiento de un sistema de aire acondicionado</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema3/tema3-06.svg', alt='Descripción del funcionamiento de un sistema de aire acondicionado')
          .col-md-6.mb-4.mb-md-0
            p Ahora bien, al hablar de sistemas de aire acondicionados, se habla de equipo de consumo final de energía y, por lo tanto, de eficiencia energética, la cual se define como el cociente entre la potencia de enfriamiento y la potencia eléctrica que consume.
        
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-07.png', alt='Este cociente se conoce como EER  y también como COP')
          .col-md-6.mb-4.mb-md-0
            .h4 Este cociente se conoce como EER  y también como COP
            p Según sean las unidades empleadas en el cálculo. A mayor valor de estos cocientes, más eficiente es el equipo. Si la relación es igual a 1, el equipo produce una unidad de energía térmica por cada unidad de electricidad consumida. Si su valor es 5, por ejemplo, por cada unidad de energía eléctrica que consume produce una de energía térmica. En la actualidad, en los aires acondicionados, al igual que en otros electrodomésticos, se utilizan etiquetas de eficiencia energética para informar a los usuarios acerca del desempeño del equipo.

        .row.justify-content-center.align-items-center
          .col-md-6.col-12
            .titulo-sexto.color-acento-botones.mb-0
              p.titulo.pb-0.mb-0 <b>Figura 11. </b> <i>Etiqueta de eficiencia energética para equipos como aires acondicionados</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema3/tema3-08.png', alt='Etiqueta de eficiencia energética para equipos como aires acondicionados')
          .col-md-6.mb-4.mb-md-0
            p Los componentes principales de un sistema de aire acondicionado se describen a continuación: 
        
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-09.png', alt='Válvula de expansión')
          .col-md-6.mb-4.mb-md-0
            .h4 Válvula de expansión
            p Esta válvula es un dispositivo instalado entre el condensador y el evaporador. A través de este accesorio, se regula el flujo del refrigerante en estado líquido y se abastece al evaporador con la cantidad de líquido correcta, donde se encuentra a presión más baja. 

        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-10.png', alt='Evaporador')
          .col-md-6.mb-4.mb-md-0
            .h4 Evaporador
            p Es un intercambiador de calor al que ingresa el refrigerante en estado líquido desde la válvula de expansión. La presión en su interior es baja, por lo que el refrigerante se evapora en su interior. El refrigerante cambia de fase a temperatura constante y absorbe calor que se aprovecha para enfriar el aire que circula en el evaporador. El aire que pasa por el evaporador es el que se usa para disminuir la temperatura ambiente al interior de una casa o edificio.

        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-11.png', alt='Compresor')
          .col-md-6.mb-4.mb-md-0
            .h4 Compresor 
            p Este se encarga de comprimir el gas que proviene del evaporador con tal presión que se incrementa la temperatura del gas que luego pasa al condensador. Sus funciones también incluyen la de facilitar la circulación del refrigerante por todo el circuito del aire acondicionado. Funciona con motor eléctrico.

        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-12.png', alt='Condensador ')
          .col-md-6.mb-4.mb-md-0
            .h4 Condensador  
            p El condensador es otro intercambiador de calor, en cuyo interior se encuentra el gas refrigerante a una presión tal que empieza a retornar a estado líquido. En el condensador, el refrigerante intercambia calor con el aire exterior, entregando el calor absorbido durante el proceso de evaporación. En la figura se pueden ver las partes descritas en un aire acondicionado tipo #[i split] (comúnmente también llamado #[i minisplit]).
        
        .row.justify-content-center.align-items-center
          .col-md-6.col-12
            .titulo-sexto.color-acento-botones.mb-0
              p.titulo.pb-0.mb-0 <b>Figura 12. </b> <i>Partes básicas de un aire acondicionado tipo #[i minisplit]</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema3/tema3-13.png', alt='Partes básicas de un aire acondicionado tipo <i>minisplit</i>')
          .col-md-6.mb-4.mb-md-0
            p La unidad externa, como lo indica su nombre, se debe ubicar por fuera del espacio a climatizar, por lo que es necesario extender la línea que transporta el refrigerante hasta el lugar en el que se sitúa la unidad interna con el evaporador en ella. Los sistemas de aire acondicionado pueden ser domésticos, diseñados para una sola vivienda o apartamento, o pueden ser grandes sistemas de refrigeración para climatizar edificios residenciales, comerciales o industriales. 
        
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-14.png', alt='Las grandes unidades de acondicionamiento de aire')
          .col-md-6.mb-4.mb-md-0
            .h4 Las grandes unidades de acondicionamiento de aire 
            p Funcionan bajo el mismo ciclo termodinámico, pero a una escala mayor, implicando el uso de ductos para el transporte de aire, humidificadores o deshumidificadores, según las condiciones ambientales y del equipo usado. Algunos equipos de gran tamaño refrigeran agua en vez de aire y envían esta agua a radiadores en los que el agua fría intercambia calor con el aire para climatizar el área.
        

    p(data-aos="fade-right") #[span.etiqueta Tecnologías de aire acondicionado.]

    p(data-aos="fade-right") Existen diferentes tecnologías de aire acondicionado, a saber:

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-md-10.col-12.p-4(style="background-color:#E8F0F8")
        ul.lista-ul
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Ventana:] son compactas, aunque menos eficientes que las tecnologías más modernas. Requieren de una abertura en la pared de cada recinto a climatizar. Al interior de la edificación se ubica el evaporador, que enfría el aire interior, mientras en la parte externa del edificio se encuentra el condensador, que intercambia calor con el exterior.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Sistemas mini y #[i multisplit:]] cuentan con una unidad central en la que se ubican el condensador, el compresor y un ventilador, mientras el evaporador se ubica al interior de las zonas a climatizar. Puede tener más de un evaporador. Son equipos de fácil instalación y de mayor uso. La figura 12 corresponde a un sistema #[i minisplit].
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Unidades paquete:] son equipos utilizados para enfriar recintos amplios, como salones o almacenes. Se pueden ubicar directamente en el recinto o fuera de ellos y comunicados por medio de ductos.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Sistemas de agua helada tipo Chiller:] son equipos que, a diferencia de los sistemas mini o #[i multisplit], tienen el evaporador en la unidad central, en donde enfrían el agua que se envía mediante tuberías aisladas hasta equipos que inyectan el aire a las zonas que se desea climatizar. Dichas unidades se conocen comúnmente como Unidades Manejadoras de Aire. Los #[i Chiller] pueden ser de dos tipos: condensador por aire o condensador por agua, en los que utilizan torre de enfriamiento.
          li(data-aos="fade-down")
            i.fas.fa-atom(style="color: #0F58B9")
            | #[strong Sistemas centrales de refrigerante variable (VRF):] son equipos que se utilizan en hoteles, centros comerciales, edificios residenciales, etc. Controlan la circulación del refrigerante entre la unidad de condensación y la de evaporación, de acuerdo con la demanda. Permiten distribuir el refrigerante requerido por cada unidad instalada en los diferentes espacios que se climatizan, logrando así que el sistema sea más eficiente.
          
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-md-10.col-12
        .titulo-sexto.color-acento-botones.mt-2(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Tabla 2.</b> <i>Unidades de aire acondicionado</i>
      .col-md-10.col-12
        .tabla-a.color-acento-botones.mb-5(data-aos="fade-down")
          table
            caption Nota. Elaboración propia con imágenes tomadas de MGM International (2018). https://scioteca.caf.com/bitstream/handle/123456789/1295/GUIA%20-%20Aire%20Acondicionado.pdf?sequence=1 
            thead
              tr
                th Unidades paquete
                th Sistemas de agua helada tipo #[ iChiller]
                th Sistemas centrales de refrigerante variable (VRF)
            tbody
              tr
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-22.png', alt='Unidades paquete')
                td 
                  img(src='@/assets/curso/temas/tema3/tema3-23.png', alt='Sistemas de agua helada')
                td
                  img(src='@/assets/curso/temas/tema3/tema3-24.png', alt='Sistemas centrales de refrigerante variable (VRF)')


    Separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.3 Bomba de calor

    .row 
      .col-md-6.col-12(data-aos="fade-down")
        .titulo-sexto.color-acento-botones.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 13. </b> <i>Partes de una bomba de calor</i>
        figure.mt-3
          img(src='@/assets/curso/temas/tema3/tema3-25.png' alt='Partes de una bomba de calor')
          figcaption.mt-3 Nota. Algunas partes distintas a la válvula de cuatro vías pueden no estar en todas las bombas de calor. Tomada de Wikipedia Commons (s. f.).
      .col-md-6.col-12(data-aos="fade-down")
        .cajon.color-primario.p-4.mb-4
          p Las bombas de calor son máquinas térmicas que transportan energía en forma de calor de un espacio a otro. Funcionan bajo los mismos principios y con los mismos componentes fundamentales que el aire acondicionado. La diferencia con estos últimos radica en que las bombas de calor están diseñadas para producir calor en un recinto en vez de frío, por lo que se utilizan para calefacción y calentamiento de agua. La inversión del funcionamiento se logra haciendo uso de un componente llamado válvula de inversión, también conocida como válvula de cuatro vías. 
          p Las bombas de calor también aprovechan los cambios de estado de un refrigerante y son equipos muy utilizados en zonas en las que hay cambios estacionales de clima, sirviendo en invierno o verano. Los componentes de la bomba de calor son: compresor, condensador, válvula de expansión, evaporador. 


    Separador
    #t_3_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.4 Medidas para mejorar y mantener la eficiencia

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-md-8.col-12.p-4(data-aos="fade-right")
        .cajon-b.color-acento-botones.p-3
          p.mb-0 Para mejorar la eficiencia térmica en la climatización de un espacio es importante seleccionar el sistema de climatización de acuerdo con el tipo de clima, de forma que si el área a climatizar es un ambiente cálido húmedo se seleccione un equipo que deshumidifique el aire para bajar la sensación térmica de temperatura y de esa forma evitar tener que usar mucha potencia en la climatización. Mientras que, si se trata de un clima cálido seco, humidificar el aire permite disminuir un poco la temperatura, cuidando de no llegar al extremo de aumentar mucho la humedad. Algunas de las acciones para incrementar la eficiencia energética de los sistemas de climatización incluyen:
        .cajon.color-acento-contenido.p-4.mb-4
          ul.lista-ul
            li(data-aos="fade-down")
              i.fas.fa-atom(style="color: #0F58B9")
              | Distribuir los equipos por zonas para atender las demandas de frío particulares.
            li(data-aos="fade-down")
              i.fas.fa-atom(style="color: #0F58B9")
              |	Utilizar aislamientos térmicos adecuados.
            li(data-aos="fade-down")
              i.fas.fa-atom(style="color: #0F58B9")
              | Elegir adecuadamente las temperaturas de evaporación y condensación.
            li(data-aos="fade-down")
              i.fas.fa-atom(style="color: #0F58B9")
              | Utilizar motores de frecuencia variable en los sistemas de distribución de fluidos.
            li(data-aos="fade-down")
              i.fas.fa-atom(style="color: #0F58B9")
              | Incorporar infraestructura de cogeneración.
            li(data-aos="fade-down")
              i.fas.fa-atom(style="color: #0F58B9")
              |	Reutilizar la energía térmica contenida en los condensados de los equipos de enfriamiento o el calor de los humos que salen de las calderas.
      .col-md-4.col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/tema3-26.svg', alt='Medidas para mejorar y mantener la eficiencia')  


    p(data-aos="fade-right") Por otro lado, los aires acondicionados y las bombas de calor cuentan con intercambiadores de calor a los que se debe hacer mantenimientos periódicos para mantener una buena tasa de transferencia de calor, ya que cuando estos componentes se ensucian se hace más difícil el intercambio de calor y aumenta el nivel de energía consumida. 


    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/link.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 6 TRUCOS PARA AHORRAR EN EL AIRE ACONDICIONADO
              p.text-small Para conocer más acerca de cómo usar de manera eficiente el aire acondicionado, se invita a visitar el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.sostenibilidad.com/vida-sostenible/trucos-ahorrar-aire-acondicionado/?_adin=02021864894" target="_blank")
                span Abrir
                i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema3',
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
