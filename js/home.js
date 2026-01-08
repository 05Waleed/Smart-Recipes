function initHomePage() {
    const recipeGrid = document.getElementById("recipeGrid");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!recipeGrid) return;

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

    searchInput.addEventListener("input", window.filterAndRender);
    categoryFilter.addEventListener("change", window.filterAndRender);
    window.filterAndRender();
}

document.addEventListener("DOMContentLoaded", initHomePage);