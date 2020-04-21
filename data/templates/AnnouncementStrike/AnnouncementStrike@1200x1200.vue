<style scoped>

  @import "../../fonts/Jost/Jost.css";

  svg {
    max-width: 100%;
    max-height: 100%;
  }

  circle {
    fill: #000;
  }

  .title {
    alignment-baseline: middle;
    text-anchor: middle;
    font-family: 'Jost';
    font-weight: 900;
    fill: #3dcc9f;
    font-size: 100px;
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
      <GradientEditorFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1"></GradientEditorFilter>
      <GradientEditorFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientEditorFilter>
    </defs>

    <g class="main" clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
      <!--<rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.primary, opacity: '0.75' }"/>-->

      <g v-dynamic data-dynamic-width="900" data-dynamic-height="440" style="transform-origin: 540px 470px;">
        <MultiLine x="540" y="470" relative="0.5 1" padding="10 20" v-bind:text="title" align="center" lineheight="1.05" background="none" css="font-size: 150px; font-weight: 900; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </g>

      <g>
        <FFFTitleShader dynamic="1000 400" origin="540px 650px" offset="-5 -5" stroke="#fff" stroke-width="3">
          <template>
            <text x="540" y="650" class="title">
              {{ date }}
            </text>
          </template>
          <template v-slot:shader>
            <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
            <!--<rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.secondary, opacity: 0.85 }"/>-->
          </template>
        </FFFTitleShader>
      </g>

      <g v-dynamic data-dynamic-width="320" data-dynamic-height="195" style="transform-origin: 50px 935px;">
        <text x="50" y="935" style="font-size: 145px; alignment-baseline: baseline; text-anchor: start; font-family: 'Jost'; font-weight: 700; fill: none; stroke: #fff; stroke-width: 4px;">
          {{ time }}
        </text>
      </g>
      <g v-dynamic data-dynamic-width="320" data-dynamic-height="130" style="transform-origin: 50px 955px;">
        <text x="50" y="955" style="font-size: 90px; alignment-baseline: hanging; text-anchor: start; font-family: 'Jost'; font-weight: 200; fill: #fff;">
          {{ timeLabel }}
        </text>
      </g>

      <g v-dynamic data-dynamic-width="650" data-dynamic-height="300" style="transform-origin: 1040px 1040px;">
        <MultiLine x="1040" y="1040" relative="1 1" padding="0 0" v-bind:text="location" align="right" lineheight="1.05" background="none" css="font-size: 100px; font-weight: 600; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </g>


      <image xlink:href="https://cdn.fridaysforfuture.io/toolpic/assets/logo-transparent.svg" width="170" height="170" x="910" y="10" />

    </g>

  </svg>
</template>


<script>
import { SuperTemplate } from 'toolpic';

import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

export default {
  name: "AnnouncementStrike",
  extends: SuperTemplate,
  data() {
    return {
      image: ['https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementStrike/bg.jpg'],
      pos: 0,
      title: ['GLOBALER', 'KLIMASTREIK'],
      date: '24.04',
      time: '12',
      timeLabel: 'UHR',
      location: ['HAUPTBAHNHOF', 'BERLIN'],
      theme: {
        primary: ['#610011', '#FF002C'],
        secondary: ['#128759', '#1BF3D3']
      }
    }
  },
  methods: {},
  components: FFFCIComponents
};
import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';
export const fields = [
  /*
      NOTE

      Pastel:
        Primary: #11532c -> #00d6b6
        Secondary: #128759 -> #1BF3D3

      Magenta:
        Primary: #610011 -> #FF002C
        Secondary: #a4001d -> #FF002C
  */
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
            primary: ['#610011', '#FF002C'],
            secondary: ['#128759', '#1BF3D3']
          }
        },
        // Pastel : Magenta
        {
          render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
          value: {
            primary: ['#11532c', '#00d6b6'],
            secondary: ['#a4001d', '#FF002C']
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
    key: "date",
    description: "Date",
    component: Text,
    forceSVGRedraw: true,
    props: {}
  },
  {
    key: "location",
    description: "Location",
    component: Textarea,
    props: {
      rows: 'auto'
    }
  },
  {
    key: "time",
    description: "Time",
    component: Text,
    props: {}
  },
  {
    key: "timeLabel",
    description: "Time Label",
    component: Text,
    props: {}
  }
];
export const type ="image";
export const format = "jpg";
export const smartActions = [];
export const alias = "Instagram";
export const width = 1080;
export const height = 1080;
</script>
