import { createMemoryHistory, createRouter } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AuthorsPage from "./pages/AuthorsPage.vue";
import ArtMovementsPage from "./pages/ArtMovementsPage.vue";
import BookAnalysisPage from "./pages/BookAnalysisPage.vue";
import ExercisePage from "./pages/ExercisePage.vue";


const routes = [
  { path: "/", component: HomePage},
  { path: "/authors", component: AuthorsPage },
  { path: "/art-movements", component: ArtMovementsPage },
  { path: "/book-analysis", component: BookAnalysisPage },
  { path: "/exercise", component: ExercisePage }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
