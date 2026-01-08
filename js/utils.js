let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Refresh UI based on which page is currently open
    if (typeof renderFavoritesPage === "function") renderFavoritesPage();
    if (window.filterAndRender) window.filterAndRender();
}

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

document.addEventListener("DOMContentLoaded", initTheme);