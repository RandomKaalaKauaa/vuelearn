import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'
Vue.use(Router)

export default new Router({
  mode: 'history', /*history mode vs hash mode history mode-> returns the index.html page always and then vuejs finds the route which is added to the link it is given vs 
  hash mode which does not make any new requests to the server
  */
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Team',
      name: 'team',
      component: Team
    }
  ]
})
