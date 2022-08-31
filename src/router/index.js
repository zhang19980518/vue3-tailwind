import { createRouter, createWebHistory } from "vue-router";

// 引入
import Home from "../views/demo/Home.vue";
import About from "../views/demo/About.vue";
import Login from "../views/Login.vue";

// 路由信息
let routes = [
    {
        path: "/",
        name: 'login',
        component: Login,
    },
    {
        path: "/home",
        name: 'home',
        component: Home,
    },
    {
        path: "/about",
        name: 'about',
        component: About,
    },
];

// 路由器
const router = createRouter({
    history: createWebHistory(), // HTML5模式
    routes,
});

export default router;
