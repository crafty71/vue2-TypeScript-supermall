import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/home/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/",
    name: "Category",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/category/CategoryIndex.vue"
      ),
  },
  {
    path: "/mine/",
    name: "Mine",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/mine/MineIndex.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cart/CartIndex.vue"),
  },
  {
    path: "/detail/:id",
    name: "productDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "detail" */ "../views/details/ProductDetails.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
