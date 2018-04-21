<template>
    <div
            :class="style"
            @click="click"
    >
        <slot>&nbsp;</slot>
    </div>
</template>

<script>
    export default {
        name: "vButton",
        props: ['color', 'href'],
        computed: {
            style: function () {
                let result = {local: true};
                result[this.color] = true;
                return result;
            }
        },
        methods: {
            click: function () {
                this.$emit('click');
                if (this.href) {
                    this.$router.push(this.href);
                }
            }
        }
    }
</script>

<style scoped>
    .local {
        width: 100%;
    }
</style>
