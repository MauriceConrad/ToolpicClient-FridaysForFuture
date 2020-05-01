<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />

      <g v-dynamic data-dynamic-width="850" data-dynamic-height="230" style="transform-origin: 540px 260px;">
        <text x="540" y="260" class="text text-top">
          {{ text1 }}
        </text>
      </g>

      <FFFTitleShader dynamic="1000 400" origin="540px 550px" offset="-7 -7" stroke="#fff" stroke-width="3" ref="">
        <template>
          <text x="550" y="540" class="text title">
            {{ remaining }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="800" data-dynamic-height="140" style="transform-origin: 540px 600px;">
        <text x="540" y="600" class="text text-middle">
          {{ text2 }}
        </text>
      </g>

      <g v-dynamic data-dynamic-width="1000" data-dynamic-height="400" style="transform-origin: 540px 720px;">
        <text x="540" y="720" class="text text-bottom">
          {{ text3 }}
        </text>
      </g>
    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .text {
    font-family: 'Jost';
    font-weight: 900;
    fill: #fff;
    text-anchor: middle;
  }
  .title {
    font-size: 150px;
    alignment-baseline: baseline;
  }
  .text-top {
    font-size: 100px;
    alignment-baseline: baseline;

  }
  .text-middle {
    font-size: 80px;
    alignment-baseline: hanging;
  }
  .text-bottom {
    font-size: 170px;
    alignment-baseline: hanging;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "CountdownStrike",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/CountdownStrike/bg.jpg'],
        pos: 0,
        text1: 'NUR NOCH',
        remaining: '5 TAGE',
        text2: 'BIS ZUM',
        text3: 'STREIK',
        theme: {
          primary: ['#830037', '#ff006b'],
          secondary: ['#2e9575', '#43fec4']
        }
      }
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }

  import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';

  export const fields = [
    {
      key: "theme",
      description: "Theme",
      component: Select,
      props: {
        items: [
          // Megenta : Pastel
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICNGRjAwNUM7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#830037', '#ff006b'],
              secondary: ['#2e9575', '#43fec4']
            }
          },
          // Pastel : Magenta
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#226c55', '#3dcc9f'],
              secondary: ['#a40045', '#ff006b']
            }
          }
        ]
      }
    },
    {
      key: "pos",
      description: "Background Position",
      component: Slider,
      props: {
        min: -1,
        max: 1,
        step: 0.1
      }
    },
    {
      key: "image",
      description: "Background",
      component: ImageSelect,
      props: {
        width: 1080,
        height: 1080,
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
      key: "text1",
      description: "Text 1",
      component: Text,
      forceSVGRedraw: true,
      props: {}
    },
    {
      key: "text2",
      description: "Text 2",
      component: Text,
      forceSVGRedraw: true,
      props: {}
    },
    {
      key: "remaining",
      description: "Text Remaining",
      component: Text,
      forceSVGRedraw: true,
      props: {}
    },
    {
      key: "text3",
      description: "Text 3",
      component: Text,
      forceSVGRedraw: true,
      props: {}
    },
  ];
  export const type = "image";
  export const format = "jpg";
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
    }
  ];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
