<template>
    <i :style="{ 'font-size': fontSize || computedSize }" :class="['vc-icon-component', 'glyphicon', `glyphicon-${this.type}`, `glyphicon-${this.type}-${this.shape}` ]"></i>
</template>

<style>
</style>

<script>
export default {
    props: {
        type: String,
        shape: String,
        size: {
            type: [String, Number],
            default: 'small'
        }
    },
    computed: {
        computedSize () {
            if (this.size === 'large') {
                return '22px'
            } else if (this.size === 'middle') {
                return '18px'
            } else if (this.size === 'small'){
                return '16px'
            } else if (this.size === 'mini') {
                return '14px'
            } else {
                return this.size + 'px'
            }
        }
    }
}
</script>
