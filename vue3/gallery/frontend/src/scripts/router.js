import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Cart from "@/pages/Cart";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/cart', component: Cart}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;