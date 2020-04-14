<style scoped>
  .source-component-upload {
    height: 100%;
    width: 100%;
  }
  button {
    --size: 120px;
    position: absolute;
    left: calc(50% - (var(--size) / 2));
    top: calc(50% - (var(--size) / 2));
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    overflow: hidden;
    box-sizing: border-box;
    border: 3px solid #256938;
    background-color: #2f8247;
    position: relative;
    padding: 30px;
    cursor: pointer;
  }
  button > svg {

  }
  button:hover {
    background-color: #287d41;
  }
</style>


<template>
  <div class="source-component-upload">
    <button @click="selectFile">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g style="fill: #fff;">
          <path d="M490.667,362.667c-5.888,0-10.667,4.779-10.667,10.667V480c0,5.867-4.779,10.667-10.667,10.667H42.667 C36.779,490.667,32,485.867,32,480V373.333c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667V480 c0,17.643,14.357,32,32,32h426.667c17.643,0,32-14.357,32-32V373.333C501.333,367.445,496.555,362.667,490.667,362.667z"/>
          <path d="M256,0c-5.888,0-10.667,4.779-10.667,10.667V416c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667V10.667 C266.667,4.779,261.888,0,256,0z"/>
          <path d="M391.552,131.136l-128-128c-4.16-4.16-10.923-4.16-15.083,0l-128,128c-4.16,4.16-4.16,10.923,0,15.083 c4.16,4.16,10.923,4.16,15.083,0L256,25.749l120.448,120.469c2.091,2.069,4.821,3.115,7.552,3.115 c2.731,0,5.461-1.045,7.552-3.115C395.712,142.059,395.712,135.296,391.552,131.136z"/>
        </g>
      </svg>
    </button>
  </div>
</template>

<script type="text/javascript">
  import { openFile } from '../../../__helpers';

  export default {
    name: "Uploader",
    props: ["sourceName", "width", "height", "convertToJPG"],
    data() {
      return {

      }
    },
    methods: {
      async selectFile() {
        console.log(this.convertToJPG);
        const file = await openFile({
          width: this.width,
          height: this.height,
          convertToJPG: this.convertToJPG
        });
        this.$emit("file", file);
      }
    },
    mounted() {

    }
  }
</script>
