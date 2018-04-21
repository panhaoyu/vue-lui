<template>
  <div class="text">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "text",
    props: ['href',],
    methods: {
      click: function (event) {
        this.$emit('click', event);
        this.href ? this.$router.push(this.href) : 0;
      }
    }
  }
</script>

<style scoped>

</style>