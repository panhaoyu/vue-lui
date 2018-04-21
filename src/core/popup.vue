<template>
  <l-col :style="styleObject">
    <slot></slot>
  </l-col>
</template>

<script>
  let manager = {};
  export {manager};

  export default {
    name: "popup",
    props: {
      name: {type: String, required: true,},
      left: {type: String, default: '20%',},
      right: {type: String, default: '20%'},
      top: {type: String, default: '20%'},
      bottom: {type: String, default: '20%'},
    },
    data() {
      return {
        state: false,
      }
    },
    computed: {
      styleObject: function () {
        return {
          position: fixed,
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right,
        }
      }
    },
    methods: {
      toggle: function () {
        this.state = !this.state;
      },
      open: function () {
        this.state = true;
      },
      close: function () {
        this.state = false;
      }
    },
    created: function () {
      manager[this.name] = this;
    }
  }
</script>

<style scoped>

</style>