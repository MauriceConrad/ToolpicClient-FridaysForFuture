const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const allowedTemplates = process.argv.slice(2);


const bundles = new Map([
  ['Date2', [
    './data/templates/Date2/Date2@1200x1200.vue',
    './data/templates/Date2/Date2@1200x675.vue'
  ]],
  ['Imperative', [
    './data/templates/Imperative/Imperative@1200x1200.vue',
    './data/templates/Imperative/Imperative@1200x675.vue'
  ]],
  ['Info', [
    './data/templates/Info/Info@1200x1200.vue',
    './data/templates/Info/Info@1200x675.vue'
  ]],
  ['Pride', [
    './data/templates/Pride/Pride@1200x1200.vue',
    './data/templates/Pride/Pride@1200x675.vue'
  ]],
  ['Quote', [
    './data/templates/Quote/Quote@1200x1200.vue',
    './data/templates/Quote/Quote@1200x675.vue'
  ]],
  ['Thanks', [
    './data/templates/Thanks/Thanks@1200x1200.vue'
  ]],
  ['ClassicMap', [
    './data/templates/ClassicMap/ClassicMap@1200x1200.vue'
  ]],
  ['ClassicInfluence', [
    './data/templates/ClassicInfluence/ClassicInfluence@1200x1200.vue'
  ]],
  ['ClassicSentence', [
    './data/templates/ClassicSentence/ClassicSentence@1200x1200.vue'
  ]],
  ['VideoTest', [
    './data/templates/VideoTest/VideoTest.vue',
  ]],

  ['AnnouncementStrike', [
    './data/templates/AnnouncementStrike/AnnouncementStrike@1080x1080.vue',
  ]],
  ['AnnouncementTime', [
    './data/templates/AnnouncementTime/AnnouncementTime@1080x1080.vue',
  ]],
  ['AnnouncementSolidarity', [
    './data/templates/AnnouncementSolidarity/AnnouncementSolidarity@1080x1080.vue',
  ]],
  ['CountdownStrike', [
    './data/templates/CountdownStrike/CountdownStrike@1080x1080.vue',
  ]],

  ['AnnouncementCelebrity', [
    './data/templates/AnnouncementCelebrity/AnnouncementCelebrity@1080x1080.vue',
  ]],
  ['MapDemoRoute', [
    './data/templates/MapDemoRoute/MapDemoRoute@1080x1080.vue',
  ]],
  ['EventMeetingLocation', [
    './data/templates/EventMeetingLocation/EventMeetingLocation@1080x1080.vue',
  ]],
  ['ImportantMessageLong', [
    './data/templates/ImportantMessageLong/ImportantMessageLong@1080x1080.vue',
  ]],
  ['ImportantMessageIcon', [
    './data/templates/ImportantMessageIcon/ImportantMessageIcon@1080x1080.vue',
  ]],
  ['ThanksMessage', [
    './data/templates/ThanksMessage/ThanksMessage@1080x1080.vue',
  ]],

  ['Support', [
    './data/templates/Support/Support@1080x1080.vue',
  ]],
  ['SupportCampaign', [
    './data/templates/SupportCampaign/SupportCampaign@1080x1080.vue',
  ]],
  ['SupportCampaignSimple', [
    './data/templates/SupportCampaignSimple/SupportCampaignSimple@1080x1080.vue',
  ]],
  ['HelpUs', [
    './data/templates/HelpUs/HelpUs@1080x1080.vue',
  ]],
  ['WantedSign', [
    './data/templates/WantedSign/WantedSign@1080x1080.vue',
  ]],

  ['MapEventLocation', [
    './data/templates/MapEventLocation/MapEventLocation@1080x1080.vue',
  ]],
  ['PublicLeisureEvent', [
    './data/templates/PublicLeisureEvent/PublicLeisureEvent@1080x1080.vue',
  ]],
  ['GeneralDateAnnouncement', [
    './data/templates/GeneralDateAnnouncement/GeneralDateAnnouncement@1080x1080.vue',
  ]],
  ['OpenInternalEvent', [
    './data/templates/OpenInternalEvent/OpenInternalEvent@1080x1080.vue',
  ]],

  ['CalendarApplication', [
    './data/templates/CalendarApplication/CalendarApplication@1080x1080.vue',
  ]],
  ['AnnouncementSingleSpeaker', [
    './data/templates/AnnouncementSingleSpeaker/AnnouncementSingleSpeaker@1080x1080.vue',
  ]],
  ['AnnouncementSpeakers', [
    './data/templates/AnnouncementSpeakers/AnnouncementSpeakers@1080x1080.vue',
  ]],
  ['WeekCalendar', [
    './data/templates/WeekCalendar/WeekCalendar@1080x1080.vue',
  ]],

  ['StatementPlain', [
    './data/templates/StatementPlain/StatementPlain@1080x1080.vue',
  ]],
  ['QuoteActivist', [
    './data/templates/QuoteActivist/QuoteActivist@1080x1080.vue',
  ]],
  ['NewsSimple', [
    './data/templates/NewsSimple/NewsSimple@1080x1080.vue',
  ]],
  ['FactSimple', [
    './data/templates/FactSimple/FactSimple@1080x1080.vue',
  ]],
  ['Gallery', [
    './data/templates/Gallery/Gallery@1200x1200.vue',
    './data/templates/Gallery/Gallery@1200x675.vue'
  ]],

  ['InfoPicture', [
    './data/templates/InfoPicture/InfoPicture@1080x1080.vue',
  ]],
  ['InfoPictureDetail', [
    './data/templates/InfoPictureDetail/InfoPictureDetail@1080x1080.vue',
  ]],
  ['FactText', [
    './data/templates/FactText/FactText@1080x1080.vue',
  ]],
  ['FactCheckDual', [
    './data/templates/FactCheckDual/FactCheckDual@1080x1080.vue',
  ]],
  ['FactCheckList', [
    './data/templates/FactCheckList/FactCheckList@1080x1080.vue',
  ]],

  ['Slides', [
    './data/templates/Slides/TitlePage@1080x1080.vue',
    './data/templates/Slides/PageSingleFact@1080x1080.vue',
    './data/templates/Slides/PageFacts@1080x1080.vue',
    './data/templates/Slides/PageEnd@1080x1080.vue',
  ]],

  ['Logo', [
    './data/templates/Logo/Logo.vue',
    './data/templates/Logo/LogoNew.vue',
    './data/templates/Logo/LogoAnimated.vue'
  ]]


].filter(entry => {
  const [ name, files ] = entry;
  return allowedTemplates.includes(name);
}));


