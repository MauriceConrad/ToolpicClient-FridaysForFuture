<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
      <clipPath id="bounding-area">
        <rect x="580" y="0" width="720" height="1080" />
      </clipPath>
    </defs>

    <g class="main" clip-path="url(#bounding)">
      <g v-bind:style="{ transform: 'translate(' + -(pos * 1080) + 'px, 0)' }">
        <image v-scaleimage="0" x="0" y="0" width="2160" height="1080" v-bind:xlink:href="image[0]" v-bind:filter="gradientMap ? 'url(#FFFVerlaufsumsetzungPrimary)' : 'none'" />
      </g>

      <rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.primary[0], opacity: 0.4 }" v-if="!gradientMap" />


      <FFFTitleShader dynamic="960 700" origin="540px 450px" offset="-10 -10" stroke="#fff" stroke-width="4">
        <template>
          <MultiLine x="540" y="450" relative="0.5 0.5" padding="0" align="center" v-bind:text="title" lineheight="1.05" background="none" css="font-size: 150px; font-weight: 900; font-family: 'Jost';"></MultiLine>
        </template>
        <template v-slot:shader>
          <rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.secondary }" />
        </template>
      </FFFTitleShader>

      <mask id="slider-mask">
        <rect x="540" y="930" height="60" width="600" style="fill: #fff;" />
        <circle cx="540" cy="960" r="60" style="fill: #fff;" />
      </mask>

      <Dynamic width="450" height="70" origin="1 1">
        <text v-bind:x="slidePos == 0 ? 1050 : 40" y="1050" class="hashtag" v-bind:style="{ 'text-anchor': slidePos == 0 ? 'end' : 'start' }">
          {{ hashtag }}
        </text>
      </Dynamic>

      <g>
        <path class="wall" d="M 1060,0 L 1050,200 1053,340 1065,400 1040,650, 1030,750 1065,900 1060,1057 1055,1080 1080,1080 1080,0" v-if="borderRight" v-bind:style="{ fill: theme.secondaryAlternate }" />
        <path class="wall" d="M 0,0 20,0 40,170 25,400 42,550 20,680 15,800 25,950 27,1050 18,1080 0,1080" v-if="borderLeft" v-bind:style="{ fill: theme.secondaryAlternate }" />
      </g>

      <FFFTitleShader offset="-10 -10" stroke="#fff" stroke-width="2">
        <template>
          <g v-bind:style="{ transform: 'translate(' + -[0, 1.8 * 1080 / 2 - 72, 1.8 * 1080 / 1 - 72 * 2][slidePos] + 'px, 0px)' }">
            <svg width="180%" height="20%" x="45%" y="80%" viewBox="0 0 961 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
              <g style="transform-origin: 480px 31px; transform: scale(0.99);">
                <g transform="matrix(1,0,0,1,3.075e-05,0.00020525)">
                  <path d="M901.574,17.137C906.644,6.982 917.14,0 929.254,0C946.318,0 960.172,13.854 960.172,30.918C960.172,47.982 946.318,61.836 929.254,61.836C917.14,61.836 906.644,54.854 901.574,44.699L507.766,44.699C502.696,54.854 492.2,61.836 480.086,61.836C467.972,61.836 457.476,54.854 452.406,44.699L58.598,44.699C53.528,54.854 43.032,61.836 30.918,61.836C13.854,61.836 0,47.982 0,30.918C0,13.854 13.854,0 30.918,0C43.032,0 53.528,6.982 58.598,17.137L452.406,17.137C457.476,6.982 467.972,0 480.086,0C492.2,0 502.696,6.982 507.766,17.137L901.574,17.137Z" style="fill:white;"/>
                </g>
              </g>
            </svg>
          </g>
        </template>
        <template v-slot:shader>
          <rect x="0" y="540" width="1080" height="540" v-bind:style="{ fill: theme.secondaryAlternate }" />
          <!--<g v-bind:style="{ transform: 'translate(' + -(pos * 1080) + 'px, 0)' }">
            <image v-scaleimage="0" x="0" y="0" width="2160" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondaryAlternate)" />
          </g>-->
        </template>
      </FFFTitleShader>

      <g v-if="slidePos % 2 == 0" v-bind:style="{ 'transform': 'translate(' + (slidePos == 0 ? -410 : 430) + 'px, 445px)' }">
        <g style="transform-origin: 540px 540px; transform: scale(0.158);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>


    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .hashtag {
    font-family: 'Jost';
    font-weight: 200;
    alignment-baseline: baseline;
    fill: #fff;
    font-size: 50px;
  }
  .wall {
    fill: #FF005C;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "SlideTitlePage",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/Slides/bg1.jpg'],
        pos: 0,
        gradientMap: false,
        title: [
          'KLIMAKRISE',
          '=',
          'FLUCHT-',
          'URSACHE'
        ],
        slidePos: 0,
        hashtag: '#WirBildenZukunft',
        borderRight: false,
        borderLeft: false,
        og: '',
        theme: {
          primary: ['#1a145d', '#98b6eb'],
          secondary: '#FF005C',
          secondaryAlternate: '#3dcc9f'
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
      key: "theme",
      description: "Theme",
      component: Select,
      props: {
        items: [
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#1a145d', '#98b6eb'],
              secondary: '#FF005C',
              secondaryAlternate: '#3dcc9f'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#226c55', '#3dcc9f'],
              secondary: '#FF005C',
              secondaryAlternate: '#FF005C'
            }
          }
        ]
      }
    },
    {
      key: "pos",
      description: "Slide Background Position",
      component: Slider,
      props: {
        min: 0,
        max: 1,
        step: 1
      }
    },
    {
      key: "gradientMap",
      description: null,
      component: Toggle,
      props: {
        description: "Gradient Map Filter",
        styleClass: 'mt-android'
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
      key: "slidePos",
      description: "Slider Pos",
      component: Slider,
      props: {
        min: 0,
        max: 2,
        step: 1
      }
    },
    {
      key: "hashtag",
      description: "Hashtag",
      component: Text,
      props: {}
    },
    {
      key: "borderLeft",
      description: null,
      component: Toggle,
      props: {
        description: "Wall Left",
        styleClass: 'mt-android'
      }
    },
    {
      key: "borderRight",
      description: null,
      component: Toggle,
      props: {
        description: "Wall Right",
        styleClass: 'mt-android'
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
      name: "Background Position",
      type: "Number",
      key: "pos",
      properties: {
        min: 0,
        max: 1,
        step: 1
      }
    },
    {
      name: "Gradient Map Filter",
      type: "Toggle",
      key: "gradientMap",
      properties: {
        mode: "normal"
      }
    },
    {
      name: "Slide Position",
      type: "Number",
      key: "slidePos",
      properties: {
        min: 0,
        max: 2,
        step: 1
      }
    },
    {
      name: "Border Left",
      type: "Toggle",
      key: "borderLeft",
      properties: {
        mode: "normal"
      }
    },
    {
      name: "Border Right",
      type: "Toggle",
      key: "borderRight",
      properties: {
        mode: "normal"
      }
    }
  ];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
