import { recipes } from "../data/recipesData.js";
import { createRecipeCard, toggleFavorite } from "./utils.js";
import { initCardCarousels } from "./cardCarousel.js";

let userPantry = new Set();

const getCleanName = (name) => name.split('(')[0].trim();

const availableIngredients = [...new Set(recipes.flatMap(r =>
    r.ingredients.map(ing => getCleanName(ing.name))
))].sort();

export function myFridgeRender() {
    const clearBtn = document.getElementById('clear-pantry');
    if (!clearBtn) return;

    renderPantryChips();
    updateRecipeDisplay();

    clearBtn.addEventListener('click', () => {
        userPantry.clear();
        document.querySelectorAll('.ing-chip').forEach(c => c.classList.remove('active'));
        document.getElementById('match-count').innerText = `0 ingredients selected`;
        updateRecipeDisplay();
    });
}

function renderPantryChips() {
    const tray = document.getElementById('pantry-tray');
    if (!tray) return;

    tray.innerHTML = availableIngredients.map(ing => `
        <button class="ing-chip" data-ing="${ing}">
            <span class="plus-icon">+</span> ${ing}
        </button>
    `).join('');

    tray.querySelectorAll('.ing-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const ing = chip.dataset.ing;
            userPantry.has(ing) ? userPantry.delete(ing) : userPantry.add(ing);
            chip.classList.toggle('active');

            document.getElementById('match-count').innerText =
                `${userPantry.size} ingredient${userPantry.size !== 1 ? 's' : ''} selected`;

            updateRecipeDisplay();
        });
    });
}

function updateRecipeDisplay() {
    const resultsContainer = document.getElementById('fridge-results');
    const meta = document.getElementById('results-meta');
    const resultsSection = document.querySelector('.results-section');
    if (!resultsContainer || !resultsSection) return;

    if (userPantry.size === 0) {
        resultsSection.style.display = "none";
        resultsContainer.innerHTML = "";
        return;
    }

    let scoredRecipes = recipes
        .map(recipe => {
            const recipeIngClean = recipe.ingredients.map(i => getCleanName(i.name));
            const matches = recipeIngClean.filter(name => userPantry.has(name));
            const missing = recipeIngClean.filter(name => !userPantry.has(name));
            const score = (matches.length / recipeIngClean.length) * 100;
            return { ...recipe, score, missing };
        })
        .filter(r => r.score > 0)
        .sort((a, b) => b.score - a.score);

    if (scoredRecipes.length > 0) {
        resultsSection.style.display = "block";
        meta.innerHTML = `Found <strong>${scoredRecipes.length}</strong> possible recipes`;

        resultsContainer.innerHTML = scoredRecipes.map(recipe => {
            const matchType = recipe.score === 100 ? 'perfect-match' : (recipe.score >= 50 ? 'high-match' : '');

            // Premium limit: show max 2 missing items + count
            const missingDisplay = recipe.missing.length > 2
                ? recipe.missing.slice(0, 2).join(', ') + ` + ${recipe.missing.length - 2} more`
                : recipe.missing.join(', ');

            return `
                <div class="fridge-card-wrapper">
                    <div class="match-badge ${matchType}">${Math.round(recipe.score)}% Match</div>
                    ${createRecipeCard(recipe)}
                    <div class="fridge-footer">
                        ${recipe.score === 100
                    ? '<span class="ready-txt">✓ Ready to Cook</span>'
                    : `<span class="missing-txt"><strong>Missing:</strong> ${missingDisplay}</span>`}
                    </div>
                </div>
            `;
        }).join('');

        scoredRecipes.forEach(recipe => {
            document.getElementById(`fav-${recipe.id}`)?.addEventListener("click", () => {
                toggleFavorite(recipe.id);
            });
        });

        initCardCarousels({ intervalTime: 5000 });

    } else {
        resultsSection.style.display = "block";
        meta.innerText = "No results found.";
        resultsContainer.innerHTML = `<div class="empty-state">No recipes found for these specific items.</div>`;
    }
}