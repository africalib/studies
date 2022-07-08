import Home from "@/pages/Home";
import Login from "@/pages/Login";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;