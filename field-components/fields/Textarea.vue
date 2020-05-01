<style scoped>
  textarea {
    outline: none;
    font-size: 1em;
    padding: 6px 11px;
    margin: 6px 2px;
    border: 3px solid rgba(0, 0, 0, 0.9);
    width: 100%;
    font-weight: 300;
    border-radius: 17px;
    resize: none;
    box-sizing: border-box;
  }
  textarea:focus {
    border-color: #359a52;
  }
  .wrapper {
    width: 100%;
  }
</style>

<template>
  <div class="wrapper">
    <textarea name="Toolpic Textarea Field" @input="inputHandle" ref="input" v-bind:rows="this.rows === 'auto' ? this.rowsCount : this.rows" wrap="hard"></textarea>
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
    props: {
      rows: {
        default: 5
      }
    },
    data() {
      return {
        rowsCount: 1,
        // 'value' is already here because of extended SuperComponent
        // Just use 'value' as SET ONLY
      }
    },
    methods: {
      inputHandle() {
        const value = this.$refs.input.value;
        this.value = value.split("\n");
      }
    },
    mounted() {},
    watch: {
      value() {
        this.$refs.input.value = this.value.join("\n");
        this.rowsCount = this.value.length;
      }
    }
  };
</script>
