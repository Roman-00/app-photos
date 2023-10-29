import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router';
import Index from '@/pages/IndexPages.vue';
import Favorites from '@/pages/FavoritesPages.vue';
import { ROUTES } from './config';

const routes: Array<RouteRecordRaw> = [
    {
        path:      '/',
        name:      ROUTES.INDEX,
        component: Index,
        meta:      {
            layout: 'default',
        }
    },
    {
        path:      '/favorites',
        name:      ROUTES.FAVORITES,
        component: Favorites,
        meta:      {
            layout: 'default',
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.matched.some(m => m.meta.disableScroll) || to.query.noScroll) return false;

        if (savedPosition) {
            return savedPosition;
        }

        return { top: 0 };
    },
});

export default router;
