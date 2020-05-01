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
        <rect x="360" y="0" width="720" height="1080" />
      </clipPath>
    </defs>

    <g class="main" clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" />
      <g clip-path="url(#bounding-area)">
        <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
      </g>

      <Dynamic width="660" height="280" origin="0 0">
        <MultiLine x="380" y="30" relative="0 0" padding="0" align="left" v-bind:text="title" lineheight="1.1" background="none" css="font-size: 120px; font-weight: 700; font-family: 'Jost'; fill: none; stroke: #fff; stroke-width: 4px;"></MultiLine>
      </Dynamic>

      <FFFText
                x="380"
                y="320"
                relative="0 0"
                lineheight="1.05"
                align="left"
                dynamic="660 800"
                highlight-padding="0 6 0 12"
                v-bind:text="textToMultilineFormat(text.join(' ').toUpperCase(), 1.2, 0.4, true)"
                css="font-size: 80px; font-weight: 700; font-family: 'Jost'; fill: #fff;">
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFText>


      <Dynamic width="500" height="100" origin="0 1">
        <text x="380" y="1040" class="source">
          {{ source }}
        </text>
      </Dynamic>

      <Dynamic width="150" height="900" origin="1 0">
        <g style="transform-origin: 180px 50px; transform: rotate(90deg);">
          <text x="180" y="50" class="hashtag">
            {{ hashtag.toUpperCase() }}
          </text>
        </g>
      </Dynamic>

      <g style="transform: translate(450px, 450px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.148);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>
    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .source {
    font-family: 'Jost';
    font-weight: 400;
    font-style: italic;
    font-size: 70px;
    fill: #fff;
    alignment-baseline: baseline;
    text-anchor: start;
  }
  .hashtag {
    font-family: 'Jost';
    font-weight: 800;
    font-size: 110px;
    fill: #fff;
    alignment-baseline: hanging;
    text-anchor: start;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/InfoPictureDetail/bg.jpg'],
        pos: 0,
        darken: true,
        title: ['SCHON', 'GEWUSST?'],
        text: [
          '*KORALLENRIFFE*',
          'SIND DURCH',
          'DEN KLIMAWANDEL',
          'BEDROHT.',
          'SCHÜTZEN WIR',
          'UNSERE MEERE!'
        ],
        source: 'https://sagen.sogar/die/Profis/ehrlich',
        hashtag: '#FFFInformiert',
        og: '',
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
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#20175A', '#7D93F8'],
              secondary: ['#2e9575', '#43fec4']
            }
          },
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
