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

      <clipPath id="bounding-image2">
        <polygon points="0,648 1080,432 1080,1080 0,1080"/>
      </clipPath>

    </defs>

    <g clip-path="url(#bounding)">
      <g filter="url(#FFFVerlaufsumsetzungPrimary)">
        <image v-scaleimage="pos0" x="0" y="0" width="1080" height="648" v-bind:xlink:href="images[0]" />
        <g clip-path="url(#bounding-image2)">
          <image v-scaleimage="pos1" x="0" y="432" width="1080" height="648" v-bind:xlink:href="images[1]" />
        </g>
      </g>

      <line x1="0" y1="648" x2="1080" y2="432" style="stroke: #fff; stroke-width: 2px;"/>

      <g v-dynamic data-dynamic-width="700" data-dynamic-height="90" style="transform-origin: 1050px 20px;">
        <text class="title" x="1050" y="20" style="text-anchor: end;">
          {{ title }}
        </text>
      </g>

      <FFFTitleShader
                      v-bind:fill="theme.secondary"
                      opacity="0.85"
                      dynamic="500 130"
                      origin="1055px 100px"
                      offset="-6 -6"
                      stroke="#fff"
                      stroke-width="2.5">
        <template>
          <text class="date" x="1055" y="100" style="text-anchor: end;">
            {{ date1 }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos0" x="0" y="0" width="1080" height="648" v-bind:xlink:href="images[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="400" data-dynamic-height="90" style="transform-origin: 1050px 200px;">
        <text class="time" x="1050" y="200" style="text-anchor: end;">
          {{ time1 }}
        </text>
      </g>

      <g ref="topic1">
        <g v-dynamic data-dynamic-width="600" data-dynamic-height="300" style="transform-origin: 30px 490px;">
          <MultiLine
                      x="30"
                      y="490"
                      relative="0 1"
                      padding="0"
                      align="left"
                      v-bind:text="description1"
                      lineheight="1.05"
                      background="none"
                      css="font-size: 50px; font-weight: 200; font-family: 'Jost'; fill: #fff;">
          </MultiLine>
        </g>
      </g>


      <g>
        <text class="speaker-name" x="30" v-bind:y="bbox($refs.topic1).top - 40" style="text-anchor: start;">
          {{ speakername1 }}
        </text>
      </g>



      <FFFTitleShader
                      v-bind:fill="theme.secondary"
                      opacity="0.85"
                      dynamic="500 130"
                      origin="40px 670px"
                      offset="-6 -6"
                      stroke="#fff"
                      stroke-width="2.5">
        <template>
          <text class="date" x="40" y="670" style="text-anchor: start;">
            {{ date2 }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos1" x="0" y="432" width="1080" height="648" v-bind:xlink:href="images[1]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="400" data-dynamic-height="90" style="transform-origin: 35px 770px;">
        <text class="time" x="35" y="770" style="text-anchor: start;">
          {{ time2 }}
        </text>
      </g>


      <g v-dynamic data-dynamic-width="600" data-dynamic-height="300" style="transform-origin: 1050px 1050px;" ref="topic2">
        <MultiLine
                    x="1050"
                    y="1050"
                    relative="1 1"
                    padding="0"
                    align="right"
                    v-bind:text="description2"
                    lineheight="1.05"
                    background="none"
                    css="font-size: 50px; font-weight: 200; font-family: 'Jost'; fill: #fff;">
        </MultiLine>
      </g>


      <g>
        <text class="speaker-name" x="1050" v-bind:y="bbox($refs.topic2).top - 30" style="text-anchor: end;">
          {{ speakername2 }}
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
        images: [
          'https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSpeakers/bg0.jpg',
          'https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSpeakers/bg1.jpg'
        ],
        pos0: 0,
        pos1: 0,
        title: 'WEBINAR',
        date1: '18.04.',
        time1: '15 UHR',
        description1: ['2020? 2030? 2040?', 'Was bedeuten Klimaziele?'],
        speakername1: 'MAJA GÖPEL',
        date2: '18.04.',
        time2: '17 UHR',
        description2: ['Die Kohle hinter der Kohle -', 'Was, Wie, Warum Divestment?'],
        speakername2: 'HEFFA STÜCKING',
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
      key: "images",
      description: "Background",
      component: ImageSelect,
      props: {
        width: 1080,
        height: 700,
        convertToJPG: true,
        max: 2,
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
          },/*
          {
            type: "Pexels",
            label: "Pexels"
          }*/
        ]
      }
    },
    {
      key: "pos0",
      description: "Background Position 1",
      component: Slider,
      props: {
        min: -1,
        max: 1,
        step: 0.1
      }
    },
    {
      key: "pos1",
      description: "Background Position 2",
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
      key: "date1",
      description: "Date 1",
      component: Text,
      props: {}
    },
    {
      key: "time1",
      description: "Time 1",
      component: Text,
      props: {}
    },
    {
      key: "speakername1",
      description: "Speaker Name 1",
      component: Text,
      props: {}
    },
    {
      key: "description1",
      description: "Talk Description 1",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "date2",
      description: "Date 2",
      component: Text,
      props: {}
    },
    {
      key: "time2",
      description: "Time 2",
      component: Text,
      props: {}
    },
    {
      key: "speakername2",
      description: "Speaker Name 2",
      component: Text,
      props: {}
    },
    {
      key: "description2",
      description: "Talk Description 2",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    }
  ];
  export const type = "image";
  export const format = "jpg";
  export const smartActions = [
    {
      name: "Position 1",
      type: "Number",
      key: "pos0",
      properties: {
        min: 0,
        max: 1,
        step: 0.01
      }
    },
    {
      name: "Position 2",
      type: "Number",
      key: "pos1",
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
