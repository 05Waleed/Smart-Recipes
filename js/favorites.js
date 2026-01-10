import { recipes } from "../data/recipesData.js";
import { favorites, createRecipeCard, toggleFavorite } from "./utils.js";
import { initCardCarousels } from "./cardCarousel.js";

export function renderFavoritesPage() {
    const favGrid = document.getElementById("favoritesGrid");
    const heroHeading = document.querySelector(".hero");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!favGrid) return;

    // Populate category filter dynamically (only from favorite recipes)
    const favRecipes = recipes.filter(r => favorites.includes(r.id));
    if (categoryFilter) {
        const categories = ["All", ...new Set(favRecipes.map(r => r.category))];
        categoryFilter.innerHTML = categories
            .map(cat => `<option value="${cat}">${cat}</option>`)
            .join("");
    }

    // Filter and render function
    const filterAndRenderFavorites = () => {
        const term = searchInput?.value.toLowerCase() || "";
        const cat = categoryFilter?.value || "All";

        const filtered = favRecipes.filter(recipe => {
            const matchesSearch = recipe.name.toLowerCase().includes(term);
            const matchesCat = cat === "All" || recipe.category === cat;
            return matchesSearch && matchesCat;
        });

        if (filtered.length === 0) {
            if (heroHeading) heroHeading.style.display = "none";
            favGrid.innerHTML = `
                <div class="empty-state">
                    <h2>No recipes match your search</h2>
                    <p>Try changing your search or category filter.</p>
                </div>`;
        } else {
            if (heroHeading) heroHeading.style.display = "block";
            favGrid.innerHTML = filtered
                .map(recipe => createRecipeCard(recipe))
                .join("");

            // Bind favorite toggle listeners
            filtered.forEach(recipe => {
                document
                    .getElementById(`fav-${recipe.id}`)
                    ?.addEventListener("click", () =>
                        toggleFavorite(recipe.id)
                    );
            });

            // Re-init carousels
            initCardCarousels({ intervalTime: 5000 });
        }
    };

    // Attach events
    searchInput?.addEventListener("input", filterAndRenderFavorites);
    categoryFilter?.addEventListener("change", filterAndRenderFavorites);

    // Initial render
    filterAndRenderFavorites();

    // Make global if needed
    window.renderFavoritesPage = renderFavoritesPage;
}

// Ensure carousels are ready on DOM load
document.addEventListener("DOMContentLoaded", () => {
    initCardCarousels({ intervalTime: 5000 });
});
