// data/chefProfile.js

export const chefProfiles = {
    1: {
        name: "Luca Moretti",
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853",
        location: "Florence, Italy",
        level: "Master Chef",
        experienceYears: 18,
        bio: "Luca trained in traditional Tuscan kitchens before opening his own trattoria. He is renowned for rustic Italian flavors with a modern presentation, especially his handmade pasta and seasonal dishes.",
        education: ["Culinary Arts, Florence Culinary Institute", "Internship at Osteria Francescana"],
        specialties: ["Italian", "Pasta", "Mediterranean"],
        awards: ["Top Chef Italy 2019", "Michelin Bib Gourmand 2021"],
        badges: ["🍝 Pasta Pro", "🏆 Top Chef 2024", "🌿 Seasonal Expert"],
        stats: {
            recipesPublished: 128,
            followers: 54200,
            likes: 210000,
            signatureDishes: 12
        },
        signatureDishes: [
            { name: "Truffle Tagliatelle", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
            { name: "Tuscan Ribollita", image: "https://images.unsplash.com/photo-1572441710571-1f6f0e2a544e" }
        ],
        featuredRecipes: [1, 7, 12],
        socials: {
            instagram: "@chef_luca",
            website: "https://lucamoretti.cooking",
            twitter: "@lucamoretti"
        }
    },

    2: {
        name: "Aisha Al-Farsi",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19",
        location: "Dubai, UAE",
        level: "Executive Chef",
        experienceYears: 14,
        bio: "Aisha blends traditional Emirati flavors with contemporary fusion techniques. Her dishes are bold, aromatic, and visually stunning, perfect for modern fine dining.",
        education: ["Le Cordon Bleu, Dubai", "Internship at Zuma Dubai"],
        specialties: ["Middle Eastern", "Fusion", "Grilling"],
        awards: ["Best Fusion Chef 2020", "Emirati Culinary Award 2022"],
        badges: ["🌶️ Spice Master", "✨ Fusion Star", "🔥 Grill Expert"],
        stats: {
            recipesPublished: 94,
            followers: 38700,
            likes: 162500,
            signatureDishes: 8
        },
        signatureDishes: [
            { name: "Spiced Lamb Kofta", image: "https://images.unsplash.com/photo-1605475127542-39d0d3d2a2f4" },
            { name: "Date & Orange Tart", image: "https://images.unsplash.com/photo-1565958011703-44a1e24c41a5" }
        ],
        featuredRecipes: [3, 9, 21],
        socials: {
            instagram: "@chef.aisha",
            website: null,
            twitter: "@aishaalfarsi"
        }
    },

    3: {
        name: "Ethan Walker",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        location: "Austin, USA",
        level: "Senior Chef",
        experienceYears: 11,
        bio: "Ethan transforms classic comfort food into refined dishes. Known for his BBQ mastery and innovative takes on American classics.",
        education: ["Austin Culinary Academy", "Apprenticeship at Franklin Barbecue"],
        specialties: ["American", "BBQ", "Comfort Food"],
        awards: ["BBQ Master Challenge Winner 2018", "Best Comfort Dish 2021"],
        badges: ["🔥 BBQ King", "❤️ Crowd Favorite"],
        stats: {
            recipesPublished: 76,
            followers: 29100,
            likes: 98000,
            signatureDishes: 5
        },
        signatureDishes: [
            { name: "Smoked Brisket", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
            { name: "Mac & Cheese Supreme", image: "https://images.unsplash.com/photo-1572441710571-1f6f0e2a544e" }
        ],
        featuredRecipes: [5, 14],
        socials: {
            instagram: "@ethan_cooks",
            website: null
        }
    },

    4: {
        name: "Sofia Martinez",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        location: "Barcelona, Spain",
        level: "Plant-Based Expert",
        experienceYears: 9,
        bio: "Sofia crafts colorful and vibrant plant-based meals. She focuses on healthy ingredients without compromising on flavor or creativity.",
        education: ["Barcelona Culinary Institute", "Plant-Based Nutrition Certification"],
        specialties: ["Vegetarian", "Vegan", "Healthy"],
        awards: ["Vegan Chef of the Year 2022"],
        badges: ["🥬 Green Chef", "💚 Healthy Choice", "🌱 Organic Advocate"],
        stats: {
            recipesPublished: 112,
            followers: 46800,
            likes: 175400,
            signatureDishes: 7
        },
        signatureDishes: [
            { name: "Rainbow Buddha Bowl", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
            { name: "Stuffed Bell Peppers", image: "https://images.unsplash.com/photo-1572441710571-1f6f0e2a544e" }
        ],
        featuredRecipes: [8, 15, 22],
        socials: {
            instagram: "@sofia_vegan",
            website: "https://sofiavegankitchen.com"
        }
    }

    // Add remaining chefs in same enriched format (Kenji, Marie, Carlos, Nina, Oliver, Priya)
};
