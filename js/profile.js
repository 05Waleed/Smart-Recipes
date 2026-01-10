import { user } from "../data/profileData.js";
import { recipes } from "../data/recipesData.js";

export function renderProfile() {
    // Profile info
    document.getElementById("userImage").src = user.image;
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userLevel").textContent = user.level;

    // Level progress
    const levelProgress = document.getElementById("levelProgress");
    levelProgress.style.width = `${user.levelProgress * 100}%`;

    // Stats
    document.getElementById("recipesCooked").textContent = user.recipesCooked;
    document.getElementById("userPoints").textContent = user.points;
    document.getElementById("badgesCount").textContent = user.badges.length;

    // Badges
    const badgesContainer = document.getElementById("badgesContainer");
    badgesContainer.innerHTML = user.badges.map(badge => `
        <div class="badge">
            <img src="${badge.icon}" alt="${badge.title}" title="${badge.title}">
        </div>
    `).join('');

    // Recent favorites
    const recentContainer = document.getElementById("recentFavorites");
    recentContainer.innerHTML = user.recentFavorites.map(id => {
        const recipe = recipes.find(r => r.id === id);
        return recipe
            ? `<img src="${recipe.images[0]}" alt="${recipe.name}" title="${recipe.name}" data-id="${recipe.id}">`
            : '';
    }).join('');

    // Add click event listeners to open recipe detail
    recentContainer.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            const recipeId = img.getAttribute('data-id');
            window.location.href = `detail-recipe.html?id=${recipeId}`;
        });
    });

}

window.renderProfile = renderProfile;
