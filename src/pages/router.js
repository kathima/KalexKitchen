import ChineseRecipesPage from "@/pages/ChineseRecipesPage.vue";
import CreateRecipePage from "@/pages/CreateRecipePage.vue";
import ShowRecipePage from "@/pages/ShowRecipePage.vue";
import HomePage from "@/pages/HomePage.vue";
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import JapaneseRecipesPage from "@/pages/JapaneseRecipesPage.vue";
import KoreanRecipesPage from "@/pages/KoreanRecipesPage.vue";
import IndianRecipesPage from "@/pages/IndianRecipesPage.vue";
import GermanRecipesPage from "@/pages/GermanRecipesPage.vue";
import ItalianRecipesPage from "@/pages/ItalianRecipesPage.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/Chinesisch', component: ChineseRecipesPage},
    {path: '/Japanisch', component: JapaneseRecipesPage},
    {path: '/Koreanisch', component: KoreanRecipesPage},
    {path: '/Indisch', component: IndianRecipesPage},
    {path: '/Deutsch', component: GermanRecipesPage},
    {path: '/Italienisch', component: ItalianRecipesPage},
    {path: '/RezeptXY', component: ShowRecipePage},
    {path: '/NeuesRezept', component: CreateRecipePage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

