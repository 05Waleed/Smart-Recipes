import { recipes } from "../data/recipesData.js";
import { favorites, createRecipeCard, toggleFavorite } from "./utils.js";
import { initCardCarousels } from "./cardCarousel.js";

export function renderFavoritesPage() {
    const favGrid = document.getElementById("favoritesGrid");
    const heroHeading = document.querySelector(".hero");
    
    // Select both sets of inputs
    const dSearch = document.getElementById("searchInput");
    const mSearch = document.getElementById("mobileSearchInput");
    const dCat = document.getElementById("categoryFilter");
    const mCat = document.getElementById("mobileCategoryFilter");

    if (!favGrid) return;

    // Get only the recipes that are in favorites
    const favRecipes = recipes.filter(r => favorites.includes(r.id));

    // Populate category filters (Desktop and Mobile)
    const categories = ["All", ...new Set(favRecipes.map(r => r.category))];
    const categoryHTML = categories
        .map(cat => `<option value="${cat}">${cat}</option>`)
        .join("");

    if (dCat) dCat.innerHTML = categoryHTML;
    if (mCat) mCat.innerHTML = categoryHTML;

    // The Global Refresh/Filter Function
    window.filterAndRender = () => {
        // Read synced values
        const term = (dSearch?.value || mSearch?.value || "").toLowerCase();
        const cat = dCat?.value || mCat?.value || "All";

        const filtered = favRecipes.filter(recipe => {
            const matchesSearch = recipe.name.toLowerCase().includes(term);
            const matchesCat = cat === "All" || recipe.category === cat;
            return matchesSearch && matchesCat;
        });

        if (filtered.length === 0 && favRecipes.length > 0) {
            favGrid.innerHTML = `
                <div class="empty-state">
                    <h2>No favorites match your search</h2>
                    <p>Try a different keyword or category.</p>
                </div>`;
        } else if (favRecipes.length === 0) {
            if (heroHeading) heroHeading.style.display = "none";
            favGrid.innerHTML = `
                <div class="empty-state">
                    <h2>Your cookbook is empty</h2>
                    <p>Go to the Home page and tap ❤️ on recipes you love!</p>
                    <a href="/index.html" class="view-more-bttn">Explore Recipes</a>
                </div>`;
        } else {
            if (heroHeading) heroHeading.style.display = "block";
            favGrid.innerHTML = filtered
                .map(recipe => createRecipeCard(recipe))
                .join("");

            // Re-bind favorite toggle listeners
            filtered.forEach(recipe => {
                document
                    .getElementById(`fav-${recipe.id}`)
                    ?.addEventListener("click", () => toggleFavorite(recipe.id));
            });

            initCardCarousels({ intervalTime: 5000 });
        }
    };

    // Initial render call
    window.filterAndRender();

    // Export specifically for the toggleFavorite function in utils.js
    window.renderFavoritesPage = renderFavoritesPage;
}