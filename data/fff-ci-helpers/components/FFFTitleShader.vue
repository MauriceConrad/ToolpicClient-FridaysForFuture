<template>
  <g>
    <mask v-bind:id="maskId">
      <g v-bind:style="{ 'transform-origin': origin }" v-dynamic v-bind:data-dynamic-width="dyn[0]" v-bind:data-dynamic-height="dyn[1]">
        <slot></slot>
      </g>
    </mask>
    <g v-bind:mask="'url(#' + maskId + ')'">
      <slot name="shader"></slot>
    </g>
    <g v-if="stroke && strokeWidth && offset" v-bind:style="{ 'transform-origin': origin }" v-dynamic v-bind:data-dynamic-width="dyn[0]" v-bind:data-dynamic-height="dyn[1]">
      <g class="shader-stroked" v-bind:style="{ stroke, 'stroke-width': strokeWidth + 'px', transform: 'translate(' + offsetTransform.map(str => str + 'px').join(',') + ')' }">
        <slot></slot>
      </g>
    </g>
  </g>
</template>

<style scoped>
  .shader-stroked > *,
  .shader-stroked > * * {
    stroke: inherit !important;
    stroke-width: inherit !important;
    fill: none !important;
  }
  mask g * {
    fill: #fff !important;
  }
</style>

<script>
  import { generateId } from '../helpers';

  import { VueDirectives, VueHelpers } from 'toolpic';


  export default {
    name: "FFFTitleShader",
    props: ['dynamic', 'origin', 'stroke-width', 'stroke', 'offset'],
    data() {
      return {

      }
    },
    computed: {
      maskId() {
        return 'fff-shader-mask-' + generateId(10);
      },
      dyn() {
        if (!this.dynamic) {
          return [null, null];
        }
        return this.dynamic.split(' ').map(Number);
      },
      offsetTransform() {
        return this.offset.split(/\s/).map(Number);
      }
    },
    updated() {
      //this.$forceUpdate();
    },
    mounted() {

    },
    methods: Object.assign({

    }, VueHelpers),
    directives: Object.assign({}, VueDirectives)
  }
</script>
