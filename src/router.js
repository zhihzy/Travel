import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home'
import Detail from './components/detail/Detail'
import City from './components/city/City'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/city',
            name: 'City',
            component: City
        },
        {
            path: '/detalic/:id',
            name: 'Detail',
            component: Detail
        }
    ]
})