<style scoped>
  .wrapper {
    width: 100%;
  }
  .wrapper ul {
    list-style: none;
    margin: 5px 0;
    padding: 0;
  }
  .wrapper ul li {
    display: inline-block !important;
    width: 80px;
    height: 80px;
    margin: 0 5px;
    cursor: pointer;
    padding: 3px;
    border: 3px solid transparent;
    vertical-align: middle;
  }
  .wrapper ul .select-item {
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 0, 0, 0.6);
    border-radius: 7px;
  }
  .wrapper ul .select-item.active {
    border-color: #359a52;
  }
  .wrapper ul li .render-container {
    max-width: 100%;
    max-height: 100%;
  }
  .wrapper ul .btn-item {
    position: relative;
  }
  .wrapper ul .btn-item .btn {
    --size: 80px;
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
  }
  .wrapper ul .btn-item .btn:hover {

  }
  .wrapper ul .btn-item .btn > * {
    position: absolute;
  }
  .wrapper ul .btn-item .btn .bg {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(3px) grayscale(100%);
  }
  .wrapper ul .btn-item .btn.has-bg .bg {
    filter: blur(3px) grayscale(0%);
  }
  .wrapper ul .btn-item .btn .icon {
    width: 60%;
    height: 60%;
    left: 20%;
    top: 20%;

  }
  .wrapper ul .btn-item .btn.has-bg .icon {
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.7));
  }
</style>

<template>
  <div class="wrapper">
    <ul>
      <li v-for="(item, index) in items" class="select-item" v-bind:class="{ active: index === activeItemIndex }" @click="activeItemIndex = index">
        <img class="render-container" v-bind:src="item.render" alt="Item">
      </li>
      <li class="btn-item" @click="uploadFile">
        <div class="btn" v-bind:class="{ 'has-bg': activeItemIndex === 'file' }">
          <div class="bg" v-bind:style="{ 'background-image': selectedFile ? `url('${ selectedFile.data }')` : 'none' }"></div>
          <div class="icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            	<g style="fill: #fff;">
            		<path d="M490.667,362.667c-5.888,0-10.667,4.779-10.667,10.667V480c0,5.867-4.779,10.667-10.667,10.667H42.667 C36.779,490.667,32,485.867,32,480V373.333c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667V480 c0,17.643,14.357,32,32,32h426.667c17.643,0,32-14.357,32-32V373.333C501.333,367.445,496.555,362.667,490.667,362.667z"/>
            		<path d="M256,0c-5.888,0-10.667,4.779-10.667,10.667V416c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667V10.667 C266.667,4.779,261.888,0,256,0z"/>
            		<path d="M391.552,131.136l-128-128c-4.16-4.16-10.923-4.16-15.083,0l-128,128c-4.16,4.16-4.16,10.923,0,15.083 c4.16,4.16,10.923,4.16,15.083,0L256,25.749l120.448,120.469c2.091,2.069,4.821,3.115,7.552,3.115 c2.731,0,5.461-1.045,7.552-3.115C395.712,142.059,395.712,135.296,391.552,131.136z"/>
            	</g>
            </svg>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  /*
    IMPORTANT: Please note, that the 'value' property is reserved by the SuperComponent and will be used to communicate with the application
    // Just use 'value' as SET ONLY
  */

  import { openFile } from '../__helpers';

  import SuperComponent from '../SuperComponent';

  export default {
    extends: SuperComponent,
    props: {
      items: Array,
      upload: Boolean
    },
    data() {
      return {
        // 'value' is already here because of extended SuperComponent
        // Just use 'value' as SET ONLY
        activeItemIndex: 0,
        selectedFile: null
      }
    },
    methods: {
      async uploadFile() {
        const img = await openFile({
          width: 400,
          height: 400,
          convertToJPG: false
        });
        this.activeItemIndex = 'file';
        this.selectedFile = img;
      }
    },
    mounted() {

      //console.log("!!!");
    },
    computed: {
      selectedValue() {
        return new Map([
          ['number', this.items[this.activeItemIndex]?.value],
          ['string', this.selectedFile?.data]
        ]).get(typeof this.activeItemIndex);
      }
    },
    watch: {
      activeItemIndex(newVal, oldVal) {
        this.value = this.selectedValue;
      },
      selectedFile() {
        this.value = this.selectedValue;
      }
    }
  };
</script>
