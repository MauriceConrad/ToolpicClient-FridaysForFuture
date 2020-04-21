<style scoped>

  @import "../../fonts/Jost/Jost.css";

  svg {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 1200" version="1.1">

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1200" height="1200" />
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

      <image v-scaleimage="pos" v-bind:xlink:href="[image]" x="0" y="0" height="1200" width="1200" />

      <g style="transform-origin: 600px 290px; transform: rotate(-4deg);">
        <MultiLine v-dynamic data-dynamic-origin="none" data-dynamic-width="1120" data-dynamic-height="500" style="transform-origin: 40px 50px;" x="40" y="50" relative="0 0" padding="10 20" v-bind:text="text" lineheight="1.05" background="#1DA64A" css="font-size: 150px; font-weight: 600; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </g>

      <path style="fill: #1DA64A;" d="M 0,925 l 1200,175 L 1200,1200 0,1200" />

      <path style="fill: #1B7340;" d="M 0,910 l 1200,182.5 0,12.5 L 0,940" />

      <g>
        <MultiLine v-dynamic data-dynamic-origin="none" data-dynamic-width="700" data-dynamic-height="190" style="transform-origin: 30px 1170px;" x="30" y="1195" relative="0 1" padding="0" v-bind:text="description" lineheight="1.1" background="none" css="font-size: 80px; font-weight: 400; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </g>
      <image v-bind:xlink:href="logo" x="1000" y="1000" height="300" width="300" filter="url(#dropshadow)" />
    </g>
  </svg>

</template>

<script type="text/javascript">
  import animejs from 'animejs';

  import { SuperTemplate } from 'toolpic';

  export default {
    name: "imperative",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/Imperative/bg.jpg'],
        pos: 0,
        text: ["BUNDESTAG", "UMZINGELN!"],
        description: ["28.06 12:00 Uhr", "INVALIDENPARK"],
        logo: 'https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg'
      }
    },
    methods: {}
  };
  import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';
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
          }
        ]
      }
    },
    {
      key: "text",
      description: "Title",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "description",
      description: "Description",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    }
  ];
  export const type ="image";
  export const format = "jpg";
  export const smartActions = [];
  export const alias = "Instagram";
  export const width = 1200;
  export const height = 1200;

</script>
