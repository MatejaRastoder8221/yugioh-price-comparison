// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Search from '../views/Search.vue';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import AdminPage from '../views/AdminPage.vue';
import { useStore } from 'vuex';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/search', name: 'Search', component: Search },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage,
    meta: { requiresAuth: true, role: 'admin' },
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  const isLoggedIn = store.getters.isLoggedIn;
  const userRole = store.getters.userRole;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next('/login');
    } else if (to.meta.role && to.meta.role !== userRole) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
