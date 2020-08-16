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

      <Dynamic width="1000" height="450" origin="0 0">
        <MultiLine x="40" y="20" relative="0 0" padding="0" align="left" v-bind:text="title" lineheight="1.1" background="none" css="font-size: 120px; font-weight: 700; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </Dynamic>

      <FFFTitleShader dynamic="980 160" origin="40px 440px" offset="-6 -6" stroke="#fff" stroke-width="2.5">
        <template>
          <text x="40" y="440" class="date">
            {{ date }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <Dynamic width="920" height="540" origin="0 0">
        <MultiLine x="40" y="570" relative="0 0" padding="0" align="left" v-bind:text="textToMultilineFormat(location.join(' '), 0.7, 0.4, true)" lineheight="1.05" background="none" css="font-size: 120px; font-weight: 700; font-family: 'Jost'; fill: none; stroke: #fff; stroke-width: 4px;"></MultiLine>
      </Dynamic>

      <g style="transform: translate(445px, 445px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.158);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>

    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .date {
    font-family: 'Jost';
    font-size: 100px;
    font-weight: 900;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/GeneralDateAnnouncement/bg.jpg'],
        pos: 0,
        title: ['CLIMATE', 'WARRIORS'],
        date: '12.11. 18 UHR',
        location: [
          'ALTE LOKHALLE',
          'Mombacher Straße',
          '78 - 80, 55122',
          'Mainz'
        ],
        og: '',
        theme: {
          primary: ['#1a145d', '#98b6eb'],
          secondary: ['#2e9575', '#43fec4'],
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
      key: "location",
      description: "Location",
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
