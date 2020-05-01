<template>
  <ul class="fields">
    <li v-for="(field, index) in fields">
      <component v-bind:is="field.component" v-bind="Object.assign(field.props, { $__key: field.key })" ref="fields" v-on:update="updateEventHandler(index)"></component>
    </li>
  </ul>
</template>


<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    margin: 0;
  }
</style>

<script>
  export default {
    name: "CollectionItem",
    props: {
      fields: {
        type: Array,
        default: []
      },
      data: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {

      }
    },
    methods: {
      updateEventHandler(index) {
        const fieldComponent = this.$refs.fields[index];
        const { key } = this.fields[index];

        this.$emit("update", key, fieldComponent.value);
      },
      set(dataObj) {
        //console.log(dataObj);
      }
    },
    mounted() {
      for (let fieldComponent of this.$refs.fields) {
        fieldComponent.value = this.data[fieldComponent.$__key];

        fieldComponent.$emit("set", this.data[fieldComponent.$__key]);

      }
    }
  }
</script>
