<template>
  <v-col v-show="show" :class="classObject">
    <slot></slot>
  </v-col>
</template>

<script>
  import DATA from './data'

  export default {
    name: "vPopup",
    props: {
      id: {
        required: true,
        type: String,
      },
      position: {
        type: String,
        default: 'right',
      }
    },
    data() {
      return {
        show: false,
      }
    },
    computed: {
      classObject: function () {
        return {
          [this.position]: true
        }
      }
    },
    methods: {
      toggle: function () {
        this.show = !this.show;
      }
    },
    created: function () {
      DATA[this.id] = this;
    }
  }
</script>

<style scoped>
  .right {
    position: fixed;
    background: antiquewhite;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
