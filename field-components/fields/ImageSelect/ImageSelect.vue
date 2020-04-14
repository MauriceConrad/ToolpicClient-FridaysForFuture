<style scoped>
  .wrapper {
    width: 100%;
  }
  .wrapper ul {
    list-style: none;
    padding: 0;
  }
  .wrapper ul li {
    width: 80px;
    height: 80px;
    display: inline-block !important;
    vertical-align: middle;
    margin: 0 5px;
    cursor: pointer;
  }
  .wrapper ul li .btn {
    position: relative;
    left: 10%;
    top: 10%;
    width: 80%;
    height: 80%;
    padding: 20%;
    box-sizing: border-box;
    background-color: #2f8247;
    border-radius: 50%;
    cursor: pointer;
  }
  .wrapper ul li .btn svg {
    width: 100%;
    height: 100%;
  }
  .wrapper ul li .preview {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid #1b1b1b;
    border-radius: 7px;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

  }
  .wrapper ul li .preview .btn-replace-item {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transition: all 0.3s;
  }
  .wrapper ul li:hover .preview .btn-replace-item {
    opacity: 1;
  }
</style>

<template>
  <div>
    <div class="wrapper">
      <ul>
        <li v-for="(image, index) in value" @click="index < (value.length - 1) ? deleteImage(index) : updateImage(index)">
          <div class="preview" v-bind:style="{ 'background-image': `url('${ image }')` }">
            <div class="btn-replace-item">
              <svg viewBox="-48 0 407 407" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" v-if="index < (value.length - 1)">
                <g style="fill: #fff;">
                  <path d="m89.199219 37c0-12.132812 9.46875-21 21.601562-21h88.800781c12.128907 0 21.597657 8.867188 21.597657 21v23h16v-23c0-20.953125-16.644531-37-37.597657-37h-88.800781c-20.953125 0-37.601562 16.046875-37.601562 37v23h16zm0 0"/>
                  <path d="m60.601562 407h189.199219c18.242188 0 32.398438-16.046875 32.398438-36v-247h-254v247c0 19.953125 14.15625 36 32.402343 36zm145.597657-244.800781c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0 0"/>
                  <path d="m20 108h270.398438c11.046874 0 20-8.953125 20-20s-8.953126-20-20-20h-270.398438c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm0 0"/>
                </g>
              </svg>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" v-else>
              	<g style="fill: #fff;">
              		<path d="M490.667,362.667c-5.888,0-10.667,4.779-10.667,10.667V480c0,5.867-4.779,10.667-10.667,10.667H42.667 C36.779,490.667,32,485.867,32,480V373.333c0-5.888-4.779-10.667-10.667-10.667s-10.667,4.779-10.667,10.667V480 c0,17.643,14.357,32,32,32h426.667c17.643,0,32-14.357,32-32V373.333C501.333,367.445,496.555,362.667,490.667,362.667z"/>
              		<path d="M256,0c-5.888,0-10.667,4.779-10.667,10.667V416c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667V10.667 C266.667,4.779,261.888,0,256,0z"/>
              		<path d="M391.552,131.136l-128-128c-4.16-4.16-10.923-4.16-15.083,0l-128,128c-4.16,4.16-4.16,10.923,0,15.083 c4.16,4.16,10.923,4.16,15.083,0L256,25.749l120.448,120.469c2.091,2.069,4.821,3.115,7.552,3.115 c2.731,0,5.461-1.045,7.552-3.115C395.712,142.059,395.712,135.296,391.552,131.136z"/>
              	</g>
              </svg>

            </div>
          </div>
        </li>
        <li @click="openPopup" v-if="value ? (value.length < max) : false">
          <div class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6">
            	<g style="fill: #fff;">
            		<path d="M392.533,187.733H221.867V17.067C221.867,7.641,214.226,0,204.8,0s-17.067,7.641-17.067,17.067v170.667H17.067 C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h170.667v170.667c0,9.426,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V221.867h170.667c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"/>
            	</g>
            </svg>
          </div>
        </li>
      </ul>
    </div>
    <!--<ImagePopup v-bind="{ sources }" ref="popup"></ImagePopup>-->
  </div>
</template>

<script type="text/javascript">
  /*
    IMPORTANT: Please note, that the 'value' property is reserved by the SuperComponent and will be used to communicate with the application
    // Just use 'value' as SET ONLY
  */

  import Vue from 'vue';
  import ImagePopup from './ImagePopup.vue';

  import { openFile } from '../../__helpers';

  import SuperComponent from '../../SuperComponent';

  export default {
    extends: SuperComponent,
    props: {
      sources: Array,
      max: Number,
      width: Number,
      height: Number,
      convertToJPG: Boolean
    },
    data() {
      return {
        // 'value' is already here because of extended SuperComponent
        // Just use 'value' as SET ONLY
        popupInstance: null,
        updatingIndex: 0
      }
    },
    methods: {
      openPopup() {
        this.updatingIndex = this.value.length;
        this.popupInstance.show();
      },
      deleteImage(index) {
        this.value = this.value.filter((img, i) => i != index);
      },
      updateImage(index) {
        this.updatingIndex = index;
        this.popupInstance.show();
      }
    },
    mounted() {
      // Create class from Popup Component
      const PopupComponentClass = Vue.extend(ImagePopup);
      // Construct class -> a VueComponent becomes alive
      this.popupInstance = new PopupComponentClass({
        propsData: {
          sources: this.sources,
          width: this.width,
          height: this.height,
          convertToJPG: this.convertToJPG
        }
      });
      // Mount VueComponent
      this.popupInstance.$mount();
      this.popupInstance.$on("image", image => {
        //this.images.push(image.data);
        this.value[this.updatingIndex] = image.data;
        this.value = [].concat(this.value);
      });

      document.body.append(this.popupInstance.$el);

    },
    computed: {

    },
    watch: {
      value(newVal) {
        //this.images = new Array().concat(this.value);
      },
      images() {
        //this.value = (this.images);
      }
    },
    components: {
      //ImagePopup
    }
  };
</script>
