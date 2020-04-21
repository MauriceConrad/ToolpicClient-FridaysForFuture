<style scoped>
  @font-face {
    font-family: 'Jost-600';
    src: url('../../fonts/Jost/Jost-600-Semi.ttf');
  }
  @font-face {
    font-family: 'Jost-400';
    src: url('../../fonts/Jost/Jost-400-Book.ttf');
  }
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 675" version="1.1">

    <defs>
      <filter id="sw" style="color-interpolation-filters:sRGB">
        <feColorMatrix values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 1 0"/>
      </filter>
    </defs>

    <defs>
      <clipPath id="bounding">
        <rect x="0" y="0" width="1200" height="675" />
      </clipPath>
    </defs>

    <g clip-path="url(#bounding)">



      <image v-scaleimage="pos" v-bind:xlink:href="image[0]" x="0" y="0" height="675" width="1200" v-bind:filter="blackAndWhite ? 'url(#sw)' : ''" />

      <g v-dynamic data-dynamic-origin="none" data-dynamic-width="1140" data-dynamic-height="500" style="transform-origin: 30px 20px;">
        <MultiLine x="30" y="20" padding="10 15" v-bind:text="textToMultilineFormat(text.join(' '), 0.4, 0.3, true)" lineheight="1.1" background="#1DA64A" verticalalign="" css="font-size: 52px; font-family: 'Jost-400'; fill: #fff;"></MultiLine>
      </g>

      <g v-dynamic data-dynamic-origin="none" data-dynamic-width="930" data-dynamic-height="160" style="transform-origin: 1170px 655px;">
        <g>
          <text x="1170" v-bind:y="655 - (authordetail.length * 45) - 25" style="text-anchor: end; fill: #fff; font-family: 'Jost-600'; font-size: 75px; text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);">
            {{ author }}
          </text>
        </g>
        <g>
          <g v-for="line in authordetail">
            <text x="1170" v-bind:y="655 + (authordetail.indexOf(line) * 45) - (authordetail.length * 45)" style="alignment-baseline: hanging; text-anchor: end; fill: #fff; font-family: 'Jost-400'; font-size: 40px; text-shadow: 0px 0px 6px rgba(0, 0, 0, 1);">
              {{ line }}
            </text>
          </g>
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

      <image v-bind:xlink:href="logo" x="15" y="520" height="140" width="140" filter="url(#dropshadow)" />


    </g>


  </svg>

</template>

<script>
  import { SuperTemplate } from 'toolpic';

  export default {
    name: "Quote",
    extends: SuperTemplate,
    data() {
      return {
        image: ['https://cdn.fridaysforfuture.io/toolpic/templates/Quote/bg.jpg'],
        pos: 0,
        blackAndWhite: true,
        text: [
          "“Wir danken Frau Dreyer für die Iniative,",
          "mit uns in den Dialog zu treten, sind",
          "allerdings von den Ergebnissen enttäuscht.",
          "Wir hatten leider den Eindruck, dass sich",
          "das Interesse von Fraun Dreyer darauf",
          "beschränkte, ein paar nette Wort zu wechseln.",
          "Einen ernstgemeinten Versuch, unsere",
          "Forderungen aus den Wänden der Staatskanzlei",
          "hinaus in die Klimapolitik der Landesregierung",
          "fließen zu lassen oder sie dort auch nur zu",
          "diskutieren, haben wir schmerzlich vermisst.”"
        ],
        author: 'FFF-Mitorganisator*innen',
        authordetail: [
          'Nach Gespräch mit Ministerpräsidentin',
          'Malu Dreyer'
        ],
        logo: 'https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg'
      }
    }
  }

  import { Text, Textarea, ImageSelect, Select, Toggle, Slider } from 'fields';

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
      key: "blackAndWhite",
      description: null,
      component: Toggle,
      props: {
        description: "Schwarz/Weiß",
        styleClass: 'mt-android'
      }
    },
    {
      key: "author",
      description: "Author",
      component: Text,
      props: {}
    },
    {
      key: "authordetail",
      description: "Author Info",
      component: Text,
      props: {}
    },
    {
      key: "text",
      description: "Text",
      component: Textarea,
      props: {
        rows: 'auto'
      }
    },
    {
      key: "logo",
      description: "Logo",
      component: Select,
      props: {
        items: [
          {
            render: "https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg",
            value: "https://cdn.fridaysforfuture.io/toolpic/assets/logo-classic.svg"
          },
          {
            render: "https://cdn.fridaysforfuture.io/toolpic/assets/logo-og.svg",
            value: "https://cdn.fridaysforfuture.io/toolpic/assets/logo-og.svg"
          }
        ],
        upload: true
      }
    }
  ];
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
    },
    {
      name: "Schwarz/Weiß",
      type: "Toggle",
      key: "blackAndWhite",
      properties: {
        mode: "normal"
      }
    }
  ];

  export const width = 1200;
  export const height = 675;
  export const type = "image";
  export const format = "jpg";
  export const alias = "Twitter";
</script>
