import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import StringSandbox from './views/StringSandbox.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/stringSandbox',
			name: 'stringSandbox',
			component: StringSandbox,
		},
	],
});
