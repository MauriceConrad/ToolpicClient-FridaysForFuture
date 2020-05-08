<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1200" height="1200" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <image v-scaleimage="pos" x="0" y="0" width="1200" height="1200" v-bind:xlink:href="image[0]" />

      <g v-dynamic data-dynamic-width="1100" data-dynamic-height="600" style="transform-origin: 540px 50px;">
        <g v-for="line in title" v-bind:transform="'translate(' + (true ? (600 - (textInfo(line, { fontFamily: 'Jost', fontSize: '130px', fontWeight: '500' }).width + 50) / 2) : 40) + ', ' + (title.indexOf(line) * 140) + ')'">
          <rect x="20" y="73" v-bind:width="textInfo(line, { fontFamily: 'Jost', fontSize: '130px', fontWeight: '500' }).width + 0" height="100" style="fill: #1DA64A;" />
          <text x="40" y="150" style="font-family: 'Jost'; font-weight: 600; font-size: 130px; fill: #fff; text-shadow: 0px 1px 10px rgba(0, 0, 0, .7);">
            {{ line }}
          </text>
        </g>
      </g>

      <g v-dynamic data-dynamic-width="850" data-dynamic-height="150" style="transform-origin: 50px 1150px;">
        <text x="50" y="1150" style="font-family: 'Jost'; font-weight: 500; font-size: 70px; fill: #fff; text-shadow: 0px 1px 10px rgba(0, 0, 0, .7);">
          {{ hashtag }}
        </text>
      </g>

      <g style="transform: translate(510px, 510px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.185);">
          <FFFLogo v-bind:og="og" v-bind:theme="logo"></FFFLogo>
        </g>
      </g>

      <defs>
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="7"/> <!-- stdDeviation is how much to blur -->
          <feOffset dx="0" dy="10" result="offsetblur"/> <!-- how much to offset -->
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.6"/> <!-- slope is the opacity of the shadow -->
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/> <!-- this contains the offset blurred image -->
            <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
          </feMerge>
        </filter>
      </defs>

    </g>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";

  .title-line {
    font-family: 'Jost';
    font-weight: 700;
    fill: #fff;
    font-size: 160px;
    alignment-baseline: hanging;
    text-anchor: middle;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "ClassicInfluence",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/ClassicInfluence/bg.jpg'],
        pos: 0,
        title: [
          'HANDELT',
          'EINFACH',
          'DANKE!'
        ],
        hashtag: '#wirstreikenbisihrhandelt',
        og: '',
        logo: {
          primary: '#1B7340',
          secondary: '#000',
          secondary2: '#111',
          secondary3: '#90D3ED'
        }
      }
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }
  import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';
  export const fields = [
    {
      key: "pos",
      description: "Image Position",
      component: Slider,
      props: {
        min: -1,
        max: 1,
        step: 0.01
      }
    },
    {
      key: "image",
      description: "Background Image",
      component: ImageSelect,
      props: {
        width: 1200,
        height: 1200,
        convertToJPG: true,
        max: 1,
        sources: [
          {
            type: "FileUpload",
            label: "Upload"
          },
          {
            type: "ResourceSpace",
            label: "FFF",
            options: {
              host: "bilder.fffutu.re"
            }
          },
          {
            type: "Pixabay",
            label: "Pixabay"
          },/*
          {
            type: "Pexels",
            label: "Pexels"
          }*/
        ]
      }
    },
    {
      key: "title",
      description: "Title",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "hashtag",
      description: "Hashtag",
      component: Text,
      props: {}
    },
    {
      key: "og",
      description: "OG",
      component: Text,
      props: {}
    },
    {
      key: "logo",
      description: "Logo",
      component: Select,
      props: {
        items: [
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMxQjczNDA7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#1B7340',
              secondary: '#000',
              secondary2: '#111',
              secondary3: '#90D3ED'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMxREE2NEE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#1DA64A',
              secondary: '#000',
              secondary2: '#111',
              secondary3: '#fff'
            }
          }
        ]
      }
    }
  ];
  export const type = "image";
  export const format = "jpg";
  export const smartActions = [];
  export const alias = "Instagram";
  export const width = 1200;
  export const height = 1200;
</script>
