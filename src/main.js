import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';


import App from './App.vue';

import BookList from './components/pages/BookList.vue';
import TheTesting from './components/pages/TheTesting.vue';
import BookPage from './components/pages/BookPage.vue';
import CategoryPage from './components/pages/CategoryPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/books', component: BookList},
        { path: '/', redirect: '/books'},
        {path:'/testing-api', component: TheTesting},
        {path: '/books/:id', component: BookPage},
        {path: '/categories/:cat', component: CategoryPage}
    ]
});

const app = createApp(App)

app.use(router)

app.mount('#app');
