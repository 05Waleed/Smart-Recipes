import { recipes } from "../data/recipesData.js";
import { createRecipeCard, toggleFavorite } from "./utils.js";
import { initCardCarousels } from "./cardCarousel.js";

export function initHomePage() {
    const recipeGrid = document.getElementById("recipeGrid");

    // Select the hero section to hide/show
    const heroSection = document.querySelector(".hero");

    const dSearch = document.getElementById("searchInput");
    const mSearch = document.getElementById("mobileSearchInput");
    const dCat = document.getElementById("categoryFilter");
    const mCat = document.getElementById("mobileCategoryFilter");

    if (!recipeGrid) return;

    // 1. Populate category filters
    const categories = ["All", ...new Set(recipes.map(r => r.category))];
    const categoryHTML = categories
        .map(cat => `<option value="${cat}">${cat}</option>`)
        .join("");

    if (dCat) dCat.innerHTML = categoryHTML;
    if (mCat) mCat.innerHTML = categoryHTML;

    // 2. Define the Global Filter Function
    window.filterAndRender = () => {
        const term = (dSearch?.value || mSearch?.value || "").toLowerCase();
        const cat = dCat?.value || mCat?.value || "All";

        const filtered = recipes.filter(r => {
            const matchesSearch = r.name.toLowerCase().includes(term) ||
                r.description.toLowerCase().includes(term);
            const matchesCat = cat === "All" || r.category === cat;
            return matchesSearch && matchesCat;
        });

        // --- HIDE HERO TEXT IF NO RESULTS ---
        if (heroSection) {
            if (filtered.length === 0) {
                heroSection.style.display = "none";
            } else {
                heroSection.style.display = "block";
            }
        }

        // 3. Render Results
        recipeGrid.innerHTML = filtered.length > 0
            ? filtered.map(recipe => createRecipeCard(recipe)).join("")
            : `<p class="no-results">No recipes found matching "${term}"</p>`;

        // 4. Attach Listeners to Fav buttons
        filtered.forEach(recipe => {
            document
                .getElementById(`fav-${recipe.id}`)
                ?.addEventListener("click", () => toggleFavorite(recipe.id));
        });

        // 5. Reusable carousel
        initCardCarousels();
    };

    window.filterAndRender();
}