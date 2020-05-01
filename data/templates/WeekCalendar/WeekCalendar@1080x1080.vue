<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
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
        <g v-for="day in weekDays">
          <FFFTitleShader v-bind:dynamic="(day.width - 60) + ' 150'" v-bind:origin="(day.x + 30) + 'px ' + (day.y + 30) + 'px'" offset="-8 -8" stroke="#fff" stroke-width="3">
            <template>
              <text v-bind:x="day.x + 30" v-bind:y="day.y + 30" class="date-label">
                {{ day.date.label }}
              </text>
            </template>
            <template v-slot:shader>
              <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
            </template>
          </FFFTitleShader>


          <Dynamic v-bind:width="day.width - 40" height="210" origin="0 0.1">
            <MultiLine v-bind:x="day.x + 20" v-bind:y="day.y + 150" relative="0 0" padding="0" v-bind:text="day.date.description" align="left" lineheight="1.1" background="none" css="font-size: 60px; font-weight: 600; font-family: 'Jost'; fill: #fff;"></MultiLine>
          </Dynamic>

          <Dynamic v-bind:width="day.width - 40" height="70" origin="0 0.8">
            <text v-bind:x="day.x + 20" v-bind:y="day.y + 353" class="date-location">
              {{ day.date.location }}
            </text>
          </Dynamic>

          <Dynamic v-bind:width="day.width - 40" height="70" origin="0 0.2">
            <text v-bind:x="day.x + 20" v-bind:y="day.y + 410" class="date-time">
              {{ day.date.time }}
            </text>
          </Dynamic>

        </g>
      </g>


      <Dynamic width="850" height="150" origin="0 0.8">
        <text x="30" y="1020" class="about">
          {{ about }}
        </text>
      </Dynamic>

      <g style="transform: translate(455px, 455px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.1375);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>
    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .date-location,
  .date-time {
    font-family: 'Jost';
    font-size: 60px;
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
    font-weight: 700;
    alignment-baseline: hanging;
    text-anchor: start;
  }
  .date-label {
    font-family: 'Jost';
    font-size: 100px;
    fill: #fff;
    font-weight: 900;
    alignment-baseline: hanging;
    text-anchor: start;
  }
  .about {
    font-family: 'Jost';
    font-weight: 800;
    fill: #fff;
    alignment-baseline: baseline;
    text-anchor: start;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "WeekCalendar",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/WeekCalendar/bg.jpg'],
        pos: 0,
        dates: [
          {
            label: 'MON',
            description: ['VORTRAG:', 'KLIMA &', 'FEMINISMUS'],
            location: 'HÖRSAAL 8',
            time: '12 UHR'
          },
          {
            label: 'DIN',
            description: ['FILM:', 'DIE ROTE', 'LINIE'],
            location: 'KINO 3',
            time: '18 UHR'
          },
          {
            label: 'MIT',
            description: ['SEMINAR:', 'AWARE-', 'NESS'],
            location: 'RAUM 0,2',
            time: '13 UHR'
          },
          {
            label: 'DON',
            description: ['DISKUSSION:', 'PINKER', 'SOZIALISMUS'],
            location: 'AREENA',
            time: '09 UHR'
          },
          {
            label: 'FRI',
            description: ['POETRY SLAM:', 'JAMI, ZYMNI', 'UND VIELE MEHR'],
            location: 'HÖRSAAL 8',
            time: '19:30 UHR'
          }
        ],
        about: 'MEHR INFOS: FUTU.RE/W4C',
        og: '',
        theme: {
          primary: ['#20175A', '#7D93F8'],
          secondary: ['#2e9575', '#43fec4']
        }
      }
    },
    computed: {
      weekDays() {
        const width = 1080;
        const height = 1080 - 150;
        return new this.GalleryMatrix(this.dates.length, height / width, 2, true, Number(false)).map((item, index) => {
          return {
            x: item.x * width,
            y: item.y * height,
            width: item.width * width,
            height: item.height * height,
            date: this.dates[index]
          }
        });
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
      key: "dates",
      description: "Dates",
      component: Collection,
      props: {
        btnAddLabel: 'Add Date',
        max: 6,
        fields: [
          {
            key: "label",
            description: "Label",
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
          },
          {
            key: "location",
            description: "Location",
            component: Text,
            props: {}
          },
          {
            key: "time",
            description: "Time",
            component: Text,
            props: {}
          }
        ]
      }
    },
    {
      key: "about",
      description: "About",
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
