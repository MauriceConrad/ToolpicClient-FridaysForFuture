<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="theme.secondary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
      <GradientMapFilter id="FFFVerlaufsumsetzungPrimary" v-bind:gradient="theme.primary.join(' ')" opacity="1" brightness="1"></GradientMapFilter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1080" height="1080" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">
      <g filter="url(#FFFVerlaufsumsetzungPrimary)">
        <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" />
      </g>



      <rect x="0" y="0" width="1080" height="1080" style="fill: #20175A; opacity: 0;"/>

      <FFFTitleShader dynamic="960 350" origin="50px 50px" offset="-8 -8" stroke="#fff" stroke-width="2.5">
        <template>
          <MultiLine x="50" y="50" relative="0 0" padding="0" align="left" v-bind:text="name" lineheight="1.05" background="none" css="font-size: 110px; font-weight: 900; font-family: 'Jost';"></MultiLine>
        </template>
        <template v-slot:shader>
          <image v-scaleimage="pos" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="image[0]" filter="url(#FFFVerlaufsumsetzungSecondary)" />
        </template>
      </FFFTitleShader>

      <Dynamic width="960" height="300" origin="0 0">
        <MultiLine x="50" y="350" relative="0 0" padding="0" v-bind:text="info" align="left" lineheight="1.1" background="none" css="font-size: 80px; font-weight: 600; font-family: 'Jost'; fill: #fff;"></MultiLine>
      </Dynamic>

      <Dynamic width="800" height="300" origin="0 0.9">
        <MultiLine x="50" y="1050" relative="0 1" padding="0" v-bind:text="description" align="left" lineheight="1.1" background="none" css="font-size: 80px; font-weight: 800; font-family: 'Jost'; fill: none; stroke: #fff; stroke-width: 2px;"></MultiLine>
      </Dynamic>

      <g style="transform: translate(440px, 440px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.17);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>

    </g>
  </svg>
</template>

<style scoped>
  @import "../../fonts/Jost/Jost.css";
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "AnnouncementCelebrity",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementCelebrity/bg.jpg'],
        pos: 0,
        name: [
          'MARC-UWE',
          'KLING'
        ],
        description: [
          'KLEIN-',
          'KÜNSTLER'
        ],
        info: [
          'LIVE AM',
          '24.04.'
        ],
        og: '',
        theme: {
          primary: ['#1a145d', '#98b6eb'],
          secondary: ['#a40045', '#ff006b']
        }
      }
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }
  /*
      NOTE

      Pastel:
        Primary: #11532c -> #00d6b6
        Secondary: #128759 -> #1BF3D3

      Magenta:
        Primary: #610011 -> #FF002C
        Secondary: #a4001d -> #FF002C
  */
  import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';

  export const fields = [
    {
      key: "theme",
      description: "Theme",
      component: Select,
      props: {
        items: [
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#1a145d', '#98b6eb'],
              secondary: ['#a40045', '#ff006b']
            }
          },
          // Violett : Magenta : Pastel
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICNGRjAwNUM7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#830037', '#ff006b'],
              secondary: ['#2e9575', '#43fec4']
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
            value: {
              primary: ['#226c55', '#3dcc9f'],
              secondary: ['#a40045', '#ff006b']
            }
          }
        ]
      }
    },
    {
      key: "pos",
      description: "Background Position",
      component: Slider,
      props: {
        min: -1,
        max: 1,
        step: 0.1
      }
    },
    {
      key: "image",
      description: "Background",
      component: ImageSelect,
      props: {
        width: 1080,
        height: 1080,
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
          }
        ]
      }
    },
    {
      key: "name",
      description: "Name",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "description",
      description: "Description",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "info",
      description: "Info",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "og",
      description: "OG Label",
      component: Text,
      props: {}
    }
  ];
  export const type ="image";
  export const format = "jpg";
  export const smartActions = [
    {
      name: "Position",
      type: "Number",
      key: "pos",
      properties: {
        min: 0,
        max: 1,
        step: 0.01
      }
    }
  ];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
