<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" xmlns:xlink="http://www.w3.org/1999/xlink">
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

      <FFFText
                x="40"
                y="40"
                relative="0 0"
                lineheight="1.2"
                align="left"
                dynamic="980 600"
                highlight-padding="0 6 0 12"
                v-bind:text="textToMultilineFormat(text.join(' ').toUpperCase(), 1, 0.3, true)"
                css="font-size: 80px; font-weight: 800; font-family: 'Jost'; fill: #fff;">
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFText>

      <FFFTitleShader dynamic="1000 150" origin="40px 660px" offset="-8 -8" stroke="#fff" stroke-width="3">
        <template>
          <text x="40" y="660" class="author">
            {{ author }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="900" data-dynamic-height="300" style="transform-origin: 40px 780px;">
        <MultiLine x="40" y="780" relative="0 0" padding="0" align="left" v-bind:text="about" lineheight="1.1" background="none" css="font-size: 50px; font-weight: 700; font-family: 'Jost'; fill: none; stroke: #fff; stroke-width: 1.5px;"></MultiLine>
      </g>

      <image xlink:href="https://cdn.fridaysforfuture.io/toolpic/assets/logo-transparent.svg" width="130" height="130" x="950" y="940" />

      <g style="transform: translate(465px, -465px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.12);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>



    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .author {
    font-family: 'Jost';
    font-weight: 900;
    font-size: 120px;
    fill: #fff;
    text-anchor: start;
    alignment-baseline: hanging;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/QuoteActivist/bg.jpg'],
        pos: 0,
        text: ['“ICH HAB BEI', 'FRIDAYS FOR FUTURE', 'SO UNGLAUBLICH', 'VIEL GELERNT - MEHR', 'ALS IN DEN', 'VERPASSTEN', 'UNTERRICHTSSTUNDEN.”'],
        author: 'HANNAH BLITZ',
        about: ['PRESSESPRECHERIN', 'FRIDAYS FOR FUTURE', 'BERLIN'],
        og: '',
        theme: {
          primary: ['#226c55', '#3dcc9f'],
          secondary: ['#a40045', '#ff006b']
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
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#226c55', '#3dcc9f'],
              secondary: ['#a40045', '#ff006b']
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#1a145d', '#98b6eb'],
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
      key: "text",
      description: "Quote",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "author",
      description: "Author",
      component: Text,
      props: {}
    },
    {
      key: "about",
      description: "About",
      component: Textarea,
      props: {
        rows: 'auto'
      }
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
