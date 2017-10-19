import Vue from 'vue'
import Router from 'vue-router'
import HelloIndex from '@/components/HelloIndex'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: HelloIndex
        }
    ]
})
