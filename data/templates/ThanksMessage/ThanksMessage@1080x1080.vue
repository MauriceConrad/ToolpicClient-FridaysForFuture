<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1" brightness="1" ref="filterSecondary"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1" ref="filterPrimary"></GradientMapFilter>

    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">

      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
      <!--<FilterImage v-scaleimage="pos" x="0" y="0" width="1080" height="1080" viewBox="0 0 1080 1080" v-bind:href="image[0]" v-bind:filter="$refs.filterPrimary"></FilterImage>-->

      <FFFTitleShader dynamic="1000 350" origin="540px 300px" offset="-8 -8" stroke="#fff" stroke-width="4">
        <template>
          <text x="540" y="300" class="title">
            {{ thanksMessage }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
          <!--<FilterImage v-scaleimage="pos" x="0" y="0" width="1080" height="1080" viewBox="0 0 1080 1080" v-bind:href="image[0]" v-bind:filter="$refs.filterSecondary"></FilterImage>-->
        </template>
      </FFFTitleShader>


      <g v-dynamic data-dynamic-width="900" data-dynamic-height="200" style="transform-origin: 540px 450px;">
        <text x="540" y="450" class="preposition">
          {{ preposition }}
        </text>
      </g>

      <g v-dynamic data-dynamic-width="1000" data-dynamic-height="370" style="transform-origin: 540px 580px;">
        <FFFTitleBox padding="0 30">
          <text x="540" y="580" class="count">
            {{ count }}
          </text>
        </FFFTitleBox>
      </g>

      <g v-dynamic data-dynamic-width="800" data-dynamic-height="150" style="transform-origin: 40px 1030px;">
        <text x="40" y="1030" class="hashtag">
          {{ hashtag }}
        </text>
      </g>

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
  .title {
    font-family: 'Jost';
    font-size: 150px;
    font-weight: 900;
    fill: #fff;
    alignment-baseline: baseline;
    text-anchor: middle;
  }
  .preposition {
    font-family: 'Jost';
    font-size: 100px;
    font-weight: 900;
    fill: #fff;
    alignment-baseline: middle;
    text-anchor: middle;
  }
  .count {
    font-family: 'Jost';
    font-size: 160px;
    font-weight: 900;
    fill: #fff;
    alignment-baseline: hanging;
    text-anchor: middle;
  }
  .hashtag {
    font-family: 'Jost';
    font-size: 90px;
    font-weight: 700;
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
    alignment-baseline: baseline;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/ThanksMessage/bg.jpg'],
        pos: 0,
        thanksMessage: 'DANKE',
        preposition: 'AN',
        count: '60 000',
        hashtag: '#HASHTAG',
        og: '',
        theme: {
          primary: ['#830037', '#ff006b'],
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
          // Megenta : Pastel
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICNGRjAwNUM7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#830037', '#ff006b'],
              secondary: ['#2e9575', '#43fec4']
            }
          },
          // Pastel : Magenta
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
      key: "thanksMessage",
      description: "Thanks Message",
      component: Text,
      //forceSVGRedraw: true,
      props: {}
    },
    {
      key: "preposition",
      description: "Preposition",
      component: Text,
      props: {}
    },
    {
      key: "count",
      description: "Count",
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
    }
  ];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
