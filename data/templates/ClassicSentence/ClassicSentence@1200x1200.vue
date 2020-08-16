<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1200" height="1200" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" v-bind:xlink:href="image" x="0" y="0" height="1200" width="1200" />

      <rect x="" y="0" width="1200" height="1200" style="fill: #000; opacity: 0.3;" v-if="darken"/>

      <text x="100" y="120" style="fill: #fff; font-size: 120px; font-family: 'Jost'; font-weight: 600;">
        {{ subtitle }}
      </text>

      <g style="transform-origin: 50% 50%;" v-bind:style="{ 'transform': 'scale(' + Math.min(700 / ((200 * title.length) + 125), (1200 - 200) / (Math.max(...title.map(line => textInfo(line.toUpperCase(), { fontFamily: 'Jost', fontSize: '200px' }).width)) + 200)) + ')' }">
        <g v-for="line in title">
          <text text-anchor="middle" x="600" fill="#fff" v-bind:y="((600 - (200 * title.length) / 2) + 25) + (title.indexOf(line) * 200) + 110" style="font-size: 200px; font-family: 'Jost'; font-weight: 900;">
            {{ line }}
          </text>
        </g>
        <rect v-bind:x="600 - (Math.max(...title.map(line => textInfo(line.toUpperCase(), { fontFamily: 'Jost', fontSize: '200px'}).width)) + 200) / 2" v-bind:y="600 - (200 * title.length) / 2 - 100" v-bind:width="Math.max(...title.map(line => textInfo(line.toUpperCase(), { fontFamily: 'Jost', fontSize: '200px' }).width)) + 200" v-bind:height="(200 * title.length) + 125" style="fill: none; stroke: #fff; stroke-width: 20px;"/>
      </g>

      <rect x="0" v-bind:y="1080 - (50 / 2) + 40" width="100%" height="60" style="fill: #1B7340;"/>

      <text x="50" v-bind:y="1080 - (50 / 2) + 50 + 32.5" style="font-family: 'Jost'; font-weight: 300; letter-spacing: 1px; fill: #fff; font-size: 40px;">
        {{ info }}
      </text>

      <g style="transform: translate(510px, 510px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.185);">
          <FFFLogo v-bind:og="og" v-bind:theme="logo"></FFFLogo>
        </g>
      </g>
    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";

</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "ClassicSentence",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/ClassicSentence/bg.jpg'],
        pos: 0,
        darken: false,
        title: [
          'WORLD',
          'WHALE',
          'DAY'
        ],
        subtitle: 'TODAY IS',
        info: 'www.fridaysforfuture.is   #fridaysforfuture',
        og: '',
        logo: {
          primary: '#1B7340',
          secondary: '#000',
          secondary2: '#111',
          secondary3: '#90D3ED'
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
      key: "subtitle",
      description: "Subtitle",
      component: Text,
      props: {}
    },
    {
      key: "info",
      description: "Info",
      component: Text,
      props: {}
    },
    {
      key: "og",
      description: "OG",
      component: Text,
      props: {}
    }
  ];
  export const type = "image";
  export const format = "jpg";
  export const smartActions = [];
  export const alias = "Instagram";
  export const width = 1200;
  export const height = 1200;
</script>
