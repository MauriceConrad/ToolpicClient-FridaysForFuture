<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimaryAlternate" v-bind:gradient="theme.primaryAlternate.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>

      <clipPath id="bounding-area-secondary">
        <polygon points="950,0 1080,0 1080,1080 540,1080"/>
      </clipPath>

    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
      <g clip-path="url(#bounding-area-secondary)">
        <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimaryAlternate)" />
      </g>


      <FFFTitleShader dynamic="780 400" origin="40px 40px" offset="-10 -10" stroke="#fff" stroke-width="3">
        <template>
          <MultiLine x="40" y="40" relative="0 0" padding="0" align="left" v-bind:text="title" lineheight="1.05" background="none" css="font-size: 150px; font-weight: 900; font-family: 'Jost';"></MultiLine>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>


      <g v-dynamic data-dynamic-width="530" data-dynamic-height="300" style="transform-origin: 30px 890px;">
        <text class="date" x="30" y="890">
          {{ date }}
        </text>
      </g>
      <g v-dynamic data-dynamic-width="490" data-dynamic-height="80" style="transform-origin: 30px 940px;">
        <text class="location" x="30" y="940">
          {{ location }}
        </text>
      </g>
      <g v-dynamic data-dynamic-width="470" data-dynamic-height="80" style="transform-origin: 30px 1040px;">
        <text class="location-detail" x="30" y="1040">
          {{ locationDetail }}
        </text>
      </g>

      <g>
        <g v-dynamic data-dynamic-width="300" data-dynamic-height="90" style="transform-origin: 1060px 700px;">
          <text class="topic-label" x="1060" y="700">
            {{ topicLabel }}
          </text>
        </g>

        <g v-dynamic data-dynamic-width="400" data-dynamic-height="310" style="transform-origin: 1050px 760px;">
          <MultiLine x="1060" y="760" relative="1 0" padding="0" align="right" v-bind:text="topics" lineheight="1.2" background="none" css="font-size: 50px; font-weight: 400; font-style: italic; font-family: 'Jost'; fill: #fff;"></MultiLine>
        </g>
      </g>

      <g style="transform: translate(465px, -460px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.13);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>

    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .topic-label {
    font-family: 'Jost';
    font-weight: 600;
    fill: #fff;
    font-size: 70px;
    text-anchor: end;
    alignment-baseline: baseline;
  }
  .date {
    font-family: 'Jost';
    font-weight: 200;
    fill: #fff;
    font-size: 120px;
    text-anchor: start;
    alignment-baseline: baseline;
  }
  .location {
    font-family: 'Jost';
    font-weight: 400;
    fill: #fff;
    font-size: 50px;
    text-anchor: start;
    alignment-baseline: hanging;
  }
  .location-detail {
    font-family: 'Jost';
    font-weight: 300;
    fill: #fff;
    font-size: 50px;
    text-anchor: start;
    alignment-baseline: baseline;
    font-style: italic;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/OpenInternalEvent/bg.jpg'],
        pos: 0,
        title: ['OFFENES', 'PLENUM'],
        date: '02.08',
        location: 'ABGEORDNETENHAUS',
        locationDetail: 'RAUM 442, 15:00 UHR',
        topicLabel: 'THEMEN:',
        og: '',
        topics: [
          '- Schlafen',
          '- How to: Kritik',
          '- Feminismus & Klimakrise',
          '- OG Ingelheim enteignen'
        ],
        theme: {
          primary: ['#20175A', '#7D93F8'],
          primaryAlternate: ['#226c55', '#3dcc9f'],
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
      component: Text,
      props: {}
    },
    {
      key: "locationDetail",
      description: "Location Detail",
      component: Text,
      props: {}
    },
    {
      key: "topicLabel",
      description: "Topic Label",
      component: Text,
      props: {}
    },
    {
      key: "topics",
      description: "Topics",
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
