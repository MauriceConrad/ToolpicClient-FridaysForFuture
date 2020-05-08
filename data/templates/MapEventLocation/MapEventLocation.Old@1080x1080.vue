<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <g style="transform: translate(0, 250px);">
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
            <rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.secondary}"/>
          </template>
        </FFFTitleShader>

        <g v-dynamic data-dynamic-width="900" data-dynamic-height="90" style="transform-origin: 540px 580px;">
          <FFFTitleBox padding="12 30 18">
            <text x="540" y="580" class="location-name">
              {{ locationName }}
            </text>
          </FFFTitleBox>
        </g>

        <g v-dynamic data-dynamic-width="900" data-dynamic-height="60" style="transform-origin: 540px 670px;">
          <text class="location-address" x="540" y="670">
            {{ locationAddress }}
          </text>
        </g>

      </g>

      <g>
        <defs>
          <clipPath id="area-secondary">
            <path d="M 0,0 L 1080,0 1080,450 L 0,250"/>
          </clipPath>
        </defs>
        <g clip-path="url(#area-secondary)">
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="450" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungPrimary)" />
        </g>


        <g style="transform-origin: 540px 30px;" v-dynamic data-dynamic-width="1000" data-dynamic-height="250">
          <MultiLine x="540" y="30" relative="0.5 0" padding="0" v-bind:text="title" align="center" lineheight="1.2" background="none" css="font-size: 120px; font-weight: 900; font-family: 'Jost'; fill: #fff;"></MultiLine>
        </g>



        <g style="transform-origin: 1060px 310px;" v-dynamic data-dynamic-width="300" data-dynamic-height="90">
          <text x="1060" y="310" class="text-date">
            {{ date }}
          </text>
        </g>
        <g style="transform-origin: 1060px 340px;" v-dynamic data-dynamic-width="220" data-dynamic-height="80">
          <text x="1060" y="340" class="text-time">
            {{ time }}
          </text>
        </g>
      </g>

      <g style="transform: translate(445px, 445px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.158);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>
    </g>

  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";

  .text-date {
    font-family: 'Jost';
    font-weight: 500;
    font-size: 60px;
    fill: #fff;
    alignment-baseline: baseline;
    text-anchor: end;
  }
  .text-time {
    font-family: 'Jost';
    font-weight: 200;
    font-size: 60px;
    fill: #fff;
    alignment-baseline: hanging;
    text-anchor: end;
  }
  .location-name {
    font-family: 'Jost';
    font-weight: 700;
    font-size: 80px;
    fill: #fff;
    alignment-baseline: hanging;
    text-anchor: middle;
  }
  .location-address {
    font-family: 'Jost';
    font-weight: 300;
    font-size: 60px;
    fill: #fff;
    alignment-baseline: hanging;
    text-anchor: middle;
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
        location: [8.268072198615414, 50.00378504540029],
        zoom: 16,
        bearing: 0,
        locationName: 'LANDESMUSEUM',
        locationAddress: 'Große Bleiche, 55118 Mainz',
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/MapEventLocation/bg.jpg'],
        pos: 0,
        title: ['“GROßE', 'FILMVORFÜHRUNG”'],
        date: '18.09.2020',
        time: '19:00',
        og: '',
        theme: {
          mapStyle: 'maurice-conrad/ck92zkw9h2dt71ip90h9hbz1u',
          primary: ['#226c55', '#3dcc9f'],
          secondary: '#FF005C'
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
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }
  import { Text, Textarea, Select, ImageSelect, Slider, Location } from 'fields';
  export const fields = [
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
      key: "locationAddress",
      description: "Location Address",
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
