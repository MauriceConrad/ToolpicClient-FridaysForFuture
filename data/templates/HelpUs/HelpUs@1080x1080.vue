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

      <FFFTitleShader dynamic="820 500" origin="40px 40px" offset="-8 -8" stroke="#fff" stroke-width="4">
        <template>
          <MultiLine x="40" y="40" relative="0 0" padding="0" align="left" v-bind:text="title" lineheight="1.1" background="none" css="font-size: 150px; font-weight: 900; font-family: 'Jost';"></MultiLine>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <Dynamic width="1000" height="160" origin="0 0">
        <text x="40" y="480" class="date">
          {{ date }}
        </text>
      </Dynamic>

      <Dynamic width="1000" height="370" origin="0 1">
        <MultiLine x="40" y="950" relative="0 1" padding="0" align="left" v-bind:text="textToMultilineFormat(text.join(' ').toUpperCase(), 0.5, 0.4, true)" lineheight="1.1" background="none" css="font-size: 100px; font-weight: 800; font-family: 'Jost'; fill: none; stroke-width: 5px; stroke: #fff;"></MultiLine>
      </Dynamic>

      <Dynamic width="1000" height="150" origin="0 1">
        <text x="30" y="1050" class="message">
          {{ message }}
        </text>
      </Dynamic>

      <image xlink:href="https://cdn.fridaysforfuture.io/toolpic/assets/logo-transparent.svg" width="220" height="220" x="860" y="10" />
    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .date {
    font-family: 'Jost';
    font-size: 80px;
    font-weight: 700;
    fill: #fff;
    text-anchor: start;
    alignment-baseline: hanging;
  }
  .message {
    font-family: 'Jost';
    font-size: 80px;
    font-weight: 600;
    fill: #fff;
    text-anchor: start;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/HelpUs/bg.jpg'],
        pos: 0,
        title: ['MACH', 'MIT!'],
        date: '24.04. 12 - 15 UHR',
        text: [
          'GESUCHT SIND:',
          'FOTOGRAF*INNEN',
          'AWARENESS MENSCHI',
          '& BANNERTRAGENDE'
        ],
        message: 'MELDE DICH BEI UNS',
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
          }
        ]
      }
    },
    {
      key: "title",
      description: "Title",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "date",
      description: "Date",
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
      key: "message",
      description: "Message",
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
