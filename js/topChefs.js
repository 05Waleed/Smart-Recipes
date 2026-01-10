import { topChefsData } from "../data/topChefsData.js";

export function renderTopChefs() {
    const topChefsGrid = document.getElementById("topChefsGrid");

    // 1. Select the hero section containing the "Discover. Cook. Enjoy." text
    const heroSection = document.querySelector(".hero");

    if (!topChefsGrid) return;

    const dSearch = document.getElementById("searchInput");
    const mSearch = document.getElementById("mobileSearchInput");
    const dCat = document.getElementById("categoryFilter");
    const mCat = document.getElementById("mobileCategoryFilter");

    // Dynamic Location Filter Population
    const locations = ["All", ...new Set(topChefsData.map(c => c.category || 'Global'))];
    const locationHTML = locations
        .map(loc => `<option value="${loc}">${loc}</option>`)
        .join("");

    if (dCat) dCat.innerHTML = locationHTML;
    if (mCat) mCat.innerHTML = locationHTML;

    // Define the Global Filter Function
    window.filterAndRender = () => {
        const term = (dSearch?.value || mSearch?.value || "").toLowerCase();
        const selectedLoc = dCat?.value || mCat?.value || "All";

        const filtered = topChefsData.filter(chef => {
            const matchesSearch = chef.name.toLowerCase().includes(term);
            const matchesLoc = selectedLoc === "All" || (chef.location || 'Global') === selectedLoc;
            return matchesSearch && matchesLoc;
        });

        // 2. Hide/Show Hero Section based on results
        if (heroSection) {
            heroSection.style.display = filtered.length === 0 ? "none" : "block";
        }

        if (filtered.length === 0) {
            topChefsGrid.innerHTML = `
                <div class="empty-state">
                    <h2>No chefs found</h2>
                    <p>Try searching for a different name or location.</p>
                </div>`;
            return;
        }

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

    window.filterAndRender();
}

// Global Event Delegation (Outside render function)
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".follow-btn");
    const card = e.target.closest(".chef-card");

    if (btn) {
        const chefId = parseInt(btn.dataset.id);
        const chef = topChefsData.find(c => c.id === chefId);
        if (chef) {
            chef.isFollowing = !chef.isFollowing;
            btn.className = `follow-btn ${chef.isFollowing ? 'followed' : 'unfollowed'}`;
            btn.innerHTML = chef.isFollowing ? '<span>Following</span>' : '<span>+ Follow</span>';
        }
        return;
    }

    if (card) {
        const chefId = card.dataset.id;
        window.location.href = `chef-profile.html?id=${chefId}`;
    }
});