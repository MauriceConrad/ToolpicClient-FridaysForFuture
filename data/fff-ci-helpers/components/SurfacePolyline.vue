<template>
  <g>

    <g v-for="point in finalPoints" v-bind:style="{ 'transform-origin': point.x + 'px ' + point.y + 'px', transform: 'rotate(' + (point.angle * (180 / Math.PI)) + 'deg)' }">
      <g v-bind:style="{ transform: 'translate(' + point.x + 'px, ' + point.y + 'px)' }">
        <slot></slot>
      </g>
    </g>
  </g>
</template>

<script type="text/javascript">
  import { VueHelpers, VueDirectives } from 'toolpic';

  import simplifyPolygon from 'simplify-js';

  import { generateId } from '../helpers';

  export default {
    name: "SurfacePolyline",
    props: {
      points: {
        type: Array,
        default: []
      },
      offset: {
        type: Number,
        default: 75
      },
      minLength: {
        type: Number,
        default: 37.5
      },
      max: {
        type: Number,
        default: Infinity
      }
    },
    data() {
      return {}
    },
    computed: {
      finalPoints() {
        const pointsSimplified = simplifyPolygon(this.points.map(point => ({
          x: point[0],
          y: point[1]
        })), 5, false).map(point => [point.x, point.y]);

        const areas = pointsSimplified.slice(0, pointsSimplified.length - 1).map((point, i) => {
          const nextPoint = pointsSimplified[i + 1];
          const axisDiff = [
            nextPoint[0] - point[0],
            nextPoint[1] - point[1]
          ];
          const diff = Math.sqrt(axisDiff[0] ** 2 + axisDiff[1] ** 2);

          const intervalsCountMathematically = diff / this.offset;

          const axisOffset = [
            (1 / intervalsCountMathematically) * axisDiff[0],
            (1 / intervalsCountMathematically) * axisDiff[1]
          ];

          const intervals = new Array(Math.ceil(intervalsCountMathematically)).fill(true).map((val, i) => ([
            point[0] + axisOffset[0] * i,
            point[1] + axisOffset[1] * i
          ]));


          return intervals;
        });

        const pointsDestructured = new Array().concat(...areas).concat([pointsSimplified[pointsSimplified.length - 1]]);

        const allPoints = pointsDestructured.map((point, index) => {
          let diff = 0;
          const nextPoint = pointsDestructured[index + 1];
          if (nextPoint) {
            const diffAxis = {
              x: nextPoint[0] - point[0],
              y: nextPoint[1] - point[1]
            };
            diff = Math.sqrt(diffAxis.x ** 2 + diffAxis.y ** 2);
          }
          return {
            next: nextPoint ? ({
              x: nextPoint[0],
              y: nextPoint[1]
            }) : null,
            x: point[0],
            y: point[1],
            diff,
            index
          };
        });

        const pointsWithTotalDiff = allPoints.map((point, i) => {
          return Object.assign(point, {
            diffTotal: allPoints.slice(0, i).map(point => point.diff).reduce((accumulator, diff) => accumulator + diff, 0)
          });
        })

        const pointsFiltered = pointsWithTotalDiff.filter((point, i) => {
          return point.diff >= this.minLength;
        });


        const diffTotal = pointsWithTotalDiff[pointsWithTotalDiff.length - 1].diffTotal;

        if (this.max < Infinity) {
          const finalIntervalWish = diffTotal / (this.max + 1);
          const finalPoints = new Array(this.max).fill(true).map((val, i) => {
            const wishPos = (i + 1) * finalIntervalWish;

            let bestPoint = null;
            for (let potentialPoint of pointsFiltered) {
              const currDiff = Math.abs(potentialPoint.diffTotal - wishPos);
              if (!bestPoint || currDiff <= bestPoint.diff) {
                bestPoint = {
                  point: potentialPoint,
                  diff: currDiff
                };
              }
            }

            return bestPoint ? bestPoint.point : null;
          }).filter(p => p);

          return finalPoints.map(point => {
            let angle;
            if (point.next) {
              const diff = {
                x: point.next.x - point.x,
                y: point.next.y - point.y
              };
              const tan = diff.y / diff.x;
              angle = Math.atan2(diff.y, diff.x);
            }

            return Object.assign(point, {
              angle
            });
          });

        }

        return pointsFiltered;
      }

    },
    created() {
      console.log(this, this.points, this.offset, this.minLength);
    },
    methods: Object.assign({

    }, VueHelpers),
    directives: Object.assign({}, VueDirectives)
  }
</script>
