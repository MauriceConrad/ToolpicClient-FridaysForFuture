<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimaryAlternate" v-bind:gradient="theme.primaryAlternate.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
      <clipPath id="bounding-area-alternate">
        <rect x="0" y="800" width="1080" height="280" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />

      <g clip-path="url(#bounding-area-alternate)">
        <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimaryAlternate)" />
      </g>


      <g>
        <FFFTitleShader dynamic="1000 400" origin="540px 60px" offset="-10 -10" stroke="#fff" stroke-width="4">
          <template>
            <MultiLine x="540" y="60" relative="0.5 0" padding="0 0 " align="center" v-bind:text="title" lineheight="1.1" background="none" css="font-size: 150px; font-weight: 900; font-family: 'Jost';"></MultiLine>
          </template>
          <template v-slot:shader>
            <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
          </template>
        </FFFTitleShader>
      </g>

      <g v-dynamic data-dynamic-width="1000" data-dynamic-height="300" style="transform-origin: 540px 450px;">
        <MultiLine x="540" y="450" relative="0.5 0" padding="0 0 " align="center" v-bind:text="textToMultilineFormat(description.join(' '), 0.3, 0.4, true)" lineheight="1.05" background="none" css="font-size: 50px; font-weight: 200; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </g>

      <g>
        <g v-dynamic data-dynamic-width="250" data-dynamic-height="80" style="transform-origin: 30px 880px;">
          <text x="30" y="880" class="entry-label">
            {{ ibanLabel }}
          </text>
        </g>
        <g v-dynamic data-dynamic-width="550" data-dynamic-height="80" style="transform-origin: 830px 880px;">
          <text x="830" y="880" class="entry-value">
            {{ ibanValue }}
          </text>
        </g>
      </g>
      <g>
        <g v-dynamic data-dynamic-width="250" data-dynamic-height="80" style="transform-origin: 30px 960px;">
          <text x="30" y="960" class="entry-label">
            {{ bicLabel }}
          </text>
        </g>
        <g v-dynamic data-dynamic-width="550" data-dynamic-height="80" style="transform-origin: 830px 960px;">
          <text x="830" y="960" class="entry-value">
            {{ bicValue }}
          </text>
        </g>
      </g>
      <g>
        <g v-dynamic data-dynamic-width="250" data-dynamic-height="80" style="transform-origin: 30px 1040px;">
          <text x="30" y="1040" class="entry-label">
            {{ paypalLabel }}
          </text>
        </g>
        <g v-dynamic data-dynamic-width="550" data-dynamic-height="80" style="transform-origin: 830px 1040px;">
          <text x="830" y="1040" class="entry-value" style="font-weight: 300; font-style: italic;">
            {{ paypalValue }}
          </text>
        </g>
      </g>

      <g style="transform: translate(430px, 420px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.185);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>
    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .entry-label {
    font-family: 'Jost';
    font-weight: 700;
    font-size: 80px;
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
    alignment-baseline: middle;
    text-anchor: start;
  }
  .entry-value {
    font-family: 'Jost';
    font-weight: 700;
    font-size: 80px;
    fill: #fff;

    alignment-baseline: middle;
    text-anchor: end;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/SupportCampaign/bg.jpg'],
        pos: 0,
        title: ['UNTERSTÜTZ', 'UNS!'],
        description: ['Für den nächsten globalen', 'Klimastreik benötigen wir noch', 'finanzielle Unterstützung.', 'Du kannst uns dabei helfen!'],
        ibanLabel: 'IBAN',
        ibanValue: 'DEXXXXXXXXXXXXXXX',
        bicLabel: 'BIC',
        bicValue: 'XXXXXXXX',
        paypalLabel: 'PAYPAL',
        paypalValue: 'paypal.me/fffmainz',
        og: '',
        theme: {
          primary: ['#226c55', '#3dcc9f'],
          primaryAlternate: ['#20175A', '#7D93F8'],
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
      key: "theme",
      description: "Theme",
      component: Select,
      props: {
        items: [
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#226c55', '#3dcc9f'],
              primaryAlternate: ['#20175A', '#7D93F8'],
              secondary: ['#a40045', '#ff006b']
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#20175A', '#7D93F8'],
              primaryAlternate: ['#226c55', '#3dcc9f'],
              secondary: ['#2e9575', '#43fec4']
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
      key: "description",
      description: "Description",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "ibanLabel",
      description: "IBAN Label",
      component: Text,
      props: {}
    },
    {
      key: "ibanValue",
      description: "IBAN Value",
      component: Text,
      props: {}
    },
    {
      key: "bicLabel",
      description: "BIC Label",
      component: Text,
      props: {}
    },
    {
      key: "bicValue",
      description: "BIC Value",
      component: Text,
      props: {}
    },
    {
      key: "paypalLabel",
      description: "PayPal Label",
      component: Text,
      props: {}
    },
    {
      key: "paypalValue",
      description: "PayPal Value",
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
