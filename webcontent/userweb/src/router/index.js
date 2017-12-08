import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import classification from '@/page/classification'
 /*import login from '@/components/login'
import PageIndex from '@/components/PageIndex'*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: classification
    }
  ]
})
