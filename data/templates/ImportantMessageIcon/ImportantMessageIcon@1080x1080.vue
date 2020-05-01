<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimaryAlternate" v-bind:gradient="theme.primaryAlternate.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding-area-alternate">
        <path d="M 0,900 L 1085,750 1085,1080 0,1080"/>
      </clipPath>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
    </defs>



    <g class="main" clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
      <g clip-path="url(#bounding-area-alternate)">
        <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimaryAlternate)" />
      </g>


      <Dynamic width="1000" height="150" origin="0 0.9">
        <text x="30" y="1040" class="message">
          {{ message }}
        </text>
      </Dynamic>

      <g v-dynamic data-dynamic-width="500" data-dynamic-height="100" style="transform-origin: 1040px 930px;">
        <text x="1040" y="930" class="info">
          {{ about }}
        </text>
      </g>

      <FFFTitleShader dynamic="1000 850" origin="540px 450px" offset="-10 -10" stroke="#fff" stroke-width="3">
        <template>
          <text x="540" y="450" class="symbol">
            {{ symbol }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g style="transform: translate(445px, -445px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.158);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>


    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .symbol {
    font-family: 'Jost';
    fill: #fff;
    font-weight: 900;
    font-size: 200px;
    text-anchor: middle;
    alignment-baseline: middle;
  }
  .message {
    font-family: 'Jost';
    fill: #fff;
    font-weight: 800;
    font-size: 120px;
    text-anchor: start;
    alignment-baseline: baseline;
  }
  .info {
    font-family: 'Jost';
    fill: #fff;
    font-size: 50px;
    font-weight: 400;
    font-style: italic;
    text-anchor: end;
    alignment-baseline: baseline;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "AnnouncementSpeakers",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/ImportantMessageIcon/bg.jpg'],
        pos: 0,
        message: 'DEMO ABGESAGT!',
        about: 'Aus rechtlichen Gründen',
        symbol: ':(',
        og: '',
        theme: {
          primary: ['#830037', '#ff006b'],
          primaryAlternate: ['#20175A', '#7D93F8'],
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
          // Violett : Magenta : Pastel
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICNGRjAwNUM7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#830037', '#ff006b'],
              primaryAlternate: ['#20175A', '#7D93F8'],
              secondary: ['#2e9575', '#43fec4']
            }
          },
          // Pastel : Violett : Magenta
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#226c55', '#3dcc9f'],
              primaryAlternate: ['#20175A', '#7D93F8'],
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
      key: "message",
      description: "Message",
      component: Text,
      props: {}
    },
    {
      key: "about",
      description: "About",
      component: Text,
      props: {}
    },
    {
      key: "symbol",
      description: "Symbol",
      component: Text,
      props: {}
    },
    {
      key: "og",
      description: "OG Label",
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
