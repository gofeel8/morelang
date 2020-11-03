import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Video from "../views/Video.vue";
import Channel from "../views/Channel.vue";
import Search from "../views/Search.vue";
import Mypage from "../views/Mypage/Mypage.vue";
import Login from "../views/Login.vue";


// import Swiper from "../views/Swiper.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/channel/:id?",
        name: "Channel",
        component: Channel,
    },
    {
        path: "/video/:vid",
        name: "Video",
        component: Video,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/mypage/:userid?",
        name: "Mypage",
        component: Mypage,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;