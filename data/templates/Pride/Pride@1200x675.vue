<style scoped>
  @font-face {
    font-family: 'Jost-700';
    src: url('../../fonts/Jost/Jost-700-Bold.ttf');
  }
  @font-face {
    font-family: 'Jost-300';
    src: url('../../fonts/Jost/Jost-300-Light.ttf');
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 675" version="1.1">

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1200" height="675" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" v-bind:xlink:href="image[0]" x="0" y="0" height="675" width="1200" />
      <rect x="0" y="0" width="100%" height="100%" style="fill: #000; opacity: 0.4;" v-if="darken"/>


      <g v-dynamic style="transform-origin: 600px 0px;" data-dynamic-width="1100" data-dynamic-height="130">
        <text x="50%" y="90" style="fill: #fff; font-size: 80px; font-family: 'Jost-300'; letter-spacing: 0.2px; text-anchor: middle; text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);">
          {{ subtitle }}
        </text>
      </g>

      <g v-dynamic data-dynamic-origin="none" data-dynamic-width="1100" data-dynamic-height="350" style="transform-origin: 50% 50%;">
        <g v-for="line in text">
          <text x="50%" v-bind:y="(337.5 + text.indexOf(line) * 165) - (text.length * 165) / 2" style="text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7); alignment-baseline: hanging; fill: #fff; font-size: 155px; font-family: 'Jost-700'; text-anchor: middle;">
            {{ line }}
          </text>
        </g>
      </g>

      <g>
        <g v-for="line in links">
          <text x="50" v-bind:y="675 + (links.indexOf(line) * 40) - (links.length * 40)" style="fill: #fff; font-size: 35px; font-family: 'Jost-300'; text-shadow: 0px 0px 8px rgba(0, 0, 0, 1);">
            {{ line }}
          </text>
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

      <image v-bind:xlink:href="logo" x="1035" y="510" height="150" width="150" filter="url(#dropshadow)" />
    </g>

  </svg>


</template>


<script>
  import { SuperTemplate } from 'toolpic';
  export default {
    name: "Pride",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/Pride/bg.jpg'],
        pos: 0,
        darken: false,
        subtitle: 'Fridays For Future Germany',
        text: ['CELEBRATES', 'PRIDE MONTH'],
        links: [
          'www.fridaysforfuture.de',
          '#FridaysForFuture'
        ],
        logo: 'https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg'
      }
    }
  }
  import { Text, Textarea, ImageSelect, Toggle, Slider } from 'fields';

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
      key: "subtitle",
      description: "Subtitle",
      component: Text,
      props: {}
    },
    {
      key: "text",
      description: "Text",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "links",
      description: "Links",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    }
  ];
  export const smartActions = [
    {
      name: "Position",
      type: "Number",
      key: "pos",
      properties: {
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    {
      name: "Verdunkelt",
      type: "Toggle",
      key: "darken",
      properties: {
        mode: "normal"
      }
    }
  ];
  export const width = 1200;
  export const height = 675;
  export const type = "image";
  export const format = "jpg";
  export const alias = "Twitter";
</script>
