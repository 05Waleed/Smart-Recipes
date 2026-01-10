import { topChefsData } from "../data/topChefsData.js";

const topChefsGrid = document.getElementById("topChefsGrid");

export function renderTopChefs() {
    if (!topChefsGrid) return;

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    // Dynamic Category/Location Filter Population
    if (categoryFilter && categoryFilter.options.length <= 1) {
        const locations = ["All", ...new Set(topChefsData.map(c => c.location || 'Global'))];
        categoryFilter.innerHTML = locations
            .map(loc => `<option value="${loc}">${loc}</option>`)
            .join("");
    }

    const filterAndRenderTopChefs = () => {
        const term = searchInput?.value.toLowerCase() || "";
        const selectedLoc = categoryFilter?.value || "All";

        const filtered = topChefsData.filter(chef => {
            const matchesSearch = chef.name.toLowerCase().includes(term);
            const matchesLoc = selectedLoc === "All" || (chef.location || 'Global') === selectedLoc;
            return matchesSearch && matchesLoc;
        });

        // Batch DOM update
        topChefsGrid.innerHTML = filtered.map(chef => {
            const rating = (4.5 + (chef.id % 5) / 10).toFixed(1);

            return `
                <div class="chef-card" data-id="${chef.id}">
                    <div class="chef-image-wrap">
                        <img 
                            src="${chef.image}" 
                            alt="${chef.name}" 
                            class="chef-image" 
                            loading="lazy"
                            decoding="async"
                            onerror="this.src='https://via.placeholder.com/400x400?text=Chef+Profile'"
                        >
                        <button 
                            class="follow-btn ${chef.isFollowing ? 'followed' : 'unfollowed'}" 
                            data-id="${chef.id}"
                        >
                            ${chef.isFollowing ? '<span>Following</span>' : '<span>+ Follow</span>'}
                        </button>
                        <div class="chef-info">
                            <div class="chef-meta">
                                <span class="chef-location">${chef.location || 'Global'}</span>
                                <span class="chef-rating">⭐ ${rating}</span>
                            </div>
                            <h3 class="chef-name">${chef.name}</h3>
                            <div class="chef-tags">
                                ${chef.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    };

    // Debounce search input
    let debounceTimer;
    searchInput?.addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(filterAndRenderTopChefs, 150);
    });

    categoryFilter?.addEventListener("change", filterAndRenderTopChefs);

    // Initial render
    filterAndRenderTopChefs();
}

// Global Event Delegation for Clicks
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".follow-btn");
    const card = e.target.closest(".chef-card");

    // Handle Follow Button logic first
    if (btn) {
        const chefId = parseInt(btn.dataset.id);
        const chef = topChefsData.find(c => c.id === chefId);

        if (chef) {
            chef.isFollowing = !chef.isFollowing;
            btn.className = `follow-btn ${chef.isFollowing ? 'followed' : 'unfollowed'}`;
            btn.innerHTML = chef.isFollowing ? '<span>Following</span>' : '<span>+ Follow</span>';

            btn.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(0.9)' },
                { transform: 'scale(1)' }
            ], { duration: 150 });
        }
        return; // Important: Stop here so we don't trigger the card navigation
    }

    // Handle Card Navigation logic
    if (card) {
        const chefId = card.dataset.id;
        window.location.href = `chef-profile.html?id=${chefId}`;
    }
});

// Boot application
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderTopChefs);
} else {
    renderTopChefs();
}