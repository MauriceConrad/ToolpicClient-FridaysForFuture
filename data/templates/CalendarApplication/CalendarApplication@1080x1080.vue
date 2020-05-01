<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondaryAlternate" v-bind:gradient="theme.secondaryAlternate.join(' ')" opacity="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>

    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />

      <FFFTitleShader
                      v-bind:fill="theme.secondary"
                      opacity="0.85"
                      dynamic="1000 200"
                      origin="540px 30px"
                      offset="-9 -9"
                      stroke="#fff"
                      stroke-width="3.5">
        <template>
          <text class="title" x="540" y="30">
            {{ title }}
          </text>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <FFFTitleBox padding="12 30">
        <text x="540" y="210" class="month">
          {{ month }}
        </text>
      </FFFTitleBox>


      <g>
        <line x1="216" y1="270" x2="207" y2="950" class="calendar-line" />
        <line x1="420" y1="270" x2="440" y2="950" class="calendar-line" />
        <line x1="650" y1="270" x2="644" y2="950" class="calendar-line" />
        <line x1="860" y1="270" x2="872" y2="950" class="calendar-line" />

        <line x1="40" y1="490" x2="1040" y2="490" class="calendar-line" />
        <line x1="40" y1="720" x2="1040" y2="720" class="calendar-line" />
      </g>

      <g>
        <g v-for="(bounding, i) in itemBoundings">
          <defs>
            <clipPath v-bind:id="'calendar-item-clippath-' + i">
              <path v-bind:d="'M ' + [bounding.x + 10, bounding.y + 12].join(',') + ' l ' + [[bounding.width - 10, -12], [-5, bounding.height], [-bounding.width + 3, -7]].map(posArray => posArray.join(',')).join(' ')"/>
            </clipPath>
            <mask v-bind:id="'calendar-item-mask-' + i">
              <path v-bind:d="'M ' + [bounding.x + 10, bounding.y + 12].join(',') + ' l ' + [[bounding.width - 10, -12], [-5, bounding.height], [-bounding.width + 3, -7]].map(posArray => posArray.join(',')).join(' ')" style="fill: #fff;"/>
            </mask>
          </defs>
          <g v-bind:mask="'url(#calendar-item-mask-' + i + ')'">
            <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondaryAlternate)" />
          </g>

          <FFFTitleShader
                          v-bind:dynamic="(bounding.width - 25) + ' 80'"
                          v-bind:origin="(bounding.center.x + 5) + 'px ' + (bounding.y + 20) + 'px'"
                          offset="-2.5 -2.5"
                          stroke="#fff"
                          stroke-width="1.25">
            <template>
              <text class="date" v-bind:x="(bounding.center.x + 5)" v-bind:y="(bounding.y + 20)">
                {{ dates[i].date }}
              </text>
            </template>
            <template v-slot:shader>
              <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
            </template>
          </FFFTitleShader>

          <g v-dynamic v-bind:data-dynamic-width="bounding.width - 20" v-bind:data-dynamic-height="bounding.height - 90" v-bind:style="{ 'transform-origin': (bounding.center.x + 5) + 'px ' + (bounding.bottom - 20) + 'px' }">
            <MultiLine v-bind:x="(bounding.center.x)" v-bind:y="(bounding.bottom - 20)" relative="0.5 1" padding="0" align="center" v-bind:text="dates[i].description" lineheight="1.05" background="none" css="fill: #fff; font-size: 25px; font-weight: 600; font-family: 'Jost';"></MultiLine>
          </g>
        </g>
      </g>

      <g v-dynamic data-dynamic-width="800" data-dynamic-height="150" style="transform-origin: 40px 1030px;">
        <text class="hashtag" x="40" y="1030">
          {{ hashtag }}
        </text>
      </g>

      <g style="transform: translate(465px, 460px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.13);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>

    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";

  .month {
    font-family: 'Jost';
    font-weight: 800;
    font-size: 60px;
    text-anchor: middle;
    alignment-baseline: middle;
  }
  .hashtag {
    font-family: 'Jost';
    font-weight: 300;
    font-size: 60px;
    text-anchor: start;
    alignment-baseline: baseline;
    fill: #fff;
  }

  .date {
    font-family: 'Jost';
    font-weight: 900;
    font-size: 30px;
    fill: #fff;
    alignment-baseline: hanging;
    text-anchor: middle;
  }

  .title {
    font-weight: 900;
    font-family: 'Jost';
    alignment-baseline: hanging;
    text-anchor: middle;
    font-size: 130px;
    fill: #fff;
  }
  .calendar-line {
    stroke: #fff;
    stroke-width: 2px;
  }
  .item-bg {
    fill: #f00;

  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  const matrixIndexes = [
    [7],
    [6, 8],
    [2, 11, 13],
    [2, 6, 8, 12],
    [1, 3, 7, 11, 13],
    [0, 2, 4, 6, 8, 12],
    [1, 3, 5, 7, 9, 11, 13],
    [0, 2, 4, 6, 8, 10, 12, 14]
  ];

  const calendarMatrix = [
    [15, 270],
    [212, 270],
    [433, 270],
    [650, 270],
    [860, 270],

    [15, 490],
    [212, 490],
    [433, 490],
    [650, 490],
    [860, 490],

    [15, 720],
    [212, 720],
    [433, 720],
    [650, 720],
    [860, 720]
  ];

  const calendarItemBoundings = {
    width: 210,
    height: 230
  };

  export default {
    name: "AnnouncementSpeakers",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/CalendarApplication/bg.jpg'],
        pos: 0,
        title: 'DEIN KLIMONAT!',
        month: 'MAI',
        hashtag: '#WirMachenDeinZeitplan',
        dates: [
          {
            date: '24.04.',
            description: ['GLOBALER', 'KLIMASTREIK']
          }
        ],
        og: '',
        theme: {
          primary: ['#20175A', '#7D93F8'],
          secondary: ['#2e9575', '#43fec4'],
          secondaryAlternate: ['#a40045', '#ff006b']
        }
      }
    },
    computed: {
      itemBoundings() {

        const indexes = matrixIndexes[this.dates.length - 1];

        const boundings = indexes.map((matrixIndex, i) => {
          const [ x, y ] = calendarMatrix[matrixIndex];
          return {
            i: matrixIndex,
            data: this.dates[i],
            width: calendarItemBoundings.width,
            height: calendarItemBoundings.height,
            x,
            y,
            center: {
              x: x + calendarItemBoundings.width / 2,
              y: y + calendarItemBoundings.height / 2,
            },
            bottom: y + calendarItemBoundings.height,
            right: x + calendarItemBoundings.width
          };
        });


        return boundings;
      }
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }
  import { Text, Textarea, Select, ImageSelect, Slider, Collection } from 'fields';
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
      props: {}
    },
    {
      key: "month",
      description: "Month",
      component: Text,
      props: {}
    },
    {
      key: "dates",
      description: "Dates",
      component: Collection,
      props: {
        btnAddLabel: 'Add Date',
        max: 8,
        fields: [
          {
            key: "date",
            description: "Date",
            component: Text,
            props: {}
          },
          {
            key: "description",
            description: 'Description',
            component: Textarea,
            props: {
              rows: 'auto'
            }
          }
        ]
      }
    },
    {
      key: "hashtag",
      description: "Subtitle",
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
