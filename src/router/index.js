import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { checkAccessMiddleware, setPageTitleMiddleware } from "./middlewares";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Chain of responsibility pattern -> https://refactoring.guru/pt-br/design-patterns/chain-of-responsibility
router.beforeEach(checkAccessMiddleware);
router.beforeEach(setPageTitleMiddleware);

export default router;
