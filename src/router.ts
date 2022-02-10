import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'

Vue.use(Router)
const routes: any = [
    {
        path: '/',
        component: Home
    }
]

const router = new Router({
    routes,
    base: '/',
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

export default router
