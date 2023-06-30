<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Refrigeración

    p(data-aos="fade-right") Le invitamos a explorar el siguiente recurso, con el fin de adentrarse en la temática sobre refrigeración. 

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5
      SlyderA(tipo="b")(data-aos="fade-down")
        .row.justify-content-center.align-items-center
          .col-12.col-md-11.mb-4.mb-md-0
            .h4.text-center Refrigeración
            figure
              img(src='@/assets/curso/temas/tema4/tema4-01.png', alt='Refrigeración')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En la vida cotidiana, se asocia el término refrigeración exclusivamente con los equipos que se tienen en casa (neveras) y con las vitrinas que se observan en tiendas y locales. No obstante, la refrigeración está presente en múltiples áreas, que incluyen la industria de alimentos, la industria química, el sector salud y el sector energía. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-02.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En el sector salud se usan refrigeradores para conservar medicamentos, muestras y vacunas, y en procedimientos como la crioterapia. En el sector energía, por ejemplo, se utiliza para el tratamiento criogénico del gas natural y así facilitar su transporte. La invención de la tecnología de refrigeración impactó positivamente la salud pública y la seguridad alimentaria.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La refrigeración consiste en reducir la temperatura o extraer calor de un espacio, objeto o sustancia y transferirlo a un área capaz de absorber la energía térmica que, por lo general, es el aire ambiente. Para lograr la transferencia del calor y la refrigeración, se utilizan fluidos que se denominan refrigerantes. 
            p Las aplicaciones de refrigeración comprenden la climatización de ambientes, el transporte y/o conservación de alimentos u otros productos a los que afecte el calor, la obtención de hielo, la reducción de temperatura en motores y proceso de mecanizado, entre otros. Los métodos más comunes para la refrigeración de espacios son los ciclos de compresión y de absorción, siendo el primero el más utilizado. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-04.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            .titulo-sexto.color-acento-botones.mb-0
              p.titulo.pb-0.mb-0 <b>Figura 14. </b> <i>Ciclo de funcionamiento de un refrigerador</i>
            figure.mt-2
              img(src='@/assets/curso/temas/tema4/tema4-05.png', alt='')
              figcaption Nota. Tomado de Froztec (2021).
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Mediante un intercambiador de calor (evaporador), se absorbe el calor del refrigerante que se evapora (se convierte en gas), el cual es luego eliminado mediante otro intercambiador de calor (condensador) a medida que el refrigerante vuelve a estado líquido, es decir se condensa. El refrigerante utilizado en un sistema de refrigeración se evapora a temperaturas que por lo general oscilan entre -10 °C y -45 °C, estando a baja presión. 
            p Este parámetro se controla con el fin de que el fluido se evapore a una temperatura menor que la del objeto o producto que se desea enfriar. El objeto se enfría por acción indirecta del aire enfriado. En el evaporador, el refrigerante se encuentra a baja temperatura, enfriando el espacio dentro del refrigerador, absorbiendo el calor de los productos contenidos en él. Luego, el vapor refrigerante se comprime, incrementando su presión y temperatura (mayor que la temperatura del aire ambiente o el fluido que retira el calor del refrigerante). Posteriormente se convierte en líquido al ceder calor y reducir su temperatura, calentando el aire ambiente o agua. Finalmente, se dirige de nuevo a la válvula de expansión, repitiendo el ciclo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-06.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El mecanismo de funcionamiento de las instalaciones de refrigeración, es similar al mecanismo de los aires acondicionados. El ciclo termodinámico se realiza con base en los mismos componentes principales: el compresor, el evaporador, el condensador, la válvula de expansión. No obstante, se diferencian en aspectos relacionados con la instalación de los frigoríficos y los equipos de acondicionamiento. El funcionamiento de cada parte principal puede verse en el apartado de climatización. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-07.png', alt='')

 
    Separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Refrigerantes

    p(data-aos="fade-right") Observe el siguiente recurso con los principales refrigerantes:

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-08.png', alt='Refrigerantes')
          .col-md-6.mb-4.mb-md-0
            .h4 Refrigerantes
            p Se denomina refrigerante al fluido que se utiliza para reducir o conservar la temperatura de un espacio por debajo de la temperatura del ambiente a su alrededor. A partir de cambios en la presión y temperatura, se origina un cambio de estado del refrigerante, modificando su fase de líquido a gas a baja temperatura y viceversa, y se logra extraer el calor en un espacio para disiparse en otro. En otras palabras, la función del refrigerante es la de un agente de transferencia de calor o de enfriamiento. 

        .row.justify-content-center.align-items-center
          .col-md-6
            figure(style="padding-left:5rem; padding-right:5rem;")
              img(src='@/assets/curso/temas/tema4/tema4-09.png', alt='Los refrigerantes')
          .col-md-6.mb-4.mb-md-0
            .h4 Los refrigerantes
            p Pueden ser orgánicos e inorgánicos. Hacen parte de los orgánicos el agua y el amoníaco. El amoníaco ha sido muy usado en aplicaciones industriales, con la desventaja de ser tóxico. Por su parte, los inorgánicos, son principalmente refrigerantes fluorados, como los clorofluorocarbonos (CFC), hidroclorofluorocarbonos (HCFC), fluorocarbonos HFC, entre otros.

        .row.justify-content-center.align-items-center
          .col-md-6
            figure(style="padding-left:5rem; padding-right:5rem;")
              img(src='@/assets/curso/temas/tema4/tema4-10.png', alt='Clorofluorocarbono')
          .col-md-6.mb-4.mb-md-0
            .h4 Clorofluorocarbono
            p CFC (flúor, carbono, cloro): no contienen hidrógeno. Ejemplos: R-11, R-12, R-115. Son perjudiciales para la capa de ozono y su producción está prohibida desde 1995.

        .row.justify-content-center.align-items-center
          .col-md-6
            figure(style="padding-left:5rem; padding-right:5rem;")
              img(src='@/assets/curso/temas/tema4/tema4-11.png', alt='Hidroclorofluorocarbonos')
          .col-md-6.mb-4.mb-md-0
            .h4 Hidroclorofluorocarbonos
            p HCFC (hidrógeno, carbono, flúor, cloro): incluyen átomos de hidrógeno en su molécula, tienen bajo impacto negativo para la capa de ozono. Ejemplo: (R-22). 
            
        .row.justify-content-center.align-items-center
          .col-md-6
            figure(style="padding-left:5rem; padding-right:5rem;")
              img(src='@/assets/curso/temas/tema4/tema4-12.png', alt='Fluorocarbonos')
          .col-md-6.mb-4.mb-md-0
            .h4 Fluorocarbonos
            p HFC (hidrógeno, flúor, carbono): sin cloro ni hidrógeno. Ejemplos: R-134a, 141b.

    .row.justify-content-center.align-items-center.mt-5
      .col-md-11.col-lg-10.mb-4.mb-md-0
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 15. </b> <i>Refrigerantes comúnmente utilizados en equipos de aire acondicionado, refrigeración y bombas de calor</i>
        figure.mt-2(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema4/tema4-13.svg', alt='Refrigerantes comúnmente utilizados en equipos de aire acondicionado')
          figcaption Nota. Tomada de https://www.caloryfrio.com/refrigeracion-frio/los-gases-refrigerantes.html 

    .row.justify-content-center.align-items-center.mt-5.mb-4 
      .col-12(data-aos="fade-down")
        .cajon-b.color-acento-botones.p-4
          p.mb-0 Los refrigerantes más usados han sido R-11, R-12, R-22, R-134a, R-502. Algunos de estos últimos causaban un gran impacto ambiental por ser nocivos para la capa de ozono, por lo que fueron prohibidos hace varios años. El R-22 está prohibido en muchos países desde 2020 y en Colombia su uso se eliminará en 2040. En Colombia algunos de los refrigerantes más usados son el R-22 y el R-141b. Para elegir el refrigerante es conveniente verificar que no esté prohibido por las normas ambientales. 

    .row.justify-content-center.align-items-center.mt-4 
      .col-12(data-aos="fade-down")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Además, hay que tener en cuenta que la presión dentro del evaporador debe ser mayor a una atmósfera (1 atm) y que la temperatura de ebullición a la presión del evaporador debe ser de entre 5 y 10 grados menos que la temperatura a la que se mantendrá el refrigerador (Cengel, Termodinámica, 2014). Por ejemplo, si la presión en el evaporador es de 1 atm y se quiere que el espacio refrigerado esté a -5 °C, el refrigerante debe tener una temperatura de ebullición de entre -10 y -15 °C a la presión del evaporador.
      
    Separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Coeficiente de desempeño COP

    p(data-aos="fade-right") El coeficiente de desempeño de los refrigeradores, o COP, es una medida que indica qué tanto enfría el aparato frente a la potencia que consume, es decir, es la relación entre la carga de refrigeración y la potencia consumida por el compresor, como se expresa en la siguiente ecuación (Cengel, 2014):

    .row.justify-content-center.align-items-center.mt-4.mb-4
      .col-md-10.col-12(data-aos="fade-down")(style="background-color:#E8F0F8")
        .cajon.color--gris.p-4.mb-4
          figure(style="padding-left:5rem; padding-right:5rem;")
            img(src='@/assets/curso/temas/tema4/tema4-14.svg', alt='')
          p.mt-3 Por lo que la carga de refrigeración es el efecto de refrigeración que se debe lograr para el ambiente a refrigerar y los productos en él. 
          p.mb-0 QL es la carga de refrigeración, que se calcula multiplicando el flujo másico de refrigerante (m) por la diferencia entre la entalpía a la salida del evaporador (h1) y la entalpía a la entrada del evaporador (h4). El COP sirve para comparar distintas opciones de compra. En muchas ocasiones los valores de carga de refrigeración y de potencia del compresor vienen dados en las etiquetas de los frigoríficos, con lo que se puede hacer el cálculo para comparar. También es un indicador de utilidad en los centros de investigación y desarrollo para evaluar cambios en refrigerantes o en componentes.

    Separador
    #t_4_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.3 Medidas para mejorar el desempeño energético e impacto ambiental de sistemas de refrigeración
      
    p(data-aos="fade-right") A partir de la siguiente didáctica, se descubrirán las medidas que le permiten mejorar el desempeño energético.

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Existen medidas de eficiencia energética que se pueden implementar en los sistemas de refrigeración, las cuales pueden estar orientadas ya sea a los aspectos operativos o a los de mantenimiento. A continuación, se presentan algunas de las medidas de eficiencia energética en estos sistemas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-15.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            ul.lista-ul
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Reemplazar tecnología con refrigerantes HFC por CO2: los sistemas de refrigeración se pueden sustituir por tecnología moderna que utiliza CO2, siendo más amigable con la capa de ozono.
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Se puede reducir el consumo eléctrico usando refrigeración con sistemas automáticos de control de presión. Estos equipos varían la presión de salida del compresor optimizándola para ajustarla a las necesidades de operación. También pueden apagar el compresor en los largos periodos de tiempo en que no se abren los refrigeradores, por lo que conservan la temperatura interior por más tiempo. 
          .col-md-5
            figure(style="padding-left:5rem; padding-right:5rem;")
              img(src='@/assets/curso/temas/tema4/tema4-16.png', alt='')
          
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Es importante que el aislamiento térmico de los equipos esté en buen estado, ya que esto mantiene los niveles de consumo bajos.
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | En los sistemas de refrigeración industrial en los que se requiere simultáneamente frío para unos procesos y calor para otros, se puede recuperar calor de los condensadores. De esta manera, se mejora la operación del frigorífico, ya que la temperatura de salida del compresor será más baja.
          .col-md-6
            figure(style="padding-left:5rem; padding-right:5rem;")
              img(src='@/assets/curso/temas/tema4/tema4-17.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-18.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Para reducir el impacto ambiental debido al consumo de energía de los refrigeradores y al impacto de los refrigerantes en la capa de ozono se pueden tomar medidas como seleccionar equipos que usen refrigerantes que no dañen la capa de ozono, como el R-141b, R-134a o CO2, revisar periódicamente los equipos para determinar el nivel de refrigerante y, en los casos en los que el condensador sea un intercambiador compacto, limpiar periódicamente las aletas y espacios que puedan estar obstruidos por el polvo para mantener una buena transferencia de calor con el ambiente. 

        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-19.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Cabe aclarar que gran parte de las neveras domésticas tienen condensador tipo rejilla o distribuidor al interior de las paredes laterales, mientras muchos equipos de uso comercial tienen el condensador como un equipo compacto con un ventilador para mejorar el intercambio de calor.



</template>

<script>
export default {
  name: 'Tema4',
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
