<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "row",
  }
</script>

<style scoped>
  .row {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }
</style>