import { recipes } from "../data/recipesData.js";
import { favorites, createRecipeCard, toggleFavorite } from "./utils.js";
import { initCardCarousels } from "./cardCarousel.js";

export function renderFavoritesPage() {
    const favGrid = document.getElementById("favoritesGrid");
    const heroHeading = document.querySelector(".hero");

    if (!favGrid) return;

    const favRecipes = recipes.filter(r => favorites.includes(r.id));

    if (favRecipes.length === 0) {
        if (heroHeading) heroHeading.style.display = "none";
        favGrid.innerHTML = `
            <div class="empty-state">
                <h2>Your cookbook is empty</h2>
                <p>Start hearting recipes to see them here!</p>
                <a href="/index.html" class="browse-btn">Browse Recipes</a>
            </div>`;
    } else {
        if (heroHeading) heroHeading.style.display = "block";
        favGrid.innerHTML = favRecipes
            .map(recipe => createRecipeCard(recipe))
            console.log(recipe)
            .join("");

        // Bind listeners
        favRecipes.forEach(recipe => {
            document
                .getElementById(`fav-${recipe.id}`)
                ?.addEventListener("click", () =>
                    toggleFavorite(recipe.id)
                );
        });

        // Re-init carousels AFTER rendering cards
        initCardCarousels({ intervalTime: 5000 });
    }
}

// Make global for utils.js (if you really need this)
window.renderFavoritesPage = renderFavoritesPage;

document.addEventListener("DOMContentLoaded", () => {
    initCardCarousels({ intervalTime: 5000 });
});
