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


      <g>
        <defs>
          <mask id="sign-mask">
            <svg width="864" height="806" x="110" y="50" viewBox="0 0 764 713" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
              <g style="fill: #fff;" transform="matrix(1,0,0,1,-161.32,-27.2936)">
                <path d="M231.323,52.06L178.541,146.283L230.601,295.56L191.991,446.323L194.343,557.369L161.32,681.024L183.487,721.668L410.848,693.652L642.053,730.989L807.515,739.806L868.801,682.421L899.981,492.99L880.336,397.688L924.529,291.669L894.499,227.399L913.279,140.254L880.959,89.824L308.805,27.294L231.323,52.06Z" style="fill:white;"/>
              </g>
            </svg>
            <Dynamic width="700" height="150" origin="0.5 0">
              <text x="540" y="130" class="title">
                {{ title }}
              </text>
            </Dynamic>
          </mask>
        </defs>
        <rect x="0" y="0" width="1080" height="1080" style="fill: #fff;" mask="url(#sign-mask)"/>

        <Dynamic width="650" height="500" origin="0 0">
          <g v-for="(item, index) in list.filter(l => l)">
            <circle v-bind:cx="280" v-bind:cy="350 + (index * 80 * 1.8)" r="40" style="fill: none; stroke-width: 8px;" v-bind:style="{ stroke: theme.secondary[1] }"/>
            <text v-bind:x="400" v-bind:y="357 + (index * 80 * 1.8)" class="item" v-bind:style="{ fill: theme.secondary[1] }">
              {{ item }}
            </text>
          </g>
        </Dynamic>


        <Dynamic width="850" height="200" origin="1 1">
          <MultiLine x="1050" y="1060" relative="1 1" padding="0" align="right" v-bind:text="message" lineheight="1.05" background="none" css="font-size: 90px; font-weight: 700; font-family: 'Jost'; fill: none; stroke: #fff; stroke-width: 4px;"></MultiLine>
        </Dynamic>

        <g style="transform: translate(-445px, 445px);">
          <g style="transform-origin: 540px 540px; transform: scale(0.158);">
            <FFFLogo v-bind:og="og"></FFFLogo>
          </g>
        </g>

      </g>

    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .sign {
    fill: #fff;
  }
  .title {
    font-family: 'Jost';
    font-size: 100px;
    font-weight: 800;
    fill: #000;
    alignment-baseline: hanging;
    text-anchor: middle;
  }
  .item {
    font-family: 'Jost';
    font-size: 80px;
    font-weight: 600;
    fill: #000;
    alignment-baseline: middle;
    text-anchor: start;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "WantedSign",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/WantedSign/bg.jpg'],
        pos: 0,
        title: 'WANTED',
        list: [
          'ESSENSSTAND',
          'AWEARENESS',
          'FOTOGRAF*INNEN'
        ],
        message: ['MELDE DICH BEI', 'MARIE ODER ALEX!'],
        og: '',
        theme: {
          primary: ['#226c55', '#3dcc9f'],
          secondary: ['#a40045', '#ff006b']
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
      component: Text,
      forceSVGRedraw: true,
      props: {}
    },
    {
      key: "list",
      description: "List",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "message",
      description: "Message",
      component: Textarea,
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
    }
  ];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
