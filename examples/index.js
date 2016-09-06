import Vue from 'vue'
import vcIcon from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            type: 'ok',
            shape: 'circle',
            size: 'small'
		}
	},
    methods: {
        toggleShape () {
            if (this.shape === 'circle') {
                this.shape = ''
            } else {
                this.shape = 'circle'
            }
        },
        largeFn () {
            this.size = 'large'
        },
        middleFn () {
            this.size = 'middle'
        },
        smallFn () {
            this.size = 'small'
        },
        miniFn () {
            this.size = 'mini'
        }
    },
	components: {
        vcIcon
	}
})
