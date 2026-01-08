const recipes = [
    {
        id: 1,
        name: "Creamy Pasta",
        category: "Dinner",
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
        description: "Refreshing mixed fruit smoothie.",
        images: [
            "https://www.delmonte.com/sites/default/files/VibrantFruitSmoothies.jpg",
            "https://www.blessthismessplease.com/wp-content/uploads/2022/06/tropical-smoothie-recipe-5.jpg",
            "https://assets.sainsburys-groceries.co.uk/gol/tropical-fruit-smoothie/original.jpg",
            "https://www.thedailymeal.com/img/gallery/layered-tropical-fruit-smoothie/shutterstock_370678421.jpg"
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
    }
];