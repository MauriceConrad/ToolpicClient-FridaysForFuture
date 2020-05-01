<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
    <image x="0" y="0" width="1080" height="1080" v-bind:href="url" />

    <g>
      <circle v-for="point in route.points" r="5" v-bind:cx="lng(point[0], mapMeta, 1080)" v-bind:cy="lat(point[1], mapMeta, 1080)" />
    </g>


    <g>
      <path v-bind:d="routePath" class="route" v-bind:style="{ stroke: theme.secondary }" />
      <SurfacePolyline v-bind:points="routePathMatrix" v-bind:offset="100" v-bind:min-length="50" v-bind:max="5">
        <path d="M 0,-20 L 80,0 0,20" class="arrow" v-bind:style="{ fill: theme.secondary, transform: 'rotate(' + (180 * reverseDirection) + 'deg)' }" style="transform-origin: 40px 0px;" />
      </SurfacePolyline>
    </g>

    <g>
      <g v-for="place in allPlaces">

        <g>
          <FFFTitleShader offset="-8 -8" stroke="#fff" stroke-width="5">
            <template>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="200" height="200" v-bind:x="place.location[0] - 0.5 * 200" v-bind:y="place.location[1] - 1 * 200">
              	<g style="fill: #fff; transform-origin: 256px 256px; transform: scale(0.95);">
              		<path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
              	</g>
              </svg>
            </template>
            <template v-slot:shader>
              <rect x="0" y="0" width="1080" height="1080" v-bind:style="{ fill: theme.primary }"/>
            </template>
          </FFFTitleShader>

          <g v-pos v-bind:data-pos="place.about.x + ' ' + place.about.y" v-bind:data-rel="place.about.relative.join(' ')">
            <g v-dynamic data-dynamic-width="250" data-dynamic-height="70" v-bind:style="{ 'transform-origin': (540) + 'px ' + (0) + 'px' }">
              <FFFTitleBox padding="12 30">
                <text v-bind:x="540" v-bind:y="0" class="location-name">
                  {{ place.label }}
                </text>
              </FFFTitleBox>
            </g>
            <g filter="url(#dropshadow-text)" v-dynamic data-dynamic-width="250" data-dynamic-height="60" v-bind:style="{ 'transform-origin': (540) + 'px ' + (30) + 'px' }">
              <text v-bind:x="540" v-bind:y="30" class="location-time">
                {{ place.time }}
              </text>
            </g>
          </g>
        </g>
      </g>

      <g style="transform: translate(457px, -445px);">
        <g style="transform-origin: 540px 540px; transform: scale(0.14);">
          <FFFLogo v-bind:og="og"></FFFLogo>
        </g>
      </g>


    </g>
    <filter id="dropshadow-text" height="130%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="6"/> <!-- stdDeviation is how much to blur -->
      <feOffset dx="2" dy="2" result="offsetblur"/> <!-- how much to offset -->
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.8"/> <!-- slope is the opacity of the shadow -->
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/> <!-- this contains the offset blurred image -->
        <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
      </feMerge>
    </filter>
  </svg>
</template>


<style scoped>
  @import "../../fonts/Jost/Jost.css";
  .route {
    stroke: #3dcc9f;
    stroke-width: 12px;
    fill: none;
  }
  .arrow {
    fill: #3dcc9f;
  }
  .location-name {
    font-family: 'Jost';
    font-size: 900;
    font-size: 80px;
    fill: #fff;
    text-anchor: middle;
    alignment-baseline: baseline;
  }
  .location-time {
    font-family: 'Jost';
    font-weight: 200;
    font-size: 60px;
    fill: #fff;
    text-anchor: middle;
    alignment-baseline: hanging;
  }
</style>

