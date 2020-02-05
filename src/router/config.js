import Bussiness from '../views/Bussiness'
import GoodList from '../views/GoodList'
import Home from '../views/Home';
import Order from '../views/Order';
import Mine from '../views/Mine'
import Search from '../views/Search'
import Address from '../views/Address'
const routes = [
  {
    path: '/',
    redirect: '/home'
   
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path: '/home',
        redirect: '/home/bussiness'
      },
      {
      path: '/home/bussiness',
      component: Bussiness,
    },{
      path: '/home/order',
      component:Order
    },{
      path: '/home/mine',
      component:Mine
    }]
  },
  {
    path: '/goods',
    component: GoodList,
  },{
    path: '/home/search',
    component: Search,
  },{
    path: '/home/address',
    component:Address
  }]
export default routes;