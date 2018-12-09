import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

console.log('using touch')
Vue.use(Vue2TouchEvents, { disableClick: true, tapTolerace: 100 })
console.log('touch used')
