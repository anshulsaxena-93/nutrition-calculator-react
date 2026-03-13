// Nutrition Database (values per 100g)
// { name, cat, cal, pro, carb, fat, fib, perPiece? }
export const NUTRITION_DB = [
  // ── Proteins ─────────────────────────────────────────────
  { name: "Chicken Breast (cooked)",    cat: "Protein",   cal: 165, pro: 31,   carb: 0,    fat: 3.6,  fib: 0 },
  { name: "Chicken Thigh (cooked)",     cat: "Protein",   cal: 209, pro: 26,   carb: 0,    fat: 11,   fib: 0 },
  { name: "Mutton (cooked)",            cat: "Protein",   cal: 294, pro: 25,   carb: 0,    fat: 21,   fib: 0 },
  { name: "Lamb (cooked)",              cat: "Protein",   cal: 258, pro: 25,   carb: 0,    fat: 17,   fib: 0 },
  { name: "Fish (Rohu, cooked)",        cat: "Protein",   cal: 97,  pro: 17,   carb: 0,    fat: 2.7,  fib: 0 },
  { name: "Fish (Pomfret, cooked)",     cat: "Protein",   cal: 112, pro: 19,   carb: 0,    fat: 3.5,  fib: 0 },
  { name: "Prawns (cooked)",            cat: "Protein",   cal: 99,  pro: 21,   carb: 0.9,  fat: 1.1,  fib: 0 },
  { name: "Egg (whole)",                cat: "Protein",   cal: 155, pro: 13,   carb: 1.1,  fat: 11,   fib: 0,   perPiece: 60 },
  { name: "Egg White",                  cat: "Protein",   cal: 52,  pro: 11,   carb: 0.7,  fat: 0.2,  fib: 0 },
  { name: "Paneer (full fat)",          cat: "Protein",   cal: 265, pro: 18,   carb: 3.4,  fat: 20,   fib: 0 },
  { name: "Tofu (firm)",                cat: "Protein",   cal: 76,  pro: 8,    carb: 1.9,  fat: 4.8,  fib: 0.3 },
  { name: "Toor Dal (cooked)",          cat: "Protein",   cal: 118, pro: 7,    carb: 21,   fat: 0.4,  fib: 5.7 },
  { name: "Moong Dal (cooked)",         cat: "Protein",   cal: 105, pro: 7,    carb: 19,   fat: 0.4,  fib: 7.6 },
  { name: "Masoor Dal (cooked)",        cat: "Protein",   cal: 116, pro: 9,    carb: 20,   fat: 0.4,  fib: 7.9 },
  { name: "Chana Dal (cooked)",         cat: "Protein",   cal: 164, pro: 9,    carb: 27,   fat: 2.6,  fib: 7.6 },
  { name: "Urad Dal (cooked)",          cat: "Protein",   cal: 105, pro: 7.5,  carb: 18,   fat: 0.5,  fib: 6.4 },
  { name: "Rajma / Kidney Beans",       cat: "Protein",   cal: 127, pro: 8.7,  carb: 22.8, fat: 0.5,  fib: 6.4 },
  { name: "Chickpeas / Chana (cooked)", cat: "Protein",   cal: 164, pro: 8.9,  carb: 27.4, fat: 2.6,  fib: 7.6 },
  { name: "Black-Eyed Peas (cooked)",   cat: "Protein",   cal: 116, pro: 7.7,  carb: 21,   fat: 0.5,  fib: 6.5 },
  { name: "Soya Chunks (dry)",          cat: "Protein",   cal: 345, pro: 52,   carb: 33,   fat: 0.5,  fib: 13 },

  // ── Grains & Breads ───────────────────────────────────────
  { name: "Basmati Rice (cooked)",      cat: "Grains",    cal: 130, pro: 2.7,  carb: 28,   fat: 0.3,  fib: 0.4 },
  { name: "Brown Rice (cooked)",        cat: "Grains",    cal: 123, pro: 2.7,  carb: 26,   fat: 1,    fib: 1.8 },
  { name: "Wheat Flour (Atta)",         cat: "Grains",    cal: 341, pro: 12,   carb: 70,   fat: 1.7,  fib: 11.2 },
  { name: "Roti / Chapati",             cat: "Grains",    cal: 297, pro: 9.7,  carb: 61,   fat: 3.7,  fib: 3.9,  perPiece: 35 },
  { name: "Paratha (plain)",            cat: "Grains",    cal: 326, pro: 8.2,  carb: 55,   fat: 9.3,  fib: 3.2,  perPiece: 80 },
  { name: "Naan",                       cat: "Grains",    cal: 310, pro: 9.5,  carb: 54,   fat: 6.8,  fib: 2.1,  perPiece: 90 },
  { name: "Puri",                       cat: "Grains",    cal: 399, pro: 8.5,  carb: 56,   fat: 16,   fib: 2.9,  perPiece: 25 },
  { name: "Idli",                       cat: "Grains",    cal: 58,  pro: 2.4,  carb: 12,   fat: 0.2,  fib: 0.7,  perPiece: 50 },
  { name: "Dosa (plain)",               cat: "Grains",    cal: 168, pro: 3.9,  carb: 29,   fat: 3.7,  fib: 1.2,  perPiece: 80 },
  { name: "Poha (cooked)",              cat: "Grains",    cal: 130, pro: 2.2,  carb: 28,   fat: 0.6,  fib: 0.8 },
  { name: "Upma (cooked)",              cat: "Grains",    cal: 160, pro: 3.5,  carb: 27,   fat: 4.5,  fib: 1.5 },
  { name: "Semolina / Rava (dry)",      cat: "Grains",    cal: 360, pro: 12.7, carb: 73,   fat: 1.1,  fib: 3.9 },
  { name: "Oats (dry)",                 cat: "Grains",    cal: 389, pro: 17,   carb: 66,   fat: 7,    fib: 10.6 },
  { name: "Popcorn (plain)",            cat: "Grains",    cal: 387, pro: 13,   carb: 78,   fat: 4.5,  fib: 14.5 },
  { name: "Potato",                     cat: "Grains",    cal: 77,  pro: 2,    carb: 17,   fat: 0.1,  fib: 2.2 },
  { name: "Sweet Potato",               cat: "Grains",    cal: 86,  pro: 1.6,  carb: 20,   fat: 0.1,  fib: 3 },

  // ── Vegetables ──────────────────────────────────────────
  { name: "Tomato",                     cat: "Vegetable", cal: 18,  pro: 0.9,  carb: 3.9,  fat: 0.2,  fib: 1.2 },
  { name: "Onion",                      cat: "Vegetable", cal: 40,  pro: 1.1,  carb: 9.3,  fat: 0.1,  fib: 1.7 },
  { name: "Garlic",                     cat: "Vegetable", cal: 149, pro: 6.4,  carb: 33,   fat: 0.5,  fib: 2.1 },
  { name: "Ginger",                     cat: "Vegetable", cal: 80,  pro: 1.8,  carb: 18,   fat: 0.8,  fib: 2 },
  { name: "Green Chilli",               cat: "Vegetable", cal: 40,  pro: 2,    carb: 9.5,  fat: 0.2,  fib: 1.5 },
  { name: "Carrot",                     cat: "Vegetable", cal: 41,  pro: 0.9,  carb: 10,   fat: 0.2,  fib: 2.8 },
  { name: "Spinach / Palak",            cat: "Vegetable", cal: 23,  pro: 2.9,  carb: 3.6,  fat: 0.4,  fib: 2.2 },
  { name: "Fenugreek / Methi",          cat: "Vegetable", cal: 49,  pro: 4.4,  carb: 6,    fat: 0.9,  fib: 2.7 },
  { name: "Cauliflower / Gobhi",        cat: "Vegetable", cal: 25,  pro: 2,    carb: 5,    fat: 0.3,  fib: 2 },
  { name: "Cabbage / Patta Gobhi",      cat: "Vegetable", cal: 25,  pro: 1.3,  carb: 5.8,  fat: 0.1,  fib: 2.5 },
  { name: "Brinjal / Baingan",          cat: "Vegetable", cal: 25,  pro: 1,    carb: 6,    fat: 0.2,  fib: 3 },
  { name: "Bitter Gourd / Karela",      cat: "Vegetable", cal: 17,  pro: 1,    carb: 3.7,  fat: 0.2,  fib: 2.8 },
  { name: "Bottle Gourd / Lauki",       cat: "Vegetable", cal: 15,  pro: 0.6,  carb: 3.4,  fat: 0.1,  fib: 0.5 },
  { name: "Ridge Gourd / Turai",        cat: "Vegetable", cal: 20,  pro: 1.2,  carb: 4.4,  fat: 0.1,  fib: 0.5 },
  { name: "Drumstick / Moringa",        cat: "Vegetable", cal: 37,  pro: 2.1,  carb: 8.5,  fat: 0.2,  fib: 3.2 },
  { name: "Lady Finger / Okra / Bhindi",cat: "Vegetable", cal: 33,  pro: 1.9,  carb: 7.5,  fat: 0.1,  fib: 3.2 },
  { name: "Peas / Matar",               cat: "Vegetable", cal: 81,  pro: 5.4,  carb: 14,   fat: 0.4,  fib: 5.1 },
  { name: "Corn / Makka",               cat: "Vegetable", cal: 96,  pro: 3.4,  carb: 21,   fat: 1.5,  fib: 2.4 },
  { name: "Capsicum / Bell Pepper",     cat: "Vegetable", cal: 20,  pro: 0.9,  carb: 4.6,  fat: 0.2,  fib: 1.7 },
  { name: "Cucumber / Kheera",          cat: "Vegetable", cal: 16,  pro: 0.7,  carb: 3.6,  fat: 0.1,  fib: 0.5 },
  { name: "Radish / Mooli",             cat: "Vegetable", cal: 16,  pro: 0.7,  carb: 3.4,  fat: 0.1,  fib: 1.6 },
  { name: "Turnip / Shalgam",           cat: "Vegetable", cal: 28,  pro: 0.9,  carb: 6.4,  fat: 0.1,  fib: 1.8 },
  { name: "Colocasia / Arbi",           cat: "Vegetable", cal: 94,  pro: 3.4,  carb: 22,   fat: 0.1,  fib: 4.1 },
  { name: "Raw Banana / Kachha Kela",   cat: "Vegetable", cal: 89,  pro: 1.3,  carb: 23,   fat: 0.3,  fib: 2.6 },
  { name: "Mushroom",                   cat: "Vegetable", cal: 22,  pro: 3.1,  carb: 3.3,  fat: 0.3,  fib: 1 },

  // ── Fruits ───────────────────────────────────────────────
  { name: "Mango / Aam",                cat: "Fruit",     cal: 60,  pro: 0.8,  carb: 15,   fat: 0.4,  fib: 1.6 },
  { name: "Banana / Kela",              cat: "Fruit",     cal: 89,  pro: 1.1,  carb: 23,   fat: 0.3,  fib: 2.6 },
  { name: "Apple / Seb",                cat: "Fruit",     cal: 52,  pro: 0.3,  carb: 14,   fat: 0.2,  fib: 2.4 },
  { name: "Guava / Amrood",             cat: "Fruit",     cal: 68,  pro: 2.6,  carb: 14,   fat: 1,    fib: 5.4 },
  { name: "Papaya / Papita",            cat: "Fruit",     cal: 43,  pro: 0.5,  carb: 11,   fat: 0.3,  fib: 1.7 },
  { name: "Pomegranate / Anar",         cat: "Fruit",     cal: 83,  pro: 1.7,  carb: 19,   fat: 1.2,  fib: 4 },
  { name: "Watermelon / Tarbuj",        cat: "Fruit",     cal: 30,  pro: 0.6,  carb: 7.6,  fat: 0.2,  fib: 0.4 },
  { name: "Pineapple / Ananas",         cat: "Fruit",     cal: 50,  pro: 0.5,  carb: 13,   fat: 0.1,  fib: 1.4 },
  { name: "Grapes / Angoor",            cat: "Fruit",     cal: 69,  pro: 0.6,  carb: 18,   fat: 0.2,  fib: 0.9 },
  { name: "Orange / Santra",            cat: "Fruit",     cal: 47,  pro: 0.9,  carb: 12,   fat: 0.1,  fib: 2.4 },
  { name: "Lemon / Nimbu",              cat: "Fruit",     cal: 29,  pro: 1.1,  carb: 9,    fat: 0.3,  fib: 2.8 },
  { name: "Dates / Khajoor (dried)",    cat: "Fruit",     cal: 277, pro: 1.8,  carb: 75,   fat: 0.2,  fib: 6.7 },
  { name: "Coconut (fresh) / Nariyal",  cat: "Fruit",     cal: 354, pro: 3.3,  carb: 15,   fat: 33,   fib: 9 },
  { name: "Jackfruit / Kathal",         cat: "Fruit",     cal: 95,  pro: 1.7,  carb: 23.2, fat: 0.6,  fib: 1.5 },
  { name: "Tamarind / Imli",            cat: "Fruit",     cal: 239, pro: 2.8,  carb: 62.5, fat: 0.6,  fib: 5.1 },
  { name: "Amla / Indian Gooseberry",   cat: "Fruit",     cal: 44,  pro: 0.9,  carb: 10.2, fat: 0.6,  fib: 3.4 },

  // ── Dairy & Dairy Products ────────────────────────────────
  { name: "Whole Milk",                 cat: "Dairy",     cal: 61,  pro: 3.2,  carb: 4.8,  fat: 3.3,  fib: 0 },
  { name: "Toned Milk",                 cat: "Dairy",     cal: 44,  pro: 3.5,  carb: 4.9,  fat: 1.5,  fib: 0 },
  { name: "Curd / Dahi (full fat)",     cat: "Dairy",     cal: 98,  pro: 3.1,  carb: 3.4,  fat: 8,    fib: 0 },
  { name: "Curd / Dahi (low fat)",      cat: "Dairy",     cal: 61,  pro: 3.4,  carb: 3.6,  fat: 3.4,  fib: 0 },
  { name: "Lassi (salted)",             cat: "Dairy",     cal: 62,  pro: 3.5,  carb: 5,    fat: 3,    fib: 0 },
  { name: "Paneer (full fat)",          cat: "Dairy",     cal: 265, pro: 18,   carb: 3.4,  fat: 20,   fib: 0 },
  { name: "Ghee",                       cat: "Dairy",     cal: 900, pro: 0.4,  carb: 0,    fat: 99.5, fib: 0 },
  { name: "Butter",                     cat: "Dairy",     cal: 717, pro: 0.9,  carb: 0.1,  fat: 81,   fib: 0 },
  { name: "Khoa / Mawa",                cat: "Dairy",     cal: 421, pro: 20,   carb: 20,   fat: 31,   fib: 0 },
  { name: "Buttermilk / Chaas",         cat: "Dairy",     cal: 40,  pro: 3.3,  carb: 4.8,  fat: 0.9,  fib: 0 },

  // ── Oils & Fats ──────────────────────────────────────────
  { name: "Mustard Oil",                cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Groundnut Oil",              cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Sunflower Oil",              cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Coconut Oil",                cat: "Fats",      cal: 892, pro: 0,    carb: 0,    fat: 99,   fib: 0 },
  { name: "Sesame Oil / Til Oil",       cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Vanaspati / Dalda",          cat: "Fats",      cal: 900, pro: 0,    carb: 0,    fat: 100,  fib: 0 },

  // ── Nuts & Seeds ─────────────────────────────────────────
  { name: "Almonds / Badam",            cat: "Nuts",      cal: 579, pro: 21,   carb: 22,   fat: 50,   fib: 12.5 },
  { name: "Cashews / Kaju",             cat: "Nuts",      cal: 553, pro: 18,   carb: 30,   fat: 44,   fib: 3.3 },
  { name: "Peanuts / Moongphali",       cat: "Nuts",      cal: 567, pro: 26,   carb: 16,   fat: 49,   fib: 8.5 },
  { name: "Walnuts / Akhrot",           cat: "Nuts",      cal: 654, pro: 15,   carb: 14,   fat: 65,   fib: 6.7 },
  { name: "Pistachios / Pista",         cat: "Nuts",      cal: 562, pro: 20,   carb: 28,   fat: 45,   fib: 10.6 },
  { name: "Sesame Seeds / Til",         cat: "Nuts",      cal: 573, pro: 18,   carb: 23,   fat: 50,   fib: 11.8 },
  { name: "Mustard Seeds / Rai",        cat: "Nuts",      cal: 508, pro: 26,   carb: 28,   fat: 36,   fib: 12.2 },
  { name: "Cumin Seeds / Jeera",        cat: "Nuts",      cal: 375, pro: 18,   carb: 44,   fat: 22,   fib: 10.5 },
  { name: "Flax Seeds / Alsi",          cat: "Nuts",      cal: 534, pro: 18,   carb: 29,   fat: 42,   fib: 27.3 },
  { name: "Poppy Seeds / Khus Khus",    cat: "Nuts",      cal: 525, pro: 18,   carb: 28,   fat: 42,   fib: 19.5 },

  // ── Spices ───────────────────────────────────────────────
  { name: "Turmeric / Haldi",           cat: "Spice",     cal: 354, pro: 8,    carb: 65,   fat: 10,   fib: 21.1 },
  { name: "Red Chilli Powder",          cat: "Spice",     cal: 314, pro: 12,   carb: 56,   fat: 13,   fib: 34.5 },
  { name: "Coriander Powder / Dhania",  cat: "Spice",     cal: 298, pro: 12.4, carb: 55,   fat: 17,   fib: 41.9 },
  { name: "Cumin Powder / Jeera",       cat: "Spice",     cal: 375, pro: 18,   carb: 44,   fat: 22,   fib: 10.5 },
  { name: "Garam Masala",               cat: "Spice",     cal: 379, pro: 13,   carb: 50,   fat: 15,   fib: 16 },
  { name: "Cinnamon / Dalchini",        cat: "Spice",     cal: 247, pro: 4,    carb: 81,   fat: 1.2,  fib: 53.1 },
  { name: "Cardamom / Elaichi",         cat: "Spice",     cal: 311, pro: 10.8, carb: 68,   fat: 6.7,  fib: 28 },

  // ── Condiments & Sauces ──────────────────────────────────
  { name: "Tomato Ketchup",             cat: "Sauce",     cal: 101, pro: 1.3,  carb: 26,   fat: 0.1,  fib: 0.3 },
  { name: "Green Chutney",              cat: "Sauce",     cal: 55,  pro: 2,    carb: 8,    fat: 2,    fib: 2.5 },
  { name: "Tamarind Chutney",           cat: "Sauce",     cal: 130, pro: 1,    carb: 33,   fat: 0.2,  fib: 1.5 },
  { name: "Coconut Chutney",            cat: "Sauce",     cal: 195, pro: 2.5,  carb: 10,   fat: 17,   fib: 4 },
  { name: "Sambar",                     cat: "Sauce",     cal: 54,  pro: 3,    carb: 8,    fat: 1.5,  fib: 2.5 },

  // ── Sweeteners ───────────────────────────────────────────
  { name: "Jaggery / Gud",              cat: "Sweetener", cal: 383, pro: 0.4,  carb: 98.3, fat: 0.1,  fib: 0 },
  { name: "White Sugar / Chini",        cat: "Sweetener", cal: 387, pro: 0,    carb: 100,  fat: 0,    fib: 0 },
  { name: "Honey / Shahad",             cat: "Sweetener", cal: 304, pro: 0.3,  carb: 82,   fat: 0,    fib: 0.2 },
  { name: "Mishri / Rock Sugar",        cat: "Sweetener", cal: 385, pro: 0,    carb: 99.5, fat: 0,    fib: 0 },

  // ── Basic Cooking Staples ─────────────────────────────────
  { name: "Salt / Namak",               cat: "Basic",     cal: 0,   pro: 0,    carb: 0,    fat: 0,    fib: 0 },
  { name: "Water",                      cat: "Basic",     cal: 0,   pro: 0,    carb: 0,    fat: 0,    fib: 0 },
  { name: "Ghee",                       cat: "Basic",     cal: 900, pro: 0.4,  carb: 0,    fat: 99.5, fib: 0 },
  { name: "Mustard Oil",                cat: "Basic",     cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Sunflower Oil",              cat: "Basic",     cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Groundnut Oil",              cat: "Basic",     cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Coconut Oil",                cat: "Basic",     cal: 892, pro: 0,    carb: 0,    fat: 99,   fib: 0 },
  { name: "Vinegar / Sirka",            cat: "Basic",     cal: 18,  pro: 0,    carb: 0.9,  fat: 0,    fib: 0 },
  { name: "Baking Soda / Meetha Soda",  cat: "Basic",     cal: 0,   pro: 0,    carb: 0,    fat: 0,    fib: 0 },
  { name: "Baking Powder",              cat: "Basic",     cal: 53,  pro: 0,    carb: 28,   fat: 0,    fib: 0 },
  { name: "Corn Flour / Cornstarch",    cat: "Basic",     cal: 381, pro: 0.3,  carb: 91,   fat: 0.1,  fib: 0.9 },
  { name: "Rice Flour",                 cat: "Basic",     cal: 366, pro: 6,    carb: 80,   fat: 1.4,  fib: 2.4 },
  { name: "Besan / Chickpea Flour",     cat: "Basic",     cal: 387, pro: 22,   carb: 58,   fat: 6,    fib: 10.8 },
  { name: "Maida / All-Purpose Flour",  cat: "Basic",     cal: 364, pro: 10,   carb: 76,   fat: 1,    fib: 2.7 },
  { name: "Dry Yeast",                  cat: "Basic",     cal: 325, pro: 40,   carb: 41,   fat: 7,    fib: 27 },
  { name: "Tamarind Paste / Imli",      cat: "Basic",     cal: 239, pro: 2.8,  carb: 62.5, fat: 0.6,  fib: 5.1 },
  { name: "Coconut Milk",               cat: "Basic",     cal: 197, pro: 2.3,  carb: 5.5,  fat: 21,   fib: 2.2 },
  { name: "Tomato Puree",               cat: "Basic",     cal: 38,  pro: 1.7,  carb: 9,    fat: 0.4,  fib: 1.7 },
  { name: "Curd / Dahi (for marinating)",cat: "Basic",    cal: 61,  pro: 3.4,  carb: 3.6,  fat: 3.4,  fib: 0 },
];

export const UNIT_CONVERSIONS = {
  g:     1,
  ml:    1,
  oz:    28.35,
  cup:   240,
  tbsp:  15,
  tsp:   5,
  piece: null,
};


// Open Food Facts (India) — no API key required
export async function searchOpenFoodFacts(query) {
  if (query.length < 2) return [];
  const url = `https://world.openfoodfacts.org/api/v2/search?search_terms=${encodeURIComponent(query)}&fields=product_name,nutriments&countries_tags=en:india&page_size=7`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Open Food Facts error:", res.status, res.statusText);
      return [];
    }
    const data = await res.json();
    console.log("Open Food Facts results:", data.products?.length ?? 0);
    return (data.products || [])
      .filter(p => p.product_name && p.nutriments)
      .map(p => ({
        name: p.product_name,
        cat:  "India",
        cal:  p.nutriments["energy-kcal_100g"]    || 0,
        pro:  p.nutriments["proteins_100g"]        || 0,
        carb: p.nutriments["carbohydrates_100g"]   || 0,
        fat:  p.nutriments["fat_100g"]             || 0,
        fib:  p.nutriments["fiber_100g"]           || 0,
        source: "off",
      }));
  } catch (err) {
    console.error("Open Food Facts fetch failed:", err);
    return [];
  }
}
