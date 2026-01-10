import { communityFeed } from "../data/communityData.js";

const feedContainer = document.getElementById('feed-container');

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            revealObserver.unobserve(entry.target); // Reveal only once
        }
    });
}, observerOptions);

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderPost(post) {
    const postEl = document.createElement('article');
    postEl.classList.add('feed-post');

    postEl.innerHTML = `
        <header class="post-header" style="padding: 25px 40px; display: flex; align-items: center; gap: 15px;">
            <img src="${post.avatar}" alt="${post.username}" style="width: 44px; height: 44px; border-radius: 50%;">
            <div class="username-box">
                <span class="username" style="font-weight:700; display:block;">${post.username}</span>
                <span class="timestamp" style="font-size:0.75rem; color:var(--text-muted);">${formatDate(post.timestamp)}</span>
            </div>
        </header>

        <div class="post-image-wrapper">
            <img class="post-image" src="${post.image}" alt="${post.title}" loading="lazy">
        </div>
        
        <div class="post-body">
            <h2 class="post-title">${post.title}</h2>
            
            <div class="recipe-meta-bar">
                <div class="meta-item"><span>Prep Time</span><strong>${post.prepTime || '45 Mins'}</strong></div>
                <div class="meta-item"><span>Difficulty</span><strong>${post.difficulty || 'Expert'}</strong></div>
                <div class="meta-item"><span>Serves</span><strong>${post.servings || '4 People'}</strong></div>
            </div>

            <p class="post-description" style="font-size:1.1rem; color:var(--text-muted); margin-bottom: 30px;">${post.description}</p>
            
            <div class="recipe-info-grid">
                <div class="post-section">
                    <h4>The Palette</h4>
                    <ul style="list-style:none;">${post.ingredients.map(ing => `<li>• ${ing}</li>`).join('')}</ul>
                </div>
                <div class="post-section">
                    <h4>The Process</h4>
                    <ol style="padding-left:15px;">${post.steps.map(step => `<li style="margin-bottom:10px;">${step}</li>`).join('')}</ol>
                </div>
            </div>
        </div>

        <div class="post-interactions" style="padding: 25px 40px; border-top: 1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; gap:15px;">
                <button class="like-button" style="background:var(--primary); color:white; border:none; padding:8px 18px; border-radius:20px; font-weight:700; cursor:pointer;">❤️ ${post.likes}</button>
                <button style="background:none; border:none; cursor:pointer; font-weight:600; color:var(--text-main);">💬 ${post.comments.length} Comments</button>
            </div>
            <span style="font-size:0.8rem; font-weight:700; cursor:pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform='translateX(0)'">SAVE RECIPE →</span>
        </div>
    `;

    feedContainer.appendChild(postEl);
    revealObserver.observe(postEl); // Start observing the new element
}

export function renderCommunity() {
    if (!feedContainer) return;
    feedContainer.innerHTML = '';
    communityFeed.forEach(post => renderPost(post));
}