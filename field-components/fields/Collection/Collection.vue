<template>
  <div class="wrapper">
    <ul class="items">
      <li v-for="(item, index) in value">
        <div class="header">
          <div class="btn" @click="remove(index)">
            <svg viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg">
              <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/>
            </svg>
          </div>
        </div>
        <CollectionItem v-bind="{ fields, data: item }" ref="collectionItems" v-on:update="update(index)"></CollectionItem>
      </li>
    </ul>
    <div class="btn-add" @click="add" v-if="value.length < max">
      {{ btnAddLabel }}
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    padding: 0 0 0 10px;
  }
  .items {
    list.style: none;
    margin: 0;
    padding: 0;
  }
  .items > li {
    margin : 0;
    background-color: #1a1a1a;
    border: 1px solid #141414;
    border-radius: 7px;
    margin: 10px 0;
    display: block;
    padding: 3px;
  }
  .header {
    text-align: right;
  }
  .header .btn {
    padding: 7px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    height: 15px;
    width: 15px;
    background-color: #0e0e0e;
    display: inline-block;
  }
  .header .btn svg {
    width: 100%;
    height: 100%;
  }
  .header .btn svg path {
    fill: #fff;
  }
  .btn-add {
    background-color: #2f8247;
    border-radius: 20px;
    color: #fff;
    font-weight: 300;
    font-size: 1em;
    cursor: pointer;
    width: 100%;
    text-align: center;
    padding: 8px 16px;
    margin: 10px 0 0 0;
    box-sizing: border-box;
  }
</style>

<script>
  import SuperComponent from '../../SuperComponent';
  import CollectionItem from './CollectionItem.vue';

  export default {
    name: "Collection",
    extends: SuperComponent,
    props: {
      max: {
        type: Number,
        default: Infinity
      },
      fields: {
        type: Array,
        default: []
      },
      btnAddLabel: {
        type: String,
        default: 'Add Item'
      }
    },
    data() {
      return {
        items: []
      }
    },
    methods: {
      add() {
        const lastItemData = Object.assign(new Object, this.value[this.value.length - 1]);

        this.value.push(lastItemData);

        this.__rewriteValueArray();
        //this.value.push(this.value[this.value.length - 1]);
      },
      remove(index) {
        this.value[index] = null;
        this.__rewriteValueArray();

      },
      update(index) {
        const itemCollection = this.$refs.collectionItems[index];

        const data = {};
        for (let i = 0; i < itemCollection.$refs.fields.length; i++) {
          const fieldDescriptor = itemCollection.fields[i];
          const fieldComponent = itemCollection.$refs.fields[i];

          data[fieldDescriptor.key] = fieldComponent.value;
        }

        this.value[index] = data;
        this.__rewriteValueArray();
        //this.value = Object.assign({}, this.value);
      },
      __rewriteValueArray() {
        this.value = Array.from(this.value.filter(entry => entry));
      }
    },
    created() {
      this.value = [];
    },
    watch: {
      value(newVal, oldVal) {
        this.$emit("update", this.$__key, newVal);
      }
    },
    components: {
      CollectionItem
    }
  }
</script>
