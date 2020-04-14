export default {
  // $__key is internal property that ships the related key
  props: ["$__key"],
  data() {
    return {
      value: null
    };
  },
  watch: {
    value() {
      this.$emit("update", this.$__key, this.value);
    }
  }
}
