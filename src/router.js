import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
      path: '/index.html',
      name: 'home',
      component: () => import( './views/MainPage.vue')
	},
    {
      path: '/',
      name: 'home',
      component: () => import( './views/MainPage.vue')
	},
	{
		path: '/login',
		name: 'home',
		component: () => import( './views/Login.vue')
	},
    {
      path: '/home-detail/',
			name: 'HomeDetail',
      component: () => import('./views/RenterHomeDetail.vue')
	},
	{
		path: '/home-detail/clusters',
		name: 'Clusters',
		component: () => import('./views/Clusters.vue')
	},
	{
		path: '/home-detail/:id/smart-home',
		name: 'SmartHome',
		component: () => import('./views/SmartHomeNav.vue')
	},
	{
		path: '/home-detail/clusters/devices',
		name: 'Devices',
		component: () => import('./views/DeviceList.vue')
	},
	{
		path: '/smart',
		name: 'Smart',
		component: () => import('./views/SmartHomeNav.vue')
	},
	{
		path: '/smart/ac01',
		name: 'AC',
		component: () => import('./components/AirConditioner.vue')
	}
  ]
})
