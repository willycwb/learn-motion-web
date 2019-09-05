import Router from 'vue-router';
import LoginComponent from '../pages/login/login.vue';
import HomeComponent from '../pages/home/home.vue';
import NotFound from '../pages/404.vue';

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        },
        {
            path: '/',
            redirect: {
                name: 'home'
            }
        },
        {
            path: '/404',
            name: '404',
            component: NotFound
        },
        {
            path: '*',
            redirect: {
                name: '404'
            }
        },
    ]
})