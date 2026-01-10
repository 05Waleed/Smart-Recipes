import { chefsDetailedData } from "../data/chefProfileData.js";

export function chefProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const chefId = urlParams.get("id") || "1"; // Default for demo
    const container = document.getElementById("chefProfileContainer");
    if (!container) return;

    const chef = chefsDetailedData[chefId];
    if (!chef) return;

    container.innerHTML = `
        <div class="cp-stage">
            <div class="cp-stage-media">
                <img src="${chef.content.image}" alt="${chef.personal.name}">
                
                <div class="cp-signature-badge">
                    <span class="cp-chef-icon">👨‍🍳</span>
                    <div>
                        <small class="cp-badge-label">Signature Masterpiece</small>
                        <div class="cp-badge-dish">${chef.professional.signatureDish}</div>
                    </div>
                </div>
            </div>

            <div class="cp-stage-content">
                <div class="cp-hero-title-wrap">
                    <span class="cp-category">${chef.professional.category}</span>
                    <h1 class="cp-floating-name">
                        ${chef.personal.name.split(" ").join("<br>")}
                    </h1>
                </div>

                <div class="cp-stats-grid" style="margin-bottom: 60px;">
                    <div class="cp-minimal-stat">
                        <span class="label">Experience</span>
                        <span class="val">${chef.professional.experienceYears} Years</span>
                    </div>
                    <div class="cp-minimal-stat">
                        <span class="label">Recognition</span>
                        <span class="val">${chef.professional.michelinStars ? "Michelin Star" : "Pro"}</span>
                    </div>
                    <div class="cp-minimal-stat">
                        <span class="label">Community</span>
                        <span class="val">★ ${chef.metrics.stats.avgRating}</span>
                    </div>
                    <div class="cp-minimal-stat">
                        <span class="label">Recipes</span>
                        <span class="val">${chef.metrics.stats.recipes}</span>
                    </div>
                </div>

                <div class="cp-glass-card">
                    <h3 class="cp-section-title">Philosophy</h3>
                    <blockquote class="cp-quote" style="margin-bottom: 0; font-style: italic;">
                        "${chef.professional.philosophy}"
                    </blockquote>
                </div>

                <div class="cp-narrative" style="padding: 20px 0;">
                    <p class="cp-intro" style="font-weight: 600; color: var(--text-main); margin-bottom: 30px;">
                        ${chef.personal.title} — Based in ${chef.personal.location.label}
                    </p>
                    
                    <h3 class="cp-section-title">The Journey</h3>
                    <p style="line-height: 1.8; margin-bottom: 40px;">${chef.content.bio}</p>

                    <div class="cp-accolades">
                        <h3 class="cp-section-title">Accolades</h3>
                        <div class="cp-badges">
                            ${chef.content.badges.map(badge => `
                                <div class="cp-badge">
                                    <span class="cp-badge-icon">${badge.split(" ")[0]}</span>
                                    <span class="cp-badge-text">
                                        ${badge.split(" ").slice(1).join(" ")}
                                    </span>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </div>

                <div class="cp-actions">
                    <button class="cp-btn-primary">Hire Chef</button>
                    <button class="cp-btn-outline">Follow Chef</button>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", chefProfile);