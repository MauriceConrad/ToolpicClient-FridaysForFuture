<style scoped>
  @font-face {
    font-family: 'Jost-900';
    src: url('../../fonts/Jost/Jost-900-Black.ttf');
  }
  @font-face {
    font-family: 'Jost-600';
    src: url('../../fonts/Jost/Jost-600-Semi.ttf');
  }
  @font-face {
    font-family: 'Jost-300';
    src: url('../../fonts/Jost/Jost-300-Light.ttf');
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 1200" version="1.1">

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1200" height="1200" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">

      <image v-scaleimage="pos" v-bind:xlink:href="image[0]" x="0" y="0" height="1200" width="1200" />
      <rect x="0" y="0" width="100%" height="100%" style="fill: #000; opacity: 0.3;" v-if="darken" />


      <g style="transform-origin: 600px 100px;" v-dynamic data-dynamic-origin="none" data-dynamic-width="1000" data-dynamic-height="190">
        <text x="600" y="100" style="alignment-baseline: hanging; text-anchor: middle; font-size: 130px; font-family: 'Jost-300'; fill: #fff;">
          {{ hashtag }}
        </text>
      </g>


      <text x="600" y="450" style="alignment-baseline: hanging; text-anchor: middle; font-size: 200px; font-family: 'Jost-600'; fill: #fff;">
        DANKE AN
      </text>


      <defs>
        <mask id="count-mask" x="0" y="0" width="100" height="100">
          <text x="600" y="700" style="alignment-baseline: hanging; text-anchor: middle; font-size: 220px; font-family: 'Jost-900'; fill: #fff;">
            {{ count }}
          </text>
        </mask>
      </defs>

      <g v-bind:style="{ transform: 'scale(' + (1050 / (textInfo(count,  { fontFamily: 'Jost-900', fontSize: '220px'}).width + 100)) + ')', 'transform-origin': '600px 630px' }">
        <rect v-bind:x="600 - (textInfo(count,  { fontFamily: 'Jost-900', fontSize: '220px'}).width + 100) / 2" v-bind:y="700 - 50" v-bind:width="textInfo(count,  { fontFamily: 'Jost-900', fontSize: '220px'}).width + 100" v-bind:height="textInfo(count,  { fontFamily: 'Jost-900', fontSize: '220px'}).height - 30" style="fill: #fff;" />

        <g mask="url(#count-mask)" >
          <image v-scaleimage="pos" v-bind:xlink:href="image[0]" x="0" y="0" height="1200" width="1200" />
          <rect x="0" y="0" width="100%" height="100%" style="fill: #000; opacity: 0.3;" v-if="darken" />
        </g>
      </g>

      <image v-bind:xlink:href="logo" x="25" y="1025" height="150" width="150" filter="url(#dropshadow)" />


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


    </g>


  </svg>

</template>

<script>
  import { SuperTemplate } from 'toolpic';

  export default {
    name: "Thanks",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/Thanks/bg.jpg'],
        pos: 0,
        darken: true,
        hashtag: '#ALLEFUERSKLIMA',
        count: 10000,
        logo: 'https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg'
      }
    }
  }

  import { Text, ImageSelect, Toggle, Slider } from 'fields';

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
      key: "image",
      description: "Background Image",
      component: ImageSelect,
      props: {
        width: 1200,
        height: 1200,
        convertToJPG: true,
        max: 1,
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
          },/*
          {
            type: "Pexels",
            label: "Pexels"
          }*/
        ]
      }
    },
    {
      key: "darken",
      description: null,
      component: Toggle,
      props: {
        description: "Verdunkeln",
        styleClass: 'mt-android'
      }
    },
    {
      key: "hashtag",
      description: "Hashtag",
      component: Text,
      props: {}
    },
    {
      key: "count",
      description: "Count",
      component: Text,
      props: {}
    }
  ];
  export const smartActions = [];
  export const width = 1200;
  export const height = 1200;
  export const type = "image";
  export const format = "jpg";
  export const alias = "Instagram";
</script>
