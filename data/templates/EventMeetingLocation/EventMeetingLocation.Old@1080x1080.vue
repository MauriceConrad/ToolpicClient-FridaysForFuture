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

      <g style="transform: translate(0, -150px);">
        <image v-bind:xlink:href="staticImageUrl" x="0" y="0" width="1080" height="1080"/>

        <FFFTitleShader offset="-12 -12" stroke="#fff" stroke-width="5">
          <template>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" x="365" y="190" width="350" height="350">
            	<g style="fill: #fff; transform-origin: 256px 256px; transform: scale(0.95);">
            		<path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
            	</g>
            </svg>
          </template>
          <template v-slot:shader>
            <rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.secondaryTrue }"/>
          </template>
        </FFFTitleShader>

        <g v-dynamic data-dynamic-width="900" data-dynamic-height="90" style="transform-origin: 540px 580px;">
          <FFFTitleBox padding="12 30">
            <text x="540" y="580" class="location-name">
              {{ locationName }}
            </text>
          </FFFTitleBox>
        </g>

      </g>

      <defs>
        <clipPath id="bounding2">
          <rect x="0" y="540" width="1080" height="540" />
        </clipPath>
      </defs>

      <g clip-path="url(#bounding2)">
        <image v-scaleimage="pos" x="0" y="540" width="1080" height="540" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
      </g>

      <g v-dynamic data-dynamic-width="1000" data-dynamic-height="300" style="transform-origin: 540px 570px;">
        <MultiLine x="540" y="570" relative="0.5 0" padding="0" v-bind:text="title" align="center" lineheight="1.05" background="none" css="font-size: 150px; font-weight: 900; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </g>

      <FFFTitleShader dynamic="540 200" origin="1050px 1030px" offset="-5 -5" stroke="#fff" stroke-width="2">
        <template>
          <text x="1050" y="1030" class="time">
            {{ time }}
          </text>
        </template>
        <template v-slot:shader>
          <!--<image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />-->
          <rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.secondaryTrue }"/>
        </template>
      </FFFTitleShader>

      <g v-dynamic data-dynamic-width="500" data-dynamic-height="220" style="transform-origin: 30px 1050px;">
        <MultiLine x="30" y="1050" relative="0 1" padding="0" v-bind:text="description" align="left" lineheight="1.05" background="none" css="font-size: 60px; font-style: italic; font-weight: 200; font-family: 'Jost'; fill: #fff;"></MultiLine>
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
  .location-name {
    font-family: 'Jost';
    font-weight: 900;
    font-size: 80px;
    fill: #fff;
    alignment-baseline: hanging;
    text-anchor: middle;
  }
  .time {
    font-family: 'Jost';
    font-weight: 900;
    font-size: 80px;
    fill: #fff;
    alignment-baseline: baseline;
    text-anchor: end;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "EventMeetingLocation",
    extends: SuperTemplate,
    data() {
      return {
        location: [8.259511022651054, 50.00152758659087],
        zoom: 15,
        bearing: 0,
        locationName: 'BAHNHOFSPLATZ',
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/EventMeetingLocation/bg.jpg'],
        pos: 0,
        title: ['DEMO', 'TREFFPUNKT'],
        time: '12:00',
        description: ['Mainz', 'Bahnhofsplatz', '(vor dem Eingang)'],
        og: '',
        theme: {
          mapStyle: 'maurice-conrad/ck92zkw9h2dt71ip90h9hbz1u',
          primary: ['#226c55', '#3dcc9f'],
          secondary: ['#a40045', '#ff006b'],
          secondaryTrue: '#FF005C'
        }
      }
    },
    computed: {
      staticImageUrl() {
        const mapboxAccessToken = 'pk.eyJ1IjoibWF1cmljZS1jb25yYWQiLCJhIjoiY2lpM25jbXVpMDExZXQ4bTBmYzd5cjBhbSJ9.zW17SmAFJRJPf8VjAxpang';
        // https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4241,37.78,14.25,0,60/600x600?access_token=pk.eyJ1IjoiZnJpZGF5c2ZvcmZ1dHVyZSIsImEiOiJjazljeDA0ODAwN2owM2RuczVyZ244bDVqIn0.aS4lm1KtKB7RjNKu1LQVbA
        // mapbox://styles/maurice-conrad/ck92zkw9h2dt71ip90h9hbz1u
        const pitch = 60;
        const size = {
          width: 540,
          height: 540
        };



        return 'https://api.mapbox.com/styles/v1/' + this.theme.mapStyle + '/static/' + this.location.join(',') + ',' + this.zoom + ',' + this.bearing + ',' + pitch + '/' + size.width + 'x' + size.height + '@2x?access_token=' + mapboxAccessToken;
      }
    },
    mounted() {
      console.log(this.staticImageUrl);
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }

  import { Text, Textarea, Select, ImageSelect, Slider, Location } from 'fields';

  export const fields = [
    {
      key: "theme",
      description: "Theme",
      component: Select,
      props: {
        items: [
          // Violett
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              mapStyle: 'maurice-conrad/ck92zkw9h2dt71ip90h9hbz1u',
              primary: ['#226c55', '#3dcc9f'],
              secondary: ['#a40045', '#ff006b'],
              secondaryTrue: '#FF005C'
            }
          },
          // Magenta
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICNGRjAwNUM7IiAvPgo8L3N2Zz4=",
            value: {
              mapStyle: 'maurice-conrad/ck9d8oq3e0mfq1in0y76xc3ht',
              primary: ['#20175A', '#7D93F8'],
              secondary: ['#2e9575', '#43fec4'],
              secondaryTrue: '#3dcc9f'
            }
          }
        ]
      }
    },
    {
      key: "location",
      description: "Location",
      component: Location,
      props: {
        zoom: 12,
        accessToken: 'pk.eyJ1IjoibWF1cmljZS1jb25yYWQiLCJhIjoiY2lpM25jbXVpMDExZXQ4bTBmYzd5cjBhbSJ9.zW17SmAFJRJPf8VjAxpang'
      }
    },
    {
      key: "zoom",
      description: "Zoom Level",
      component: Slider,
      props: {
        min: 15,
        max: 17,
        step: 0.1
      }
    },
    {
      key: "bearing",
      description: "Bearing",
      component: Slider,
      props: {
        min: 0,
        max: 359,
        step: 5
      }
    },
    {
      key: "locationName",
      description: "Location Name",
      component: Text,
      props: {}
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
        width: 540,
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
      key: "time",
      description: "Time",
      component: Text,
      forceSVGRedraw: true,
      props: {}
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
    },
    {
      name: "Bearing",
      type: "Number",
      key: "bearing",
      properties: {
        min: 0,
        max: 359,
        step: 5
      }
    },
    {
      name: "Zoom",
      type: "Number",
      key: "zoom",
      properties: {
        min: 15,
        max: 17,
        step: 0.1
      }
    }
  ];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
