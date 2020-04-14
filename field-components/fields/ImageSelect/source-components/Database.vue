<style scoped>
  .source-database-component {
    width: 100%;
    height: 100%;
    background-color: #0f0f0f;
    border: 1px solid #050505;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 8px;
    overflow: scroll;
    position: relative;
  }
  .source-database-component::-webkit-scrollbar {
    display: none;
  }
  .source-database-component {
    scrollbar-width: none;
  }
  .images-view {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0;
  }
  .images-view li {
    display: inline-block;
    font-size: 1rem;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
  }

  .images-view li {
    width: 12.5%;
    height: 135px;
  }
  @media screen and (max-width: 1370px) {
    .images-view li {
      width: 14.285%;
      height: 125px;
    }
  }
  @media screen and (max-width: 1250px) {
    .images-view li {
      height: 115px;
    }
  }
  @media screen and (max-width: 1150px) {
    .images-view li {
      height: 105px;
    }
  }
  @media screen and (max-width: 1085px) {
    .images-view li {
      width: 16.666%;
      height: 102px;
    }
  }
  @media screen and (max-width: 650px) {
    .images-view li {
      width: 33.333%;
      height: 121px;
    }
  }
  @media screen and (max-width: 500px) {
    .images-view li {
      width: 50%;
      height: 140px;
    }
  }
  @media screen and (max-width: 450px) {
    .images-view li {
      height: 120px;
    }
  }
  @media screen and (max-width: 385px) {
    .images-view li {
      height: 100px;
    }
  }
  @media screen and (max-width: 340px) {
    .images-view li {
      height: 80px;
    }
  }
  .images-view li > div {
    position: absolute;
  }
  .images-view li .preview {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .images-view li .label {
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    transition: all 0.5s;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.6);
  }
  .images-view li .label span {
    position: absolute;
    bottom: 0;
    padding: 10px;
    display: none;
  }
  .images-view li:hover .preview {

  }
  .images-view li:hover .label {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
  .images-view li:hover .label span {
    display: block;
  }

  .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
  .sk-chase {
    width: 80px;
    height: 80px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
  }

  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2.0s infinite ease-in-out both;
  }

  .sk-chase-dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: #359a52;
    border-radius: 100%;
    animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
  }

  .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
  .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
  .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
  .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
  .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
  .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
  .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
  .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
  .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
  .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
  .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
  .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

  @keyframes sk-chase {
    100% { transform: rotate(360deg); }
  }

  @keyframes sk-chase-dot {
    80%, 100% { transform: rotate(360deg); }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    } 100%, 0% {
      transform: scale(1.0);
    }
  }


  .spinner-2 {
    width: 80px;
    height: 80px;
    background-color: #359a52;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
  }

  @-webkit-keyframes sk-rotateplane {
    0% { -webkit-transform: perspective(120px) }
    50% { -webkit-transform: perspective(120px) rotateY(180deg) }
    100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
  }

  @keyframes sk-rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    } 50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    } 100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }

  .sad-message {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .sad-message > div {
    vertical-align: middle;
    display: inline-block;
  }
  .sad-message .icon {
    width: 120px;
    height: 120px;
  }
  .sad-message .label {
    margin: 0 0 0 10px;
    color: #359a52;
    font-weight: 200;
    font-size: 2em;
    letter-spacing: 0.5px;
  }
</style>


<template>
  <div class="source-database-component" ref="componentRoot">
    <div class="spinner" v-if="loading">
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
      <!--<div class="spinner-2">

      </div>-->
    </div>
    <ul class="images-view" v-else>
      <li v-for="(image, index) in results" @click="selectImage(index)">
        <div class="preview" v-bind:style="{ 'background-image': `url('${ image.preview }')` }"></div>
        <div class="label">
          <span>{{ image.name }}</span>
        </div>
      </li>
    </ul>
    <div class="sad-message" v-if="!loading && !results.length && searchesCount > 0">
      <div class="icon">
        <svg viewBox="0 0 497 497" xmlns="http://www.w3.org/2000/svg">
          <path d="m251.2.02v496.96c136-1.44 245.8-112.14 245.8-248.48s-109.8-247.04-245.8-248.48z" fill="#288242"/>
          <path d="m251.2.02c-.9-.01-1.8-.02-2.7-.02-137.24 0-248.5 111.26-248.5 248.5s111.26 248.5 248.5 248.5c.9 0 1.8-.01 2.7-.02 113.9-1.72 205.8-112.31 205.8-248.48s-91.9-246.76-205.8-248.48z" fill="#359a52"/>
          <path d="m283.496 252.465c-1.518 0-3.048-.459-4.374-1.413-8.957-6.443-19.546-9.849-30.622-9.849-10.522 0-20.671 3.099-29.349 8.962-3.433 2.318-8.095 1.416-10.413-2.017-2.318-3.432-1.416-8.094 2.017-10.413 11.167-7.544 24.219-11.532 37.745-11.532 14.239 0 27.857 4.382 39.382 12.673 3.362 2.418 4.127 7.105 1.708 10.468-1.465 2.037-3.763 3.121-6.094 3.121z" fill="#286c3b"/>
          <path d="m256 282.464h-15c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h15c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#288242"/>
          <path d="m332 113.7c-8.25 0-15 6.75-15 15v45c0 8.25 6.75 15 15 15s15-6.75 15-15v-45c0-8.25-6.75-15-15-15z" fill="#437451"/>
          <path d="m165 113.703c-8.25 0-15 6.75-15 15v45c0 8.25 6.75 15 15 15s15-6.75 15-15v-45c0-8.25-6.75-15-15-15z" fill="#437451"/>
          <path d="m365.12 280.109-33.12-61.4v116.49c20.71 0 37.5-16.79 37.5-37.5 0-6.36-1.59-12.34-4.38-17.59z" fill="#216031"/>
          <path d="m343.04 280.109c.93 5.25 1.46 11.23 1.46 17.59 0 20.71-5.6 37.5-12.5 37.5-20.71 0-37.5-16.79-37.5-37.5 0-6.36 1.59-12.34 4.38-17.59l33.12-61.4z" fill="#266c38"/>
        </svg>
      </div>
      <span class="label">Leider nichts gefunden.</span>
    </div>
  </div>
</template>

<script type="text/javascript">

  import * as Services from '../__Services';
  import { imageInfo } from '../../../__helpers';


  export default {
    name: "Database",
    props: ["sourceName", "width", "height"],
    data() {
      return {
        results: [],
        loading: false,
        searchesCount: 0
      }
    },
    methods: {
      async search(query) {
        this.searchesCount++;
        this.results = [];
        this.loading = true;
        await Services[this.sourceName](query, this.width, this.height, results => {
          this.loading = false;
          this.results = this.results.concat(results);
        });
      },
      async selectImage(index) {
        const image = this.results[index];
        this.$emit("file", {
          data: image.src
        });
      }
    },
    mounted() {

    }
  }
</script>
