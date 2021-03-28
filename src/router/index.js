import { createRouter, createWebHistory } from 'vue-router';
import { BaseLayout } from '../components/BaseLayout.vue';

const routes = [
  {
    path: '/user',
    component: BaseLayout,
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/login.vue'),
      },
      {
        path: '/user/register',
        name: 'register·',
        component: () => import(/* webpackChunkName: "register" */ '../views/user/register.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
