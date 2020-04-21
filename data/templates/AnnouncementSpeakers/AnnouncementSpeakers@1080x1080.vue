<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">

    <defs>
      <GradientEditorFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="0.5"></GradientEditorFilter>
      <GradientEditorFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1"></GradientEditorFilter>
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
        <image v-scaleimage="pos[0]" x="0" y="0" width="1080" height="648" v-bind:xlink:href="images[0]" />
        <image v-scaleimage="pos[1]" x="0" y="432" width="1080" height="648" v-bind:xlink:href="images[1]" clip-path="url(#bounding-image2)" />
      </g>

      <line x1="0" y1="633" x2="1080" y2="417" style="stroke: #fff; stroke-width: 2px;"/>

      <g v-dynamic data-dynamic-width="400" data-dynamic-height="90" style="transform-origin: 1050px 20px;">
        <text class="title" x="1050" y="20" style="text-anchor: end;">
          {{ 'WEBINAR' }}
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
            {{ '18.04.' }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos[0]" x="0" y="0" width="1080" height="648" v-bind:xlink:href="images[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="400" data-dynamic-height="90" style="transform-origin: 1050px 200px;">
        <text class="time" x="1050" y="200" style="text-anchor: end;">
          {{ '15 UHR' }}
        </text>
      </g>

      <g v-dynamic data-dynamic-width="600" data-dynamic-height="300" style="transform-origin: 30px 490px;" ref="topic1">
        <MultiLine
                    x="30"
                    y="490"
                    relative="0 1"
                    padding="0"
                    align="left"
                    v-bind:text="['2020? 2030? 2040?', 'Was bedeuten Klimaziele?']"
                    lineheight="1.05"
                    background="none"
                    css="font-size: 50px; font-weight: 200; font-family: 'Jost'; fill: #fff;">
        </MultiLine>
      </g>


      <g>
        <text class="speaker-name" x="30" v-bind:y="bbox($refs.topic1).top - 40" style="text-anchor: start;">
          {{ 'MAJA GÖPEL' }}
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
            {{ '18.04.' }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos[1]" x="0" y="432" width="1080" height="648" v-bind:xlink:href="images[1]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="400" data-dynamic-height="90" style="transform-origin: 35px 770px;">
        <text class="time" x="35" y="770" style="text-anchor: start;">
          {{ '15 UHR' }}
        </text>
      </g>


      <g v-dynamic data-dynamic-width="600" data-dynamic-height="300" style="transform-origin: 1050px 1050px;" ref="topic2">
        <MultiLine
                    x="1050"
                    y="1050"
                    relative="1 1"
                    padding="0"
                    align="right"
                    v-bind:text="['Die Kohle hinter der Kohle -', 'Was, Wie, Warum Divestment?']"
                    lineheight="1.05"
                    background="none"
                    css="font-size: 50px; font-weight: 200; font-family: 'Jost'; fill: #fff;">
        </MultiLine>
      </g>


      <g>
        <text class="speaker-name" x="1050" v-bind:y="bbox($refs.topic2).top - 30" style="text-anchor: end;">
          {{ 'HEFFA STÜCKING' }}
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

  export default {
    name: "AnnouncementSpeakers",
    extends: SuperTemplate,
    data() {
      return {
        images: [
          'https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSpeakers/bg0.jpg',
          'https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSpeakers/bg1.jpg'
        ],
        pos: [0, 0],
        /*
            NOTE

            Pastel:
              Primary: #11532c -> #00d6b6
              Secondary: #128759 -> #1BF3D3

            Magenta:
              Primary: #610011 -> #FF002C
              Secondary: #a4001d -> #FF002C
        */
        theme: {
          primary: ['#130B60', '#445DFF'],
          secondary: ['#128759', '#1BF3D3']
        }
      }
    },
    components: FFFCIComponents
  }

  export const fields = [];
  export const type = "image";
  export const format = "jpg";
  export const smartActions = [];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
