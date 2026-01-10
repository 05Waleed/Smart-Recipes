/* ==========================================================================
   INTEGRATED CHEF PROFILES (ID MATCHED WITH RECIPES)
   ========================================================================== */

export const chefsDetailedData = {
    1: {
        id: 1,
        personal: {
            name: "Luca Moretti",
            title: "Maestro di Cucina",
            location: { city: "Rome", country: "Italy", label: "Rome, Italy" },
            social: { instagram: "@luca_moretti" }
        },
        professional: {
            category: "Traditional Italian",
            level: "Master Chef",
            experienceYears: 18,
            michelinStars: 2,
            signatureDish: "Creamy Herb Pasta", // Matched to Recipe ID: 1
            philosophy: "Modernity is found in the perfection of tradition."
        },
        content: {
            image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
            tags: ["Italian", "Pasta", "Mediterranean"],
            bio: "Luca mastered the 'Four Roman Pastas' before he was 20. His approach combines rustic heritage with Michelin precision.",
            badges: ["🏆 Top Chef 2026", "🍝 Pasta Legend", "⭐ 2-Star Michelin"]
        },
        metrics: {
            stats: { recipes: 142, followers: "54.2k", likes: "210k", avgRating: 4.9 },
            isFollowing: false,
            isVerified: true
        }
    },
    2: {
        id: 2,
        personal: {
            name: "Aisha Al-Farsi",
            title: "Innovation Director",
            location: { city: "Dubai", country: "UAE", label: "Dubai, UAE" }
        },
        professional: {
            category: "Modern Fusion",
            level: "Executive Chef",
            experienceYears: 14,
            michelinStars: 1,
            signatureDish: "Saffron-Honey Grilled Chicken", // Matched to Recipe ID: 4
            philosophy: "Flavor has no borders."
        },
        content: {
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
            tags: ["Middle Eastern", "Fusion", "Grilling"],
            bio: "Aisha blends ancient desert techniques with molecular gastronomy.",
            badges: ["✨ Fusion Queen", "🌶️ Spice Alchemist"]
        },
        metrics: {
            stats: { recipes: 88, followers: "38.7k", likes: "162k", avgRating: 4.8 },
            isFollowing: true,
            isVerified: true
        }
    },
    3: {
        id: 3,
        personal: {
            name: "Elena Rodriguez",
            title: "Chef de Cuisine",
            location: { city: "Oaxaca", country: "Mexico", label: "Oaxaca, Mexico" }
        },
        professional: {
            category: "Modern Mexican",
            level: "Head Chef",
            experienceYears: 12,
            signatureDish: "Street-Style Beef Tacos", // Matched to Recipe ID: 13
            philosophy: "Every ingredient tells a story of the soil."
        },
        content: {
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
            tags: ["Mexican", "Mole", "Traditional"],
            bio: "Elena preserves the ancient secrets of Oaxacan cooking while applying modern techniques.",
            badges: ["🌶️ Mole Queen", "🌽 Heirloom Hero"]
        },
        metrics: {
            stats: { recipes: 115, followers: "21.5k", likes: "94k", avgRating: 4.9 },
            isFollowing: false,
            isVerified: true
        }
    },
    4: {
        id: 4,
        personal: {
            name: "Jean-Pierre Blanc",
            title: "Patissier",
            location: { city: "Paris", country: "France", label: "Paris, France" }
        },
        professional: {
            category: "French Pastry",
            level: "Master Pâtissier",
            experienceYears: 25,
            signatureDish: "Fudgy Chocolate Brownies", // Matched to Recipe ID: 9
            philosophy: "Baking is a science that results in art."
        },
        content: {
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            tags: ["Pastry", "Dessert", "French"],
            bio: "A legend in the 1st Arrondissement, Jean-Pierre's creations are world-renowned.",
            badges: ["🥐 Butter Master", "🍰 Sugar Artist"]
        },
        metrics: {
            stats: { recipes: 210, followers: "105k", likes: "890k", avgRating: 5.0 },
            isFollowing: false,
            isVerified: true
        }
    },
    5: {
        id: 5,
        personal: {
            name: "Kenji Nakamura",
            title: "Itamae",
            location: { city: "Tokyo", country: "Japan", label: "Tokyo, Japan" }
        },
        professional: {
            category: "Japanese Fine Dining",
            level: "Master Sushi Chef",
            experienceYears: 22,
            michelinStars: 3,
            signatureDish: "Savory Ramen with Soft-Boiled Egg", // Matched to Recipe ID: 14
            philosophy: "The soul of the ingredient must be respected."
        },
        content: {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            tags: ["Japanese", "Sushi", "Ramen"],
            bio: "Trained in Ginza, Kenji's journey is a pursuit of 'Shokunin'—craftsman's perfection.",
            badges: ["🔪 Blade Master", "🏮 3-Star Michelin"]
        },
        metrics: {
            stats: { recipes: 65, followers: "82.1k", likes: "310k", avgRating: 5.0 },
            isFollowing: false,
            isVerified: true
        }
    },
    6: {
        id: 6,
        personal: {
            name: "Marcus Thorne",
            title: "Pitmaster",
            location: { city: "Austin", country: "USA", label: "Austin, TX" }
        },
        professional: {
            category: "Texas BBQ",
            level: "Pitmaster",
            experienceYears: 16,
            signatureDish: "Classic Beef Burger", // Matched to Recipe ID: 6
            philosophy: "Fire and smoke are the only seasoning you need."
        },
        content: {
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
            tags: ["BBQ", "Grilling", "Southern"],
            bio: "The king of Central Texas style low-and-slow barbecue.",
            badges: ["💨 Smoke King", "🍖 Brisket Boss"]
        },
        metrics: {
            stats: { recipes: 45, followers: "67.3k", likes: "412k", avgRating: 4.8 },
            isFollowing: false,
            isVerified: true
        }
    },
    7: {
        id: 7,
        personal: {
            name: "Sarah Jenkins",
            title: "Green Chef",
            location: { city: "Portland", country: "USA", label: "Portland, OR" }
        },
        professional: {
            category: "Plant-Based",
            level: "Executive Chef",
            experienceYears: 10,
            signatureDish: "Vegetable Stir Fry", // Matched to Recipe ID: 7
            philosophy: "Vegetables aren't the side dish; they are the main event."
        },
        content: {
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            tags: ["Vegan", "Healthy", "Organic"],
            bio: "Sarah's recipes focus on zero-waste cooking and seasonal Pacific Northwest produce.",
            badges: ["🌱 Plant Power", "♻️ Zero Waste"]
        },
        metrics: {
            stats: { recipes: 156, followers: "44.9k", likes: "198k", avgRating: 4.7 },
            isFollowing: false,
            isVerified: true
        }
    },
    8: {
        id: 8,
        personal: {
            name: "Arjun Das",
            title: "Spice Master",
            location: { city: "Mumbai", country: "India", label: "Mumbai, India" }
        },
        professional: {
            category: "Modern Indian",
            level: "Head Chef",
            experienceYears: 19,
            michelinStars: 1,
            signatureDish: "Red Lentil Dahl", // Matched to Recipe ID: 12
            philosophy: "Spices are the heartbeat of the kitchen."
        },
        content: {
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
            tags: ["Indian", "Curry", "Spices"],
            bio: "Arjun brings a fine-dining lens to the vibrant street flavors of Mumbai.",
            badges: ["🔥 Curry King", "🍛 Spice Wizard"]
        },
        metrics: {
            stats: { recipes: 112, followers: "33.2k", likes: "145k", avgRating: 4.9 },
            isFollowing: false,
            isVerified: true
        }
    },
    9: {
        id: 9,
        personal: {
            name: "Sophie Dubois",
            title: "Bistro Owner",
            location: { city: "Bordeaux", country: "France", label: "Bordeaux, France" }
        },
        professional: {
            category: "French Bistro",
            level: "Owner & Chef",
            experienceYears: 14,
            signatureDish: "Berry Sorbet", // Matched to Recipe ID: 20
            philosophy: "Simplicity is the ultimate sophistication."
        },
        content: {
            image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
            tags: ["French", "Wine Pairing", "Bistro"],
            bio: "Sophie's restaurant is a masterclass in 'terroir', focusing on seasonal fruit and local pairing.",
            badges: ["🍷 Wine Expert", "🇫🇷 Bistro Queen"]
        },
        metrics: {
            stats: { recipes: 78, followers: "28.4k", likes: "92k", avgRating: 4.8 },
            isFollowing: false,
            isVerified: true
        }
    },
    10: {
        id: 10,
        personal: {
            name: "Chen Wei",
            title: "Wok Master",
            location: { city: "Chengdu", country: "China", label: "Chengdu, China" }
        },
        professional: {
            category: "Sichuan",
            level: "Master Chef",
            experienceYears: 30,
            signatureDish: "Spicy Shrimp Scampi", // Matched to Recipe ID: 11
            philosophy: "Wok Hei is the breath of the kitchen."
        },
        content: {
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
            tags: ["Chinese", "Sichuan", "Spicy"],
            bio: "Master Chen has spent three decades perfecting high-heat wok techniques.",
            badges: ["🔥 Wok Legend", "🥢 Sichuan Master"]
        },
        metrics: {
            stats: { recipes: 205, followers: "118k", likes: "1.2M", avgRating: 5.0 },
            isFollowing: false,
            isVerified: true
        }
    },
    11: {
        id: 11,
        personal: {
            name: "Lars Svensson",
            title: "Forager-in-Chief",
            location: { city: "Stockholm", country: "Sweden", label: "Stockholm, Sweden" }
        },
        professional: {
            category: "New Nordic",
            level: "Senior Chef",
            experienceYears: 15,
            signatureDish: "Mushroom Risotto", // Matched to Recipe ID: 17
            philosophy: "The forest is my pantry."
        },
        content: {
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            tags: ["Nordic", "Foraged", "Modern"],
            bio: "Lars emphasizes fermentation and hyper-local ingredient sourcing from the Swedish archipelago.",
            badges: ["🌲 Foraging Pro", "❄️ Nordic Star"]
        },
        metrics: {
            stats: { recipes: 94, followers: "12.4k", likes: "45k", avgRating: 4.7 },
            isFollowing: false,
            isVerified: true
        }
    },
    12: {
        id: 12,
        personal: {
            name: "Amara Okoro",
            title: "Heritage Chef",
            location: { city: "Lagos", country: "Nigeria", label: "Lagos, Nigeria" }
        },
        professional: {
            category: "West African",
            level: "Executive Chef",
            experienceYears: 11,
            signatureDish: "Tropical Fruit Smoothie", // Matched to Recipe ID: 10
            philosophy: "Traditional flavors, elevated for the global stage."
        },
        content: {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            tags: ["African", "Spicy", "Smoothies"],
            bio: "Amara brings the soul of Lagos to the global stage with fresh, vibrant recipes.",
            badges: ["🌍 African Star", "🍹 Smoothie Queen"]
        },
        metrics: {
            stats: { recipes: 56, followers: "19.8k", likes: "77k", avgRating: 4.9 },
            isFollowing: false,
            isVerified: true
        }
    },
    13: {
        id: 13,
        personal: {
            name: "Yuki Tanaka",
            title: "Pastry Artist",
            location: { city: "Kyoto", country: "Japan", label: "Kyoto, Japan" }
        },
        professional: {
            category: "Japanese Pastry",
            level: "Head Pâtissier",
            experienceYears: 9,
            signatureDish: "Classic Pancakes", // Matched to Recipe ID: 3
            philosophy: "Beauty and balance in every bite."
        },
        content: {
            image: "https://images.unsplash.com/photo-1463453091185-61582044d556",
            tags: ["Dessert", "Bakery", "Breakfast"],
            bio: "Yuki combines French precision with the delicate flavors of Japanese morning treats.",
            badges: ["🥞 Pancake Artist", "🌸 Zen Baker"]
        },
        metrics: {
            stats: { recipes: 42, followers: "51k", likes: "220k", avgRating: 4.9 },
            isFollowing: false,
            isVerified: true
        }
    },
    14: {
        id: 14,
        personal: {
            name: "David Miller",
            title: "The Butcher",
            location: { city: "London", country: "UK", label: "London, UK" }
        },
        professional: {
            category: "British Gastropub",
            level: "Chef Patron",
            experienceYears: 20,
            signatureDish: "Healthy Avocado Toast", // Matched to Recipe ID: 2
            philosophy: "Start the day with the best ingredients."
        },
        content: {
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            tags: ["Breakfast", "British", "Pub Food"],
            bio: "David runs London's most sought-after gastropub, focusing on hearty yet healthy breakfast staples.",
            badges: ["🥑 Brunch King", "🇬🇧 Pub Legend"]
        },
        metrics: {
            stats: { recipes: 68, followers: "25.6k", likes: "110k", avgRating: 4.8 },
            isFollowing: false,
            isVerified: true
        }
    },
    15: {
        id: 15,
        personal: {
            name: "Maria Gorski",
            title: "Fishmonger Chef",
            location: { city: "Gdansk", country: "Poland", label: "Gdansk, Poland" }
        },
        professional: {
            category: "Baltic Seafood",
            level: "Head Chef",
            experienceYears: 13,
            signatureDish: "Caprese Skewers", // Matched to Recipe ID: 15
            philosophy: "Simplicity lets the fresh ingredients shine."
        },
        content: {
            image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36",
            tags: ["Appetizer", "Fresh", "Baltic"],
            bio: "Maria works with Baltic producers to source the freshest ingredients for light, seasonal appetizers.",
            badges: ["⚓ Freshness Expert", "🍅 Appetizer Pro"]
        },
        metrics: {
            stats: { recipes: 52, followers: "15.2k", likes: "61k", avgRating: 4.7 },
            isFollowing: false,
            isVerified: true
        }
    },
    16: {
        id: 16,
        personal: {
            name: "Isabella Silva",
            title: "Grillmaster",
            location: { city: "São Paulo", country: "Brazil", label: "São Paulo, Brazil" }
        },
        professional: {
            category: "South American Grill",
            level: "Executive Chef",
            experienceYears: 13,
            signatureDish: "Greek Souvlaki", // Matched to Recipe ID: 19 (International Grill)
            philosophy: "Fire is the most honest way to cook."
        },
        content: {
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
            tags: ["Brazilian", "Grilling", "Churrasco"],
            bio: "Isabella revolutionized the grill scene by blending Brazilian techniques with international street food flavors.",
            badges: ["🔥 Grill Master", "🥩 Meat Scientist"]
        },
        metrics: {
            stats: { recipes: 72, followers: "22.8k", likes: "89k", avgRating: 4.8 },
            isFollowing: false,
            isVerified: true
        }
    }
};