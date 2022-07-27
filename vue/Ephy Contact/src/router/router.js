import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/Landing.vue";
import Home from "../views/HomePage.vue";
import Details from "../views/Details.vue";
import ContactDetails from "../views/ContactDetail.vue";
import signup from "../views/signup.vue";
import login from "../views/login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage, name: "LandingPage" },
    { path: "/home", component: Home, name: "Home" },
    { path: "/details", component: Details, name: "details" },
    { path: "/details:id", component: ContactDetails, name: "ContactDetails" },
    { path: "/signup", component: signup, name: "signup" },
    { path: "/login", component: login, name: "login" },
    
  ],
});

export default router;