import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "@/views/index"
import shouye from "@/views/indexChild/shouye"
import experience from "@/views/indexChild/experience"
import excellent from "@/views/indexChild/excellent"
import teacher from "@/views/indexChild/teacher"

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:"/index"
    },{
      path:"/index",
      component:index,
      children:[
        {
          path:"/index/0",
          component:shouye
        },
        {
          path:"/index/1",
          component:experience
        },
        {
          path:"/index/2",
          component:excellent
        },
        {
          path:"/index/3",
          component:teacher
        },
      ]
    },
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router