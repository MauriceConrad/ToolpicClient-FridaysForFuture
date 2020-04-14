const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const bundles = new Map(
  [
    ['Date2', [
      './data/templates/Date2/Date2@1200x1200.vue',
      './data/templates/Date2/Date2@1200x675.vue'
    ]],
    ['Imperative', [
      './data/templates/Imperative/Imperative@1200x1200.vue',
      './data/templates/Imperative/Imperative@1200x675.vue'
    ]],
    ['Gallery', [
      './data/templates/Gallery/Gallery@1200x1200.vue',
      './data/templates/Gallery/Gallery@1200x675.vue'
    ]],
    ['VideoTest', [
      './data/templates/VideoTest/VideoTest.vue',
    ]]
  ]
);

function packTemplates(targetDir) {
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

module.exports = packTemplates(path.resolve(__dirname, 'data', 'templates_compiled'));
