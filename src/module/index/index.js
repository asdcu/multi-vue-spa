import Vue from 'vue';
import App from './App';
import router from '../../router'


let vm = new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App />'
})

