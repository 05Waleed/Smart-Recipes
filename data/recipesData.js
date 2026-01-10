export const recipes = [
    {
        id: 1,
        name: "Creamy Pasta",
        category: "Dinner",
        prepTime: "15min",
        difficulty: "Intermediate",
        description: "Rich and creamy pasta with herbs.",
        images: [
            "https://dishingouthealth.com/wp-content/uploads/2022/09/CreamyTomatoPasta_Square.jpg",
            "https://www.kimscravings.com/wp-content/uploads/2022/12/creamy-pasta-sauce-recipe-featured.jpg",
            "https://chefkatef.com/wp-content/uploads/2024/01/creamy-tomato-spinach-pasta.jpg",
            "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/creamy_tomato_pasta_89335_16x9.jpg.webp"
        ],
        ingredients: [
            { name: "Pasta (g)", base: 100 },
            { name: "Cream (ml)", base: 50 },
            { name: "Cheese (g)", base: 30 }
        ],
        instructions: [
            "Bring a large pot of salted water to a boil.",
            "Add pasta and cook according to package instructions until al dente.",
            "Reserve a small cup of pasta water, then drain the pasta.",
            "In a pan over medium heat, gently warm the cream.",
            "Add grated cheese and stir until melted and smooth.",
            "Add pasta to the sauce, loosening with pasta water if needed.",
            "Season with salt, pepper, and herbs, then serve immediately."
        ],
        tips: "Use freshly grated cheese and do not boil the cream to avoid splitting."
    },
    {
        id: 2,
        name: "Avocado Toast",
        category: "Breakfast",
        prepTime: "10min",
        difficulty: "Easy",
        description: "Simple and healthy breakfast.",
        images: [
            "https://alegumeaday.com/wp-content/uploads/2024/03/Bean-avocado-toast-3.jpg",
            "https://www.spendwithpennies.com/wp-content/uploads/2022/09/Avocado-Toast-SpendWithPennies-1.jpg",
            "https://www.eatingwell.com/thmb/PM3UlLhM0VbE6dcq9ZFwCnMyWHI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EatingWell-April-Avocado-Toast-Directions-04-5b5b86524a3d4b35ac4c57863f6095dc.jpg",
            "https://gratefulgrazer.com/wp-content/uploads/2025/01/avocado-toast-square.jpg"
        ],
        ingredients: [
            { name: "Bread slices", base: 1 },
            { name: "Avocado", base: 0.5 }
        ],
        instructions: [
            "Toast the bread until golden and crisp.",
            "Cut the avocado in half, remove the pit, and scoop into a bowl.",
            "Mash avocado with a fork until smooth or chunky as desired.",
            "Season with salt, pepper, and optional lemon juice.",
            "Spread avocado evenly over the toasted bread.",
            "Serve immediately while warm."
        ],
        tips: "Whole grain bread adds extra flavor and nutrients."
    },
    {
        id: 3,
        name: "Classic Pancakes",
        category: "Breakfast",
        prepTime: "25min",
        difficulty: "Intermediate",
        description: "Fluffy pancakes for a perfect morning.",
        images: [
            "https://vikalinka.com/wp-content/uploads/2021/10/Pancakes-13-Edit.jpg",
            "https://i.cbc.ca/ais/1.5020044,1743711415000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C3870%2C2176%29%3B",
            "https://www.loveandoliveoil.com/wp-content/uploads/2023/03/olive-oil-pancakes-2.jpg",
            "https://www.kingarthurbaking.com/sites/default/files/2025-02/Classic-Sourdough-Pancakes-2.jpg"
        ],
        ingredients: [
            { name: "Flour (g)", base: 50 },
            { name: "Milk (ml)", base: 75 }
        ],
        instructions: [
            "In a bowl, whisk flour with a pinch of salt and sugar.",
            "Gradually add milk while whisking to avoid lumps.",
            "Heat a non-stick pan over medium heat and lightly grease it.",
            "Pour batter into the pan to form pancakes.",
            "Cook until bubbles form on the surface, then flip.",
            "Cook the other side until golden and fluffy.",
            "Serve warm with syrup or fruit."
        ],
        tips: "Let the batter rest for 5 minutes for fluffier pancakes."
    },
    {
        id: 4,
        name: "Grilled Chicken",
        category: "Dinner",
        prepTime: "25min",
        difficulty: "Intermediate",
        description: "Juicy grilled chicken breast.",
        images: [
            "https://www.inspiredtaste.net/wp-content/uploads/2021/06/Grilled-Chicken-Recipe-5-1200.jpg",
            "https://www.licious.in/blog/wp-content/uploads/2020/12/Grilled-Chicken-min-600x600.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCejJG8uGK5kCRUQUlRptPivNJj8kSoWtjgg&s",
            "https://spicecravings.com/wp-content/uploads/2020/08/Tandoori-Chicken-Square-500x500.jpg"
        ],
        ingredients: [
            { name: "Chicken (g)", base: 200 },
            { name: "Olive oil (ml)", base: 10 }
        ],
        instructions: [
            "Pat chicken breasts dry with paper towels.",
            "Brush with olive oil and season generously with salt and spices.",
            "Preheat grill or grill pan to medium-high heat.",
            "Grill chicken for about 6 minutes per side.",
            "Check that internal temperature reaches 75°C (165°F).",
            "Remove from heat and rest for 5 minutes before slicing."
        ],
        tips: "Resting keeps the chicken juicy."
    },
    {
        id: 5,
        name: "Caesar Salad",
        category: "Lunch",
        prepTime: "10min",
        difficulty: "Easy",
        description: "Fresh salad with creamy dressing.",
        images: [
            "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
            "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
            "https://www.budgetbytes.com/wp-content/uploads/2024/03/Caesar-Salad-Plated.jpg",
            "https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/16:9/w_4191,h_2357,c_limit/0328-ceasar-salad-lede.jpg"
        ],
        ingredients: [
            { name: "Lettuce (g)", base: 100 },
            { name: "Parmesan (g)", base: 20 }
        ],
        instructions: [
            "Wash and dry lettuce thoroughly.",
            "Chop lettuce into bite-sized pieces.",
            "Place lettuce in a large bowl.",
            "Add dressing gradually and toss gently.",
            "Top with shaved parmesan cheese.",
            "Serve immediately for best texture."
        ],
        tips: "Dry lettuce prevents watery salad."
    },
    {
        id: 6,
        name: "Beef Burger",
        category: "Dinner",
        prepTime: "10min",
        difficulty: "Intermediate",
        description: "Juicy homemade beef burger.",
        images: [
            "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
            "https://www.unileverfoodsolutions.co.za/dam/global-ufs/mcos/SOUTH-AFRICA/calcmenu/recipes/ZA-recipes/general/beef-burger/main-header.jpg",
            "https://www.thedorsetmeatcompany.co.uk/theme-content/uploads/2018/05/kIVLTxgo.jpeg",
            "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Barbecue-beef-burger-68d57ec.jpg"
        ],
        ingredients: [
            { name: "Beef patty", base: 1 },
            { name: "Buns", base: 1 }
        ],
        instructions: [
            "Preheat grill or pan to high heat.",
            "Season beef patty with salt and pepper.",
            "Cook patty for 3–4 minutes per side.",
            "Toast burger buns lightly on the grill.",
            "Assemble burger with desired toppings.",
            "Serve immediately while hot."
        ],
        tips: "Avoid pressing the patty while cooking."
    },
    {
        id: 7,
        name: "Vegetable Stir Fry",
        category: "Vegetarian",
        prepTime: "10min",
        difficulty: "Easy",
        description: "Quick and colorful veggie stir fry.",
        images: [
            "https://cdn.loveandlemons.com/wp-content/uploads/2025/02/vegetable-stir-fry.jpg",
            "https://s.lightorangebean.com/media/20240914144639/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger_done.png",
            "https://www.thesmalltownfoodie.com/wp-content/uploads/2018/05/Vegetable-Stir-Fry2.png",
            "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/sachas_stir-fry_17077_16x9.jpg"
        ],
        ingredients: [
            { name: "Mixed Veggies (g)", base: 200 },
            { name: "Soy Sauce (ml)", base: 20 }
        ],
        instructions: [
            "Heat a wok or pan over high heat.",
            "Add a small amount of oil.",
            "Add vegetables starting with the hardest ones.",
            "Stir constantly to avoid burning.",
            "Add soy sauce and toss to coat.",
            "Cook until vegetables are tender-crisp.",
            "Serve immediately."
        ],
        tips: "High heat keeps vegetables crunchy."
    },
    {
        id: 8,
        name: "Margherita Pizza",
        category: "Vegetarian",
        prepTime: "20min",
        difficulty: "Advanced",
        description: "Classic Italian pizza with basil.",
        images: [
            "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza.jpg",
            "https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLThKTXU9TYxNQvHrk9grq7CiFkHJxxealw&s",
            "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza.jpg"
        ],
        ingredients: [
            { name: "Dough (g)", base: 200 },
            { name: "Mozzarella (g)", base: 100 }
        ],
        instructions: [
            "Preheat oven to highest temperature (250°C or higher).",
            "Stretch dough into a thin round shape.",
            "Spread tomato sauce evenly over dough.",
            "Add mozzarella pieces on top.",
            "Bake until crust is golden and cheese bubbles.",
            "Remove from oven and add fresh basil.",
            "Slice and serve hot."
        ],
        tips: "A very hot oven is key to good pizza."
    },
    {
        id: 9,
        name: "Chocolate Brownies",
        category: "Dessert",
        prepTime: "20min",
        difficulty: "Intermediate",
        description: "Rich and fudgy brownies.",
        images: [
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Gooey-Brownies-5627e49.jpg",
            "https://www.recipetineats.com/tachyon/2020/03/Brownies_0-SQ.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4Y474MuYRh7cDSke_6nKO98mDo0NRz1qQQ&s",
            "https://i0.wp.com/bryonysbakes.com/wp-content/uploads/2021/07/D2E892A5-3FDD-448E-A056-D5DA66C8090D.jpg?ssl=1"
        ],
        ingredients: [
            { name: "Chocolate (g)", base: 50 },
            { name: "Sugar (g)", base: 40 }
        ],
        instructions: [
            "Preheat oven to 180°C.",
            "Melt chocolate gently over low heat.",
            "Stir sugar into melted chocolate.",
            "Pour mixture into lined baking pan.",
            "Bake for about 20 minutes.",
            "Allow to cool slightly before cutting."
        ],
        tips: "The center should still be soft when removed."
    },
    {
        id: 10,
        name: "Fruit Smoothie",
        category: "Breakfast",
        prepTime: "5min",
        difficulty: "Easy",
        description: "Refreshing mixed fruit smoothie.",
        images: [
            "https://www.delmonte.com/sites/default/files/VibrantFruitSmoothies.jpg",
            "https://www.blessthismessplease.com/wp-content/uploads/2022/06/tropical-smoothie-recipe-5.jpg",
            "https://assets.sainsburys-groceries.co.uk/gol/tropical-fruit-smoothie/original.jpg",
            "https://joyfullymad.com/wp-content/uploads/2023/02/strawberry-banana-smoothie-16.jpg"
        ],
        ingredients: [
            { name: "Frozen Fruit (g)", base: 150 },
            { name: "Milk (ml)", base: 200 }
        ],
        instructions: [
            "Add frozen fruit to blender.",
            "Pour in milk.",
            "Blend on high until smooth.",
            "Taste and adjust sweetness if needed.",
            "Pour into glass and serve chilled."
        ],
        tips: "Frozen fruit makes the smoothie thicker."
    },
    {
        id: 11,
        name: "Shrimp Scampi",
        category: "Dinner",
        prepTime: "20min",
        difficulty: "Intermediate",
        description: "Garlicky, buttery shrimp served over pasta.",
        images: [
            "https://bakerbynature.com/wp-content/uploads/2023/02/shrimp-scampi-119.jpg",
            "https://krollskorner.com/wp-content/uploads/2020/02/Shrimpscampialfredo12-scaled.jpg",
            "https://thegirlonbloor.com/wp-content/uploads/2023/08/Olive-Garden-Shrimp-Scampi-9.jpg",
            "https://natashaskitchen.com/wp-content/uploads/2025/07/Shrimp-Scampi-5.jpg"
        ],
        ingredients: [
            { name: "Shrimp (g)", base: 150 },
            { name: "Garlic (cloves)", base: 3 },
            { name: "Butter (g)", base: 25 },
            { name: "Lemon juice (ml)", base: 15 }
        ],
        instructions: [
            "Cook pasta in salted water until al dente.",
            "Sauté minced garlic in butter until fragrant.",
            "Add shrimp and cook until pink and opaque.",
            "Stir in lemon juice and a splash of pasta water.",
            "Toss with pasta and garnish with parsley."
        ],
        tips: "Don't overcook the shrimp; they only need 2-3 minutes total."
    },
    {
        id: 12,
        name: "Lentil Dahl",
        category: "Vegetarian",
        prepTime: "35min",
        difficulty: "Easy",
        description: "Comforting Indian red lentil stew.",
        images: [
            "https://veganhuggs.com/wp-content/uploads/2020/09/red-lentil-dahl-square-crop-a.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcawkcC4fzObMrvRKo2W5kaxKobLxxfMntAg&s",
            "https://veggiedesserts.com/wp-content/uploads/2025/06/red-lentil-dahl-3bsq.jpg",
            "https://domesticgothess.com/wp-content/uploads/2018/05/red-lentil-dhal-roasted-cauliflower-butternut-squash.jpg"
        ],
        ingredients: [
            { name: "Red Lentils (g)", base: 100 },
            { name: "Coconut Milk (ml)", base: 100 },
            { name: "Turmeric (tsp)", base: 0.5 },
            { name: "Onion", base: 0.5 }
        ],
        instructions: [
            "Rinse lentils thoroughly.",
            "Sauté onions and spices in a pot.",
            "Add lentils and water/broth; simmer for 20 minutes.",
            "Stir in coconut milk for creaminess.",
            "Serve with rice or naan."
        ],
        tips: "A squeeze of lime at the end brightens the earthy flavors."
    },
    {
        id: 13,
        name: "Beef Tacos",
        category: "Dinner",
        prepTime: "15min",
        difficulty: "Easy",
        description: "Classic street-style beef tacos.",
        images: [
            "https://feelgoodfoodie.net/wp-content/uploads/2024/04/Ground-Beef-Tacos-TIMG.jpg",
            "https://oliviaadriance.com/wp-content/uploads/2023/07/Final_3_Crispy_Baked_Beef_Tacos_grain-free-dairy-free.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEk6hOsIcEIGQ930PlgO-UqnJ9ZNxkBY7Jw&s",
            "https://cdn.urbancookery.com/2021/01/bbq_tacos_1.jpg__900x739_q85_crop.jpg"
        ],
        ingredients: [
            { name: "Ground Beef (g)", base: 150 },
            { name: "Taco Shells", base: 3 },
            { name: "Cumin (tsp)", base: 1 }
        ],
        instructions: [
            "Brown beef in a pan and drain excess fat.",
            "Add cumin, chili powder, and a splash of water.",
            "Warm taco shells in the oven.",
            "Fill shells with beef and your choice of toppings.",
            "Serve with lime wedges."
        ],
        tips: "Toast the taco shells for 2 minutes to keep them crunchy."
    },
    {
        id: 14,
        name: "Japanese Ramen",
        category: "Lunch",
        prepTime: "40min",
        difficulty: "Advanced",
        description: "Savory noodle soup with soft-boiled egg.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQxLm2PI5YnBZFuK-V8K6hDKFkrMTI0uDoA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBffXcuaiXrJPQXmQK2fD9V8DSLtL7qdONjw&s",
            "https://heissehimbeeren.com/wp-content/uploads/2024/12/1500-x-1500-5-1024x1024.webp",
            "https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured-500x375.jpg"
        ],
        ingredients: [
            { name: "Ramen Noodles (g)", base: 100 },
            { name: "Broth (ml)", base: 400 },
            { name: "Egg", base: 1 },
            { name: "Soy Sauce (ml)", base: 15 }
        ],
        instructions: [
            "Boil egg for exactly 6.5 minutes, then cool in ice water.",
            "Simmer broth with ginger, garlic, and soy sauce.",
            "Cook noodles separately.",
            "Combine noodles and broth in a deep bowl.",
            "Top with halved egg, scallions, and nori."
        ],
        tips: "Use high-quality broth as it is the soul of the dish."
    },
    {
        id: 15,
        name: "Caprese Skewers",
        category: "Appetizer",
        prepTime: "10min",
        difficulty: "Easy",
        description: "Fresh mozzarella, tomato, and basil on sticks.",
        images: [
            "https://www.dinneratthezoo.com/wp-content/uploads/2017/11/caprese-skewers-4.jpg",
            "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/06/Caprese-Skewers-main-1.jpg",
            "https://therecipecritic.com/wp-content/uploads/2022/06/capreseskewers-1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiwHlUqrT0cmc-x23p4adejZHFBb9h9MHzw&s"
        ],
        ingredients: [
            { name: "Cherry Tomatoes", base: 6 },
            { name: "Mozzarella Balls", base: 6 },
            { name: "Basil Leaves", base: 6 }
        ],
        instructions: [
            "Thread a tomato, a basil leaf, and a mozzarella ball onto a toothpick.",
            "Repeat for all ingredients.",
            "Drizzle with balsamic glaze.",
            "Sprinkle with sea salt and pepper."
        ],
        tips: "Use high-quality extra virgin olive oil for drizzling."
    },
    {
        id: 16,
        name: "Falafel Wrap",
        category: "Vegetarian",
        prepTime: "30min",
        difficulty: "Intermediate",
        description: "Middle Eastern chickpea fritters in pita.",
        images: [
            "https://static.toiimg.com/photo/62708678.cms",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEUROivPufPclECTg1u056waGd9oCIPBGlA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfh1P6ez_Bm8UGBQF8IwGv282PLCLqy5iSg&s",
            "https://avocadoskillet.com/wp-content/uploads/2022/05/IMG_3807_2_20.jpg"
        ],
        ingredients: [
            { name: "Chickpeas (g)", base: 150 },
            { name: "Pita Bread", base: 1 },
            { name: "Tahini (ml)", base: 20 }
        ],
        instructions: [
            "Pulse chickpeas with herbs and spices in a processor.",
            "Form into small balls and fry until golden brown.",
            "Warm the pita bread.",
            "Spread tahini or hummus on the pita.",
            "Add falafel and fresh cucumber salad."
        ],
        tips: "Don't use canned chickpeas for the best texture; soak dry ones overnight."
    },
    {
        id: 17,
        name: "Mushroom Risotto",
        category: "Dinner",
        prepTime: "45min",
        difficulty: "Advanced",
        description: "Creamy Italian rice dish with earthy mushrooms.",
        images: [
            "https://www.eatingwell.com/thmb/cjGMOCaxz6Vw1FQPA83AMF1vn-Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mushroom-risotto-beauty-8025316-4000x4000-203a642728ca49c895b487d6df0dc6e3.jpg",
            "https://vintagekitchennotes.com/wp-content/uploads/2013/07/Mushroom-risotto-close-up.jpg",
            "https://cdn.shopify.com/s/files/1/0647/8410/5716/files/20250515192640-mushroom-risotto-recipe-lifestyle.jpg?v=1747337202",
            "https://louisianacookin.com/wp-content/uploads/2023/09/web-duckrisotto_1032.jpg"
        ],
        ingredients: [
            { name: "Arborio Rice (g)", base: 80 },
            { name: "Mushrooms (g)", base: 100 },
            { name: "Vegetable Broth (ml)", base: 300 }
        ],
        instructions: [
            "Sauté mushrooms until browned and set aside.",
            "Toast rice in a pan with butter and onions.",
            "Add warm broth one ladle at a time, stirring constantly.",
            "Wait for broth to be absorbed before adding more.",
            "Stir in mushrooms and parmesan once rice is creamy."
        ],
        tips: "Patience is key; stirring releases the starch for creaminess."
    },
    {
        id: 18,
        name: "French Toast",
        category: "Breakfast",
        prepTime: "15min",
        difficulty: "Easy",
        description: "Classic sweet eggy bread.",
        images: [
            "https://www.simplyrecipes.com/thmb/YD03bei5afLwaiNnB8-FuHhj9yM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Best-French-Toast-LEAD-5-9f0a042bdcb14a5fb526e0f772663877.jpg",
            "https://cdn.loveandlemons.com/wp-content/uploads/2024/08/french-toast-recipe.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Gq7VwvAZSXdWD5Ntd1lF9TZumagsydbkvg&s",
            "https://www.chilitochoc.com/wp-content/uploads/2025/04/buttermilk-french-toast-recipe-500x500.jpg"
        ],
        ingredients: [
            { name: "Brioche slices", base: 2 },
            { name: "Eggs", base: 1 },
            { name: "Cinnamon (tsp)", base: 0.5 }
        ],
        instructions: [
            "Whisk eggs, milk, and cinnamon in a shallow bowl.",
            "Dip bread slices until soaked but not falling apart.",
            "Fry in a buttered pan over medium heat.",
            "Flip when golden brown.",
            "Serve with maple syrup and berries."
        ],
        tips: "Use day-old bread so it absorbs the custard without getting soggy."
    },
    {
        id: 19,
        name: "Greek Souvlaki",
        category: "Lunch",
        prepTime: "30min",
        difficulty: "Intermediate",
        description: "Skewered meat with tzatziki sauce.",
        images: [
            "https://www.seriouseats.com/thmb/qAysZs1vJYvMCSSpsHRqRlsvExQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20090319-pork-souvlaki-9a80ec7534d3427c888d2d0f939540a6.jpg",
            "https://flavorthemoments.com/wp-content/uploads/2024/08/greek-chicken-souvlaki-1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4qLy840QU8SB5nbUyVMvz1U6qIfg7SmrEQ&s",
            "https://www.jocooks.com/wp-content/uploads/2013/07/lamb-souvlaki-1-9.jpg"
        ],
        ingredients: [
            { name: "Pork or Chicken (g)", base: 200 },
            { name: "Yogurt (ml)", base: 50 },
            { name: "Cucumber (g)", base: 30 }
        ],
        instructions: [
            "Marinate meat in lemon, oregano, and oil for 1 hour.",
            "Thread meat onto skewers and grill until charred.",
            "Grate cucumber and mix with yogurt and garlic for tzatziki.",
            "Serve meat inside a pita with the sauce."
        ],
        tips: "Soak wooden skewers in water for 20 minutes to prevent burning."
    },
    {
        id: 20,
        name: "Berry Sorbet",
        category: "Dessert",
        prepTime: "10min",
        difficulty: "Easy",
        description: "Dairy-free frozen fruit treat.",
        images: [
            "https://www.simplyorganic.com/media/wysiwyg/tmp/simply-oragnic-No-Churn-Mixed-Berry-Sorbet-1080x1080-thumbnail.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQiCeEo_7YwMzSsWUWf1W7r_JVyIyjiQ6ww&s",
            "https://www.lecremedelacrumb.com/wp-content/uploads/2014/06/raspberry-sorbet-1-500x500.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UKbdOPcbcr7f98k8EKnMLovA37mfA4hPUg&s"
        ],
        ingredients: [
            { name: "Frozen Berries (g)", base: 200 },
            { name: "Honey or Agave (ml)", base: 20 }
        ],
        instructions: [
            "Place frozen berries in a high-powered blender.",
            "Add sweetener and a tiny splash of water.",
            "Blend until smooth, using a tamper if necessary.",
            "Serve immediately or freeze for a firmer texture."
        ],
        tips: "Add a leaf of mint while blending for extra freshness."
    }
];