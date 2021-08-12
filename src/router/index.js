import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "@/views/index"
import shouye from "@/views/indexChild/shouye"
import experience from "@/views/indexChild/experience"
import excellent from "@/views/indexChild/excellent"
import teacher from "@/views/indexChild/teacher"
import admin from "@/views/admin"
import user from "@/views/adminChild/user"
import colleageEvent from "@/views/adminChild/colleageEvent"
import haoStudent from "@/views/adminChild/haoStudent"
import studentLocation from "@/views/adminChild/studentLocation"
import studentNum from "@/views/adminChild/studentNum"
import studentThing from "@/views/adminChild/studentThing"
import studentDiscuss from "@/views/adminChild/studentDiscuss"
import teachers from "@/views/adminChild/teacher"
import teacherThing from "@/views/adminChild/teacherThing"
import login from "@/views/login"

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:"/login"
    },
    {
      path:"/login",
      component:login
    },
    {
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
    {
      path:"/admin",
      component:admin,
      children:[
        {
          path:"/admin/0-0",
          component:user
        },
        {
          path:"/admin/1-0",
          component:studentNum
        },{
          path:"/admin/1-1",
          component:studentDiscuss
        },{
          path:"/admin/1-2",
          component:studentLocation
        },{
          path:"/admin/2-0",
          component:colleageEvent
        },{
          path:"/admin/3-0",
          component:haoStudent
        },{
          path:"/admin/4-0",
          component:teacherThing
        },{
          path:"/admin/4-1",
          component:teachers
        },{
          path:"/admin/4-2",
          component:studentThing
        },
      ]
    }
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router