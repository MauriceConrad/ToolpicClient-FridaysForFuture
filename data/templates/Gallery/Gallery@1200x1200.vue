<style scoped>
  svg {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 1200" version="1.1">

    <g>
      <g v-for="item in new GalleryMatrix(gallery.length, 1, 1, asymmetricDivisor, Number(alternateSymmetry))">
        <defs>
          <clipPath v-bind:id="'gallery-mask-' + item.__index">
            <rect v-bind:x="item.x * 1200" v-bind:y="item.y * 1200" v-bind:width="item.width * 1200" v-bind:height="item.height * 1200" style="fill: #000;"/>
          </clipPath>
        </defs>
        <g v-bind:clip-path="'url(#gallery-mask-' + item.__index + ')'">
          <image v-scaleimage="pos" v-bind:xlink:href="gallery[item.__index]" v-bind:x="item.x * 1200" v-bind:y="item.y * 1200" v-bind:width="item.width * 1200" v-bind:height="item.height * 1200"/>
        </g>
      </g>
    </g>


    <defs>
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="7"/> <!-- stdDeviation is how much to blur -->
        <feOffset dx="0" dy="10" result="offsetblur"/> <!-- how much to offset -->
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.6"/> <!-- slope is the opacity of the shadow -->
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/> <!-- this contains the offset blurred image -->
          <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
        </feMerge>
      </filter>
    </defs>

    <image v-bind:xlink:href="logo" x="1025" y="1025" height="150" width="150" filter="url(#dropshadow)" />
  </svg>

</template>

<script type="text/javascript">
  import { SuperTemplate } from 'toolpic';


  export default {
    name: "date-2",
    extends: SuperTemplate,
    data() {
      return {
        gallery: [
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/wir.jpg",
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/hoeren.jpg",
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/alle.jpg",
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/auf.jpg",
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/die.jpg",
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/wissenschaft.jpg",
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/und.jpg",
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/bleiben.jpg",
          "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/zuhause.jpg"
        ],
        pos: 0,
        asymmetricDivisor: true,
        alternateSymmetry: false,
        logo: 'https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg'
      }
    },
    methods: {}
  };

  import { Text, Textarea, Select, ImageSelect, Toggle, Slider } from 'fields';

  export const fields = [
    {
      key: "pos",
      description: "Image Position",
      component: Slider,
      props: {
        min: -1,
        max: 1,
        step: 0.01
      }
    },
    {
      key: "gallery",
      description: "Images",
      component: ImageSelect,
      props: {
        width: 1200,
        height: 1200,
        convertToJPG: true,
        max: 20,
        sources: [
          {
            type: "FileUpload",
            label: "Upload"
          },
          {
            type: "ResourceSpace",
            label: "FFF",
            options: {
              host: "bilder.fffutu.re"
            }
          },
          {
            type: "Pixabay",
            label: "Pixabay"
          }
        ]
      }
    },
    {
      key: "asymmetricDivisor",
      description: null,
      component: Toggle,
      props: {
        description: "Asymmetrisches Divisorverfahren",
        styleClass: 'mt-android'
      }
    },
    {
      key: "alternateSymmetry",
      description: null,
      component: Toggle,
      props: {
        description: "Alternative Symmetrie",
        styleClass: 'mt-android'
      }
    }
  ];
  export const smartActions = [
    {
      name: "Asymmetrisches Divisorverfahren",
      type: "Toggle",
      key: "asymmetricDivisor",
      properties: {
        mode: "normal"
      }
    },
    {
      name: "Alternative Symmetrie",
      type: "Toggle",
      key: "alternateSymmetry",
      properties: {
        mode: "normal"
      }
    }
  ];
  export const type ="image";
  export const format = "jpg";
  export const alias = "Instagram";
  export const width = 1200;
  export const height = 1200;

</script>
