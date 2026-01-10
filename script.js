import { initTheme, renderNavbar, renderFooter } from "./js/utils.js";
import { initHomePage } from "./js/home.js";
import { initDetailPage } from "./js/detail.js";
import { renderFavoritesPage } from "./js/favorites.js";
import { renderProfile } from "./js/profile.js";

document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    initTheme();
    renderFooter();

    // Determine current page
    const path = window.location.pathname;

    switch (true) {
        case path.endsWith("index.html") || path === "/":
            initHomePage();
            break;
        case path.endsWith("/pages/detailRecipe.html"):
            initDetailPage();
            break;
        case path.endsWith("/pages/favorites.html"):
            renderFavoritesPage();
            break;
        case path.endsWith("profile.html"):
            renderProfile();
            break;
        default:
            console.warn("No page-specific scripts to run for this path:", path);
    }
});