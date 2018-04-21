<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "vRow",
  }
</script>

<style scoped>
  .row {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
  }
</style>
