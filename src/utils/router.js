import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Onboarding from "@/pages/Onboarding.vue";
import SignUp from "@/pages/SignUp.vue";
import Classes from "@/pages/Classes.vue";
import Discover from "@/pages/Discover.vue";
import LearningActivity from "@/pages/LearningActivity.vue";
import MessageBox from "@/pages/MessageBox.vue";

const router = createRouter ({
    history: createWebHashHistory(),

    routes: [
        { path: '/onboarding', name: 'Onboarding', component: Onboarding },
        { path: '/login', name: 'Login', component: Login},
        { path: '/signup', name: 'SignUp', component: SignUp},
        { path: '/', name: 'Home', component: Home },
        { path: '/classes', name: 'Classes', component: Classes },
        { path: '/discover', name: 'Discover', component: Discover },
        { path: '/learning_activity', name: 'LearningActivity', component: LearningActivity },
        { path: '/message_box', name: 'MessageBox', component: MessageBox },
    ]
});

export default router