import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AuthorsPageLayout from "./pages/AuthorsPageLayout.vue";
import ArtMovementsPageLayout from "./pages/ArtMovementsPageLayout.vue";
import BookAnalysisPageLayout from "./pages/BookAnalysisPageLayout.vue";
import ExercisePage from "./pages/ExercisePage.vue";
import AuthorsRootPage from "./pages/Authors/AuthorsRootPage.vue";
import AuthorByIdPage from "./pages/Authors/AuthorByIdPage.vue";
import ArtMovementsRootPage from "./pages/Art-Movements/ArtMovementsRootPage.vue";
import ArtMovementsByIdPage from "./pages/Art-Movements/ArtMovementsByIdPage.vue";
import BookAnalysisRootPage from "./pages/Book-analysis/BookAnalysisRootPage.vue";
import BookAnalysisByIdPage from "./pages/Book-analysis/BookAnalysisByIdPage.vue";
import ExerciseAuthorsIndexPage from "./pages/Exercise/Authors/ExerciseAuthorsIndexPage.vue";


const routes = [
  { path: "/", component: HomePage},
  { 
    path: "/authors", component: AuthorsPageLayout,
    children: [
      { path: "", component: AuthorsRootPage },
      { path: ":id", component: AuthorByIdPage }
    ]
  },
  { 
    path: "/art-movements", 
    component: ArtMovementsPageLayout,
    children: [
      { path: "", component: ArtMovementsRootPage },
      { path: ":id", component: ArtMovementsByIdPage },
    ]
  },
  { 
    path: "/book-analysis", 
    component: BookAnalysisPageLayout, 
    children: [
      { path: "", component: BookAnalysisRootPage },
      { path: ":id", component: BookAnalysisByIdPage },
    ]
  },
  { 
    path: "/exercise", 
    children: [
      { path: "", component: ExercisePage },
      { path: "authors", component: ExerciseAuthorsIndexPage }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }

    if(to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  }
});
