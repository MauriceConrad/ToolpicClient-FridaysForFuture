# Toolpic Client Fridays For Future

Default client implementation of Toolpic project developed for Fridays For Future.

## Disclaimer

Before you are able to work in detail with the client's configuration such as modifying and creating templates on your own, please make sure that you're familiar with the following:

* [Toolpic Core](https://github.com/MauriceConrad/ToolpicCore)
* [Toolpic Render](https://github.com/MauriceConrad/ToolpicRender)
* [Webpack](https://webpack.js.org)
* [Webpack: Authoring Libraries](https://webpack.js.org/guides/author-libraries/)
* [VueJS](https://vuejs.org/v2/guide/)
* [Vue Components](https://v1.vuejs.org/guide/components.html)
* [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html)

## Project Structure

![Dependency Graph](https://dev.maurice-conrad.eu/ToolpicCore/docs/Dependency_Graph.svg)


## Install

```bash
npm install
```

## Compile build

```bash
npm run build
```


### Structure

**Important:** Template Components are described very detailed in [Toolpic Core Documentation](https://github.com/MauriceConrad/ToolpicCore). Yes, we know that they technically not really a part of `Toolpic Core` but the way we've implemented them is the recommended way *how to use* `Toolpic Core` and absolutely reproduceable for every use case. To get familiar with them, read the `Toolpic Core` documentation.

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
npm run templates <Template1> <Template2>
```

`<TemplateX>` represents any unique Template identifier name, the template is registered with in the `webpack.templates.js` file (within the `bundles` Map). Motsly, this name is t6he same internal identifier, we're using for the folder and the `.vue` files. E.g. `AnnouncementStrike`, `AnnouncementSingleSpeaker`, `CountdownStrike` or whatever. The

The compiled templates will be saved at `cdn/toolpic/templates_compiled/`. The related configuration is stored in `webpack.templates.js`. A pre-compiled *template Component* will be assigned globally to the `window` object as `ToolpicTemplateComponent` when imported. You could change this behaviour in the configuration file by modifying the `library` or `libraryTarget` properties. Read more about *webpack library* configuration at [Webpack Offical Documentation](https://webpack.js.org/guides/author-libraries/).

Have also a look at `toolpic-render`'s documentation to understand the way, the pre-compiled templates should be used when using `toolpic-render`.


### Toolpic FFF Helpers

As we already introduced in *Toolpic Core*'s documentation, you should use `directives`, `components` or just `methods` within Vue's context to automate some graphical stuff. Some routines as `<MultiLine>` component are already contained within `Toolpic Core`. Others are more or less specifically designed for *Fridays For Future*, so they are contained with this client.

#### `<FFFTitleShader>`

The `<FFFTitleShader>` custom component automates the hairline-border and gradient map effect, the CI of FFF is using a lot of times within titles.

```xml
<FFFTitleShader dynamic="1000 400" origin="540px 540px" offset="-8 -8" stroke="#fff" stroke-width="3">
  <template>
    <text x="540" y="540" class="title">
      {{ date }}
    </text>
  </template>
  <template v-slot:shader>
    <image v-scaleimage="0" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="<imageUrl>" filter="url(#FFFVerlaufsumsetzungSecondary)" />
  </template>
</FFFTitleShader>
```


##### `dynamic`

The `dynamic` attribute contains two space-separated values representing maximum width and height of the element to apply `v-dynamic`. Because of the fact that this component has to calculate with the original bounding of the content within but the masked `shader` would set that bounding box to big when looking from outside to the rendered element, the `v-dynamic` directive has to be applied **within** the component.


##### `origin`

`origin` is just the value that will be used for `transform-origin`.

**Note:** Internally, the component **is not** using `<Dynamic>` but `v-dynamic`. The reason is, that `v-dynamic` can use a complete different element to get the bounding box from and this is needed here.

##### `offset`

`offset` defines the offset of the hairline-border that will be displayed.

##### `stroke`

`stroke` defines the stroke color of the hairline-border.

##### `stroke-width`

`stroke-width` defines the stroke width of the hairline-border.

##### Slots

This component is using **2** slots:
1. `default`: The content the shader will be applied to.
2. `shader` The shader that will be applied. In case of titles when using Fridays For Future's CI, this will mostly be the background image with a gradient map filter on it, mapping the secondary color. But this also could be any SVG element.

Read more about [VueJS slots here](https://vuejs.org/v2/guide/components-slots.html).


#### `<FFFTitleBox>`

The `<FFFTitleBox>` custom component can be used to implement a white box with negative-masked content (mostly text) within.

**Note**: This component is a little bit buggy because it needs a valid `SVGRect` bounding box to calculate with. In some enviornments, such when the preview svg context is out of viewport, the whole component disappears. We're working on that.

```xml
<FFFTitleBox padding="15 30">
  <text x="540" y="540">
    Any text content here
  </text>
</FFFTitleBox>
```

##### `padding`

`padding` contains 1-4 space-separated valued representing the paddings to *top*, *right*, *bottom* and *left* side.

##### Slot

The only slot that will be used here is the content, that should be masked out negatively within the surrounding box.


#### `<FFFText>`

While the with *Toolpic* shipped `<MultiLine>` component does a lot of cool stuff, this component does not offer any solution for highlighting words within a floating multiline text as required by the CI of Fridays For Future.

So, this component works exactly the same as `<MultiLine>` but with some differences:

1. **No** `background` attribute because there are no boxes around the text.
2. **No** `padding` attribute because there are no boxes around the text.
3. **New** `highlight-padding` attribute containing the paddings of the boxes around highlighted words.
4. Slot `shader` will be used to store the shader that will be applied to the boxes around highlighted words.

```xml
<FFFText
          x="540"
          y="540"
          relative="0 0"
          lineheight="1.2"
          align="center"
          dynamic="1000 800"
          highlight-padding="0 6 0 12"
          v-bind:text="['Line 1 is cool.', 'Line 2 is *much* cooler.']"
          css="font-size: 80px; font-weight: 800; font-family: 'Jost'; fill: #fff;">
  <template v-slot:shader>
    <image v-scaleimage="0" x="0" y="0" width="1080" height="1080" v-bind:xlink:href="<ImageUrl>" filter="url(#FFFVerlaufsumsetzungSecondary)" />
  </template>
</FFFText>
```

##### Highlighting words

Just use `Hello *World*` syntax to highlight any word and then, a box containing the `shader` slot will be appear surrounding the word.

**Important**: This functionality is buggy depending on the length of the word. We're working on that.


#### `<GradientMapFilter>`

Because SVG does not offer any *gradient map* filter, this filter has to be implemented via `<filter>`, `<feColorMatrix>`, `<feComponentTransfer>` and svg filter table values. Because this is not that clean when working with different hexadecimal color codes, this component automates the creation of such filters by just passing any amount of color codes as attribute.

```xml
<GradientMapFilter id="FFFVerlaufsumsetzungSecondary" v-bind:gradient="#830037 #ff006b" opacity="1" brightness="1"></GradientMapFilter>
```


##### `gradient`

`gradient` contains a list of space-separated hexadecimal color codes that will be the gradient map.

##### `opacity`

`opacity` just represents a `opacity` value that will be applied to the filter.


##### `brightness`

`brightness` can be used to set *brightness* up or down.



#### `<SurfacePolyline>`

Because svg does not offer any possibility to set the surface of a polyline completely manually with own elements, we've developed such a component.

```xml
<SurfacePolyline v-bind:points="[0, 0, 100, 100, 150, 50]" v-bind:offset="100" v-bind:min-length="50" v-bind:max="5">

  <path d="M 0,-20 L 80,0 0,20" class="arrow" v-bind:style="{ fill: theme.secondary, transform: 'rotate(' + (180 * reverseDirection) + 'deg)' }" style="transform-origin: 40px 0px;" />

</SurfacePolyline>
```

##### `points`

`points` is an array containing the points of the polyline.


##### `offset`

`offset` is a number representing a minimum distance elements will be rendered with to each other. This does not mean that there will always be that difference.

###### `min-length`

`min-length` represents the minimum length a interval within the polyline has to be straight to become a valid option.


##### `max`

`max` is the maximum amount of rendered elements at all.
