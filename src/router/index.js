import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Market from "../views/Market.vue"
import MyItems from "../views/MyItems.vue"
import Cart from "../views/Cart.vue"
import ProductDetail from "../views/ProductDetail.vue"
import AddItem from "../views/AddItem.vue"
import AddImage from "../views/AddImage.vue"
import EditItem from "../views/EditItem.vue"
import AdminLogin from "../views/AdminLogin.vue"
import AdminPage from "../views/AdminPage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/market",
    name: "Market",
    component: Market,
  },
  {
    path: "/myitems",
    name: "MyItems",
    component: MyItems,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/productdetail/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/additem",
    name: "AddItem",
    component: AddItem,
  },
  {
    path: "/addimage",
    name: "AddImage",
    component: AddImage,
  },
  {
    path: "/edititem/:id",
    name: "EditItem",
    component: EditItem,
  },
  {
    path: "/adminlogin",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/adminpage",
    name: "AdminPage",
    component: AdminPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
