<style scoped>
  svg {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 675" version="1.1">
    <g>
      <g v-for="item in new GalleryMatrix(gallery.length, 9 / 16, 1, options[0], Number(options[1]))">
        <defs>
          <clipPath v-bind:id="'gallery-mask-' + item.__index">
            <rect v-bind:x="item.x * 1200" v-bind:y="item.y * 675" v-bind:width="item.width * 1200" v-bind:height="item.height * 675" style="fill: #000;"/>
          </clipPath>
        </defs>
        <g v-bind:clip-path="'url(#gallery-mask-' + item.__index + ')'">
          <image v-scaleimage="pos" v-bind:xlink:href="gallery[item.__index]" v-bind:x="item.x * 1200" v-bind:y="item.y * 675" v-bind:width="item.width * 1200" v-bind:height="item.height * 675"/>
        </g>
      </g>
    </g>

    <defs>
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="7"/>
        <feOffset dx="0" dy="10" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.6"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <image v-bind:xlink:href="logo" x="1025" y="1025" height="150" width="150" filter="url(#dropshadow)" />
  </svg>

</template>

<script type="text/javascript">
  import { VueDirectives, VueComponents, VueHelpers } from 'toolpic';


  export default {
    name: "date-2",
    data() {
      return {
        gallery: [
          "data/templates/gallery/wir.jpg",
          "data/templates/gallery/hoeren.jpg",
          "data/templates/gallery/alle.jpg",
          "data/templates/gallery/auf.jpg",
          "data/templates/gallery/die.jpg",
          "data/templates/gallery/wissenschaft.jpg",
          "data/templates/gallery/und.jpg",
          "data/templates/gallery/bleiben.jpg",
          "data/templates/gallery/zuhause.jpg"

        ],
        pos: 0,
        options: [true, false],
        logo: "data/resources/logo.svg"
      }
    },
    methods: Object.assign({

    }, VueHelpers),
    directives: Object.assign({}, VueDirectives),
    components: Object.assign({}, VueComponents)
  };
  export const fields = [

  ];
  export const smartActions = [

  ];
  export const type ="image";
  export const format = "jpg";
  export const alias = "Twitter";
  export const width = 1200;
  export const height = 1200;

</script>
