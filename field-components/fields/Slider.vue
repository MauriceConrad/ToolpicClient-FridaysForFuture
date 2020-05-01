<style scoped>
  .wrapper {

  }
  input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    height: 3px;
    background-color: #328f4d;
    border-radius: 3px;
    padding: 0;
    margin: 25px 0;
    border: none;
    width: 100%;
  }
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    border: none;
  }
</style>

<template>
  <div class="wrapper">
    <input type="range" v-model="value" v-bind:max="max" v-bind:min="min" v-bind:step="step">
  </div>
</template>


<script type="text/javascript">
  /*
    IMPORTANT: Please note, that the 'value' property is reserved by the SuperComponent and will be used to communicate with the application
    // Just use 'value' as SET ONLY
  */
  import SuperComponent from '../SuperComponent';

  export default {
    extends: SuperComponent,
    props: ["min", "max", "step"],
    data() {
      return {

      }
    },
    mounted() {

    }
  }
</script>
