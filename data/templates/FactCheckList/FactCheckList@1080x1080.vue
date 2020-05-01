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

    <defs>
      <svg width="209" height="150" viewBox="0 0 201 144" xmlns="http://www.w3.org/2000/svg" id="symbol-check">
        <g transform="matrix(0.946141,-0.323754,0.323754,0.946141,-295.755,-622.094)">
          <path d="M51.051,777.304L87.133,839.144L263.566,763.683L238.395,739.081L104.629,785.73L61.523,733.722L51.051,777.304Z" style="fill:rgb(255,0,92);"/>
        </g>
      </svg>
      <svg width="147" height="150" viewBox="0 0 135 138" xmlns="http://www.w3.org/2000/svg" id="symbol-cross">
        <g transform="matrix(0.787961,0,0,0.818144,-221.815,-26.3255)">
          <path d="M350.198,122.552L281.505,178.094L304.651,200.365L373.068,141.323L427.641,181.104L452.495,163.453L402.19,117.143L446.396,77.865L425.323,54.729L378.047,95.708L331.036,32.177L299.318,60.896L350.198,122.552Z" style="fill:rgb(32,23,90);"/>
        </g>
      </svg>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />

      <FFFTitleShader dynamic="1000 200" origin="540px 50px" offset="-8 -8" stroke="#fff" stroke-width="3">
        <template>
          <text x="540" y="50" class="title">
            {{ title }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g>
        <g v-for="item in items">
          <path v-bind:d="'M 60,' + (item.y - item.field.height / 2) + ' l ' + item.polygon" style="fill: #fff;"/>
          <g v-bind:style="{ transform: 'translate(' + (60 + 50 - 75) + 'px, ' + (item.y - 75) + 'px' + ')' }">
            <use v-bind:href="'#' + item.symbolId"/>
          </g>
          <g v-dynamic data-dynamic-width="800" data-dynamic-height="100" v-bind:style="{ 'transform-origin': '230px ' + item.y + 'px' }">
            <text class="item-text" x="230" v-bind:y="item.y">
              {{ item.text }}
            </text>
          </g>
        </g>
      </g>
      <g style="transform: translate(455px, 455px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.138);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>


    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .title {
    font-family: 'Jost';
    font-size: 120px;
    font-weight: 900;
    fill: #fff;
    alignment-baseline: hanging;
    text-anchor: middle;
  }
  .item-text {
    font-family: 'Jost';
    font-weight: 700;
    font-size: 80px;
    fill: #fff;
    alignment-baseline: middle;
    text-anchor: start;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  import { Text, Textarea, Select, ImageSelect, Slider, Collection, Toggle } from 'fields';
  export default {
    name: "AnnouncementSpeakers",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/FactCheckList/bg.jpg'],
        pos: 0,
        title: 'FAKTENCHECK',
        list: [
          {
            label: 'DIE SCHWÄNZEN DOCH NUR',
            boolean: false
          },
          {
            label: 'DIE FORDERN NUR',
            boolean: false
          },
          {
            label: 'DIE ÄNDERN WAS!',
            boolean: true
          }
        ],
        og: '',
        theme: {
          primary: ['#226c55', '#3dcc9f'],
          secondary: ['#a40045', '#ff006b']
        }
      }
    },
    computed: {
      items() {
        const centerY = 600;

        const polygons = [
          [
            [100, 20], [-6, 95], [-110, -30]
          ],
          [
            [80, -4], [6, 90], [-90, 24]
          ]
        ];

        const top = 300;
        const height = 600;
        return this.list.map((item, index) => {
          const points = polygons[index % polygons.length];
          const xValues = points.map(point => Math.abs(point[0]));
          const yValues = points.map(point => Math.abs(point[1]));
          return {
            y: top + (height / (this.list.length - 1)) * index,
            text: item.label,
            field: {
              width: Math.max(...xValues),
              height: Math.max(...yValues),
            },
            symbolId: item.boolean ? 'symbol-check' : 'symbol-cross',
            polygon: points.map(arr => arr.join(",")).join(" ")
          }
        });
      }
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }

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
      component: Text,
      forceSVGRedraw: true,
      props: {}
    },
    {
      key: "list",
      description: "List",
      component: Collection,
      props: {
        btnAddLabel: 'Add Date',
        max: 5,
        fields: [
          {
            key: "label",
            description: "Text",
            component: Text,
            props: {}
          },
          {
            key: "boolean",
            description: null,
            component: Toggle,
            props: {
              description: "True",
              styleClass: 'mt-android'
            }
          }
        ]
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
