# Toolpic Client Fridays For Future

Default client implementation of Toolpic project developed for Fridays For Future.

## Disclaimer

Before you are able to work in detail with the client's configuration such as modifying and creating templates on your own, please make sure that you're familiar with the following:

* [Toolpic Core](https://github.com/MauriceConrad/ToolpicCore)
* Toolpic Render (Coming soon)
* [Webpack](https://webpack.js.org)
* [Webpack: Authoring Libraries](https://webpack.js.org/guides/author-libraries/)
* [VueJS](https://vuejs.org/v2/guide/)
* [Vue Components](https://v1.vuejs.org/guide/components.html)
* [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html)

## Install

```bash
npm install
```

## Compile build

```bash
npm run build
```


### Structure

**Important:** Template Components are described very detailed in [Toolpic Core Documentation](https://github.com/MauriceConrad/ToolpicCore). Yes, we know that they technically not really a part of `toolpic-core` but the way we've implemented them is the recommended way *how to use* `toolpic-core` and absolutely reproduceable for every use case. To get familiar with them, read the `toolpic-core` documentation.



Templates are stored in `data/templates`. Each Template is a valid *VueComponent*. Even if each format such as **Instagram** (1200x1200) or **Twitter** (1200x675) is a standalone Template Component, they are grouped together in *Items* because different formats of the same SharePic/Video commonly would share their dependencies.

In `data/templates/template.js` all templates / formats are stored and grouped into three levels:
1. Folders (e.g. `Karte`, `Ankündigungen`)
2. Items (e.g. `Date2`, `Gallery`)
3. Documents (e.g. `Date@1200x1200.vue`, `Gallery@1200x675.vue`)

Technically, each `.vue` file represents a standalone Template Component that will be loaded by the client. The reason why they are grouped in `documents` is the fact, that we can store different formats of the same SharePic/Video on the same level.

#### Templates.js
The `templates.js` file at `data/templates/` exports an array containing all folders as `default` property.

```javascript
export default [
  {
    // Folder object here
  },
  {
    // Another object folder here
  }
];
```

#### Folder Structure

Any folder, contained within the array exported by `templates.js`, looks like the following:

```javascript
{
  icon: "some/icon/path/icon.svg",
  name: "Folder Name",
  items: [
    {
      // Item object here
    },
    {
      // Another item object here
    }
  ]
}
```

##### `icon`

The `icon` property points simply to any SVG file used as folder icon

##### `name`

The `name` property is just a name that will be used to represent the folder

##### `items`

The `items` array contains items that are containing `documents` for grouping several Template Components together as *one logical template*.

#### Item Structure


Any item, contained within `items` array of a folder, looks like this:

```javascript
{
  name: "Template Name",
  preview: "some/path/to/preview/file.jpg",
  documents: [
    import('./path/to/TemplateComponent1.vue'),
    import('./path/to/TemplateComponent2.vue')
  ],
  documentsCompiled: [
    {
      root: "https://url.to/cdn/with/TemplateCompiled/TemplateComponent1Compiled.vue.js",
      assets: "https://url.to/cdn/with/TemplateCompiled"
    }
  ]
}
```

##### `name`

The `name` property represents the name of the Template Components stored in `documents` because they are grouped together to be on the same level.

##### `preview`

The `preview` property points to any image file that will be displayed as preview image


##### `documents`

The `documents` array contains imported pre-compiled Template Components that are grouped together here.


##### `documentsCompiled`

The `documentsCompiled` array points to the same Template Components as `documents` but fully compiled for standalone-usage. The `root` property points to the compiled and webpacked file created using `npm run templates` (More about compiling for rendering below).

Because webpack cannot offer a `publicPath` like API that could be set just when importing the package but we do not know the endpoint, the compiled template package will be stored at the end of the day (Because the rendering system is completely independent of any client implementation), you have to point the `assets` property to a HTTP-accessible directory that stores the bundled assets, webpack creates when compiling the template component. Normally they will be stored on the same level as the entry file of the webpacked component (Because this makes sense and is the default configuration we're using in `webpack.templates.js` with not setting any `publicPath` at all). The reason why this is working is, that `toolpic-render` creates a local delivery server that proxies the assets that will be requested at root `/`. More about that nice behaviour in the documentation of `toolpic-render`.



## Compile Templates for Rendering

`toolpic-render` needs pre-compiled template packages, that are valid *VueComponents* and can be used standalone. To build them, run:

```bash
npm run templates
```

The compiled templates will be saved at `data/templates_compiled/`. The related configuration is stored in `webpack.templates.js`. A pre-compiled *template Component* will be assigned globally to the `window` object as `ToolpicTemplateComponent` when imported. You could change this behaviour in the configuration file by modifying the `library` or `libraryTarget` properties. Read more about *webpack library* configuration at [Webpack Offical Documentation](https://webpack.js.org/guides/author-libraries/).

Have also a look at `toolpic-render`'s documentation to understand the way, the pre-compiled templates should be used when using `toolpic-render`.
