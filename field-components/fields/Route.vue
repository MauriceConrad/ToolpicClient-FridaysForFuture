<template>
  <div class="wrapper">
    <div class="btn-open-map" @click="open">
      <div class="icon">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1,0,0,1,-2.94508,1.36807)">
                <circle cx="251.715" cy="245.108" r="239.884" style="fill:rgb(15,15,15);"/>
            </g>
            <g transform="matrix(1,0,0,1,-9.50389,1.31308)">
                <clipPath id="_clip1">
                    <circle cx="258.274" cy="245.163" r="239.884"/>
                </clipPath>
                <g clip-path="url(#_clip1)">
                    <g>
                        <g transform="matrix(1,0,0,0.651068,0,6.68998)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(1,0,0,0.688575,0,-11.5611)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(0.672833,0,0,0.400073,-6.87744,315.77)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(5.19399e-17,-0.848243,1.1315,6.92846e-17,-1.99403,451.78)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(0.662068,4.4636e-33,0,0.723902,208.924,-10.9145)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(0.487257,2.63203e-33,0,0.426861,327.815,291.005)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(0.487257,1.21217e-33,0,0.196588,167.632,313.519)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(-0.0039079,-0.487241,0.530906,-0.00425811,257.788,474.309)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(2.98359e-17,-0.487257,0.426861,2.61377e-17,316.295,253.848)">
                            <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);fill-rule:nonzero;"/>
                        </g>
                        <g transform="matrix(1,0,0,1,9.50389,-1.31308)">
                            <path d="M163.077,46.851L162.008,308.342L243.679,308.349L243.386,391.696L400.681,391.373" style="fill:none;stroke:rgb(61,204,159);stroke-width:22px;"/>
                        </g>
                    </g>
                    <g transform="matrix(2.79419,0,0,2.79419,-4.68808,-3.06461)">
                        <circle cx="145.633" cy="140.61" r="24.528" style="fill:rgb(255,0,92);"/>
                    </g>
                    <g transform="matrix(2.79419,0,0,2.79419,-235.863,-290.057)">
                        <circle cx="145.633" cy="140.61" r="24.528" style="fill:rgb(255,0,92);"/>
                    </g>
                </g>
            </g>
        </svg>
      </div>
    </div>
    <span class="slider-label">Padding</span>
    <Slider min="20" max="100" step="5" ref="paddingSlider" @update="updatePadding"></Slider>
    <Popup title="Select Route" ref="popup">
      <div class="popup-inner">
        <div class="map" ref="map">

        </div>
        <div class="tools">
          <ul class="tools-list">
            <button class="btn btn-symbol" @click="removeLastPoint">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                	<g style="fill: #fff;">
                		<path d="M288.502,32.502c-108.328,0-198.827,77.485-219.166,179.899l-42.482-53.107L0,180.784l68.769,85.961 c3.352,4.178,8.338,6.447,13.427,6.447c2.596,0,5.226-0.585,7.685-1.805l103.153-51.577l-15.387-30.757l-75.8,37.892 c14.063-90.5,92.27-160.059,186.655-160.059c104.271,0,189.114,84.843,189.114,189.114s-84.843,189.114-189.114,189.114v34.384 C411.735,479.498,512,379.233,512,256S411.735,32.502,288.502,32.502z"/>
                	</g>
                </svg>
              </div>
            </button>
            <button class="btn btn-symbol" @click="clearRoute">
              <div class="icon">
                <svg viewBox="-48 0 407 407" xmlns="http://www.w3.org/2000/svg">
                  <g style="fill: #fff;">
                    <path d="m89.199219 37c0-12.132812 9.46875-21 21.601562-21h88.800781c12.128907 0 21.597657 8.867188 21.597657 21v23h16v-23c0-20.953125-16.644531-37-37.597657-37h-88.800781c-20.953125 0-37.601562 16.046875-37.601562 37v23h16zm0 0"/>
                    <path d="m60.601562 407h189.199219c18.242188 0 32.398438-16.046875 32.398438-36v-247h-254v247c0 19.953125 14.15625 36 32.402343 36zm145.597657-244.800781c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm-59 0c0-4.417969 3.582031-8 8-8s8 3.582031 8 8v189c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8zm0 0"/>
                    <path d="m20 108h270.398438c11.046874 0 20-8.953125 20-20s-8.953126-20-20-20h-270.398438c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20zm0 0"/>
                  </g>
                </svg>
              </div>
            </button>
            <button class="btn btn-symbol" @click="setBoundingBox">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                	<g style="fill: #fff;">
                		<polygon points="472,111 472,254.716 369.754,152.47 341.469,180.754 395.716,235 115.896,235 170.143,180.754 141.857,152.47 40,254.327 40,111 0,111 0,401 40,401 40,255.673 141.857,357.53 170.143,329.246 115.896,275 395.716,275 341.469,329.246 369.754,357.53 472,255.284 472,401 512,401 512,111 		"/>
                	</g>
                </svg>


              </div>
            </button>
          </ul>
          <button class="btn btn-large" @click="submit">Okay</button>
        </div>
      </div>
    </Popup>
    <div ref="emulatorMap" class="emulator-map"></div>
  </div>
</template>

