import {
  initIndexPage,
  initFavoritesPage,
  initMoviePage,
  initSearchPage,
  initSurprisePage,
} from "./modules/pageInit.js";

if (
  window.location.pathname === "/template/" ||
  window.location.pathname.includes("index.html")
) {
  console.log("index.html");
  initIndexPage();
} else if (window.location.pathname.includes("favorites.html")) {
  console.log("favorites.html");
  initFavoritesPage();
} else if (window.location.pathname.includes("movie.html")) {
  console.log("movie.html");
  initMoviePage();
} else if (window.location.pathname.includes("search.html")) {
  console.log("search.html");
  initSearchPage();
} else if (window.location.pathname.includes("surprise.html")) {
  console.log("surprise.html");
  initSurprisePage();
}
