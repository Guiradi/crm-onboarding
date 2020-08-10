/*
 * Check access permission to auth routes
 */
export async function checkAccessMiddleware(to, from, next) {
  const isAuthRoute = await to.matched.some(item => item.meta.isAuth);

  if (isAuthRoute) {
    // check if user is logged in, then
    return next();
  }

  return next();
}

/*
 * Insert page title
 */
export async function setPageTitleMiddleware(to, from, next) {
  const pageTitle = await to.matched.find(item => item.meta.title);
  if (pageTitle) {
    window.document.title = pageTitle.meta.title;
  }
  return next();
}
