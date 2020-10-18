<style scoped>
  @font-face {
    font-family: 'Jost-500';
    src: url('../../fonts/Jost/Jost-500-Medium.ttf');
  }
  @font-face {
    font-family: 'Jost-900';
    src: url('../../fonts/Jost/Jost-900-Black.ttf');
  }
</style>

<template>
  <svg width="100%" height="100%" viewBox="0 0 1080 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g>
      
    </g>
  </svg>
</template>


<script>
  import { SuperTemplate } from 'toolpic';

  export default {
    name: "LogoS4F",
    extends: SuperTemplate,
    data() {
      return {
        title: 'Mainz',
        description: 'AG Antifaschismus',
        surface: 0,
        alternateDescriptionStyle: false
      }
    }
  }

  import { Text, Select } from 'fields';

  export const fields = [
    {
      key: "title",
      description: "Ortsgruppe",
      component: Text,
      props: {}
    },
    {
      key: "description",
      description: "AG Name",
      component: Text,
      props: {}
    },
    {
      key: "surface",
      description: "Surface",
      component: Select,
      props: {
        items: [
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiPgogIDxjaXJjbGUgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmaWxsPSIjMURBNjRBIiAvPgo8L3N2Zz4=",
            value: 0
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDUuMSA5MDUuMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxZDc0NDE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAxPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNDUyLjU1IiBjeT0iNDUyLjU1IiByPSI0NTIuNTUiLz48L2c+PC9nPjwvc3ZnPg==",
            value: 1
          },
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgNDgwIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2LWlmPSJzdXJmYWNlID09IDIiPgogICAgICAgICAgPGRlZnM+CiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD0icHJpZGUtY2lyY2xlIj4KICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSIgLz4KICAgICAgICAgICAgPC9jbGlwUGF0aD4KICAgICAgICAgIDwvZGVmcz4KICAgICAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNwcmlkZS1jaXJjbGUpIj4KICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzc1MDc4NyIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI0ODAiIC8+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiMwMDRkZmYiIHdpZHRoPSI0ODAiIGhlaWdodD0iNDAwIiAvPgogICAgICAgICAgICA8cmVjdCBmaWxsPSIjMDA4MDI2IiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjMyMCIgLz4KICAgICAgICAgICAgPHJlY3QgZmlsbD0iI2ZmZWQwMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyNDAiIC8+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNmZjhjMDAiIHdpZHRoPSI0ODAiIGhlaWdodD0iMTYwIiAvPgogICAgICAgICAgICA8cmVjdCBmaWxsPSIjZTQwMzAzIiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjgwIiAvPgogICAgICAgICAgPC9nPgogICAgICAgIDwvc3ZnPg==",
            value: 2
          }
        ]
      }
    }
  ];

  export const type = "image";
  export const format = "png";
  export const smartActions = [];
  export const alias = "Normal";
  export const width = 1500;
  export const height = 1500;
</script>
