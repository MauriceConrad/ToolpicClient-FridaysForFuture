<template>
  <div class="wrapper">
    <div class="btn-open-map" @click="open">
      <div class="icon">
        <svg width="100%" height="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1,0,0,1,-9.50389,1.31308)">
                <g>
                    <clipPath id="_clip1">
                        <circle cx="256.673" cy="248.993" r="237.79"/>
                    </clipPath>
                    <g clip-path="url(#_clip1)">
                        <g transform="matrix(1.17578,0,0,1.13527,-35.4787,-35.1858)">
                            <path d="M480.276,134.316C480.276,70.767 430.46,19.173 369.099,19.173L130.88,19.173C69.52,19.173 19.703,70.767 19.703,134.316L19.703,364.603C19.703,428.152 69.52,479.746 130.88,479.746L369.099,479.746C430.46,479.746 480.276,428.152 480.276,364.603L480.276,134.316Z" style="fill:rgb(15,15,15);"/>
                        </g>
                        <g>
                            <g transform="matrix(1,0,0,0.651068,0,6.68998)">
                                <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);"/>
                            </g>
                            <g transform="matrix(1,0,0,0.688575,0,-11.5611)">
                                <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);"/>
                            </g>
                            <g transform="matrix(0.672833,0,0,0.400073,-6.87744,315.77)">
                                <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);"/>
                            </g>
                            <g transform="matrix(5.19399e-17,-0.848243,1.1315,6.92846e-17,-1.99403,451.78)">
                                <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);"/>
                            </g>
                            <g transform="matrix(0.662068,4.4636e-33,0,0.723902,208.924,-10.9145)">
                                <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);"/>
                            </g>
                            <g transform="matrix(0.487257,2.63203e-33,0,0.426861,327.815,291.005)">
                                <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);"/>
                            </g>
                            <g transform="matrix(0.487257,1.21217e-33,0,0.196588,167.632,313.519)">
                                <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);"/>
                            </g>
                            <g transform="matrix(2.98359e-17,-0.487257,0.426861,2.61377e-17,316.295,253.848)">
                                <path d="M134.846,19.173L134.846,478.9L208.4,478.9L208.4,19.2L134.846,19.173Z" style="fill:rgb(34,34,34);"/>
                            </g>
                        </g>
                    </g>
                </g>
                <g transform="matrix(0.978022,0,0,0.978022,-217.465,-5.60637)">
                    <g transform="matrix(0.53309,0,0,0.53309,353.399,89.0023)">
                        <path d="M256,0C153.755,0 70.573,83.182 70.573,185.426C70.573,312.314 236.512,498.593 243.577,506.461C250.213,513.852 261.799,513.839 268.423,506.461C275.488,498.593 441.427,312.314 441.427,185.426C441.425,83.182 358.244,0 256,0ZM256,278.719C204.558,278.719 162.708,236.868 162.708,185.426C162.708,133.984 204.559,92.134 256,92.134C307.441,92.134 349.291,133.985 349.291,185.427C349.291,236.869 307.441,278.719 256,278.719Z" style="fill:rgb(255,0,92);fill-rule:nonzero;"/>
                    </g>
                    <g transform="matrix(0.53309,0,0,0.53309,343.814,81.4252)">
                        <path d="M256,0C153.755,0 70.573,83.182 70.573,185.426C70.573,312.314 236.512,498.593 243.577,506.461C250.213,513.852 261.799,513.839 268.423,506.461C275.488,498.593 441.427,312.314 441.427,185.426C441.425,83.182 358.244,0 256,0ZM256,278.719C204.558,278.719 162.708,236.868 162.708,185.426C162.708,133.984 204.559,92.134 256,92.134C307.441,92.134 349.291,133.985 349.291,185.427C349.291,236.869 307.441,278.719 256,278.719Z" style="fill:none;fill-rule:nonzero;stroke:white;stroke-width:3.6px;"/>
                    </g>
                </g>
            </g>
        </svg>
      </div>
    </div>
    <Popup title="Choose Location" ref="popup">
      <div class="popup-inner">
        <div class="map" ref="map">

        </div>
        <div class="tools">
          <!--<ul class="tools-list">
            <button class="btn">Test</button>
          </ul>-->
          <button class="btn btn-large" @click="submit">Okay</button>
        </div>
      </div>
    </Popup>
  </div>
</template>

<style scoped>
  .wrapper {

  }
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
</style>


<style>
  /* Marker Style */
  .toolpic-mapbox-marker {
    width: 500px;
    height: 500px;
    background-image: url('../../data/resources/map/marker.svg');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto 50%;
  }
  @media screen and (max-height: 670px) {
    .toolpic-mapbox-marker {
      width: 480px;
      height: 480px;
    }
  }
  @media screen and (max-height: 650px) {
    .toolpic-mapbox-marker {
      width: 420px;
      height: 420px;
    }
  }
  @media screen and (max-height: 600px) {
    .toolpic-mapbox-marker {
      width: 380px;
      height: 380px;
    }
  }
</style>

<script type="text/javascript">
  /*
    IMPORTANT: Please note, that the 'value' property is reserved by the SuperComponent and will be used to communicate with the application
    // Just use 'value' as SET ONLY
  */
  import SuperComponent from '../SuperComponent';

  import mapboxgl from 'mapbox-gl';

  import Popup from './Popup.vue';

  mapboxgl.accessToken = 'pk.eyJ1IjoibWF1cmljZS1jb25yYWQiLCJhIjoiY2lpM25jbXVpMDExZXQ4bTBmYzd5cjBhbSJ9.zW17SmAFJRJPf8VjAxpang';

  export default {
    extends: SuperComponent,
    props: {
      zoom: {
        type: Number,
        default: 15
      },
      accessToken: {
        type: String,
        default: null
      }
    },
    data() {
      return {

      }
    },
    methods: {
      submit() {
        this.$refs.popup.close();
      },
      open() {
        this.$refs.popup.show();
      }
    },
    computed: {
    },
    mounted() {
      const map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: this.zoom,
        //center: this.position
      });

      const el = document.createElement("div");
      el.className = 'toolpic-mapbox-marker';

      const marker = new mapboxgl.Marker({
        //draggable: true,
        element: el
      }).setLngLat(map.getCenter().toArray()).addTo(map);

      map.on("move", () => {
        const center = map.getCenter();
        marker.setLngLat(center);
      });


      this.$on("set", value => {
        this.value = value;
        marker.setLngLat(value);
        map.flyTo({
          center: value,
          speed: Infinity
        });
      });


      this.$refs.popup.$on("close", () => {
        this.value = map.getCenter().toArray();
      });

    },
    components: {
      Popup
    }
  }
</script>
