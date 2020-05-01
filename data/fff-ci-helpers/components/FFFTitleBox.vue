<template>
  <g>
    <defs>
      <mask v-bind:id="maskId">
        <rect v-if="boundingValid" v-bind="rect" style="fill: #fff;" />
        <g ref="slot" class="slot-wrapper">
          <slot></slot>
        </g>
      </mask>
    </defs>
    <rect v-if="boundingValid" v-bind="rect" class="rect" v-bind:mask="'url(#' + maskId + ')'" />

  </g>
</template>

<style scoped>
  .rect {
    fill: #fff;
  }
  .slot-wrapper,
  .slot-wrapper * {
    fill: #000 !important;
  }
</style>

<script>
  import { generateId, hashCode } from '../helpers';

  export default {
    name: "FFFTitleBox",
    props: ['padding'],
    data() {
      return {
        __slotCache: '',
        textBounding: null,
        maskId: 'fff-title-box-mask-' + generateId(10)
      }
    },
    computed: {
      paddings() {
        const padding = this.padding.split(" ").map(Number);
        return [
          padding[0],
          padding[1] || padding[0],
          padding[2] || padding[0],
          padding[3] || padding[1] || padding[0]
        ];
      },
      rect() {
        const boundings = {
          width: this.textBounding.width + this.paddings[3] + this.paddings[1],
          height: this.textBounding.height + this.paddings[0] + this.paddings[2],
          x: this.textBounding.x - this.paddings[3],
          y: this.textBounding.y - this.paddings[0]
        };
        return boundings;
      },
      boundingValid() {
        return this.textBounding && ((this.textBounding.width + this.textBounding.height) != 0) && this.textBounding.x && this.textBounding.y;
      }
    },
    mounted() {
      setTimeout(() => {
        this.textBounding = this.$refs.slot.getBBox();

        // Bug value emulator
        setTimeout(() => {
          this.textBounding = {
            width: 0,
            height: 0,
            x: 0,
            y: 0
          };
          setTimeout(() => {
            this.textBounding = this.$refs.slot.getBBox();
          });
        });
      });


    },
    updated() {
      // Listen for changes in <slot> content
      {
        const newSlotHash = hashCode(this.$slots.default[0].elm.outerHTML);
        if (newSlotHash != this.__slotCache) {
          this.textBounding = this.$refs.slot.getBBox();
        }
        this.__slotCache = newSlotHash;
      }
    }
  }
</script>
