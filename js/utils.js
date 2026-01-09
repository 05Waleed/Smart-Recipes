export let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

export function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Refresh whichever UI is currently on screen
    if (typeof window.renderFavoritesPage === "function") window.renderFavoritesPage();
    if (typeof window.filterAndRender === "function") window.filterAndRender();
}

export function initTheme() {
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

export function renderNavbar() {
    const nav = document.getElementById("main-navbar");
    if (!nav) return;

    // Get current page filename (e.g., 'index.html')
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    nav.innerHTML = `
        <div class="navbar-left">
            <div class="logo">COOK<span>BOOK</span></div>
            <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="favorites.html" class="${currentPage === 'favorites.html' ? 'active' : ''}">Favorites</a>
        </div>
        <div class="navbar-right">
            ${currentPage === 'index.html' ? `
                <select id="categoryFilter">
                    <option value="All">All Categories</option>
                </select>
                <input type="text" id="searchInput" placeholder="Search delicious recipes...">
            ` : ''}
            <button id="themeToggle">🌙</button>
            <button id="themeToggle"><a href="profile.html">👤</a></button>
        </div>
    `;
}

export function createRecipeCard(recipe) {
    const isFav = favorites.includes(recipe.id);
    return `
        <div class="recipe-card">
            <img src="${recipe.images[0]}" alt="${recipe.name}">
            <div class="recipe-card-content">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-card-buttons">
                    <button class="view-more-bttn" onclick="location.href='detailRecipe.html?id=${recipe.id}'">View More</button>
                    <button class="fav-btn" id="fav-${recipe.id}">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

export function renderFooter() {
    const footer = document.getElementById("main-footer");
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <div class="logo">COOK<span>BOOK</span></div>
                <p class="footer-about">
                    Bringing high-quality, chef-tested recipes to your kitchen.
                </p>
                <div class="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">Pinterest</a>
                    <a href="#">Youtube</a>
                </div>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="favorites.html">My Cookbook</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Stay Inspired</h4>
                <div class="newsletter-form">
                    <input type="email" placeholder="Your email">
                    <button type="submit">Join</button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CookBook. All rights reserved.</p>
        </div>
    `;
}