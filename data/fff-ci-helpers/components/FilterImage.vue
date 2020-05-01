<template>
  <image v-bind:x="x" v-bind:y="y" v-bind:width="width" v-bind:height="height" v-bind:xlink:href="result" />
</template>

<style scoped>

</style>

<script>
  import { VueDirectives, VueHelpers } from 'toolpic';
  import { getFileData } from '../helpers';


  export default {
    name: "FilterImage",
    props: ['x', 'y', 'width', 'height', 'viewBox', 'filter', 'href'],
    data() {
      return {
        __data: null,
        bounding: null,
        result: '',
        ctx: null
      }
    },
    computed: {

    },
    updated() {
      //console.log("!!!");
    },
    created() {

      this.__data = getFileData(this.href);

      this.bounding = (async () => VueHelpers.imageInfo(await this.__data))();



      this.bounding.then(async bounding => {
        const canvas = document.createElement("canvas");
        canvas.width = bounding.width;
        canvas.height = bounding.height;
        this.ctx = canvas.getContext("2d");

        this.applyFilter(await this.__data);
      });

    },
    mounted() {

      setTimeout(async () => {
        this.filter.$on("update", async () => {
          this.applyFilter(await this.__data);
        });
      });


    },
    methods: Object.assign({
      async applyFilter(dataURLImage) {

        const canvas = this.ctx.canvas;

        const filterElement = this.filter.$el.cloneNode(true);


        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        const svgContext = `
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${ canvas.width } ${ canvas.height }" width="100%" height="100%">
            <defs>
              ${ filterElement.outerHTML }
            </defs>

            <g filter="url(#${ filterElement.id })">
              <image x="0" y="0" width="${ canvas.width }" height="${ canvas.height }" xlink:href="${ dataURLImage }" />
            </g>
          </svg>
        `;

        const dataURI = 'data:image/svg+xml;base64,' + btoa(svgContext);

        const img = new Image();
        img.addEventListener('load', () => {
          this.ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const dataURLResult = canvas.toDataURL("image/jpeg", 0.8);
          this.result = dataURLResult;
        });
        img.src = dataURI;

      }
    }, VueHelpers),
    directives: Object.assign({}, VueDirectives),
    watch: {
      href() {
        this.__data = getFileData(this.href);

        this.bounding = (async () => VueHelpers.imageInfo(await this.__data))();
      }
    }
  }

</script>
