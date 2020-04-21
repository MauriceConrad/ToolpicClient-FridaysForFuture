import { loadIcons } from "../../src/helper.js"

export default [
  {
    icon: "icons/pagination/ink.svg",
    name: "FFF Classic",
    items: [
      {
        name: "AnnouncementStrike",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Date/preview.jpg",
        documents: [
          import('./AnnouncementStrike/AnnouncementStrike@1200x1200.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ]
      },
      {
        name: "AnnouncementSolidarity",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Date/preview.jpg",
        documents: [
          import('./AnnouncementSolidarity/AnnouncementSolidarity@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          /*{
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Date2/Date2@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Date2"
          },
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Date2/Date2@1200x675.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Date2"
          }*/
        ]
      },
      {
        name: "AnnouncementCelebrity",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Date/preview.jpg",
        documents: [
          import('./AnnouncementCelebrity/AnnouncementCelebrity@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ]
      },
      {
        name: "AnnouncementSpeakers",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Date/preview.jpg",
        documents: [
          import('./AnnouncementSpeakers/AnnouncementSpeakers@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ]
      }/*
      {
        name: "Imperative",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Imperative/preview.jpg",
        documents: [
          import('./Imperative/Imperative@1200x1200.vue'),
          import('./Imperative/Imperative@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Imperative/Imperative@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Imperative"
          },
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Imperative/Imperative@1200x675.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Imperative"
          }
        ]
      },
      {
        name: "Gallery",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Gallery/preview.jpg",
        documents: [
          import('./Gallery/Gallery@1200x1200.vue'),
          import('./Gallery/Gallery@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Gallery/Gallery@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Gallery"
          },
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Gallery/Gallery@1200x675.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Gallery"
          }
        ]
      },
      {
        name: "Info",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Info/preview.jpg",
        documents: [
          import('./Info/Info@1200x1200.vue'),
          import('./Info/Info@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Info/Info@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Info"
          },
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Info/Info@1200x675.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Info"
          }
        ]
      },
      {
        name: "Pride",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Pride/preview.jpg",
        documents: [
          import('./Pride/Pride@1200x1200.vue'),
          import('./Pride/Pride@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Pride/Pride@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Pride"
          },
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Pride/Pride@1200x675.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Pride"
          }
        ]
      },
      {
        name: "Quote",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Quote/preview.jpg",
        documents: [
          import('./Quote/Quote@1200x1200.vue'),
          import('./Quote/Quote@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Quote/Quote@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Quote"
          },
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Quote/Quote@1200x675.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Quote"
          }
        ]
      },
      {
        name: "Thanks",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Thanks/preview.jpg",
        documents: [
          import('./Thanks/Thanks@1200x1200.vue'),
          //import('./Thanks/Thanks@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Thanks/Thanks@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Thanks"
          }
        ]
      }*/
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
      {
        name: "Logo",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Logo/preview.jpg",
        documents: [
          import('./Logo/Logo.vue'),
          //import('./Logo/Logo@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Logo/Logo.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Logo"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/smartphone.svg",
    name: "#KlimastreikOnline",
    items: [

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
