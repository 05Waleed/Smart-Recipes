// --- 1. STATE MANAGEMENT ---
// Shared state across all pages
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

/**
 * Global function to add/remove favorites
 * @param {number} id - The ID of the recipe
 */
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1); // Remove if exists
    } else {
        favorites.push(id); // Add if not
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Smart Refresh: Updates UI based on which page the user is on
    if (document.getElementById("favoritesGrid")) {
        renderFavoritesPage();
    } else if (document.getElementById("recipeGrid")) {
        // Refresh index page filters to update heart icons
        const searchInput = document.getElementById("searchInput");
        const categoryFilter = document.getElementById("categoryFilter");
        filterAndRender(searchInput?.value || "", categoryFilter?.value || "All");
    }
}

// --- 2. THEME ENGINE ---
function initTheme() {
    const themeBtn = document.getElementById("themeToggle");
    const isDark = localStorage.getItem("theme") === "dark";

    // Apply saved theme on load
    if (isDark) {
        document.body.classList.add("dark-mode");
        if (themeBtn) themeBtn.textContent = "☀️";
    }

    themeBtn?.addEventListener("click", () => {
        const currentlyDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", currentlyDark ? "dark" : "light");
        themeBtn.textContent = currentlyDark ? "☀️" : "🌙";
    });
}

// --- 3. REUSABLE UI COMPONENTS ---
/**
 * Creates a standard recipe card string
 */
function createRecipeCard(recipe) {
    const isFav = favorites.includes(recipe.id);
    return `
        <div class="recipe-card">
            <img src="${recipe.images[0]}" alt="${recipe.name}">
            <div class="recipe-card-content">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-card-buttons">
                    <button class="view-more-bttn" onclick="location.href='detailRecipe.html?id=${recipe.id}'">View More</button>
                    <button class="fav-btn" onclick="toggleFavorite(${recipe.id})">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// --- 4. PAGE-SPECIFIC LOGIC ---

// A. HOMEPAGE (index.html)
function initHomePage() {
    const recipeGrid = document.getElementById("recipeGrid");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!recipeGrid) return;

    // Setup Category Dropdown
    const categories = ["All", ...new Set(recipes.map(r => r.category))];
    categoryFilter.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');

    // Filtering Logic
    window.filterAndRender = () => {
        const term = searchInput.value.toLowerCase();
        const cat = categoryFilter.value;

        const filtered = recipes.filter(r => {
            const matchesSearch = r.name.toLowerCase().includes(term);
            const matchesCat = cat === "All" || r.category === cat;
            return matchesSearch && matchesCat;
        });

        recipeGrid.innerHTML = filtered.map(recipe => createRecipeCard(recipe)).join('');
    };

    // Event Listeners
    searchInput.addEventListener("input", filterAndRender);
    categoryFilter.addEventListener("change", filterAndRender);

    // Initial Render
    filterAndRender();
}

// B. DETAIL PAGE (detailRecipe.html)
function initDetailPage() {
    const container = document.getElementById("recipeDetail");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
        container.innerHTML = `<h2>Recipe not found</h2><a href="index.html">Return Home</a>`;
        return;
    }

    container.innerHTML = `
        <div class="detail-header">
            <span class="category-tag">${recipe.category}</span>
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
        </div>
        <div class="images-grid">
            ${recipe.images.map(img => `<img src="${img}" class="detail-img" alt="${recipe.name}">`).join('')}
        </div>
        <div class="detail-content">
            <aside class="ingredients">
                <h3>Ingredients</h3>
                <ul>
                    ${recipe.ingredients.map(ing => `<li><strong>${ing.base}</strong> ${ing.name}</li>`).join('')}
                </ul>
            </aside>
            <section class="instructions">
                <h3>Preparation Steps</h3>
                <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
                <div class="chef-tip"><strong>Chef's Pro-Tip:</strong> ${recipe.tips}</div>
            </section>
        </div>
    `;
}

// C. FAVORITES PAGE (favorites.html)
function renderFavoritesPage() {
    const favGrid = document.getElementById("favoritesGrid");
    if (!favGrid) return;

    const favRecipes = recipes.filter(r => favorites.includes(r.id));

    if (favRecipes.length === 0) {
        favGrid.innerHTML = `
            <div class="empty-state">
                <h2>Your cookbook is empty</h2>
                <p>Start hearting recipes to see them here!</p>
                <a href="index.html" class="browse-btn">Browse Recipes</a>
            </div>`;
    } else {
        favGrid.innerHTML = favRecipes.map(recipe => createRecipeCard(recipe)).join('');
    }
}

// --- 5. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    initTheme();      // Runs on all pages
    initHomePage();   // Runs if #recipeGrid exists
    initDetailPage(); // Runs if #recipeDetail exists
    renderFavoritesPage(); // Runs if #favoritesGrid exists
});