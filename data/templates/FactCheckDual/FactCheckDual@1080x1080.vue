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

      <clipPath id="falseArea">
        <path d="M 0,0 L 1080,0 1080,280 0,700" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimaryAlternate)" clip-path="url(#falseArea)" />

      <g style="opacity: 0.25;">
        <svg x="50%" y="-10%" width="648" height="648" viewBox="0 0 548 534" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1.7144,0,0,2.27752,-1283.68,-90.7438)">
            <path d="M826.433,71.859L1003.13,242.182" style="fill:none;stroke:black;stroke-width:72.35px;"/>
            <path d="M791.296,225.354L1025.72,72.515" style="fill:none;stroke:black;stroke-width:72.35px;"/>
          </g>
        </svg>
        <svg x="-10%" y="35%" width="85%" height="85%" viewBox="0 0 968 639" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(1.32083,0,0,1.33895,32.0788,-978.266)">
            <path d="M48.269,961.196L171.154,1135.63L635.72,802.194" style="fill:none;stroke:black;stroke-width:144.12px;"/>
          </g>
        </svg>

      </g>


      <g v-dynamic data-dynamic-width="600" data-dynamic-height="800" style="transform-origin: 40px 40px;">
        <MultiLine x="40" y="40" relative="0 0" padding="0" v-bind:text="textToMultilineFormat(textFalse.join(' ').toUpperCase(), 0.8, 0.4, true)" align="left" lineheight="1.2" background="none" css="font-size: 60px; font-weight: 800; font-family: 'Jost'; fill: none; stroke: #fff; stroke-width: 3px;"></MultiLine>
      </g>


      <g v-dynamic data-dynamic-width="300" data-dynamic-height="100" style="transform-origin: 40px 500px;">
        <text x="40" y="500" class="text-false-description text-description">
          {{ textFalseDescription }}
        </text>
      </g>


      <FFFText
                x="1030"
                y="1040"
                relative="1 1"
                lineheight="1.2"
                align="right"
                dynamic="700 600"
                highlight-padding="0 3 0 26"
                v-bind:text="textToMultilineFormat(textTrue.join(' ').toUpperCase(), 1.1, 0.4, true)"
                css="font-size: 60px; font-weight: 800; font-family: 'Jost'; fill: #fff;">
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFText>

      <g v-dynamic data-dynamic-width="300" data-dynamic-height="150" style="transform-origin: 1040px 430px;">
        <text x="1040" y="430" class="text-true-description text-description">
          {{ textTrueDescription }}
        </text>
      </g>

      <g style="transform: translate(445px, -445px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.158);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>

    </g>

  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .text-description {
    font-size: 40px;
    font-weight: 500;
    font-style: italic;
    font-family: 'Jost';
    fill: #fff;
  }
  .text-false-description {
    alignment-baseline: baseline;
    text-anchor: start;
  }
  .text-true-description {
    alignment-baseline: hanging;
    text-anchor: end;
    font-style: normal;
    font-weight: 300;
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
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/FactCheckDual/bg.jpg'],
        pos: 0,
        textFalse: ['“FRIDAYS FOR', 'FUTURE SCHREIT', 'NUR HERUM UND', 'BIETET KEINE', 'LÖSUNGEN!”'],
        textFalseDescription: '- Wird häufig behauptet',
        textTrue: ['DIE', '*FORDERUNGEN*', 'VON FFF SIND', 'WISSENSCHAFTLICH', 'GEPRÜFT UND', '*UMSETZBAR*'],
        textTrueDescription: 'RICHTIG IST:',
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
      key: "textFalse",
      description: "Text False",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "textFalseDescription",
      description: "Text False Description",
      component: Text,
      props: {}
    },
    {
      key: "textTrue",
      description: "Text True",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "textTrueDescription",
      description: "Text True Description",
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
