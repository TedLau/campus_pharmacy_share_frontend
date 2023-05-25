import Vue from 'vue';
import jwtDecode from 'jwt-decode';
import Router from 'vue-router';
import LoginPage from '@/components/LoginPage';
import RegisterPage from '@/components/RegisterPage';
import Dashboard from '@/components/DashboardPage';
import UserProfile from '@/components/UserProfile';
import MedicineList from '@/components/MedicineList';
import MedicineDetails from '@/components/MedicineDetails';
import AddMedicine from '@/components/AddMedicine';
import SearchMedicine from '@/components/SearchMedicine';
import CreateLivingArea from '@/components/CreateLivingArea';

Vue.use(Router);

const router =  new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login',
    // },
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile,
      meta: { requiresAuth: true },
    },
    {
      path: '/medicines',
      name: 'MedicineList',
      component: MedicineList,
      meta: { requiresAuth: true },
    },
    {
      path: '/medicines/:id',
      name: 'MedicineDetails',
      component: MedicineDetails,
    },
    {
      path: '/add-medicine',
      name: 'AddMedicine',
      component: AddMedicine,
      meta: { requiresAuth: true },
    },
    {
      path: '/search-medicine',
      name: 'SearchMedicine',
      component: SearchMedicine,
      meta: { requiresAuth: true },
    },
    {
      path: '/create-living-area',
      name: 'CreateLivingArea',
      component: CreateLivingArea,
      meta: { requiresAuth: true },
    },
  ],
});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuthenticated = localStorage.getItem('token');
  
    if (requiresAuth && !isAuthenticated) {
      next('/');
    } else if (!requiresAuth && isAuthenticated) {
      try {
        jwtDecode(isAuthenticated); // 尝试解码 JWT，如果解码失败，将抛出错误
        next('/dashboard');
      } catch (error) {
        localStorage.removeItem('token');
        next('/');
      }
    } else {
      next();
    }
  });
export default router;