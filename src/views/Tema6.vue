<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Motores eléctricos

    p(data-aos="fade-right") Se invita a explorar el siguiente recurso y descubrir las diferentes características de los motores eléctricos. 

    .tarjeta.tarjeta--gris.p-4.mb-5.mt-5
      SlyderE(indicadores="derecha")(data-aos="fade-down")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los motores eléctricos son máquinas rotatorias que transforman la energía eléctrica en energía mecánica. Esto es posible gracias a los campos magnéticos presentes en las bobinas que se encuentran en su interior. Los motores eléctricos son dispositivos muy utilizados en casi todas las máquinas modernas, desde grandes vehículos hasta pequeños artefactos domésticos. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/tema6-01.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Dentro de las principales aplicaciones de los motores se pueden encontrar sistemas de bombeo, ascensores, barcos, ventiladores, hornos rotativos, licuadoras, lavadoras, taladros, equipos de compresión de aire, medios de transporte eléctrico, grúas, industria metalmecánica, entre otros. Los motores ofrecen beneficios como: ocupan un menor volumen (tamaño) y facilidad de manejo, alta potencia de trabajo, incrementando la potencia de las máquinas, funcionamiento silencioso, contaminación baja, eficiencias altas, típicamente de 75% y no requieren refrigeración ni ventilación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/tema6-02.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Los motores eléctricos se pueden clasificar como:
            ul.lista-ul
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Motor de corriente continua: poseen igual cantidad de polos en el rotor y el estator. Pueden clasificarse de acuerdo con la conexión de sus devanados como: de excitación en serie, de excitación en paralelo (#[i shunt]), de excitación mixta o compuesta, y sin escobillas. En electrónica se utilizan los motores paso a paso y servomotores.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/tema6-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li(data-aos="fade-down")
                i.fas.fa-atom(style="color: #0F58B9")
                | Motor de corriente alterna: como su nombre lo indica, su funcionamiento es con corriente alterna. Transforman la energía eléctrica y fuerzas de rotación mediante la interacción entre los campos electromagnéticos. Se clasifican en motores síncronos y motores asíncronos (monofásicos o trifásicos). 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/tema6-04.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En términos generales, un motor eléctrico está constituido por una parte fija o estática y una móvil. La primera se denomina estator y la segunda rotor. El funcionamiento de un motor eléctrico se basa en la inducción electromagnética y consiste en el uso de la electricidad para inducir campos magnéticos que se rechazan entre sí. Cuando se conecta el suministro eléctrico, se genera un campo eléctrico giratorio en el estator. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/tema6-05.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La bobina, cableado de cobre que envuelve al rotor, posee un campo magnético opuesto al del estator. Los campos magnéticos son generados mediante imanes permanentes, cuya repulsión causa el movimiento del rotor dentro del estator, y por consiguiente el giro de un eje que transmite la energía mecánica. Una vez alineados los polos se detiene el giro del rotor. Para que el motor siga funcionando, se invierte la polaridad de los imanes de manera constante, función que es asignada a un alternador. Es por ello que casi todos los motores eléctricos trabajan con la llamada corriente alterna. A medida que el tamaño del motor y la corriente que se le aplica aumentan, la energía mecánica que se produce es mayor. A continuación, se describen las partes principales de un motor eléctrico.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/tema6-06.png', alt='')


    .tarjeta.color-secundario.p-3.mb-5.mt-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/tema1-15.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Cómo Funcionan los Motores Eléctricos - Motores de Inducción de CA Trifásicos Motor de CA
              p.text-small Explora más acerca del funcionamiento de los motores eléctricos en el video disponible en el enlace.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=MuNEI1b1F4w" target="_blank")
                span Abrir
                i.fas.fa-link

    .row.justify-content-center.align-items-center.mt-5.mb-4  
      .col-md-8.col-lg-6.col-12
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 26. </b> <i>Partes de un motor eléctrico</i>
        figure.mt-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema6/tema6-07.png', alt='', @click="hacerVisible(7)")
          figcaption Nota. Tomado de Mheducation (s. f.). 


    Separador
    #t_6_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.1 Partes del motor eléctrico

    p(data-aos="fade-right") Las partes principales que constituyen un motor son el estator, el rotor, la bobina, la carcasa y la caja de terminales, descritas a continuación.

    .row.mt-5.justify-content-center
      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-08.png' alt='Estator')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Estator
              p.mb-0 Es el elemento fijo del motor y brinda soporte y permite la rotación a este. Se compone de láminas de acero al silicio las cuales facilitan el flujo del campo magnético a través de él. 

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-09.png' alt='Rotor')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Rotor
              p.mb-0 Es la parte móvil que contiene espiras o devanados metálicos llamados bobinas. Tiene la función principal de transferir la potencia al eje. Está compuesto por láminas de acero y puede ser tipo ranurado, de jaula de ardilla o de polos salientes.

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-10.png' alt='Bobina')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Bobina
              p.mb-0 Son espiras o conjunto de hilos conductores de la energía eléctrica para proporcionar el campo magnético necesario para producir la fuerza que produce el movimiento del motor.

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-11.png' alt='Carcasa')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Carcasa
              p.mb-0 Es la base sobre la que se apoyan el rotor y el estator. Cuenta con rodamientos para facilitar la rotación y se encarga de proteger el conjunto de elementos anteriores.

      .col-lg-6.col-12.align-self-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5(style="height:85%")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-12.png' alt='Caja de conexiones')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Caja de conexiones
              p.mb-0 Llamada también caja de terminales, cuya función es proteger a los conductores que alimentan el motor, manteniéndolos alejados de la operación mecánica de este.

    Separador
    #t_6_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.2 Datos de placa

    p(data-aos="fade-right") Al tratarse de una máquina tan importante y de uso tan frecuente, existe una estandarización general mediante la cual los motores son usados correctamente para determinada aplicación. Los motores eléctricos tienen fijada a su carcasa una placa metálica de acero inoxidable, con la información relevante y específica del dispositivo. Los datos son códigos y números, que permiten comprender las características de funcionamiento del motor y verificar que cumpla con los requerimientos deseados. 


    .row.justify-content-center.align-items-center.mt-5.mb-4  
      .col-md-11.col-lg-10.col-12
        .titulo-sexto.color-acento-botones.mb-0(data-aos="fade-right")
          p.titulo.pb-0.mb-0 <b>Figura 27. </b> <i>Placa de características del motor eléctrico</i>
      .col-md-6.col-lg-6.col-12
        figure.mt-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema6/tema6-13.png', alt='', @click="hacerVisible(13)")
          figcaption Nota. Tomada de Ikastaroak (2020). 
      .col-md-5.col-lg-4.col-12
        figure.mt-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema6/tema6-14.png', alt='', @click="hacerVisible(14)")


    Separador
    #t_6_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.3 Eficiencia del motor eléctrico

    p(data-aos="fade-right") Aunque en muchos casos este dato sea proporcionado por el fabricante, la eficiencia de un motor eléctrico se determina con la división de la potencia que se obtiene del eje del motor (o también conocida como la potencia mecánica), entre la potencia absorbida por el motor.

    .row.justify-content-center.align-items-center.mt-5.mb-4  
      .col-md-10.col-lg-10.col-12.m-3(style="background-color:#E8E8E8")
        .row.justify-content-center.align-items-center.mb-3
          .col-10.col-md-6.col-lg-3.mt-3
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema6/tema6-15.png', alt='')
          .col-12.mt-3
            p.mb-0 Tomando como ejemplo un motor eléctrico trifásico de inducción, se puede decir que la potencia absorbida se puede expresar como: 
          .col-11.col-md-10.col-lg-8.mt-3
            figure.mt-3(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema6/tema6-16.png', alt='')
          .col-12.mt-3
            p Los motores eléctricos, al no emitir directamente gases de efecto invernadero, son una alternativa para reemplazar los motores de combustión interna, como una forma de reducir la polución que afecta la salud de las personas.






    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center.align-items-center
        .col-md-8.col-lg-6.col-10.mb-4.mb-md-0
          figure.mt-2
            img(:src='img_show')


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    modal1: false,
    img_show: require('@/assets/curso/temas/tema6/tema6-07.png'),
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
      if (item == 7)
        this.img_show = require('@/assets/curso/temas/tema6/tema6-07.png')
      else if (item == 13)
        this.img_show = require('@/assets/curso/temas/tema6/tema6-13.png')
      else if (item == 14)
        this.img_show = require('@/assets/curso/temas/tema6/tema6-14.png')
      this.modal1 = true
    },
  },
}
</script>

<style lang="sass"></style>
