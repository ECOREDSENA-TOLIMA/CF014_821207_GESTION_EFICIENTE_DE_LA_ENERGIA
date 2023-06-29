<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-between.mb-5
      .col-lg-10.col-md-9.col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 En esta unidad se estudiarán aspectos sobre la operación de equipos consumidores de energía. El aprendiz conocerá sobre equipos para generación de energía térmica en forma de calor y frío, nuevas infraestructuras para abastecer de energía a las ciudades como los distritos térmicos, iluminación y automatización para la eficiencia energética. Además, conocerá acerca de los principios de la arquitectura bioclimática. Finalmente, se entenderán algunos métodos para implementar mantenimiento centrado en eficiencia energética.
      .col-lg-2.col-md-3.col-12
        img(src='@/assets/curso/temas/intro-1.svg', alt='Introducción')
   

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
