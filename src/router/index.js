import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home", //路由的重定向
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "About",
    path: "/about/:id?", //加个？ params参数可传可不传 :id?
    meta: {
      name: "xuyang",
      isshow: true,
    },
    component: () => import("../views/About.vue"),
  },
  {
    // 会匹配所有路径
    path: "*",
    component: () => import("../views/NOFOUNT.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
