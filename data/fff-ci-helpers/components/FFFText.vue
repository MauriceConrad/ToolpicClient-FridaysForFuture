<template>

  <g>
    <defs>
      <g ref="linesTester">
        <g v-for="line in lines" v-bind:style="Object.assign(styleObj)">
          <g v-bind:style="{ 'transform-origin': line.center.x + 'px ' + line.center.y + 'px' }">
            <text v-bind:x="line.x + offset[3]" v-bind:y="line.y + offset[0]" style="alignment-baseline: hanging;" letter-spacing="0">
              <tspan v-for="part in line.parts" style="alignment-baseline: hanging;">
                {{ part.str }}
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </defs>

    <g v-bind:style="{ 'transform-origin': origin }" v-dynamic="$refs.linesTester" v-bind:data-dynamic-width="dyn[0]" v-bind:data-dynamic-height="dyn[1]">
      <g v-for="line in lines" v-bind:style="Object.assign(styleObj)">
        <g v-bind:style="{ 'transform-origin': line.center.x + 'px ' + line.center.y + 'px' }">
          <g v-for="part in line.parts.filter(part => part.highlighted)">
            <mask v-bind:id="'highlight-part-mask-' + part.maskId">
              <g>
                <rect v-bind:x="(line.x + offset[3] + part.offset) - highlightPaddingValue[3]" v-bind:y="line.y + offset[0] - highlightPaddingValue[0]" v-bind:width="part.width + highlightPaddingValue[1] + highlightPaddingValue[3]" v-bind:height="fontSize + highlightPaddingValue[0] + highlightPaddingValue[2]" style="fill: #fff;"/>
              </g>
            </mask>
            <g v-bind:mask="'url(#highlight-part-mask-' + part.maskId + ')'">
              <slot name="shader"></slot>
            </g>
          </g>
        </g>
      </g>
    </g>

    <g v-bind:style="{ 'transform-origin': origin }" v-dynamic="$refs.linesTester" v-bind:data-dynamic-width="dyn[0]" v-bind:data-dynamic-height="dyn[1]">
      <g v-for="line in lines" v-bind:style="Object.assign(styleObj)">
        <g v-bind:style="{ 'transform-origin': line.center.x + 'px ' + line.center.y + 'px' }">
          <text v-bind:x="line.x + offset[3]" v-bind:y="line.y + offset[0]" style="alignment-baseline: hanging;" letter-spacing="0">
            <tspan v-for="part in line.parts" style="alignment-baseline: hanging;">
              {{ part.str }}
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </g>
</template>

<script type="text/javascript">
  import { VueHelpers, VueDirectives } from 'toolpic';
  const { textInfo } = VueHelpers;


  import { generateId } from '../helpers';

  export default {
    name: "FFFText",
    props: ['x', 'y', 'text', 'lineheight', 'css', 'relative', 'align', 'highlight-padding', 'dynamic'],
    data() {
      return {
        a: 100
      }
    },
    computed: {
      origin() {
        return this.x + 'px ' + this.y + 'px';
      },
      dyn() {
        return this.dynamic.split(' ').map(Number);
      },
      __lineHeight() {
        return Number(this.lineheight || 1.1);
      },
      highlightPaddingValue() {
        const padding = this.highlightPadding.split(" ").map(Number);
        return [
          padding[0],
          padding[1] || padding[0],
          padding[2] || padding[0],
          padding[3] || padding[1] || padding[0]
        ];
      },
      relativePos() {
        try {
          const [ x, y ] = this.relative.split(" ").map(Number);

          return {
            x,
            y
          };
        }
        catch (e) {
          return {
            x: 0,
            y: 0
          }
        }
      },
      pos() {
        return {
          x: Number(this.x),
          y: Number(this.y)
        };
      },
      offset() {
        //const padding = this.padding.split(" ").map(Number);
        return [
          0,
          0,
          0,
          0
        ];
      },
      computedStyle() {
        const testElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
        testElement.style = this.css;
        return testElement.style;
      },
      styleObj() {
        const computedStyle = this.computedStyle;

        const obj = {};
        for (let key in computedStyle) {
          //console.log(key in computedStyle);
          if (computedStyle.hasOwnProperty(key)) {
            const value = computedStyle[key];
            if (key.match(/[^0-9]/) && value) {
              obj[key] = value;
            }
          }
        }
        for (let key of computedStyle) {
          obj[key] = computedStyle[key];
        }
        return obj;
      },
      fontSize() {
        return Number(this.computedStyle["font-size"].replace(/[^0-9]/g, ""));
      },
      whitespaceBounding() {
        return textInfo('\u00A0', this.styleObj);
      },
      lineBoundings() {
        const textArray = this.text.filter(line => line);

        return textArray.map((line, index) => {
          const items = line.split('*');

          const lineStr = items.join('');

          const { width, height } = textInfo(lineStr, this.styleObj);


          return {
            width: this.offset[3] + width + this.offset[1],
            height: this.offset[0] + this.fontSize + this.offset[2],
            text: lineStr,
            items: items.map((part, i) => {
              // Offset of text part to left side of current line
              const offset = items.slice(0, i).map(itemBefore => textInfo(itemBefore, this.styleObj).width).reduce((accumulator, partWidth) => accumulator + partWidth, 0);
              const partBounding = textInfo(part, this.styleObj);
              return {
                // Add whitespace width to offset
                offset: offset + this.whitespaceBounding.width,
                width: partBounding.width,
                str: part,
                highlighted: i % 2 == 1,
                maskId: generateId(10)
              }
            })
          }
        });
      },
      bounding() {
        const width = Math.max(...this.lineBoundings.map(box => box.width));
        const height = this.lineBoundings.map(box => box.height).reduce((accumulator, height) => accumulator + (height * this.__lineHeight));

        const exampleLine = this.lineBoundings[0];

        var x = Number(this.x);
        var y = Number(this.y);

        x = x - width * this.relativePos.x;
        y = y - height * this.relativePos.y;

        return {
          x,
          y,
          width,
          height
        }
      },
      lines() {

        const { width, height, x, y } = this.bounding;

        return this.lineBoundings.map((box, index) => {
          const innerLineOffset = width - box.width;
          const xWithAlignMap = new Map([
            ["left", x],
            ["right", x + innerLineOffset],
            ["center", x + innerLineOffset / 2]
          ]);

          const pos = {
            x: xWithAlignMap.get(this.align) || xWithAlignMap.get("left"),
            y: y + (box.height * this.__lineHeight) * index
          }

          const center = ((...rel) => {
            return {
              x: pos.x + box.width * rel[0],
              y: pos.y + box.height * rel[1]
            }
          })(0.5, 0.5);

          return {
            i: index,
            text: box.text,
            parts: box.items,
            x: pos.x,
            y: pos.y,
            center,
            width: box.width,
            height: box.height
          };
        });
      }
    },
    created() {
      console.log(this.highlightPaddingValue);
      console.log(this.origin);
      console.log(this.lines);
    },
    methods: Object.assign({

    }, VueHelpers),
    directives: Object.assign({}, VueDirectives)
  }
</script>
