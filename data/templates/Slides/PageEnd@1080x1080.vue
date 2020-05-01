<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
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


      <FFFTitleShader dynamic="900 300" origin="540px 80px" offset="-8 -8" stroke="#fff" stroke-width="3">
        <template>
          <text x="540" y="80" class="title">
            {{ title }}
          </text>
        </template>
        <template v-slot:shader>
          <rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.secondary }" />
        </template>
      </FFFTitleShader>


      <g>
        <g style="transform-origin: 155px 425px; transform: translate(70px, 20px) scale(0.8);">
          <mask id="icon1-mask">
            <circle cx="155" cy="425" r="120" style="fill: #fff;" />
            <svg x="67" y="355" height="150" width="150" viewBox="0 0 465.882 465.882" xmlns="http://www.w3.org/2000/svg">
              <g style="fill: #000;">
                <path d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z"/>
              </g>
            </svg>
          </mask>
          <circle cx="155" cy="425" r="120" style="fill: #fff;" mask="url(#icon1-mask)" />
        </g>
        <Dynamic width="650" height="150" origin="0 0.5">
          <text x="360" y="445" class="action-text">
            {{ 'TEILE DIESEN POST!' }}
          </text>
        </Dynamic>
      </g>

      <g>
        <g style="transform-origin: 155px 425px; transform: translate(70px, 290px) scale(0.8);">
          <mask id="icon2-mask">
            <circle cx="155" cy="425" r="120" style="fill: #fff;" />
            <svg x="80" y="355" height="150" width="150" viewBox="-58 0 404 404.54135" xmlns="http://www.w3.org/2000/svg">
              <g style="fill: #000;">
                <path d="m277.527344 0h-267.257813c-5.523437 0-10 4.476562-10 10v374.527344c-.011719 7.503906 4.183594 14.378906 10.855469 17.804687 6.675781 3.429688 14.707031 2.832031 20.796875-1.550781l111.976563-80.265625 111.976562 80.269531c6.097656 4.367188 14.121094 4.960938 20.792969 1.535156 6.667969-3.425781 10.863281-10.292968 10.863281-17.792968v-374.527344c0-5.523438-4.480469-10-10.003906-10zm0 0"/>
              </g>
            </svg>
          </mask>
          <circle cx="155" cy="425" r="120" style="fill: #fff;" mask="url(#icon2-mask)" />
        </g>

        <Dynamic width="650" height="150" origin="0 0.5">
          <text x="360" y="715" class="action-text">
            {{ 'SPEICHERE DIESEN POST!' }}
          </text>
        </Dynamic>
      </g>

      <mask id="slider-mask">
        <rect x="540" y="930" height="60" width="600" style="fill: #fff;" />
        <circle cx="540" cy="960" r="60" style="fill: #fff;" />
      </mask>

      <Dynamic width="450" height="70" v-bind:origin="[slidePos == 0 ? 1 : 0, 1].join(' ')">
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

      <image v-if="slidePos == 0" xlink:href="https://cdn.fridaysforfuture.io/toolpic/assets/logo-transparent.svg" width="170" height="170" x="40" y="895" />
      <image v-if="slidePos == 2" xlink:href="https://cdn.fridaysforfuture.io/toolpic/assets/logo-transparent.svg" width="170" height="170" x="890" y="895" />


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
  .title {
    font-family: 'Jost';
    font-weight: 900;
    fill: #fff;
    font-size: 120px;
    text-anchor: middle;
    alignment-baseline: hanging;
  }
  .action-text {
    font-family: 'Jost';
    font-weight: 800;
    fill: #fff;
    alignment-baseline: middle;
    text-anchor: start;
    font-size: 80px;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/Slides/bg2.jpg'],
        pos: 1,
        gradientMap: false,
        title: 'DANKE!',
        slidePos: 2,
        hashtag: '#WirBildenZukunft',
        borderRight: false,
        borderLeft: false,
        theme: {
          primary: ['#20175A', '#7D93F8'],
          secondary: '#FF005C',
          secondaryAlternate: '#3dcc9f'
        }
      }
    },
    computed: {

    },
    mounted() {
      console.log(this.factItems);
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }
  import { Text, Textarea, Select, ImageSelect, Slider, Toggle, Collection } from 'fields';
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
      key: "title",
      description: "Title",
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
