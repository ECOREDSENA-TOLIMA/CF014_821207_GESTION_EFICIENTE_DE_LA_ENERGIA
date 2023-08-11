<template lang="pug">
.curso-main-container.pb-3.tema9
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 9
      h1 Hornos industriales

    p(data-aos="fade-right") Conozca algunos aspectos importantes de los hornos industriales.

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12.col-md-6
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema9/tema9-01.svg', alt='Conozca algunos aspectos importantes de los hornos industriales')
        
          div(x="9.8%" y="9.5%" numero="1" tooltip="Aspecto 1")
            p Los hornos son dispositivos que generan energía térmica en forma de calor al interior de un espacio cerrado. Están diseñados para calentar objetos a alta temperatura. Generalmente los hornos industriales funcionan quemando un combustible fósil, también existen algunos que funcionan con energía eléctrica, aunque estos últimos no son tan usados debido a su alto costo de operación. 

          div(x="90.2%" y="9.5%" numero="2" tooltip="Aspecto 2")
            p El combustible usado en cada aplicación depende de las características de los productos, así, un horno para producción de alimentos utiliza combustibles gaseosos, como el gas natural o GLP, que permite una combustión limpia, sin inquemados que puedan dañar los alimentos. Mientras que en industrias como la producción de ladrillos, cemento, cal, entre otros, es posible usar combustibles pesados, como el carbón pulverizado.

          div(x="90.2%" y="90.5%" numero="3" tooltip="Aspecto 3")
            p Los hornos se encuentran incorporados en los procesos de diferentes industrias y sectores, por ejemplo, el sector de alimentos, tomando parte fundamental en la producción de galletas, tostadas, pan, entre otros. En industrias productoras de materiales de construcción se usan para fabricar cerámicos, ladrillos, cemento, etc. En el sector siderúrgico y metalmecánico sirven para la producción de acero y otros metales, además de usarse para realizar tratamientos térmicos a las aleaciones metálicas para mejorar sus propiedades mecánicas. 

          div(x="9.8%" y="90.5%" numero="4" tooltip="Aspecto 4")
            p La siguiente tabla muestra algunos sectores que emplean hornos en sus procesos, los tipos y para qué se usa.
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0.text-small <b>Tabla 4. </b> <i>Sectores industriales que usan hornos en sus procesos</i>
            figure.mt-2(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema9/tema9-02.svg', alt='Sectores industriales que usan hornos en sus procesos', @click="hacerVisible(13)")
              figcaption(style="color:#000") Nota. Tomada del Banco de Desarrollo de América Latina. (s. f).

    p(data-aos="fade-right") Existen diferentes tipos de hornos, diseñados para múltiples usos, según las necesidades de las empresas que los utilizan. Son tipo túnel, giratorio, altos hornos, de arco eléctrico y de fusión, de los cuales se describen resumidamente algunos a continuación. 


    Separador
    #t_9_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.1 Hornos túnel

    p.mb-5(data-aos="fade-right") Son hornos largos dotados de rieles o cintas transportadoras internas, en las que los productos se calientan mientras recorren el interior del túnel. Permiten tener un perfil de temperatura adecuado para lograr las características requeridas de los productos finales, es decir, no tienen una temperatura uniforme a lo largo del recorrido, sino que varía según la zona del horno. 

    .row.justify-content-center.align-items-center.mt-0.mb-4
      .col-md-10.col-12.pb-4(style="background-color: #D5CFE0")
        .row.justify-content-center.align-items-center
          .col-12.pt-4.px-4(data-aos="fade-right")
            p También es posible variar la velocidad de recorrido en el interior. Son usados para grandes volúmenes de producción, principalmente en la producción de alimentos, ladrillos y cerámicos para construcción, vajillas o aisladores eléctricos.
          .col-md-10.col-lg-9.col-12.p-2(data-aos="fade-right") 
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 36. </b> <i>Horno túnel</i>
          .col-md-10.col-lg-9.col-12 
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema9/tema9-03.png', alt='')
              figcaption Nota. Tomada German Bakery Technology (2021). 

    Separador
    #t_9_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.2 Hornos rotatorios

    p(data-aos="fade-right") Son hornos en forma de cilindro, de gran longitud, diseñados para girar mientras calientan el producto que reside en su interior. Se puede variar la velocidad de giro para graduar el tiempo que permanecen los productos en su interior, y operan en un rango variado de temperaturas, según la actividad económica en la que se usan. 
    p(data-aos="fade-right") Son de amplio uso en la industria de cal y cemento, en la que se usan para producir #[i Clinker], operando a una temperatura superior a 1000°C. También son usados para secar productos, en ese caso la temperatura de operación no tiene que ser muy alta, alrededor de 100°C. 

    .row.justify-content-center.align-items-center.mt-0.mb-4
      .col-md-10.col-12.pb-4(style="background-color: #D5CFE0")
        .row.justify-content-center.align-items-center
          .col-12.pt-4.px-4(data-aos="fade-right")
            p En el siguiente enlace se puede hacer un recorrido virtual por un horno de producción de #[i Clinker] para cemento <a href="https://www.asseguratte.es/asseguratte360/videos/web/index.htm" target="_blank">https://www.asseguratte.es/asseguratte360/videos/web/index.htm</a>
          .col-md-10.col-lg-9.col-12.p-2(data-aos="fade-right") 
            .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
              p.titulo.pb-0.mb-0 <b>Figura 37. </b> <i>Proceso de producción de Clinker</i>
          .col-md-10.col-lg-9.col-12 
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema9/tema9-04.png', alt='')
              figcaption Nota. En rojo se observa el horno rotatorio usado en el proceso de producción de Clinker para la industria del cemento. Tomada de Sensotec (2020). http://www.sensotec.com.ar/industrias.php

    Separador
    #t_9_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.3 Altos hornos

    p(data-aos="fade-right") Son hornos usados especialmente para el procesamiento de metales ricos en hierro. Son llamados así por su gran altura, que alcanza los 30 metros en muchos casos. Su diámetro puede ser de hasta 9 metros. En su interior se calienta una mezcla de mineral de hierro con coque y fundente, para producir Arrabio, un precursor en la producción del hierro. 

    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/tema1-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Funcionamiento Alto Horno
              p.text-small En la parte baja del alto horno la temperatura puede superar los 1.800°C. En el siguiente video se puede ver un alto horno y su funcionamiento.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=WerjnkrTqI0" target="_blank")
                span Abrir
                i.fas.fa-link

    Separador
    #t_9_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.4 Hornos de arco eléctrico 

    p(data-aos="fade-right") Estos dispositivos utilizan electrodos entre los que hay una gran tensión que genera un arco eléctrico a alta temperatura, haciendo fundir los metales o minerales que se encuentran en su interior. Se usan para producir aleaciones metálicas y fundir chatarra de la cual se hacen nuevas aleaciones. Pueden ser de uno, dos y hasta tres arcos, siendo estos últimos los de corriente alterna. 
    p(data-aos="fade-right") El arco eléctrico puede calentar los metales por radiación de calor, o estar directamente entre el metal a fundir, fundiéndolo por la resistencia de los materiales al paso de la corriente eléctrica. La temperatura en su interior puede superar los 3.500 °C, que es superior al punto de fusión de casi cualquier metal. 

    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/tema1-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Horno De Arco Electrico - Herramientas
              p.text-small Su principal desventaja es que consume cantidades enormes de energía eléctrica, por lo que su operación es muy costosa. En este video se puede ver el funcionamiento de un horno de arco eléctrico en la industria del acero.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=0bKbBJUR7hk" target="_blank")
                span Abrir
                i.fas.fa-link

    Separador
    #t_9_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.5 Eficiencia energética

    p(data-aos="fade-right") El siguiente recurso muestra la eficiencia energética en el uso adecuado de los hornos.

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Eficiencia energética
            p Debido a que los tipos de hornos son muy variados por la gran cantidad de distintas aplicaciones que requieren de hornos diseñados y ajustados específicamente para cada aplicación, es muy difícil determinar de forma confiable la eficiencia térmica de los mismos.
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema9/tema9-09.png', alt='Eficiencia energética')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Es importante saber que…
            p Sí es posible evaluar con mayor facilidad y confiabilidad el consumo específico que es la relación entre el combustible, o energía eléctrica consumida, y la cantidad de productos procesados. Por ejemplo, el número de metros cúbicos de gas natural consumido por tonelada de ladrillos producidos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/tema9-05.png', alt='Es importante saber que…')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 El cálculo para analizar y comparar hornos 
            p Se puede hacer dependiendo del tipo de energía usada, si se trata de un horno a gas se puede calcular por metro cúbico, si se usa carbón se puede hacer por kilogramo de carbón consumido o si es un horno eléctrico se puede determinar por kWh. La fórmula es básicamente la siguiente:
            div.text-center
              math.text-center
                mfrac
                  mi.italic Consumo específico =&nbsp;
                mfrac
                  msup
                    mi.italic  Cantidad de combustible o energía consumida
                  msup
                    mi.italic  Cantidad de productos procesados
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/tema9-06.png', alt='El cálculo para analizar y comparar hornos')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Principales medidas de eficiencia energética
            p HCFC (hidrógeno, carbono, flúor, cloro): incluyen átomos de hidrógeno en Se pueden desarrollar en los hornos sobresalen la mejora en la combustión, la recuperación de calor para otros procesos y el mantenimiento del aislamiento térmico. Para mejorar la eficiencia en los hornos de combustión es necesario usar una mezcla óptima de aire/combustible, para evitar inquemados. También se puede mejorar la combustión usando como oxidante aire enriquecido de oxígeno u oxígeno puro, en vez de aire normal, ya que el aire además de oxígeno contiene nitrógeno, que no reacciona y no aporta a la combustión, pero que al calentarse “roba” energía que al final sale del sistema sin haber generado ningún beneficio. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/tema9-07.png', alt='Principales medidas de eficiencia energética')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 El horno debe tener un buen aislamiento térmico
            p Para evitar pérdida de calor, es necesario mantener en buen estado el material refractario del horno, reemplazando el que se dañe. Dependiendo de los procesos que involucra la cadena productiva se pueden implementar sistemas de recuperación de calor o cogeneración, para aprovechar parte del calor residual del proceso de horneado, de esa forma se aumenta la eficiencia térmica, se reduce el consumo de combustible y la emisión de GEI.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema9/tema9-08.png', alt='El horno debe tener un buen aislamiento térmico')



</template>

<script>
export default {
  name: 'Tema9',
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
