<style scoped>
  input {
    outline: none;
    font-size: 1em;
    padding: 6px 11px;
    border: none;
    margin: 6px 2px;
    border: 3px solid rgba(0, 0, 0, 0.9);
    border-radius: 17px;
    width: 100%;
    box-sizing: border-box;
    font-weight: 300;
  }
  input:focus {
    border-color: #359a52;

  }
  .wrapper {
    width: 100%;
  }
</style>

<template>
  <div class="wrapper">
    <input type="text" name="Input Field" v-model="value">
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
    props: [],
    data() {
      return {
        // 'value' is already here because of extended SuperComponent
        // Just use 'value' as SET ONLY
      }
    },
    methods: {

    },
    mounted() {

    }
  };
</script>
