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

      <clipPath id="bounding-area">
        <rect x="0" y="650" width="1080" height="430" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" />
      <g clip-path="url(#bounding-area)">
        <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
      </g>

      <rect x="0" y="0" height="650" width="1080" style="fill: #000; opacity: 0.25;" v-if="darken" />

      <Dynamic width="800" height="450" origin="0 0">
        <MultiLine x="50" y="40" relative="0 0" padding="0" align="left" v-bind:text="title" lineheight="1.1" background="none" css="font-size: 120px; font-weight: 700; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </Dynamic>

      <FFFTitleShader dynamic="980 250" origin="50px 600px" offset="-6 -6" stroke="#fff" stroke-width="2.5">
        <template>
          <text x="50" y="600" class="date">
            {{ date }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <Dynamic width="980" height="200" origin="0 0">
        <text x="50" y="700" class="location">
          {{ location }}
        </text>
      </Dynamic>

      <Dynamic width="980" height="270" origin="0 1">
        <MultiLine x="50" y="1050" relative="0 1" padding="0" align="left" v-bind:text="locationDetail" lineheight="1.1" background="none" css="font-size: 120px; font-weight: 800; font-family: 'Jost'; fill: none; stroke-width: 4px; stroke: #fff;"></MultiLine>
      </Dynamic>

      <g style="transform: translate(415px, -415px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.185);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>

    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .location {
    font-family: 'Jost';
    font-size: 110px;
    font-weight: 700;
    fill: #fff;
    text-anchor: start;
    alignment-baseline: hanging;
  }
  .date {
    font-family: 'Jost';
    font-size: 100px;
    font-weight: 900;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/PublicLeisureEvent/bg.jpg'],
        pos: 0,
        darken: true,
        title: ['GROßE', 'FILMVOR-', 'FÜHRUNG'],
        date: '18.09.',
        location: 'LANDESMUSEUM',
        locationDetail: [
          'MAINZ, GROßE',
          'BLEICHE 11, 19 UHR'
        ],
        og: '',
        theme: {
          primary: ['#20175A', '#7D93F8'],
          secondary: ['#2e9575', '#43fec4'],
        }
      }
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }
  import { Text, Textarea, Select, ImageSelect, Slider, Toggle } from 'fields';
  export const fields = [
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
      key: "darken",
      description: null,
      component: Toggle,
      props: {
        description: "Darken",
        styleClass: 'mt-android'
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
      key: "location",
      description: "Location",
      component: Text,
      props: {}
    },
    {
      key: "locationDetail",
      description: "Location Detail",
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
    },
    {
      name: "Verdunkeln",
      type: "Toggle",
      key: "darken",
      properties: {
        mode: "normal"
      }
    }
  ];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
