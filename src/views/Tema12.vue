<template lang="pug">
.curso-main-container.pb-3.tema12
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 12
      h1 Mantenimiento Centrado en la Eficiencia Energética - MCEE

    p(data-aos="fade-right") En el siguiente recurso se indica cómo realizar un mantenimiento adecuado para mantener la eficiencia energética.

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderE(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 El Mantenimiento Centrado en la Eficiencia Energética (MCEE)
            p Es una premisa de mantenimiento que tiene como objetivos mantener y mejorar la eficiencia energética de los equipos, incluyendo dichos objetivos en el plan de mantenimiento. El propósito del MCEE es racionalizar los costos operativos asociados al consumo de energía y las emisiones de GEI.
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 El MCEE… 
            p No es una filosofía de mantenimiento desarrollada para reemplazar otras, sino que complementa las filosofías de mantenimiento centradas en la confiabilidad, el mantenimiento preventivo, predictivo y correctivo.
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-04.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 El mantenimiento centrado en la confiabilidad 
            p Busca garantizar la continuidad de la operación y la disponibilidad de los equipos, sin dar mayor importancia a la eficiencia energética de los equipos. Por su parte, el MCEE se diferencia en que se planifican las tareas de mantenimiento para prevenir y corregir caídas en la eficiencia energética. Por lo tanto, en el MCEE una disminución considerable en la eficiencia energética es tratada como un fallo que debe ser corregido. Una de las metodologías más extendidas en Colombia para implementar el MCEE es la planteada en García, Campos y Vanegas (2018). 
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-05.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Y consiste en:
            p.mb-0 1. Identificar los Usos Significativos de Energía (USE), que son los equipos con consumo energético más significativo y que, por tanto, representan las oportunidades de mejora que se deben priorizar.
            p.mb-0 2. Determinar los subsistemas que intervienen en la operación del equipo.
            p 3. Definir las funciones de los equipos USE, su funcionamiento, las variables de interés y sus valores en operación normal.
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-06.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Sigue con…
            p.mb-0 4. Hacer un análisis de falla energética, es decir, identificar cuándo hay una deficiencia en el funcionamiento del equipo que afecta la eficiencia energética y la operación normal establecida por el fabricante. Las fallas se manifiestan cuando hay un consumo de energía atípico, superior al promedio en operación normal.
            p 5. Diagnosticar las causas y efectos de la falla. Esto es, identificar cuáles son los elementos o subsistemas que están deteriorando la eficiencia energética y porqué están funcionando por fuera de la operación deseada. Este paso es necesario para definir cuáles son las acciones correctivas que se deben tomar.
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-07.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Busca también… 
            p.mb-0 6. Seleccionar los componentes o subsistemas que más influyen en el consumo de energía del equipo y que son importantes para la operación. Estos son los que serán intervenidos para mantener la eficiencia o corregirla cuando haya una falla. Los componentes y subsistemas seleccionados deben ser monitoreados para evaluar la efectividad de los mantenimientos preventivos o correctivos.
            p.mb-0 7. Recolectar y analizar los datos más relevantes para la evaluación de la eficiencia energética del equipo.
            p 8. Diseñar las tareas de mantenimiento para la corrección, prevención o predicción de las fallas energéticas. Se deben definir las actividades que se deben realizar, estás comprenden desde el monitoreo hasta la reparación de piezas o subsistemas que están causando falla.
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-08.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Y, por último, 
            p.mb-0 9. Se debe implementar el programa definido en el paso anterior creando los manuales, herramientas y capacitaciones necesarios para la mejora en la eficiencia energética en los equipos.
            p 10. Evaluar el comportamiento de la eficiencia energética con la implementación del programa de MCEE para establecer si se están mejorando, empeorando o manteniendo iguales los niveles de consumo de energía en operación. Los resultados de las evaluaciones permiten tomar decisiones sobre el programa de MCEE y estimar si hay un ahorro económico lo suficientemente significativo para hacer viable la continuación del plan de mantenimiento. 
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-09.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Para cuantificar el desempeño del equipo frente al consumo de energía se puede hacer uso de la siguiente fórmula, llamada Indicador de base 100.
            div.text-center.py-2
              math.text-center
                mfrac
                  mi.italic Indicador base 100 =&nbsp;
                mfrac
                  msup
                    mi.italic Consumo energético teórico [kWh]
                  msup
                    mi.italic Consumo energético real [kWh]
            p Donde el consumo energético teórico representa el consumo de energía de referencia, indicado en los manuales de los equipos o en las mediciones realizadas bajo operación óptima. El consumo energético real es el consumo de energía medido luego de la implementación del plan de mantenimiento MCEE.
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-10.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Cuando el indicador de base 100 es mayor que 1,
            p Quiere decir que hubo una reducción en el consumo de energía, por lo que el plan de mantenimiento ha tenido un impacto positivo para la eficiencia, mientras que un valor inferior a 1 indica un aumento en el consumo y, por ende, una reducción de la eficiencia. Las mediciones y el cálculo del indicador se deben realizar periódicamente para tener suficientes datos para evaluar el desempeño del MCEE.
          .col-md-6
            figure.mt-2
              img(src='@/assets/curso/temas/tema12/tema12-11.png', alt='')




    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-md-10.col-12
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 49. </b> <i>Esquema de la metodología MCEE</i>
        figure.mt-2(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema12/tema12-01.png', alt='')
          figcaption Nota. Tomada de Revista Espacios s.f. 

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12(data-aos="fade-down")
        .cajon.color-acento-contenido.p-4.mb-4
          p Dado que en esta filosofía de mantenimiento la ineficiencia energética se trata como una falla, toda medida en pro de la mejora en la eficiencia es una forma de superar la falla. Por lo que los planes de mantenimiento deben ser diseñados de forma que se monitoreen y ejecuten tareas orientadas a disminuir el consumo de energía asociado a la operación. 
          p Como ejemplo, una planta en la que se use una caldera que no cuenta con economizador de calor, debe procurar corregir esa ausencia implementando un recuperador de calor para aumentar la eficiencia e incluirlo en el programa de mantenimiento para el monitoreo y corrección de la operación de todo el conjunto del equipo. Si en una planta se trabaja con equipos que producen altas vibraciones, el monitoreo y la reducción de vibraciones es una medida correctiva para mejorar la eficiencia.

          
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6.col-lg-7(data-aos="fade-right")
        p Para implementar de forma exitosa la metodología para el MCEE se deben tener claros los objetivos de eficiencia en los equipos que tienen oportunidad de mejora y definir los parámetros que permiten la evaluación del desempeño de estos. Algunas de las variables de interés son difíciles de medir, por lo que se deben buscar medios que lo permitan. Además, es necesario hacer uso de la información disponible de los equipos, como manuales y recomendaciones técnicas de los fabricantes, para tener una referencia de la estabilidad, mejora o retroceso en la eficiencia energética. Es recomendable implementar herramientas tecnológicas como software para el monitoreo del consumo energético y de las demás variables de interés, el control de las tareas de mantenimiento y la programación de tareas futuras. 
        p Con el avance en las ciencias de datos y el #[i Big data] se pueden implementar algoritmos para la extracción de información que puede resultar en mejoras en el mantenimiento preventivo. Las medidas técnicas deben estar acompañadas de programas de pedagogía organizacional en torno a la importancia de la reducción del consumo de energía y de recursos, para que un mayor número de colaboradores participen identificando las oportunidades de ahorro energético y diseñen planes correctivos.
      .col-12.col-md-6.col-lg-5
        figure.mt-2(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema12/tema12-02.png', alt='')





</template>

<script>
export default {
  name: 'Tema12',
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