function packTemplates(bundles, targetDir) {
  const configs = [];
  for (let [templateFolder, templates] of bundles) {
    configs.push(...templates.map(templatePath => {
      const entryFileBaseName = path.basename(templatePath);

      return {
        mode: 'production',
        entry: {
          app: templatePath
        },
        output: {
          path: path.resolve(targetDir, templateFolder),
          filename: entryFileBaseName + '.js',
          library: 'ToolpicTemplateComponent',
          libraryTarget: 'window',
        },
        module: {
          rules: [
            {
              test: /.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      "@babel/preset-env", {
                        exclude: []
                      }
                    ]
                  ]
                }
              }
            },
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            },
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            },
            {
              test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
              loader: 'file-loader'
            }
          ]
        },
        resolve: {
          alias: {
            fields$: path.resolve(__dirname, 'field-components', '__index.js')
          }
        },
        plugins: [
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
          }),
          // make sure to include the plugin!
          new VueLoaderPlugin()
        ]
      }
    }));
  }

  return configs;
}

const configs = packTemplates(bundles, path.resolve(__dirname, 'cdn', 'toolpic', 'templates_precompiled'));

(async () => {
  for (var config of configs) {
    await new Promise(function(resolve, reject) {
      webpack(config, (err, stats) => {
        if (err || stats.hasErrors()) {
          console.error("Error occured while compiling template:", config);
        }
        else {
          console.log("Done:", config.entry.app);
        }
        resolve(true);
      });
    });
  }
})();
