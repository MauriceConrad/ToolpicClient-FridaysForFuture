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

      <FFFTitleShader dynamic="1000 200" origin="540px 40px" offset="-8 -8" stroke="#fff" stroke-width="3">
        <template>
          <text x="540" y="40" class="title">
            {{ title }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="1000" data-dynamic-height="800" style="transform-origin: 40px 160px;">
        <MultiLine x="40" y="160" relative="0 0" padding="0" v-bind:text="textToMultilineFormat(text.join(' ').toUpperCase(), 1, 0.4, true)" align="left" lineheight="1.2" background="none" css="font-size: 60px; font-weight: 800; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </g>

      <g v-dynamic data-dynamic-width="400" data-dynamic-height="100" style="transform-origin: 1050px 1050px;">
        <text x="1050" y="1040" class="source">
          {{ source }}
        </text>
      </g>

      <g v-dynamic data-dynamic-width="500" data-dynamic-height="100" style="transform-origin: 30px 1050px;">
        <text x="30" y="1040" class="hashtag">
          {{ hashtag }}
        </text>
      </g>
    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .title {
    font-size: 120px;
    font-family: 'Jost';
    fill: #fff;
    text-anchor: middle;
    alignment-baseline: hanging;
    font-weight: 900;
  }
  .source {
    font-size: 80px;
    font-family: 'Jost';
    fill: #fff;
    text-anchor: end;
    alignment-baseline: baseline;
    font-weight: 600;
  }
  .hashtag {
    font-size: 60px;
    font-family: 'Jost';
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
    text-anchor: start;
    alignment-baseline: baseline;
    font-weight: 800;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "FactText",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/FactText/bg.jpg'],
        pos: 0,
        title: 'SCHON GEWUSST?',
        text: ['Lorem ipsum dolor sit amet, consectetur',
               'adipisicing elit, sed do eiusmod tempor',
               'incididunt ut labore et dolore magna aliqua.',
               'Ut enim ad minim veniam, quis nostrud',
               'exercitation ullamco laboris nisi ut',
               'aliquip ex ea commodo consequat.',
               'Duis aute irure dolor in reprehenderit',
               'in voluptate velit esse cillum dolore eu',
               'fugiat nulla pariatur.'
             ],
        source: '- QUELLE',
        hashtag: '#FFFInformiert',
        theme: {
          primary: ['#20175A', '#7D93F8'],
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
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#20175A', '#7D93F8'],
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
          }
        ]
      }
    },
    {
      key: "title",
      description: "Title",
      component: Text,
      forceSVGRedraw: true,
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
      key: "source",
      description: "Source",
      component: Text,
      props: {}
    },
    {
      key: "hashtag",
      description: "Hashtag",
      component: Text,
      props: {}
    }
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
