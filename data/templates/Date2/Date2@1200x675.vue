<style scoped>
  @font-face {
    font-family: 'Jost';
    src: url('../../fonts/Jost/Jost-500-Medium.ttf');
  }
  @font-face {
    font-family: 'Jost-700';
    src: url('../../fonts/Jost/Jost-700-Bold.ttf');
  }
  @font-face {
    font-family: 'Jost-400';
    src: url('../../fonts/Jost/Jost-400-Book.ttf');
  }
  svg {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 675" version="1.1">

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1200" height="675" />
      </clipPath>
    </defs>

    <g class="main" clip-path="url(#bounding)">
      <image v-scaleimage="pos" v-bind:xlink:href="image" x="0" y="0" height="675" width="1200" />
      <rect x="0" y="0" width="100%" height="100%" style="fill: #000; opacity: 0.3;" v-if="darken" />

      <g v-if="showDate">
        <g>
          <rect x="50" y="30" height="75" v-bind:width="textInfo(date, { fontFamily: 'Jost', fontSize: '70px'}).width + 50" style="fill: #000;" />
          <text x="75" y="90" style="font-size: 70px; font-family: 'Jost'; fill: #fff;">
            {{ date }}
          </text>
        </g>
        <g>
          <rect v-bind:x="50 + textInfo(date, { fontFamily: 'Jost', fontSize: '70px'}).width + 50 - ((textInfo(time, { fontFamily: 'Jost', fontSize: '70px'}).width + 50) / 3)" y="105" height="75" v-bind:width="textInfo(time, { fontFamily: 'Jost', fontSize: '70px'}).width + 50" style="fill: #fff;" />
          <text v-bind:x="75 + textInfo(date, { fontFamily: 'Jost', fontSize: '70px'}).width + 50 - ((textInfo(time, { fontFamily: 'Jost', fontSize: '70px'}).width + 50) / 3)" y="165" style="font-size: 70px; font-family: 'Jost'; fill: #000;">
            {{ time }}
          </text>
        </g>
        <g>
          <rect v-bind:x="1200 - 55 - (textInfo(location, { fontFamily: 'Jost', fontSize: '70px'}).width + 50)" y="495" height="75" v-bind:width="textInfo(location, { fontFamily: 'Jost', fontSize: '70px'}).width + 50" style="fill: #fff;" />
          <text v-bind:x="1200 - 35 - (textInfo(location, { fontFamily: 'Jost', fontSize: '70px'}).width + 50)" y="555" style="font-size: 70px; font-family: 'Jost'; fill: #000;">
            {{ location }}
          </text>
        </g>
        <g>
          <rect v-bind:x="1200 - 55 - (textInfo(location, { fontFamily: 'Jost', fontSize: '70px'}).width + 50) - ((textInfo(locationdetail, { fontFamily: 'Jost', fontSize: '70px'}).width + 50) / 3)" y="570" height="75" v-bind:width="textInfo(locationdetail, { fontFamily: 'Jost', fontSize: '70px'}).width + 50" style="fill: #000;" />
          <text v-bind:x="1200 - 35 - (textInfo(location, { fontFamily: 'Jost', fontSize: '70px'}).width + 50) - ((textInfo(locationdetail, { fontFamily: 'Jost', fontSize: '70px'}).width + 50) / 3)" y="630" style="font-size: 70px; font-family: 'Jost'; fill: #fff;">
            {{ locationdetail }}
          </text>
        </g>
      </g>




      <g v-dynamic data-dynamic-origin="none" data-dynamic-width="1050" data-dynamic-height="300" style="transform-origin: 50px 190px; text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);">
        <text x="50" y="265" style="font-family: 'Jost-400'; font-size: 55px; fill: #fff;">
          {{ subtitle }}
        </text>
        <g>
          <g v-for="line in title">
            <text x="50" v-bind:y="385 + title.indexOf(line) * 115" style="font-family: 'Jost-700'; font-size: 105px; fill: #fff;">
              {{ line }}
            </text>
          </g>
        </g>

      </g>


      <defs>
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="7"/>
          <feOffset dx="0" dy="10" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.6"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <image v-bind:xlink:href="logo" x="15" y="500" height="160" width="160" filter="url(#dropshadow)" />
    </g>
  </svg>
</template>

<script type="text/javascript">
  import animejs from 'animejs';

  import { SuperTemplate } from 'toolpic';

  export default {
    name: "date-2",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/Date/bg.jpg'],
        pos: 0,
        darken: false,
        showDate: true,
        date: '5. Juli',
        time: '10 Uhr',
        location: 'Bahnhofsplatz',
        locationdetail: 'Mainz',
        subtitle: 'Ideen tanken beim...',
        title: ['SOMMERKONGRESS'],
        logo: 'https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg'
      }
    },
    methods: {}
  };

  import { Text, Textarea, Select, ImageSelect, Toggle, Slider } from 'fields';
  export const fields = [
    {
      key: "pos",
      description: "Image Position",
      component: Slider,
      props: {
        min: -1,
        max: 1,
        step: 0.01
      }
    },
    {
      key: "image",
      description: "Background Image",
      component: ImageSelect,
      props: {
        width: 1200,
        height: 1200,
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
          },/*
          {
            type: "Pexels",
            label: "Pexels"
          }*/
        ]
      }
    },
    {
      key: "darken",
      description: null,
      component: Toggle,
      props: {
        description: "Verdunkeln",
        styleClass: 'mt-android'
      }
    },
    {
      key: "showDate",
      description: null,
      component: Toggle,
      props: {
        description: "Ort & Datum anzeigen",
        styleClass: 'mt-android'
      }
    },
    {
      key: "subtitle",
      description: "Subtitle",
      component: Text,
      props: {}
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
      description: "Datum",
      component: Text,
      props: {}
    },
    {
      key: "time",
      description: "Uhrzeit",
      component: Text,
      props: {}
    },
    {
      key: "location",
      description: "Ort",
      component: Text,
      props: {}
    },
    {
      key: "locationdetail",
      description: "Ort Info",
      component: Text,
      props: {}
    },
    {
      key: "logo",
      description: "Logo",
      component: Select,
      props: {
        items: [
          {
            render: "https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg",
            value: "https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg"
          },
          {
            render: "https://cdn.fridaysforfuture.io/toolpic/assets/logo-og.svg",
            value: "https://cdn.fridaysforfuture.io/toolpic/assets/logo-og.svg"
          }
        ],
        upload: true
      }
    }
  ];

  export const type ="image";
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
      name: "Verdunkelt",
      type: "Toggle",
      key: "darken",
      properties: {
        mode: "normal"
      }
    },
    {
      name: "Datum & Ort",
      type: "Toggle",
      key: "showDate",
      properties: {
        mode: "normal"
      }
    }
  ];
  export const alias = "Twitter";
  export const width = 1200;
  export const height = 675;

</script>
