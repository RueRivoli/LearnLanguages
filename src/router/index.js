import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Accueil from '@/components/Accueil'
import Profile from '@/components/Profile'
import Chat from '@/components/Chat'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Accueil',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    }
  ]
})
