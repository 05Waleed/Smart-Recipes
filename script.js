import { initTheme, renderNavbar, renderFooter } from "./js/utils.js";
import { initHomePage } from "./js/home.js";
import { initDetailPage } from "./js/detail.js";
import { renderFavoritesPage } from "./js/favorites.js";
import { renderProfile } from "./js/profile.js";


document.addEventListener("DOMContentLoaded", () => {
    renderNavbar()
    initTheme();
    renderFooter()
    initHomePage();
    initDetailPage();
    renderFavoritesPage();
    renderProfile();
});