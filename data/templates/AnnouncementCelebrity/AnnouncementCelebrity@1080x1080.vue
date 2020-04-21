<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <GradientEditorFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1"></GradientEditorFilter>
      <GradientEditorFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1.2"></GradientEditorFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" />
      <rect x="0" y="0" width="1080" height="1080" style="fill: #20175A; opacity: 0.5;"/>

      <FFFTitleShader v-bind:fill="theme.secondary" opacity="0.85" dynamic="600 400" origin="1040px 850px" offset="-8 -8" stroke="#fff" stroke-width="4">
        <template>
          <MultiLine x="1040" y="850" relative="1 1" padding="0" align="right" v-bind:text="name" lineheight="1.05" background="none" css="font-size: 110px; font-weight: 900; font-family: 'Jost';"></MultiLine>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
        </template>
      </FFFTitleShader>

      <FFFText
                x="1040"
                y="870"
                relative="1 0"
                lineheight="1.1"
                align="right"
                dynamic="450 100"
                highlight-padding="0 3 0 18"
                v-bind:text="[description]"
                css="font-size: 50px; font-family: 'Jost'; font-weight: 500; fill: #fff;">
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFText>


      <text x="1040" y="1030" style="text-anchor: end; alignment-baseline: baseline; font-style: italic; font-size: 50px; font-family: 'Jost'; font-weight: 300; fill: #fff;">
        {{ info }}
      </text>

      <image xlink:href="https://cdn.fridaysforfuture.io/toolpic/assets/logo-transparent.svg" width="200" height="200" x="880" y="10" />

    </g>
  </svg>
</template>

<style scoped>
  @import "../../fonts/Jost/Jost.css";
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  export default {
    name: "AnnouncementCelebrity",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementCelebrity/bg.jpg'],
        pos: 0,
        name: [
          'MARC-UWE',
          'KLING'
        ],
        description: '*KLEINKÜNSTLER*',
        info: 'LIVE AM 24.04!',
        theme: {
          primary: ['#a4001d', '#FF002C'],
          secondary: ['#128759', '#1BF3D3']
        }
      }
    },
    components: FFFCIComponents
  }
  /*
      NOTE

      Pastel:
        Primary: #11532c -> #00d6b6
        Secondary: #128759 -> #1BF3D3

      Magenta:
        Primary: #610011 -> #FF002C
        Secondary: #a4001d -> #FF002C
  */
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
      key: "name",
      description: "Name",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "description",
      description: "Description",
      component: Text,
      props: {}
    },
    {
      key: "info",
      description: "Info",
      component: Text,
      props: {}
    }
  ];
  export const type ="image";
  export const format = "jpg";
  export const smartActions = [];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
