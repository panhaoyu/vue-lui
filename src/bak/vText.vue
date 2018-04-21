<template>
  <div :class="style" @click="click">
    <slot>&nbsp;</slot>
  </div>
</template>

<script>
  export default {
    name: "vText",
    props: ['color', 'href'],
    computed: {
      style: function () {
        let result = {text: true};
        result[this.color] = true;
        return result;
      }
    },
    methods: {
      click: function (event) {
        this.$emit('click');
        this.href ? this.$router.push(this.href) : 0;
      }
    }
  }
</script>

<style scoped>
  .text {
    width: 100%;
  }
</style>
