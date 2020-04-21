<template>
  <filter v-bind:id="id" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
  	<feColorMatrix type="matrix" values=".33 .33 .33 0 0
                                         .33 .33 .33 0 0
                                         .33 .33 .33 0 0
                                         0 0 0 1 0"
    in="SourceGraphic" result="colormatrix"/>
    <feComponentTransfer in="colormatrix" result="componentTransfer">
      <feFuncR type="table" v-bind:tableValues="colors.map(color => color.r / 255).join(' ')"/>
  		<feFuncG type="table" v-bind:tableValues="colors.map(color => color.g / 255).join(' ')"/>
  		<feFuncB type="table" v-bind:tableValues="colors.map(color => color.b / 255).join(' ')"/>
  		<feFuncA type="table" v-bind:tableValues="'0 ' + opacity"/>
    </feComponentTransfer>
  	<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>

    <feComponentTransfer>
      <feFuncR type="linear" v-bind:slope="brightness"/>
      <feFuncG type="linear" v-bind:slope="brightness"/>
      <feFuncB type="linear" v-bind:slope="brightness"/>
    </feComponentTransfer>
  </filter>
</template>


<style scoped>

</style>

<script>
  import { Helpers as ToolpicHelpers } from 'toolpic';

  export default {
    name: 'GradientEditor',
    props: {
      'id': String,
      'gradient': String,
      'opacity': {
        type: Number,
        default: 1
      },
      'brightness': {
        type: Number,
        default: 1
      }
    },
    props: ['id', 'gradient', 'opacity', 'brightness'],
    data() {
      return {

      }
    },
    computed: {
      colors() {
        return this.gradient.split(' ').map(ToolpicHelpers.hexToRgb);
      }
    },
    mounted() {

    }
  }
</script>
