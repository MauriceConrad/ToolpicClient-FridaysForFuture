<style scoped>
  @font-face {
    font-family: 'Jost-600';
    src: url('../../fonts/Jost/Jost-600-Semi.ttf');
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 1200" version="1.1">

    <rect x="0" y="0" width="100%" height="100%" style="fill: #fff;"/>

    <g v-dynamic data-dynamic-origin="none" data-dynamic-width="1100" data-dynamic-height="200" style="transform-origin: 50px 50px;">
      <text style="font-size: 95px; font-family: 'Jost-600'; fill: #1B7340;" x="50" y="50" alignment-baseline="hanging">
        {{ subtitle }}
      </text>
    </g>

    <g v-dynamic data-dynamic-origin="none" data-dynamic-width="1100" data-dynamic-height="700" style="transform-origin: 50px 180px;">
      <text style="font-size: 135px; font-family: 'Jost-600'; fill: #000;" x="50" v-bind:y="180 + (textInfo(line.toUpperCase(), { fontFamily: 'Jost-600', fontSize: '135px' }).height - 50) * title.indexOf(line)" alignment-baseline="hanging" v-for="line in title">
        {{ line }}
      </text>
    </g>

    <g v-dynamic data-dynamic-origin="none" data-dynamic-width="950" data-dynamic-height="100" style="transform-origin: 1150px 900px;">
      <text y="900" x="1150" style="font-size: 35px; font-family: 'Jost-600';" text-anchor="end" alignment-baseline="middle">
        {{ description }}
      </text>
    </g>

    <g v-dynamic data-dynamic-origin="none" data-dynamic-width="800" data-dynamic-height="150" style="transform-origin: 50px 1090px;">
      <text style="font-size: 95px; font-family: 'Jost-600'; fill: #1B7340;" x="50" y="1090" text-anchor="start" alignment-baseline="middle">
        {{ organisation }}
      </text>
    </g>

    <image v-bind:xlink:href="logo" x="1010" y="1010" height="150" width="150" />


  </svg>
</template>


<script>
  import { SuperTemplate } from 'toolpic';

  export default {
    name: "info",
    extends: SuperTemplate,
    data() {
      return {
        subtitle: 'FridaysForFuture fordert:',
        title: ["Einhaltung der", "Nettonull für", "Treibhausgase", "bis 2035."],
        description: 'AUS DEN “FORDERUNGEN FÜR DEN UMWELTSCHUTZ”',
        organisation: '#FridaysForFuture',
        logo: 'https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg'
      }
    }
  }
  import { Text, Textarea } from 'fields';

  export const fields = [
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
      key: "description",
      description: "Description",
      component: Text,
      props: {}
    },
    {
      key: "organisation",
      description: "Organisation",
      component: Text,
      props: {}
    }
  ];

  export const type = "image";
  export const format = "jpg";
  export const smartActions = [];
  export const alias = "Instagram";
  export const width = 1200;
  export const height = 1200;
</script>
