const progressCircle = {
  props: ["value", "radius"],
  data: function () {
    return {
      transitionDuration: 1000,
      __lastValue: {
        value: 0,
        timestamp: null
      },
      dynVal: 0
    }
  },
  methods: {
    getDynamicValue() {
      const now = Date.now();
      const diffTime = now - this.__lastValue.timestamp;
      const diffVal = this.val - this.__lastValue.value;

      if (diffVal >= 0) {
        const valueProgress = Math.min(diffTime / this.transitionDuration, 1);

        return this.__lastValue.value + diffVal * valueProgress;
      }
      else {
        return this.val;
      }
    }
  },
  computed: {
    val() {
      var val = Number(this.value);
      val = val >= 1 ? 0.99999999 : val;
      return val + 1 > val ? val : 0;
    },
    r() {
      return Number(this.radius) || 50;
    },
    renderValue() {
      return this.dynVal == 0 ? this.val : this.dynVal;
    },
    coords() {
      const viewBox = [0, 0, 100, 100];

      const angle = Math.PI * 2 * this.renderValue;

      //console.log(this.val, this.renderValue);

      return {
        x: this.r * Math.sin(angle),
        y: this.r * Math.cos(angle)
      };
    },
    points() {
      return {
        stroked: 'M 0,' + -this.r + ' A ' + this.r + ',' + this.r + ' 0 ' + Number(this.renderValue >= 0.5) + ' 1 ' + this.coords.x + ',' + -this.coords.y,
        filled: 'M 0,0 L 0,' + -this.r + ' A ' + this.r + ',' + this.r + ' 0 ' + Number(this.renderValue >= 0.5) + ' 1 ' + this.coords.x + ',' + -this.coords.y + ' z'
      }
    }
  },
  mounted() {
    //console.log(this.coords);
  },
  watch: {
    val(newVal, oldVal) {

      this.__lastValue = {
        value: oldVal,
        timestamp: Date.now()
      }
      var start = null;
      const step = timestamp => {
        if (!start) start = timestamp;
        var progress = timestamp - start;

        this.dynVal = this.getDynamicValue();

        if (progress < this.transitionDuration) {
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    }
  },
  template: `
    <div class="progress-circle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100">
        <path v-bind:d="points.stroked" />
      </svg>
    </div>
  `
}

export default progressCircle;
