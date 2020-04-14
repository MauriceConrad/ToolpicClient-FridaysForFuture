<style scoped>
  @import "https://cdn.jsdelivr.net/gh/JNKKKK/MoreToggles.css@0.2.1/output/moretoggles.min.css";

  .wrapper {
    margin: 10px 0;
    padding: 5px;
    display: flex;
  }
  .wrapper .toggle-description,
  .wrapper .toggle-description:before {
    display: inline-block;
    vertical-align: middle;
  }
  .wrapper .toggle-description:before {
    width: 0;
    height: 100%;
    content: " ";
  }
  .wrapper .toggle-description span {
    font-size: 1.1em;
    font-weight: 300;
  }
  .wrapper .toggle-description {
    flex: 1;
  }
  .wrapper .toggle-action {
    flex: none;
  }
</style>

<template>
  <div class="wrapper">
    <div class="toggle-description">
      <span>{{ description }}</span>
    </div>
    <div class="toggle-action">
      <div v-bind:class="[styleClass]">
        <input v-bind:id="randomId" type="checkbox" @change="update" ref="checkbox" v-model="value" />
        <label v-bind:for="randomId"></label>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  /*
    IMPORTANT: Please note, that the 'value' property is reserved by the SuperComponent and will be used to communicate with the application
    // Just use 'value' as SET ONLY
  */

  import { openFile } from '../../__helpers';

  import SuperComponent from '../../SuperComponent';

  export default {
    extends: SuperComponent,
    props: {
      styleClass: {
        type: String,
        default: 'mt-io-garden'
      },
      description: String
    },
    data() {
      return {
        // 'value' is already here because of extended SuperComponent
        // Just use 'value' as SET ONLY
        randomId: "toolpic-toggle-" + Date.now()
      }
    },
    methods: {
      update() {

      }
    },
    mounted() {

      //console.log("!!!");
    },
    computed: {

    },
    watch: {

    }
  };
</script>