<style scoped>
  .popup-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .map {
    flex: 1;
    outline: none;
  }
  .tools {
    flex: none;
    padding: 2px 7px 18px 7px;
    box-sizing: border-box;
  }
  .tools .btn {
    background-color: #2f8247;
    border-radius: 20px;
    color: #fff;
    font-weight: 300;
    font-size: 1em;
    padding: 6px 10px;
    text-align: center;
  }
  .tools .btn-symbol {
    padding: 10px;
    border-radius: 50%;
  }
  .tools .btn .icon {
    width: 30px;
    height: 30px;
  }
  .btn.btn-large {
    width: 100%;
  }
  .tools-list {
    list-style: none;
    margin: 3px 0;
    padding: 0;
    text-align: right;
  }
  .tools-list li {
    display: inline-block;
    margin: 0 3px;
  }
  .btn-open-map {
    margin: 10px 0 0 0;
    cursor: pointer;
    width: 100px;
    height: 100px;
    background-color: #0e0e0e;
    padding: 0;
    box-sizing: border-box;
    border-radius: 50%;
    overflow: hidden;
  }
  .emulator-map {
    position: fixed;
    left: -500%;
    top: -500%;
    width: 540px;
    height: 540px;
    z-index: 200;
    opacity: 0;
  }
</style>

<style media="screen">
  .mapboxgl-canvas, .mapboxgl-canvas-container {
    cursor: crosshair !important;
  }
</style>

<script>
  /*
    IMPORTANT: Please note, that the 'value' property is reserved by the SuperComponent and will be used to communicate with the application
    // Just use 'value' as SET ONLY
  */
  import SuperComponent from '../SuperComponent';

  import mapboxgl from 'mapbox-gl';

  import Popup from './Popup.vue';
  import { Slider } from 'fields';

  export default {
    name: 'Route',
    extends: SuperComponent,
    props: {
      ratio: {
        type: Number,
        default: 1
      },
      width: {
        type: Number,
        default: 540
      },
      height: {
        type: Number,
        default: 540
      },
      accessToken: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        zoom: 10,
        position: [8.2, 50]
      }
    },
    methods: {
      updatePadding() {
        this.applyMap();
      },
      open() {
        this.$refs.popup.show();
      },
      submit() {
        this.$refs.popup.close();
      },
      initRoute() {
        this.map.addSource('route', {
          'type': 'geojson',
          'data': null
        });

        this.map.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#008636',
            'line-width': 8
          }
        });


        this.markers = [
          new mapboxgl.Marker().setLngLat([0, 0]).addTo(this.map),
          new mapboxgl.Marker().setLngLat([0, 0]).addTo(this.map)
        ];
      },
      drawRoute() {
        this.map.getSource('route').setData({
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': this.value.points
          }
        });

        this.markers[0].setLngLat(this.value.points[0] || [0, 0]);
        this.markers[1].setLngLat(this.value.points[this.value.points.length - 1] || [0, 0]);
      },

      removeLastPoint() {
        this.value.points = this.value.points.filter((point, index) => index != this.value.points.length - 1);
        this.drawRoute();
      },
      clearRoute() {
        this.value.points = [];
        this.drawRoute();
      },
      setBoundingBox() {

        this.map.fitBounds(this.boundsRect, {
          padding: 20
        });
      },
      copyMapToEmulator() {

        this.emulatorMap._canvas.style.width = this.width + 'px';
        this.emulatorMap._canvas.style.height = this.height + 'px';
        this.emulatorMap._canvas.width = this.width;
        this.emulatorMap._canvas.height = this.height;

        this.$refs.emulatorMap.style.width = this.width + 'px';
        this.$refs.emulatorMap.style.height = this.height + 'px';
        this.$refs.emulatorMap.width = this.width;
        this.$refs.emulatorMap.height = this.height;

        this.emulatorMap.resize();

        this.emulatorMap.fitBounds(this.boundsRect, {
          padding: Number(this.$refs.paddingSlider.value),
          speed: Infinity
        });
      },
      applyMap() {
        this.copyMapToEmulator();

        this.value.zoom = this.emulatorMap.getZoom();
        this.value.center = this.emulatorMap.getCenter();
        this.value.bounds = this.emulatorMap.getBounds();
      }
    },
    computed: {
      boundsRect() {
        const ratio = 1;

        const lngValues = this.value.points.map(pos => pos[0]);
        const latValues = this.value.points.map(pos => pos[1]);

        const size = {
          width: Math.abs(Math.max(...lngValues) - Math.min(...lngValues)),
          height: Math.abs(Math.max(...latValues) - Math.min(...latValues))
        };

        const sizeRatio = size.height / size.width;


        const newSize = {
          width: size.width,
          height: size.height
        };

        newSize[new Map([
          [true, 'width'],
          [false, 'height']
        ]).get(sizeRatio > ratio)] *= ratio;

        const center = {
          lng: Math.min(...lngValues) + size.width / 2,
          lat: Math.min(...latValues) + size.height / 2
        };

        const boundsRect = [
          [center.lng - newSize.width / 2, center.lat - newSize.height / 2],
          [center.lng + newSize.width / 2, center.lat - newSize.height / 2],
          [center.lng - newSize.width / 2, center.lat + newSize.height / 2],
          [center.lng + newSize.width / 2, center.lat + newSize.height / 2]
        ];

        return boundsRect.reduce(function(bounds, coord) {
          return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(boundsRect[0], boundsRect[0]));
      }
    },
    created() {
      mapboxgl.accessToken = this.accessToken;
    },
    mounted() {
      const map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [8.2, 50]
      });
      this.map = map;

      const emulatorMap = new mapboxgl.Map({
        container: this.$refs.emulatorMap,
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [8.2, 50]
      });
      this.emulatorMap = emulatorMap;

      map.on('load', () => {
        this.initRoute();
        this.drawRoute();
      });

      map.on('click', event => {
        this.value.points.push(event.lngLat.toArray());
        this.drawRoute();
      });

      this.$refs.popup.$on('close', () => {

        this.applyMap();

      });

    },
    watch: {
      value() {
        this.map.flyTo({
          center: this.value.center,
          zoom: this.value.zoom,
          bearing: 0,
          speed: 1
        });


      }
    },
    components: { Popup, Slider }
  }
</script>
