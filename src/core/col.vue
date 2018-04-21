<template>
  <div class="col" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "col",
    props: {
      width: {
        default: 1,
      }
    },
    computed: {
      styleObject: function () {
        return {
          flex: Number(this.width),
        }
      }
    },
  }
</script>

<style scoped>
  .col {
    display: flex;
    flex-flow: column nowrap;
    flex-basis: 0;
    flex-shrink: 0;
  }
</style>