<script>
  import { SuperTemplate } from 'toolpic';
  import { FFFCIComponents } from '../../fff-ci-helpers/__index.js';

  import FFFLogo from '../Logo/FFFLogo.vue';

  export default {
    name: "AnnouncementSpeakers",
    extends: SuperTemplate,
    data() {
      return {
        route: {
          bounds: {
            _sw: {
              lng: 8.257365241925413,
              lat: 49.998703932955095
            },
            _ne: {
              lng: 8.274254690311636,
              lat: 50.0095593280499
            }
          },
          points: [
            [8.259400324853488,50.00160073794396],
            [8.261100447875378,50.00221896102488],
            [8.261202048852681,50.002114473175084],
            [8.261452664597641,50.002049168153775],
            [8.261682960145805,50.00206658283511],
            [8.26194712268699,50.00211882684013],
            [8.262698969919938,50.00290683370005],
            [8.262861531483793,50.003281241272475],
            [8.265218674165283,50.005688699367994],
            [8.265774092836978,50.00625916459356],
            [8.26612630955924,50.00643764914287],
            [8.266498846476395,50.006690138348375],
            [8.266688501633809,50.006855561592204],
            [8.26700007796532,50.00716899354404],
            [8.267250693709343,50.00745630437177],
            [8.267271013905173,50.00760866547762],
            [8.267271013905173,50.00776973240676],
            [8.267284560701455,50.00793515193442],
            [8.268472991019479,50.00915732009466],
            [8.268696513169942,50.009057200362946],
            [8.269001316102873,50.00893966823813],
            [8.269285798838979,50.00876554604284],
            [8.269509320989442,50.00860448245021],
            [8.269787030327876,50.008391181186454],
            [8.270078286463587,50.00811258219244],
            [8.270654025335404,50.007529260316744],
            [8.27099269525877,50.00709394086829],
            [8.271297498190705,50.00676309545278],
            [8.271473606551808,50.006449660853434],
            [8.271250084401373,50.006284236213276],
            [8.270958828265691,50.00600997831842],
            [8.270444049980483,50.00558335181577],
            [8.268682451214858,50.004124294889124],
            [8.268732719653684,50.00408209829985],
            [8.269236171410853,50.0038107838958],
            [8.26944529752464,50.00366641413899],
            [8.269588587640442,50.00354195710409],
            [8.270146257291032,50.00297633471223],
            [8.270580000343244,50.00248845428811],
            [8.27069618151782,50.00235652658802],
            [8.270839471633593,50.00225446906265],
            [8.270967270941554,50.00211291114596],
            [8.271323559877004,50.00167729603726],
            [8.271354541523039,50.00162004347237],
            [8.2715094497608,50.00111201974843],
            [8.271544304113803,50.001024895228454],
            [8.271644994464822,50.000917856316704],
            [8.271939320107123,50.00055442009295],
            [8.271978047173747,50.00047175635501],
            [8.2719586836443,50.00036720552012],
            [8.271815849053752,50.000114759427504],
            [8.271769448619011,49.99989832688223],
            [8.27186365827356,49.99974740617654],
            [8.272138280562274,49.99936492249904],
            [8.27221960738487,49.99924045432772],
            [8.271789737038603,49.99910602834095]
          ],
          zoom: 14.456402673076758,
          center: {
            lng: 8.26580996611915,
            lat: 50.00413193693058
          }
        },
        reverseDirection: false,
        places: [
          {
            location: [8.259511022651054, 50.00152758659087],
            label: 'BAHNHOF',
            time: '12:00 UHR'
          },
          {
            location: [8.265593405317759, 50.007077488851536],
            label: 'ZWISCHENSTOPP',
            time: '12:30 UHR'
          },
          {
            location: [8.27150544274491, 49.9989137462984],
            label: 'GUTENBERGPLATZ',
            time: '14:00 UHR'
          }
        ],
        og: '',
        theme: {
          mapStyle: 'maurice-conrad/ck92zkw9h2dt71ip90h9hbz1u',
          primary: '#FF005C',
          secondary: '#3dcc9f'
        }
      }
    },
    computed: {
      routePathMatrix() {
        const coordMethods = new Map([
          [0, 'lng'],
          [1, 'lat']
        ]);
        return this.route.points.map(point => point.map((coordValue, index) => this[coordMethods.get(index)](coordValue, this.mapMeta, 1080)));
      },
      routePath() {
        return 'M ' + this.routePathMatrix[0].join(',') +
               ' L ' + this.routePathMatrix.slice(1).map(point => point.join(',')).join(' ');
      },
      mapMeta() {
        // lng(route.data.start[0], route.meta, 1200)))
        const diffLng = Math.abs(this.route.bounds._sw.lng - this.route.bounds._ne.lng);
        const diffLat = Math.abs(this.route.bounds._sw.lat - this.route.bounds._ne.lat);

        //console.log(diffLng, diffLat);
        return {
          viewBox: {
            lng: this.route.bounds._sw.lng,
            lat: this.route.bounds._ne.lat,
            diffLng: diffLng,
            diffLat: -diffLat
          },
          cubicRatio: 1 / (Math.cos(Math.PI * (this.route.center.lat / 180)))
        }
      },
      url() {

        const mapboxAccessToken = 'pk.eyJ1IjoibWF1cmljZS1jb25yYWQiLCJhIjoiY2lpM25jbXVpMDExZXQ4bTBmYzd5cjBhbSJ9.zW17SmAFJRJPf8VjAxpang';
        // https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4241,37.78,14.25,0,60/600x600?access_token=pk.eyJ1IjoiZnJpZGF5c2ZvcmZ1dHVyZSIsImEiOiJjazljeDA0ODAwN2owM2RuczVyZ244bDVqIn0.aS4lm1KtKB7RjNKu1LQVbA
        // mapbox://styles/maurice-conrad/ck92zkw9h2dt71ip90h9hbz1u
        const pitch = 0;
        const bearing = 0;

        const size = {
          width: 540,
          height: 540
        };


        return 'https://api.mapbox.com/styles/v1/' + this.theme.mapStyle + '/static/geojson(' + encodeURIComponent(JSON.stringify({
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': this.route.points
          }
        })) + ')/' + Object.values(this.route.center).join(',') + ',' + this.route.zoom + ',' + bearing + ',' + pitch + '/' + size.width + 'x' + size.height + '@2x?access_token=' + mapboxAccessToken;
      },
      allPlaces() {
        return this.places.map(place => {
          const location = [
            this.lng(place.location[0], this.mapMeta, 1080),
            this.lat(place.location[1], this.mapMeta, 1080)
          ];
          const { time, label } = place;
          return {
            label,
            time,
            location,
            about: new Map([
              [false, {
                x: location[0],
                y: location[1] + 10,
                relative: [0.5, 0]
              }],
              [true, {
                x: location[0],
                y: location[1] - 210,
                relative: [0.5, 1]
              }]
            ]).get(location[1] > (1080 * 0.75))
          }
        });
      }
    },
    mounted() {
      console.log(this.allPlaces);
    },
    components: Object.assign(FFFCIComponents, {
      FFFLogo
    })
  }
  import { Text, Textarea, Select, Slider, Route, Collection, Location, Toggle } from 'fields';
  export const fields = [
    {
      key: "theme",
      description: "Theme",
      component: Select,
      props: {
        items: [
          // Megenta : Pastel
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMyMDE3NUE7IiAvPgo8L3N2Zz4=",
            value: {
              mapStyle: 'maurice-conrad/ck92zkw9h2dt71ip90h9hbz1u',
              primary: '#FF005C',
              secondary: '#3dcc9f'
            }
          },
          // Pastel : Magenta
          {
            render: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3R5bGU9ImZpbGw6ICMzNzM3Mzc7IiAvPgo8L3N2Zz4=",
            value: {
              mapStyle: 'maurice-conrad/ck92z1mfu0h9g1ioqjv0xr3py',
              primary: '#FF005C',
              secondary: '#7D93F8'
            }
          }
        ]
      }
    },
    {
      key: "route",
      description: "Route",
      component: Route,
      props: {
        ratio: 1,
        width: 540,
        height: 540,
        accessToken: 'pk.eyJ1IjoibWF1cmljZS1jb25yYWQiLCJhIjoiY2lpM25jbXVpMDExZXQ4bTBmYzd5cjBhbSJ9.zW17SmAFJRJPf8VjAxpang'
      }
    },
    {
      key: "reverseDirection",
      description: null,
      component: Toggle,
      props: {
        description: "Reverse Direction",
        styleClass: 'mt-android'
      }
    },
    {
      key: "places",
      description: "Places",
      component: Collection,
      props: {
        btnAddLabel: 'Add Location',
        max: 6,
        fields: [
          {
            key: "location",
            description: "Location",
            component: Location,
            props: {
              zoom: 12,
              accessToken: 'pk.eyJ1IjoibWF1cmljZS1jb25yYWQiLCJhIjoiY2lpM25jbXVpMDExZXQ4bTBmYzd5cjBhbSJ9.zW17SmAFJRJPf8VjAxpang'
            }
          },
          {
            key: "label",
            description: 'Label',
            component: Text,
            props: {}
          },
          {
            key: "time",
            description: 'Time',
            component: Text,
            props: {}
          }
        ]
      }
    },
    {
      key: "og",
      description: "OG Label",
      component: Text,
      props: {}
    }
  ];
  export const type = "image";
  export const format = "jpg";
  export const smartActions = [
    {
      name: "Reverse Direction",
      type: "Toggle",
      key: "reverseDirection",
      properties: {
        mode: "normal"
      }
    }
  ];
  export const alias = "Instagram";
  export const width = 1080;
  export const height = 1080;
</script>
