import { loadIcons } from "../../src/helper.js"

export default [
  {
    icon: "icons/pagination/bullhorn.svg",
    name: "Ankündigungen",
    items: [
      {
        name: "Date 2",
        preview: "data/templates/Date2/preview.jpg",
        documents: [
          import('./Date2/Date2@1200x1200.vue'),
          import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://dev.maurice-conrad.eu/toolpic-cdn/templates_compiled/Date2/Date2@1200x1200.vue.js",
            assets: "https://dev.maurice-conrad.eu/toolpic-cdn/templates_compiled/Date2"
          }
        ]
      },
      {
        name: "Imperative",
        preview: "data/templates/Imperative/preview.jpg",
        documents: [
          import('./Imperative/Imperative@1200x1200.vue'),
          import('./Imperative/Imperative@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://dev.maurice-conrad.eu/toolpic-cdn/templates_compiled/Imperative/Imperative@1200x1200.vue.js",
            assets: "https://dev.maurice-conrad.eu/toolpic-cdn/templates_compiled/Imperative"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/comment.svg",
    name: "Imperative",
    items: [

    ]
  },
  {
    icon: "icons/pagination/pin-4.svg",
    name: "Karten",
    items: [

    ]
  },
  {
    icon: "icons/pagination/info.svg",
    name: "Info",
    items: [

    ]
  },
  {
    icon: "icons/pagination/hammer.svg",
    name: "Vorbereitung",
    items: [

    ]
  },
  {
    icon: "icons/pagination/hourglass.svg",
    name: "Countdown",
    items: [

    ]
  },
  {
    icon: "icons/pagination/quote.svg",
    name: "Zitate",
    items: [

    ]
  },
  {
    icon: "icons/pagination/brush.svg",
    name: "Logos",
    items: [

    ]
  },
  {
    icon: "icons/pagination/smartphone.svg",
    name: "#KlimastreikOnline",
    items: [
      {
        name: "Gallery",
        preview: "data/templates/Gallery/preview.jpg",
        documents: [
          import('./Gallery/Gallery@1200x1200.vue'),
          import('./Gallery/Gallery@1200x675.vue')
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/video.svg",
    name: "Videos",
    items: [
      {
        name: "VideoTest",
        preview: "data/templates/VideoTest/preview.jpg",
        documents: [
          import('./VideoTest/VideoTest.vue')
        ],
        documentsCompiled: [
          {
            root: "https://dev.maurice-conrad.eu/toolpic-cdn/templates_compiled/VideoTest/VideoTest.vue.js",
            assets: "https://dev.maurice-conrad.eu/toolpic-cdn/templates_compiled/VideoTest"
          }
        ]
      }
    ]
  }
]
