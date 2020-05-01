<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">

    <g ref="logo" style="transform-origin: 540px 540px; transform: scale(1); opacity: 1;">
      <FFFLogo v-bind:og="og" v-bind:label="label" v-bind:theme="theme" v-bind:pos="earthAnimation.pos"></FFFLogo>
    </g>

  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";


</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from './FFFLogo.vue';

  import anime from 'animejs';

  const earthAnimation = {
    pos: 0
  };

  export default {
    name: "AnnouncementSpeakers",
    extends: SuperTemplate,
    data() {
      return {
        og: '',
        label: '',
        theme: {
          primary: 'none',
          secondary: '#fff',
          secondary2: '#111',
          secondary3: '#fff'
        }
      }
    },
    computed: {
      earthAnimation() {
        return earthAnimation;
      }
    },
    methods: {
      __animate() {
        const self = this;

        const animation1 = anime({
          targets: earthAnimation,
          pos: 1219,
          round: 1,
          duration: 3000,
          easing: 'linear',
          autoplay: false,
          update: function() {
            self.$forceUpdate();
          }
        });

        return [
          animation1
        ];
      }
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }
  import { Text, Textarea, Select, ImageSelect, Slider } from 'fields';
  export const fields = [
    {
      key: "theme",
      description: "Theme",
      component: Select,
      props: {
        items: [
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6IG5vbmU7IiAvPgo8L3N2Zz4=",
            value: {
              primary: 'none',
              secondary: '#fff',
              secondary2: '#111',
              secondary3: '#fff'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMxQjczNDA7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#1B7340',
              secondary: '#000',
              secondary2: '#fff',
              secondary3: '#90D3ED'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMxREE2NEE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#1DA64A',
              secondary: '#000',
              secondary2: '#1B7340',
              secondary3: '#fff'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzZGNjOWY7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#3dcc9f',
              secondary: '#000',
              secondary2: '#FF005C',
              secondary3: '#fff'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICNGRjAwNUM7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#FF005C',
              secondary: '#000',
              secondary2: '#3dcc9f',
              secondary3: '#fff'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#20175A',
              secondary: '#fff',
              secondary2: '#7D93F8',
              secondary3: '#fff'
            }
          }
        ]
      }
    },
    {
      key: "og",
      description: "OG Name",
      component: Text,
      props: {}
    },
    {
      key: "label",
      description: "Label",
      component: Text,
      props: {}
    }
  ];
  export const type = "video";
  export const format = "mp4";
  export const smartActions = [];
  export const alias = "FullHD";
  export const width = 1080;
  export const height = 1080;

  export const video = {
    duration: 3000,
    frameRate: 24,
    vcodec: "libx264",
    pix_fmt: "yuv420p"
  };
</script>
