<style scoped>
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    animation: showOverlay 0.2s;

    display: none;
  }
  @keyframes showOverlay {
    from {
      -webkit-backdrop-filter: blur(0px);
      backdrop-filter: blur(0px);
    }
    to {
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
    }
  }
  div.show > .overlay {
    display: block;
  }
  .popup {
    font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
    color: #fff;
    position: fixed;
    left: 20px;
    top: -100%;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    background-color: #171717;
    border: 1px solid #0f0f0f;
    border-radius: 8px;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.4));
    opacity: 0;
    transition: all 0.5s;
    opacity: 1;
    transform: scale(0.3);
    display: flex;
    flex-direction: column;
  }
  div.show > .popup {
    opacity: 1;
    transform: scale(1);
    top: 20px;
  }
  header {
    display: flex;
    flex: none;
  }
  header .title {
    flex: 1;
    text-align: center;
    padding: 7px;
  }
  header .title h1 {
    margin: 0;
    font-size: 1.6em;
    font-weight: 300;
  }
  header .btns {
    flex: 0;
    padding: 7px 7px;
  }
  header .btns-right {
    text-align: right;
  }
  header .btns button {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    overflow: hidden;
    padding: 13px;

  }
  header .btns button > svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  main {
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }


  .search-header {
    display: flex;
    flex: none;
  }
  .search-header .search-container {
    flex: 1;
    padding: 0 5px;
  }
  .search-header .search-container:before {
    content: " ";
    width: 0;
    height: 100%;
  }
  .search-header .search-container:before,
  .search-header .search-container input[type="search"] {
    vertical-align: middle;
    display: inline-block;
  }
  .search-header .search-container input[type="search"] {
    -webkit-appearance: none;
    border: 3px solid #171717;
    border-radius: 17px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    font-size: 1.2em;
    padding: 4px 9px;
  }
  .search-header .search-container input[type="search"]:focus {
    border-color: #359a52;
    font-weight: 300;
    letter-spacing: 0.25px;
  }
  .search-header .btns {
    flex: 0;
  }
  .search-header .btns button {
    padding: 10px;
    background-color: #359a52;
    border-radius: 50%;
    cursor: pointer;
  }
  .search-header .btns button > svg {
    width: 20px;
    height: 20px;
  }
  .service-tab-group {
    padding: 10px 0;
  }
  .tab-group {
    display: flex;
    padding: 0;
    flex: none;
  }
  .tab-group .tab {
    flex: 1;
    text-align: center;
    display: inline-block;
    color: #fff;
    font-weight: 300;
    font-size: 1.1em;
    letter-spacing: 0.3px;
    padding: 7px 3px;
    border: 2px solid #050505;
    border-right-width: 0;
    cursor: pointer;
    background-color: #0f0f0f;
    overflow: hidden;
    --border-radius: 10px;
  }
  @media screen and (max-width: 400px) {
    .tab-group .tab {
      font-size: 1em;
    }
  }
  .tab-group .tab:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
  .tab-group .tab:last-child {
    border-right-width: 2px;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
  .tab-group .tab.active {
    border-color: #267a3f;
    background-color: #359a52;
    border-right-width: 2px;
  }
  .tab-group .tab.active + .tab {
    border-left-width: 0;
  }
  .view {
    flex: 1;
    overflow: hidden;
  }
</style>

<template>
  <div v-bind:class="{ show: isVisible }">
    <div class="overlay"></div>
    <div class="popup">
      <header>
        <div class="title">
          <h1>{{ activeSource.label }}</h1>
        </div>
        <div class="btns btns-right">
          <button class="btn-close" @click="close">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.806 409.806">
            	<g style="fill: #fff;">
            		<path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42 c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42 c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132 c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42 c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/>
            	</g>
            </svg>
          </button>
        </div>
      </header>
      <main>
        <div class="search-header" v-if="activeSourceComponentName === 'Database'">
          <div class="search-container">
            <input type="search" placeholder="Mainz" @keypress="handleKeyEvent" v-model="query">
          </div>
          <div class="btns">
            <button @click="search">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
              	<g style="fill: #fff;">
              		<path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667 S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732 c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667 c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/>
              	</g>
              </svg>
            </button>
          </div>
        </div>
        <div class="service-tab-group">
          <div class="tab-group">
            <div class="tab" v-for="(source, index) in sources" v-bind:class="{ active: index === sourceIndex }" @click="sourceIndex = index">
              <span>
                {{ source.label }}
              </span>
            </div>
          </div>
        </div>
        <div class="view">
          <component v-bind:is="activeSourceComponentName" v-bind="{ sourceName: activeSource.type, width, height, convertToJPG }" ref="sourceComponent"></component>
        </div>
      </main>
    </div>
  </div>
</template>


<script type="text/javascript">

  import Uploader from './source-components/Uploader.vue';
  import Database from './source-components/Database.vue';

  const sourceTypeComponentClasses = new Map([
    ["FileUpload", "Uploader"],
    ["Pixabay", "Database"],
    ["Pexels", "Database"],
    ["ResourceSpace", "Database"]
  ]);

  export default {
    name: 'ImagePopup',
    props: {
      sources: Array,
      width: Number,
      height: Number,
      convertToJPG: Boolean
    },
    data() {
      return {
        isVisible: false,
        sourceIndex: 0,
        query: ''
        //show: false
      };
    },
    computed: {
      activeSource() {
        return this.sources[this.sourceIndex];
      },
      activeSourceComponentName() {
        return sourceTypeComponentClasses.get(this.activeSource.type);
      }
    },
    methods: {
      handleKeyEvent(event) {
        if (event.code === "Enter") {
          this.search();
        }
      },
      search() {
        if (this.query) {
          this.$refs.sourceComponent.search(this.query);
        }
      },
      show() {
        this.isVisible = true;
      },
      close() {
        this.isVisible = false;
      },
      initComponent() {
        this.$refs.sourceComponent.$on("file", file => {
          if (this.isVisible) {
            this.close();
            this.$emit("image", file);
          }
        });
      }
    },
    mounted() {
      this.initComponent();
    },
    components: {
      Uploader,
      Database
    },
    watch: {
      sourceIndex() {
        setTimeout(() => {
          this.initComponent();
          this.search();
        }, 25);

      }
    }
  }
</script>
