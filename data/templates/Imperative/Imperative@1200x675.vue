<style scoped>
  @font-face {
    font-family: 'Jost-700';
    src: url('../../fonts/Jost/Jost-600-Semi.ttf');
  }
  @font-face {
    font-family: 'Jost-300';
    src: url('../../fonts/Jost/Jost-300-Light.ttf');
  }
  svg {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 675" version="1.1">

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1200" height="675" />
      </clipPath>
    </defs>

    <g class="main" clip-path="url(#bounding)">

      <defs>
        <filter id="dropshadow" height="160%" width="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
          <feOffset dx="0" dy="0" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.9"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <rect x="0" y="0" width="1200" height="1200" style="fill: #eeeeee;" />

      <image v-scaleimage="pos" v-bind:xlink:href="image" x="0" y="0" height="675" width="1200" />

      <g style="transform-origin: 600px 290px; transform: rotate(-4deg);">
        <MultiLine v-dynamic data-dynamic-origin="none" data-dynamic-width="1120" data-dynamic-height="350" style="transform-origin: 40px 50px;" x="40" y="50" relative="0 0" padding="10 20" v-bind:text="text" lineheight="1.05" background="#1DA64A" css="font-size: 150px; font-family: 'Jost'; font-weight: 600; fill: #fff;"></MultiLine>
      </g>

      <path style="fill: #1DA64A;" d="M 0,450 l 1200,150 L 1200,675 0,675" />

      <path style="fill: #1B7340;" d="M 0,435 l 1200,162.5 0,12.5 L 0,465" />

      <g>
        <MultiLine v-dynamic data-dynamic-origin="none" data-dynamic-width="700" data-dynamic-height="160" style="transform-origin: 30px 645px;" x="30" y="670" relative="0 1" padding="0" v-bind:text="description" lineheight="1.1" background="none" css="font-size: 80px; font-family: 'Jost'; font-weight: 400; fill: #fff;"></MultiLine>
      </g>

      <image v-bind:xlink:href="typeof logo == 'object' ? logo.data : logo" x="1000" y="475" height="300" width="300" filter="url(#dropshadow)" />


    </g>


  </svg>


</template>

<script type="text/javascript">
  import animejs from 'animejs';

  import { VueDirectives, VueComponents, VueHelpers } from 'toolpic';


  export default {
    name: "date-2",
    data() {
      return {
        image: 'https://dev.maurice-conrad.eu/toolpic-cdn/shared_resources/bg-Date2.jpg',
        pos: 0,
        text: ["BUNDESTAG", "UMZINGELN!"],
        description: ["28.06 12:00 Uhr", "INVALIDENPARK"],
        logo: "https://dev.maurice-conrad.eu/toolpic-cdn/shared_resources/logo.svg"
      }
    },
    methods: Object.assign({}, VueHelpers),
    directives: Object.assign({}, VueDirectives),
    components: Object.assign({}, VueComponents)
  };
  export const fields = [];
  export const type ="image";
  export const format = "jpg";
  export const smartActions = [];
  export const alias = "Twitter";
  export const width = 1200;
  export const height = 675;

</script>
