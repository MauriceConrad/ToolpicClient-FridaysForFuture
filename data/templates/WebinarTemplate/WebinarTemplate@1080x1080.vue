<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <circle cx="540" cy="540" r="500" style="fill: #f00;" />

    <Dynamic origin="0.5 0.5" width="1000" height="500">
      <text x="540" y="540" class="test-text">
        {{ message }}
      </text>
    </Dynamic>

    <rect x="0" y="0" v-bind:width="rectWidth" height="50" style="fill: #000;"/>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";

  .test-text {
    font-family: 'Jost';
    font-size: 60px;
    fill: #fff;
    alignment-baseline: middle;
    text-anchor: middle;
  }

</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  export default {
    name: "WebinareTemplate",
    extends: SuperTemplate,
    data() {
      return {
        message: 'Hallo Toolpic!',
        rectWidth: 100
      }
    },
    components: FFFCIComponents
  }
  import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';
  export const fields = [
    {
      key: 'message',
      description: "Unsere Test Nachricht",
      component: Text,
      props: {}
    },
    {
      key: "rectWidth",
      description: "Rect Width",
      component: Slider,
      props: {
        min: 0,
        max: 1080,
        step: 1
      }
    }
  ];
  export const type = "image";
  export const format = "jpg";
  export const smartActions = [];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
