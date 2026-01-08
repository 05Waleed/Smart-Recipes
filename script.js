/* ==========================================================================
   1. SHARED STATE & DATA MANAGEMENT
   ========================================================================== */
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

/**
 * Global function to handle recipe bookmarking
 */
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Smart UI Refresh
    if (document.getElementById("favoritesGrid")) {
        renderFavoritesPage();
    } else if (document.getElementById("recipeGrid")) {
        window.filterAndRender();
    }
}

/* ==========================================================================
   2. UI ENGINES (Theme & Components)
   ========================================================================== */
function initTheme() {
    const themeBtn = document.getElementById("themeToggle");
    const isDark = localStorage.getItem("theme") === "dark";

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

/**
 * Reusable Card Component for Grid Views
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

/* ==========================================================================
   3. PAGE LOGIC: HOMEPAGE (index.html)
   ========================================================================== */
function initHomePage() {
    const recipeGrid = document.getElementById("recipeGrid");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!recipeGrid) return;

    // Populate Category Dropdown
    const categories = ["All", ...new Set(recipes.map(r => r.category))];
    categoryFilter.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');

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

    searchInput.addEventListener("input", filterAndRender);
    categoryFilter.addEventListener("change", filterAndRender);
    filterAndRender();
}

/* ==========================================================================
   4. PAGE LOGIC: DETAIL PAGE (detailRecipe.html)
   ========================================================================== */
function initDetailPage() {
    const container = document.getElementById("recipeDetail");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
        container.innerHTML = `<div class="empty-state"><h2>Recipe not found</h2><a href="index.html" class="browse-btn">Return Home</a></div>`;
        return;
    }

    const baseServings = 2;

    // Render Template with New Stats Bar
    container.innerHTML = `
        <div class="detail-header">
            <span class="category-tag">${recipe.category}</span>
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            
            <div class="recipe-stats">
                <div class="stat-item">
                    <span class="stat-label">Time</span>
                    <span class="stat-value">⏱️ ${recipe.prepTime}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Difficulty</span>
                    <span class="stat-value">📊 ${recipe.difficulty}</span>
                </div>
            </div>
        </div>
        
        <div class="images-grid">
            ${recipe.images.map(img => `<img src="${img}" class="detail-img" alt="${recipe.name}">`).join('')}
        </div>

        <div class="detail-content">
            <aside class="ingredients">
                <h3>Ingredients</h3>
                <div class="servings-control">
                    <label for="servingsInput">Servings:</label>
                    <input type="number" id="servingsInput" value="${baseServings}" min="1" max="50">
                </div>
                <ul id="ingredientsList"></ul>
            </aside>

            <section class="instructions">
                <h3>Preparation Steps</h3>
                <ol>
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
                <div class="chef-tip">
                    <strong>Chef's Pro-Tip:</strong> ${recipe.tips}
                </div>
            </section>
        </div>
    `;

    const updateIngredients = (newServings) => {
        const list = document.getElementById("ingredientsList");
        list.innerHTML = recipe.ingredients.map(ing => {
            const calculatedAmount = (ing.base * newServings) / baseServings;
            const displayAmount = parseFloat(calculatedAmount.toFixed(2));
            return `<li><strong>${displayAmount}</strong> ${ing.name}</li>`;
        }).join('');
    };

    const servingsInput = document.getElementById("servingsInput");
    servingsInput.addEventListener("input", (e) => {
        const currentVal = parseInt(e.target.value);
        if (currentVal > 0) updateIngredients(currentVal);
    });

    updateIngredients(baseServings);
}

/* ==========================================================================
   5. PAGE LOGIC: FAVORITES (favorites.html)
   ========================================================================== */
function renderFavoritesPage() {
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
    }
}

/* ==========================================================================
   6. GLOBAL INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initHomePage();
    initDetailPage();
    renderFavoritesPage();
});