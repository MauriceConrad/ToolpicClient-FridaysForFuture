<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">

    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>

    </defs>

    <g clip-path="url(#bounding)">
      <g filter="url(#FFFVerlaufsumsetzungPrimary)">
        <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" />
      </g>

      <g v-dynamic data-dynamic-width="700" data-dynamic-height="130" style="transform-origin: 1050px 20px;">
        <text class="title" x="1050" y="20" style="text-anchor: end;">
          {{ title }}
        </text>
      </g>

      <FFFTitleShader
                      v-bind:fill="theme.secondary"
                      opacity="0.85"
                      dynamic="500 200"
                      origin="1055px 130px"
                      offset="-6 -6"
                      stroke="#fff"
                      stroke-width="2.5">
        <template>
          <text class="date" x="1055" y="130" style="text-anchor: end;">
            {{ date }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="648" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="400" data-dynamic-height="120" style="transform-origin: 1050px 280px;">
        <text class="time" x="1050" y="280" style="text-anchor: end;">
          {{ time }}
        </text>
      </g>

      <g ref="topic">
        <g v-dynamic data-dynamic-width="800" data-dynamic-height="500" style="transform-origin: 30px 1040px;">
          <MultiLine
                      x="30"
                      y="1040"
                      relative="0 1"
                      padding="0"
                      align="left"
                      v-bind:text="description"
                      lineheight="1.05"
                      background="none"
                      css="font-size: 50px; font-weight: 200; font-family: 'Jost'; fill: #fff;">
          </MultiLine>
        </g>
      </g>


      <g v-dynamic data-dynamic-width="800" data-dynamic-height="150" v-bind:style="{ 'transform-origin': '30px ' + (bbox($refs.topic).top - 40) + 'px' }">
        <text class="speaker-name" x="30" v-bind:y="bbox($refs.topic).top - 40" style="text-anchor: start;">
          {{ speakername }}
        </text>
      </g>


    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";

  .speaker-name {
    alignment-baseline: baseline;
    font-size: 60px;
    font-family: 'Jost';
    font-weight: 600;
    fill: #fff;
  }

  .title {
    alignment-baseline: hanging;
    font-size: 70px;
    font-family: 'Jost';
    font-weight: 900;
    fill: #fff;
  }
  .date {
    alignment-baseline: hanging;
    font-size: 90px;
    font-family: 'Jost';
    font-weight: 900;
    fill: #fff;
  }
  .time {
    alignment-baseline: hanging;
    font-size: 60px;
    font-family: 'Jost';
    font-weight: 700;
    fill: none;
    stroke-width: 2.5px;
    stroke: #fff;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSingleSpeaker/bg.jpg'],
        pos: 0,
        title: 'WEBINAR',
        date: '19.03.',
        time: '15 UHR',
        description: ['Die Situation auf Lesbos'],
        speakername: 'ERIK MARQUARDT',
        theme: {
          primary: ['#20175A', '#7D93F8'],
          secondary: ['#2e9575', '#43fec4']
        }
      }
    },
    components: FFFCIComponents
  }

  import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';

  export const fields = [
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
      key: "title",
      description: "Title",
      component: Text,
      props: {}
    },
    {
      key: "date",
      description: "Date",
      component: Text,
      props: {}
    },
    {
      key: "time",
      description: "Time",
      component: Text,
      props: {}
    },
    {
      key: "speakername",
      description: "Speaker Name",
      component: Text,
      props: {}
    },
    {
      key: "description",
      description: "Talk Description",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
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
