<style scoped>

  @import "../../fonts/Jost/Jost.css";

  svg {
    max-width: 100%;
    max-height: 100%;
  }

  .subtitle {
    font-family: 'Jost';
    font-weight: 600;
    fill: #fff;
    font-size: 100px;
    alignment-baseline: hanging;
    text-anchor: middle;
   }

  .title {
    alignment-baseline: hanging;
    text-anchor: middle;
    font-family: 'Jost';
    font-weight: 900;
    fill: #3dcc9f;
    font-size: 100px;
  }
  .date {
    alignment-baseline: baseline;
    text-anchor: start;
    font-family: 'Jost';
    font-weight: 800;
    fill: none;
    stroke: #fff;
    stroke-width: 4px;
    font-size: 110px;
  }
  .location {
    alignment-baseline: baseline;
    text-anchor: end;
    font-family: 'Jost';
    font-weight: 600;
    fill: #fff;
    font-size: 70px;
  }
  .locationdetail {
    alignment-baseline: hanging;
    text-anchor: end;
    font-family: 'Jost';
    font-weight: 300;
    fill: #fff;
    font-size: 45px;
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
    </defs>

    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1" brightness="1.4"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="0.925"></GradientMapFilter>
    </defs>

    <g class="main" clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />

      <g v-dynamic data-dynamic-width="980" data-dynamic-height="175" style="transform-origin: 540px 50px;">
        <text x="540" y="50" class="subtitle">
          {{ subtitle }}
        </text>
      </g>

      <g>
        <FFFTitleShader v-bind:fill="theme.secondary" opacity="0.85" dynamic="1000 600" origin="540px 330px" offset="-8 -8" stroke="#fff" stroke-width="4">
          <template>
            <MultiLine x="540" y="250" relative="0.5 0" padding="10 20" align="center" v-bind:text="title" lineheight="1.05" background="none" css="font-size: 150px; font-weight: 900; font-family: 'Jost';"></MultiLine>
          </template>
          <template v-slot:shader>
            <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
          </template>
        </FFFTitleShader>
      </g>

      <g v-dynamic data-dynamic-width="500" data-dynamic-height="270" style="transform-origin: 40px 1030px;">
        <text x="30" y="1030" class="date">
          {{ date }}
        </text>
      </g>

      <g v-dynamic data-dynamic-width="338" data-dynamic-height="200" style="transform-origin: 880px 990px;">
        <text x="880" y="990" class="location">
          {{ location }}
        </text>
      </g>
      <g v-dynamic data-dynamic-width="338" data-dynamic-height="70" style="transform-origin: 880px 1010px;">
        <text x="880" y="1010" class="locationdetail">
          {{ locationdetail }}
        </text>
      </g>



      <g style="transform: translate(457px, 445px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.158);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>



    </g>

  </svg>
</template>


<script>
import { SuperTemplate } from 'toolpic';

import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

import FFFLogo from '../Logo/FFFLogo.vue';

export default {
  name: "AnnouncementStrike",
  extends: SuperTemplate,
  data() {
    return {
      image: ['https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSolidarity/bg.jpg'],
      pos: 0,
      title: ['FRAUEN*', 'KAMPFTAG!'],
      subtitle: 'INTERNATIONALER',
      date: '08.03.',
      location: 'MAINZ',
      locationdetail: 'HAUPTBAHNHOF',
      og: '',
      theme: {
        primary: ['#226c55', '#3dcc9f'],
        secondary: ['#a40045', '#ff006b']
      }
    }
  },
  methods: {},
  components: FFFCIComponents
};
import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';
export const fields = [
  {
    key: "theme",
    description: "Theme",
    component: Select,
    props: {
      items: [
        // Pastel : Magenta
        {
          render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
          value: {
            primary: ['#226c55', '#3dcc9f'],
            secondary: ['#a40045', '#ff006b']
          }
        },
        // Megenta : Pastel
        {
          render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICNGRjAwNUM7IiAvPgo8L3N2Zz4=",
          value: {
            primary: ['#830037', '#ff006b'],
            secondary: ['#2bac84', '#41d1a4']
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
    key: "title",
    description: "Title",
    component: Textarea,
    props: {
      rows: 'auto'
    }
  },
  {
    key: "subtitle",
    description: "Subtitle",
    component: Text,
    props: {}
  },
  {
    key: "date",
    description: "Date",
    component: Text,
    props: {}
  },
  {
    key: "location",
    description: "Location",
    component: Text,
    props: {}
  },
  {
    key: "locationdetail",
    description: "Location Detail",
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
export const type ="image";
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
