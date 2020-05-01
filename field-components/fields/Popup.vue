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
    z-index: 100;
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
    padding: 0;
    flex: 1;
  }

</style>

<template>
  <div v-bind:class="{ show: isVisible }">
    <div class="overlay"></div>
    <div class="popup">
      <header>
        <div class="title">
          <h1>{{ title }}</h1>
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
        <slot></slot>
      </main>
    </div>
  </div>
</template>


<script>


  export default {
    name: 'Popup',
    props: {
      title: {
        type: String,
        default: 'Popup...'
      }
    },
    data() {
      return {
        isVisible: false
        //show: false
      };
    },
    computed: {

    },
    methods: {
      show() {
        this.isVisible = true;
        this.$emit("show");
      },
      close() {
        this.$emit("beforeclose");
        this.isVisible = false;
        this.$emit("close");
      },
    },
    mounted() {
      // Create class from Popup Component
      /*const PopupComponentClass = Vue.extend(Popup);
      // Construct class -> a VueComponent becomes alive
      this.popupInstance = new PopupComponentClass({
        propsData: {

        }
      });
      // Mount VueComponent
      this.popupInstance.$mount();
      this.popupInstance.$on("image", image => {
        //this.images.push(image.data);
        this.value[this.updatingIndex] = image.data;
        this.value = [].concat(this.value);
      });

      document.body.append(this.popupInstance.$el);*/
    }
  }
</script>
