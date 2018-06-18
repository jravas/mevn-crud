import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddItem from './views/AddItem.vue'
import EditItem from './views/EditItem.vue'
import Item from './views/Item.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'addItem',
      component: AddItem
    },
    {
      path: '/item/:id',
      name: 'item',
      component: Item
    },
    {
      path: '/item/edit/:id',
      name: 'edit',
      component: EditItem
    }
  ]
})
