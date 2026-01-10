// --- STATE ---
export let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// --- FAVORITES LOGIC ---
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

// --- THEME INITIALIZATION (Page Load) ---
export function initTheme() {
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) {
        document.body.classList.add("dark-mode");
    }
}

// --- NAVBAR RENDERING ---
export function renderNavbar() {
    const nav = document.getElementById("main-navbar");
    if (!nav) return;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    let searchPlaceholder = "Search...";

    // Dynamic placeholder based on page
    if (currentPage.includes("index")) searchPlaceholder = "Search delicious recipes...";
    else if (currentPage.includes("favorites")) searchPlaceholder = "Search favorites...";
    else if (currentPage.includes("top-chefs")) searchPlaceholder = "Search chefs...";

    nav.innerHTML = `
        <div class="nav-container">
            <div class="logo">COOK<span>BOOK</span></div>
            
            <div class="nav-mobile-controls">
                <button id="themeToggleMobile" class="icon-btn">🌙</button>
                <button class="icon-btn" id="mobileSearchTrigger">🔍</button>
                <button class="hamburger" id="hamburger">
                    <span></span><span></span><span></span>
                </button>
            </div>

            <div class="nav-menu" id="navMenu">
                <div class="navbar-left">
                    <a href="/index.html" class="nav-link ${currentPage.includes('index') ? 'active' : ''}">Home</a>
                    <a href="/pages/favorites.html" class="nav-link ${currentPage.includes('favorites') ? 'active' : ''}">Favorites</a>
                    <a href="/pages/top-chefs.html" class="nav-link ${currentPage.includes('top-chefs') ? 'active' : ''}">Top Chefs</a>
                    <a href="/pages/profile.html" class="nav-link mobile-profile-link ${currentPage.includes('profile') ? 'active' : ''}">
                        Profile
                    </a>
                </div>
                
                <div class="navbar-right desktop-only">
                    <select id="categoryFilter"><option value="All">All Categories</option></select>
                    <input type="text" id="searchInput" placeholder="${searchPlaceholder}">
                    <button id="themeToggleDesktop" class="icon-btn">🌙</button>
                    <a href="/pages/profile.html" class="profile-btn">👤</a>
                </div>
            </div>
        </div>

        <div class="mobile-search-tray" id="mobileSearchTray">
            <select id="mobileCategoryFilter"><option value="All">All Categories</option></select>
            <input type="text" id="mobileSearchInput" placeholder="${searchPlaceholder}">
        </div>
    `;

    // --- DOM Elements ---
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const searchTray = document.getElementById("mobileSearchTray");
    const searchTrigger = document.getElementById("mobileSearchTrigger");

    // Theme Buttons (Both desktop and mobile)
    const themeBtns = [
        document.getElementById("themeToggleDesktop"),
        document.getElementById("themeToggleMobile")
    ];

    // --- Theme Logic ---
    const applyTheme = (dark) => {
        document.body.classList.toggle("dark-mode", dark);
        themeBtns.forEach(btn => {
            if (btn) btn.textContent = dark ? "☀️" : "🌙";
        });
    };

    // Initialize display state
    if (document.body.classList.contains("dark-mode")) {
        applyTheme(true);
    }

    themeBtns.forEach(btn => {
        btn?.addEventListener("click", () => {
            const isNowDark = !document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isNowDark ? "dark" : "light");
            applyTheme(isNowDark);
        });
    });

    // --- Mobile UI Toggles ---
    hamburger?.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburger.classList.toggle("open");
        searchTray.classList.remove("show");
    });

    searchTrigger?.addEventListener("click", () => {
        searchTray.classList.toggle("show");
        navMenu.classList.remove("show");
        hamburger.classList.remove("open");
    });

    // --- Search & Filter Syncing ---
    const dInput = document.getElementById("searchInput");
    const dSelect = document.getElementById("categoryFilter");
    const mInput = document.getElementById("mobileSearchInput");
    const mSelect = document.getElementById("mobileCategoryFilter");

    const syncAndFilter = (e) => {
        const val = e.target.value;
        if (e.target.tagName === "SELECT") {
            if (dSelect) dSelect.value = val;
            if (mSelect) mSelect.value = val;
        } else {
            if (dInput) dInput.value = val;
            if (mInput) mInput.value = val;
        }
        if (typeof window.filterAndRender === "function") window.filterAndRender();
    };

    [dInput, dSelect, mInput, mSelect].forEach(el => {
        el?.addEventListener(el.tagName === "SELECT" ? "change" : "input", syncAndFilter);
    });
}

// --- RECIPE CARD COMPONENT ---
export function createRecipeCard(recipe) {
    const isFav = favorites.includes(recipe.id);

    return `
        <div class="recipe-card">
            <div class="card-carousel" data-id="${recipe.id}">
                ${recipe.images.map((img, index) => `
                    <img 
                        src="${img}" 
                        alt="${recipe.name}" 
                        class="carousel-image ${index === 0 ? "active" : ""}"
                    />
                `).join("")}

                <div class="carousel-dots">
                    ${recipe.images.map((_, index) => `
                        <span class="dot ${index === 0 ? "active" : ""}" data-index="${index}"></span>
                    `).join("")}
                </div>
            </div>

            <div class="recipe-card-content">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>

                <div class="recipe-card-buttons">
                    <button class="view-more-bttn"
                        onclick="location.href='/pages/detailRecipe.html?id=${recipe.id}'">
                        View More
                    </button>

                    <button class="fav-btn" id="fav-${recipe.id}" onclick="event.stopPropagation()">
                        ${isFav ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// --- FOOTER RENDERING ---
export function renderFooter() {
    const footer = document.getElementById("main-footer");
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-brand">
                <div class="logo">COOK<span>BOOK</span></div>
                <p class="footer-tagline">Elevating the art of home cooking through chef-curated experiences.</p>
                <div class="social-links">
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Pinterest">PN</a>
                    <a href="#" aria-label="Youtube">YT</a>
                </div>
            </div>

            <div class="footer-nav">
                <div class="nav-group">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/pages/favorites.html">My Cookbook</a></li>
                        <li><a href="/pages/top-chefs.html">Top Chefs</a></li>
                        <li><a href="/pages/profile.html">Profile</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-newsletter">
                <h4>Newsletter</h4>
                <p>Join our culinary community for weekly inspiration.</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Email Address" required>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p>&copy; 2026 CookBook. All rights reserved.</p>
                <div class="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    `;
}