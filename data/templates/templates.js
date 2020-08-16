import { loadIcons } from "../../src/helper.js"

export default [
  {
    icon: "icons/pagination/bullhorn.svg",
    name: "Demo",
    items: [
      /*{
        name: "WebinarTemplate",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementStrike/preview.jpg",
        documents: [
          import('./WebinarTemplate/WebinarTemplate@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [

        ]
      },*/
      {
        name: "Date",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementStrike/preview.jpg",
        documents: [
          import('./AnnouncementStrike/AnnouncementStrike@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementStrike/AnnouncementStrike@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementStrike"
          }
        ]
      },
      {
        name: "Time",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementTime/preview.jpg",
        documents: [
          import('./AnnouncementTime/AnnouncementTime@1080x1080.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementTime/AnnouncementTime@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementTime"
          }
        ]
      },
      {
        name: "Solidarity",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSolidarity/preview.jpg",
        documents: [
          import('./AnnouncementSolidarity/AnnouncementSolidarity@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementSolidarity/AnnouncementSolidarity@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementSolidarity"
          }
        ]
      },
      {
        name: "Countdown",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/CountdownStrike/preview.jpg",
        documents: [
          import('./CountdownStrike/CountdownStrike@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/CountdownStrike/CountdownStrike@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/CountdownStrike"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/hammer.svg",
    name: "Communication",
    items: [
      {
        name: "Celebrity",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementCelebrity/preview.jpg",
        documents: [
          import('./AnnouncementCelebrity/AnnouncementCelebrity@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementCelebrity/AnnouncementCelebrity@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementCelebrity"
          }
        ]
      },
      {
        name: "Demo Route",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/MapDemoRoute/preview.jpg",
        documents: [
          import('./MapDemoRoute/MapDemoRoute@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/MapDemoRoute/MapDemoRoute@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/MapDemoRoute"
          }
        ]
      },
      {
        name: "Meeting Point",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/EventMeetingLocation/preview.jpg",
        documents: [
          import('./EventMeetingLocation/EventMeetingLocation@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/EventMeetingLocation/EventMeetingLocation@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/EventMeetingLocation"
          }
        ]
      },
      {
        name: "Important Message",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/ImportantMessageLong/preview.jpg",
        documents: [
          import('./ImportantMessageLong/ImportantMessageLong@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ImportantMessageLong/ImportantMessageLong@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ImportantMessageLong"
          }
        ]
      },
      {
        name: "Important Message Alternate",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/ImportantMessageIcon/preview.jpg",
        documents: [
          import('./ImportantMessageIcon/ImportantMessageIcon@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ImportantMessageIcon/ImportantMessageIcon@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ImportantMessageIcon"
          }
        ]
      },
      {
        name: "Thanks",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/ThanksMessage/preview.jpg",
        documents: [
          import('./ThanksMessage/ThanksMessage@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ThanksMessage/ThanksMessage@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ThanksMessage"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/ink.svg",
    name: "Campaign",
    items: [
      {
        name: "Support",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Support/preview.jpg",
        documents: [
          import('./Support/Support@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Support/Support@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Support"
          }
        ]
      },
      {
        name: "Support Campaign Simple",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/SupportCampaignSimple/preview.jpg",
        documents: [
          import('./SupportCampaignSimple/SupportCampaignSimple@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/SupportCampaignSimple/SupportCampaignSimple@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/SupportCampaignSimple"
          }
        ]
      },
      {
        name: "Help",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/HelpUs/preview.jpg",
        documents: [
          import('./HelpUs/HelpUs@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/HelpUs/HelpUs@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/HelpUs"
          }
        ]
      },
      {
        name: "Wanted",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/WantedSign/preview.jpg",
        documents: [
          import('./WantedSign/WantedSign@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/WantedSign/WantedSign@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/WantedSign"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/point.svg",
    name: "Events",
    items: [
      {
        name: "Location",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/MapEventLocation/preview.jpg",
        documents: [
          import('./MapEventLocation/MapEventLocation@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/MapEventLocation/MapEventLocation@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/MapEventLocation"
          }
        ]
      },
      {
        name: "Public Event",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/PublicLeisureEvent/preview.jpg",
        documents: [
          import('./PublicLeisureEvent/PublicLeisureEvent@1080x1080.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/PublicLeisureEvent/PublicLeisureEvent@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/PublicLeisureEvent"
          }
        ]
      },
      {
        name: "General Event",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/GeneralDateAnnouncement/preview.jpg",
        documents: [
          import('./GeneralDateAnnouncement/GeneralDateAnnouncement@1080x1080.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/GeneralDateAnnouncement/GeneralDateAnnouncement@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/GeneralDateAnnouncement"
          }
        ]
      },
      {
        name: "Detailed Event",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/OpenInternalEvent/preview.jpg",
        documents: [
          import('./OpenInternalEvent/OpenInternalEvent@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/OpenInternalEvent/OpenInternalEvent@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/OpenInternalEvent"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/comment.svg",
    name: "Activist",
    items: [
      {
        name: "Calendar",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/CalendarApplication/preview.jpg",
        documents: [
          import('./CalendarApplication/CalendarApplication@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/CalendarApplication/CalendarApplication@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/CalendarApplication"
          }
        ]
      },
      {
        name: "Speaker",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSingleSpeaker/preview.jpg",
        documents: [
          import('./AnnouncementSingleSpeaker/AnnouncementSingleSpeaker@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementSingleSpeaker/AnnouncementSingleSpeaker@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementSingleSpeaker"
          }
        ]
      },
      {
        name: "Speakers",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/AnnouncementSpeakers/preview.jpg",
        documents: [
          import('./AnnouncementSpeakers/AnnouncementSpeakers@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementSpeakers/AnnouncementSpeakers@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/AnnouncementSpeakers"
          }
        ]
      },
      {
        name: "Week",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/WeekCalendar/preview.jpg",
        documents: [
          import('./WeekCalendar/WeekCalendar@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/WeekCalendar/WeekCalendar@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/WeekCalendar"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/smartphone.svg",
    name: "Social Media",
    items: [
      {
        name: "Statement",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/StatementPlain/preview.jpg",
        documents: [
          import('./StatementPlain/StatementPlain@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/StatementPlain/StatementPlain@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/StatementPlain"
          }
        ]
      },
      {
        name: "Quote",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/QuoteActivist/preview.jpg",
        documents: [
          import('./QuoteActivist/QuoteActivist@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/QuoteActivist/QuoteActivist@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/QuoteActivist"
          }
        ]
      },
      {
        name: "News",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/NewsSimple/preview.jpg",
        documents: [
          import('./NewsSimple/NewsSimple@1080x1080.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/NewsSimple/NewsSimple@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/NewsSimple"
          }
        ]
      },
      {
        name: "News 2",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/FactSimple/preview.jpg",
        documents: [
          import('./FactSimple/FactSimple@1080x1080.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/FactSimple/FactSimple@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/FactSimple"
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
      }
    ]
  },
  {
    icon: "icons/pagination/people.svg",
    name: "Facts",
    items: [
      {
        name: "Info Picture",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/InfoPicture/preview.jpg",
        documents: [
          import('./InfoPicture/InfoPicture@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/InfoPicture/InfoPicture@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/InfoPicture"
          }
        ]
      },
      {
        name: "Info Picture Detail",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/InfoPictureDetail/preview.jpg",
        documents: [
          import('./InfoPictureDetail/InfoPictureDetail@1080x1080.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/InfoPictureDetail/InfoPictureDetail@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/InfoPictureDetail"
          }
        ]
      },
      {
        name: "Fact",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/FactText/preview.jpg",
        documents: [
          import('./FactText/FactText@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/FactText/FactText@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/FactText"
          }
        ]
      },
      {
        name: "Fact Check Dual",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/FactCheckDual/preview.jpg",
        documents: [
          import('./FactCheckDual/FactCheckDual@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/FactCheckDual/FactCheckDual@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/FactCheckDual"
          }
        ]
      },
      {
        name: "Fact Checklist",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/FactCheckList/preview.jpg",
        documents: [
          import('./FactCheckList/FactCheckList@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/FactCheckList/FactCheckList@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/FactCheckList"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/interface.svg",
    name: "Slides",
    items: [
      {
        name: "Page Title",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Slides/preview1.jpg",
        documents: [
          import('./Slides/TitlePage@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Slides/TitlePage@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Slides"
          }
        ]
      },
      {
        name: "Page Facts",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Slides/preview2.jpg",
        documents: [
          import('./Slides/PageFacts@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Slides/PageFacts@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Slides"
          }
        ]
      },
      {
        name: "Page Fact",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Slides/preview3.jpg",
        documents: [
          import('./Slides/PageSingleFact@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Slides/PageSingleFact@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Slides"
          }
        ]
      },
      {
        name: "Page End",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Slides/preview4.jpg",
        documents: [
          import('./Slides/PageEnd@1080x1080.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Slides/PageEnd@1080x1080.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Slides"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/brush.svg",
    name: "Other",
    items: [
      /*{
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
      }*/
      /*{
        name: "Logo Black Lives Matter",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Logo/preview_BLM.png",
        documents: [
          import('./Logo/Logo_BLM.vue'),
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Logo/Logo_BLM.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Logo"
          }
        ]
      },*/
      {
        name: "Logo",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Logo/preview.png",
        documents: [
          import('./Logo/LogoNew.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Logo/LogoNew.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Logo"
          }
        ]
      },
      {
        name: "Logo Animation",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Logo/preview.png",
        documents: [
          import('./Logo/LogoAnimated.vue'),
          //import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Logo/LogoAnimated.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Logo"
          }
        ]
      }
    ]
  },
  {
    icon: "icons/pagination/fashion.svg",
    name: "FFF Classic",
    items: [
      {
        name: "Date2",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/Date/preview.jpg",
        documents: [
          import('./Date2/Date2@1200x1200.vue'),
          import('./Date2/Date2@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Date2/Date2@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Date2"
          },
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Date2/Date2@1200x675.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/Date2"
          }
        ]
      },
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
      },
      {
        name: "Map",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/ClassicMap/preview.jpg",
        documents: [
          import('./ClassicMap/ClassicMap@1200x1200.vue'),
          //import('./Thanks/Thanks@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ClassicMap/ClassicMap@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ClassicMap"
          }
        ]
      },
      {
        name: "Influence",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/ClassicInfluence/preview.jpg",
        documents: [
          import('./ClassicInfluence/ClassicInfluence@1200x1200.vue'),
          //import('./Thanks/Thanks@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ClassicInfluence/ClassicInfluence@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ClassicInfluence"
          }
        ]
      },
      {
        name: "Sentence",
        preview: "https://cdn.fridaysforfuture.io/toolpic/templates/ClassicSentence/preview.jpg",
        documents: [
          import('./ClassicSentence/ClassicSentence@1200x1200.vue'),
          //import('./Thanks/Thanks@1200x675.vue')
        ],
        documentsCompiled: [
          {
            root: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ClassicSentence/ClassicSentence@1200x1200.vue.js",
            assets: "https://cdn.fridaysforfuture.io/toolpic/templates_precompiled/ClassicSentence"
          }
        ]
      }
    ]
  }
]
