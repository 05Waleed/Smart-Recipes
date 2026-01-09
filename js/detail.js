import { recipes } from "../data/recipesData.js";

export function initDetailPage() {
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

    container.innerHTML = `
        <div class="detail-header">
            <span class="category-tag">${recipe.category}</span>
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            <div class="recipe-stats">
                <div class="stat-item"><span class="stat-label">Time</span><span class="stat-value">⏱️ ${recipe.prepTime}</span></div>
                <div class="stat-item"><span class="stat-label">Difficulty</span><span class="stat-value">📊 ${recipe.difficulty}</span></div>
            </div>
        </div>
        <div class="images-grid">
            ${recipe.images.map(img => `<img src="${img}" class="detail-img">`).join('')}
        </div>
        <div class="detail-content">
            <aside class="ingredients">
                <h3>Ingredients</h3>
                <div class="servings-control">
                    <label>Servings:</label>
                    <input type="number" id="servingsInput" value="${baseServings}" min="1">
                </div>
                <ul id="ingredientsList"></ul>
            </aside>
            <section class="instructions">
                <h3>Preparation Steps</h3>
                <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
                <div class="chef-tip"><strong>Chef's Pro-Tip:</strong> ${recipe.tips}</div>
            </section>
        </div>
    `;

    const updateIngredients = (num) => {
        const list = document.getElementById("ingredientsList");
        if (!list) return;
        list.innerHTML = recipe.ingredients.map(ing => {
            const amt = parseFloat(((ing.base * num) / baseServings).toFixed(2));
            return `<li><strong>${amt}</strong> ${ing.name}</li>`;
        }).join('');
    };

    document.getElementById("servingsInput")?.addEventListener("input", e => updateIngredients(e.target.value));
    updateIngredients(baseServings);
}