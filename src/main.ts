import { createApp } from 'vue';
import App from './App.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';

import router from '@/router';

import './styles/common.scss';

/**
 * Инициализация приложения
 */
(async function () {
    const app = createApp(App);

    app
        .use(router)
        .component('default-layout', DefaultLayout);

    app.mount('#app');
}());
