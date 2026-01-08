import { recipes } from "./recipesData.js";
import { favorites, createRecipeCard, toggleFavorite } from "./utils.js";

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
                <a href="index.html" class="browse-btn">Browse Recipes</a>
            </div>`;
    } else {
        if (heroHeading) heroHeading.style.display = "block";
        favGrid.innerHTML = favRecipes.map(recipe => createRecipeCard(recipe)).join('');

        // Bind listeners
        favRecipes.forEach(recipe => {
            document.getElementById(`fav-${recipe.id}`).addEventListener("click", () => toggleFavorite(recipe.id));
        });
    }
}
window.renderFavoritesPage = renderFavoritesPage; // Make global for utils.js