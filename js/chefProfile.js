import { chefsDetailedData } from "../data/chefProfileData.js";

export function chefProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const chefId = urlParams.get('id');
    const container = document.getElementById("chefProfileContainer");
    if (!container) return;

    const chef = chefsDetailedData[chefId];

    if (chef) {
        container.innerHTML = `
        <div class="cp-stage">
            <div class="cp-stage-media">
                <img src="${chef.content.image}" alt="${chef.personal.name}">
                <div class="cp-signature-badge">
                    <span style="font-size: 1.5rem;">👨‍🍳</span>
                    <div>
                        <small style="text-transform: uppercase; font-size: 0.6rem; font-weight: 800;">Signature Masterpiece</small>
                        <div style="font-weight: 700;">${chef.professional.signatureDish}</div>
                    </div>
                </div>
            </div>

            <div class="cp-stage-content">
                <div class="cp-hero-title-wrap">
                    <span style="color: var(--primary); letter-spacing: 5px; font-weight: 700; text-transform: uppercase; font-size: 0.8rem;">
                        ${chef.professional.category}
                    </span>
                    <h1 class="cp-floating-name">${chef.personal.name.split(' ').join('<br>')}</h1>
                </div>

                <div class="cp-glass-card">
                    <p style="font-size: 1.2rem; margin-bottom: 30px;">
                        ${chef.personal.title} — Located in ${chef.personal.location.label}
                    </p>
                    <div class="cp-stats-grid">
                        <div class="cp-minimal-stat">
                            <span class="label">Experience</span>
                            <span class="val">${chef.professional.experienceYears} Years</span>
                        </div>
                        <div class="cp-minimal-stat">
                            <span class="label">Community</span>
                            <span class="val">★ ${chef.metrics.stats.avgRating}</span>
                        </div>
                        <div class="cp-minimal-stat">
                            <span class="label">Recipes</span>
                            <span class="val">${chef.metrics.stats.recipes}</span>
                        </div>
                        <div class="cp-minimal-stat">
                            <span class="label">Recognition</span>
                            <span class="val">${chef.professional.michelinStars ? 'Michelin Star' : 'Pro'}</span>
                        </div>
                    </div>
                </div>

                <div class="cp-narrative">
                    <h3 style="color: #fff; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem;">Philosophy</h3>
                    <blockquote style="font-size: 2rem; color: #fff; line-height: 1.3; margin-bottom: 40px; font-weight: 300;">
                        "${chef.professional.philosophy}"
                    </blockquote>
                    
                    <h3 style="color: #fff; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem;">The Journey</h3>
                    <p>${chef.content.bio}</p>
                </div>

                <div style="margin-top: 60px;">
                    <h3 style="color: #fff; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem;">Accolades</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 15px;">
                        ${chef.content.badges.map(badge => `
                            <div style="padding: 15px 25px; background: rgba(255,255,255,0.05); border-radius: 15px; border: 1px solid var(--border);">
                                <span style="margin-right: 10px;">${badge.split(' ')[0]}</span>
                                <span style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase;">${badge.split(' ').slice(1).join(' ')}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div style="margin-top: 80px; display: flex; gap: 20px;">
                    <button class="cp-btn-primary" style="padding: 20px 50px; border-radius: 100px;">Hire Chef</button>
                    <button style="background: transparent; border: 1px solid #fff; color: #fff; padding: 20px 50px; border-radius: 100px; cursor: pointer;">Follow</button>
                </div>
            </div>
        </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", chefProfile);