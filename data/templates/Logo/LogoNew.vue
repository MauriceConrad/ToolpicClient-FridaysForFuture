<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">

    <FFFLogo v-bind:og="og" v-bind:label="label" v-bind:theme="theme" v-bind:pos="Number(pos)"></FFFLogo>

  </svg>
</template>


<style scoped>

</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from './FFFLogo.vue';

  export default {
    name: "FridaysForFutureLogo",
    extends: SuperTemplate,
    data() {
      return {
        og: 'Mainz',
        label: '',
        theme: {
          primary: 'none',
          secondary: '#fff',
          secondary2: '#111',
          secondary3: '#fff'
        },
        pos: 0
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
              secondary2: '#155d33',
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
          /*{
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICNmNTMzM2Y7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#f5333f',
              secondary: '#000',
              secondary2: '#950F30',
              secondary3: '#fff'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICM5MEQzRUQ7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#90D3ED',
              secondary: '#000',
              secondary2: '#5da0ba',
              secondary3: '#fff'
            }
          },*/
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
          }/*,
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICM5NTBGMzA7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#950F30',
              secondary: '#000',
              secondary2: '#f5333f',
              secondary3: '#fff'
            }
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICM3RDkzRjg7IiAvPgo8L3N2Zz4=",
            value: {
              primary: '#7D93F8',
              secondary: '#000',
              secondary2: '#20175A',
              secondary3: '#fff'
            }
          }*/
        ]
      }
    },
    {
      key: "pos",
      description: "Earth Position",
      component: Slider,
      props: {
        min: 0,
        max: 1219,
        step: 1
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
  export const type = "image";
  export const format = "png";
  export const smartActions = [];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
