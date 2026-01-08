import { initTheme, renderNavbar, renderFooter} from "./js/utils.js";
import { initHomePage } from "./js/home.js";
import { initDetailPage } from "./js/detail.js";
import { renderFavoritesPage } from "./js/favorites.js";

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderNavbar()
    renderFooter()
    initHomePage();
    initDetailPage();
    renderFavoritesPage();
});