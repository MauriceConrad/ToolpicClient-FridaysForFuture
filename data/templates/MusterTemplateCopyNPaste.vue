<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <circle cx="540" cy="540" r="500" style="fill: #f00;" />
  </svg>
</template>


<style scoped>

</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  export default {
    name: "AnnouncementSpeakers",
    extends: SuperTemplate,
    data() {
      return {

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
