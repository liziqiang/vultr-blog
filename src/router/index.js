import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: Index
        },
        {
            path: '/hi',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
});
