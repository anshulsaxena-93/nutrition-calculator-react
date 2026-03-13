// Nutrition Database (values per 100g)
// { name, cat, cal, pro, carb, fat, fib, satFat, transFat, chol, sodium, sugar, addedSugar, perPiece? }
export const NUTRITION_DB = [
  // ── Proteins ─────────────────────────────────────────────
  { name: "Chicken Breast (cooked)",    cat: "Protein",   cal: 165, pro: 31,   carb: 0,    fat: 3.6,  fib: 0,    satFat: 1.0,  transFat: 0,  chol: 85,  sodium: 74,   sugar: 0,    addedSugar: 0 },
  { name: "Chicken Thigh (cooked)",     cat: "Protein",   cal: 209, pro: 26,   carb: 0,    fat: 11,   fib: 0,    satFat: 3.0,  transFat: 0,  chol: 95,  sodium: 84,   sugar: 0,    addedSugar: 0 },
  { name: "Mutton (cooked)",            cat: "Protein",   cal: 294, pro: 25,   carb: 0,    fat: 21,   fib: 0,    satFat: 9.0,  transFat: 0,  chol: 97,  sodium: 72,   sugar: 0,    addedSugar: 0 },
  { name: "Lamb (cooked)",              cat: "Protein",   cal: 258, pro: 25,   carb: 0,    fat: 17,   fib: 0,    satFat: 7.3,  transFat: 0,  chol: 97,  sodium: 72,   sugar: 0,    addedSugar: 0 },
  { name: "Fish (Rohu, cooked)",        cat: "Protein",   cal: 97,  pro: 17,   carb: 0,    fat: 2.7,  fib: 0,    satFat: 0.6,  transFat: 0,  chol: 62,  sodium: 55,   sugar: 0,    addedSugar: 0 },
  { name: "Fish (Pomfret, cooked)",     cat: "Protein",   cal: 112, pro: 19,   carb: 0,    fat: 3.5,  fib: 0,    satFat: 0.9,  transFat: 0,  chol: 70,  sodium: 60,   sugar: 0,    addedSugar: 0 },
  { name: "Prawns (cooked)",            cat: "Protein",   cal: 99,  pro: 21,   carb: 0.9,  fat: 1.1,  fib: 0,    satFat: 0.3,  transFat: 0,  chol: 152, sodium: 111,  sugar: 0,    addedSugar: 0 },
  { name: "Egg (whole)",                cat: "Protein",   cal: 155, pro: 13,   carb: 1.1,  fat: 11,   fib: 0,    satFat: 3.3,  transFat: 0,  chol: 373, sodium: 124,  sugar: 1.1,  addedSugar: 0,  perPiece: 60 },
  { name: "Egg White",                  cat: "Protein",   cal: 52,  pro: 11,   carb: 0.7,  fat: 0.2,  fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 166,  sugar: 0.7,  addedSugar: 0 },
  { name: "Paneer (full fat)",          cat: "Protein",   cal: 265, pro: 18,   carb: 3.4,  fat: 20,   fib: 0,    satFat: 13.0, transFat: 0,  chol: 52,  sodium: 30,   sugar: 3.4,  addedSugar: 0 },
  { name: "Tofu (firm)",                cat: "Protein",   cal: 76,  pro: 8,    carb: 1.9,  fat: 4.8,  fib: 0.3,  satFat: 0.7,  transFat: 0,  chol: 0,   sodium: 7,    sugar: 0.6,  addedSugar: 0 },
  { name: "Toor Dal (cooked)",          cat: "Protein",   cal: 118, pro: 7,    carb: 21,   fat: 0.4,  fib: 5.7,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 3,    sugar: 1.5,  addedSugar: 0 },
  { name: "Moong Dal (cooked)",         cat: "Protein",   cal: 105, pro: 7,    carb: 19,   fat: 0.4,  fib: 7.6,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 2,    addedSugar: 0 },
  { name: "Masoor Dal (cooked)",        cat: "Protein",   cal: 116, pro: 9,    carb: 20,   fat: 0.4,  fib: 7.9,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 1.8,  addedSugar: 0 },
  { name: "Chana Dal (cooked)",         cat: "Protein",   cal: 164, pro: 9,    carb: 27,   fat: 2.6,  fib: 7.6,  satFat: 0.3,  transFat: 0,  chol: 0,   sodium: 7,    sugar: 4.8,  addedSugar: 0 },
  { name: "Urad Dal (cooked)",          cat: "Protein",   cal: 105, pro: 7.5,  carb: 18,   fat: 0.5,  fib: 6.4,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 4,    sugar: 1,    addedSugar: 0 },
  { name: "Rajma / Kidney Beans",       cat: "Protein",   cal: 127, pro: 8.7,  carb: 22.8, fat: 0.5,  fib: 6.4,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 0.3,  addedSugar: 0 },
  { name: "Chickpeas / Chana (cooked)", cat: "Protein",   cal: 164, pro: 8.9,  carb: 27.4, fat: 2.6,  fib: 7.6,  satFat: 0.3,  transFat: 0,  chol: 0,   sodium: 7,    sugar: 4.8,  addedSugar: 0 },
  { name: "Black-Eyed Peas (cooked)",   cat: "Protein",   cal: 116, pro: 7.7,  carb: 21,   fat: 0.5,  fib: 6.5,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 4,    sugar: 3,    addedSugar: 0 },
  { name: "Soya Chunks (dry)",          cat: "Protein",   cal: 345, pro: 52,   carb: 33,   fat: 0.5,  fib: 13,   satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 10,   sugar: 6,    addedSugar: 0 },

  // ── Grains & Breads ───────────────────────────────────────
  { name: "Basmati Rice (cooked)",      cat: "Grains",    cal: 130, pro: 2.7,  carb: 28,   fat: 0.3,  fib: 0.4,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 1,    sugar: 0,    addedSugar: 0 },
  { name: "Brown Rice (cooked)",        cat: "Grains",    cal: 123, pro: 2.7,  carb: 26,   fat: 1,    fib: 1.8,  satFat: 0.2,  transFat: 0,  chol: 0,   sodium: 1,    sugar: 0.4,  addedSugar: 0 },
  { name: "Wheat Flour (Atta)",         cat: "Grains",    cal: 341, pro: 12,   carb: 70,   fat: 1.7,  fib: 11.2, satFat: 0.3,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 0.4,  addedSugar: 0 },
  { name: "Roti / Chapati",             cat: "Grains",    cal: 297, pro: 9.7,  carb: 61,   fat: 3.7,  fib: 3.9,  satFat: 0.7,  transFat: 0,  chol: 0,   sodium: 190,  sugar: 0.5,  addedSugar: 0,  perPiece: 35 },
  { name: "Paratha (plain)",            cat: "Grains",    cal: 326, pro: 8.2,  carb: 55,   fat: 9.3,  fib: 3.2,  satFat: 2.5,  transFat: 0,  chol: 0,   sodium: 210,  sugar: 0.5,  addedSugar: 0,  perPiece: 80 },
  { name: "Naan",                       cat: "Grains",    cal: 310, pro: 9.5,  carb: 54,   fat: 6.8,  fib: 2.1,  satFat: 1.5,  transFat: 0,  chol: 5,   sodium: 480,  sugar: 2,    addedSugar: 2,  perPiece: 90 },
  { name: "Puri",                       cat: "Grains",    cal: 399, pro: 8.5,  carb: 56,   fat: 16,   fib: 2.9,  satFat: 2.5,  transFat: 0,  chol: 0,   sodium: 200,  sugar: 0.3,  addedSugar: 0,  perPiece: 25 },
  { name: "Idli",                       cat: "Grains",    cal: 58,  pro: 2.4,  carb: 12,   fat: 0.2,  fib: 0.7,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 220,  sugar: 0.3,  addedSugar: 0,  perPiece: 50 },
  { name: "Dosa (plain)",               cat: "Grains",    cal: 168, pro: 3.9,  carb: 29,   fat: 3.7,  fib: 1.2,  satFat: 0.5,  transFat: 0,  chol: 0,   sodium: 230,  sugar: 0.5,  addedSugar: 0,  perPiece: 80 },
  { name: "Poha (cooked)",              cat: "Grains",    cal: 130, pro: 2.2,  carb: 28,   fat: 0.6,  fib: 0.8,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 4,    sugar: 0,    addedSugar: 0 },
  { name: "Upma (cooked)",              cat: "Grains",    cal: 160, pro: 3.5,  carb: 27,   fat: 4.5,  fib: 1.5,  satFat: 0.6,  transFat: 0,  chol: 0,   sodium: 230,  sugar: 0.5,  addedSugar: 0 },
  { name: "Semolina / Rava / Suji (dry)", cat: "Grains",  cal: 360, pro: 12.7, carb: 73,   fat: 1.1,  fib: 3.9,  satFat: 0.2,  transFat: 0,  chol: 0,   sodium: 1,    sugar: 0.6,  addedSugar: 0 },
  { name: "Oats (dry)",                 cat: "Grains",    cal: 389, pro: 17,   carb: 66,   fat: 7,    fib: 10.6, satFat: 1.2,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 1,    addedSugar: 0 },
  { name: "Popcorn (plain)",            cat: "Grains",    cal: 387, pro: 13,   carb: 78,   fat: 4.5,  fib: 14.5, satFat: 0.6,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 0.9,  addedSugar: 0 },
  { name: "Corn Flakes",               cat: "Grains",    cal: 357, pro: 7.5,  carb: 84,   fat: 0.4,  fib: 1.2,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 660,  sugar: 8,    addedSugar: 8 },
  { name: "Chiwda / Poha Chivda",      cat: "Grains",    cal: 420, pro: 8,    carb: 60,   fat: 18,   fib: 3,    satFat: 2.5,  transFat: 0,  chol: 0,   sodium: 580,  sugar: 3,    addedSugar: 2 },
  { name: "Rice Bran",                 cat: "Grains",    cal: 316, pro: 13.4, carb: 49.7, fat: 20.8, fib: 21,   satFat: 4.1,  transFat: 0,  chol: 0,   sodium: 3,    sugar: 0.6,  addedSugar: 0 },
  { name: "Potato",                     cat: "Grains",    cal: 77,  pro: 2,    carb: 17,   fat: 0.1,  fib: 2.2,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 6,    sugar: 0.8,  addedSugar: 0 },
  { name: "Sweet Potato",               cat: "Grains",    cal: 86,  pro: 1.6,  carb: 20,   fat: 0.1,  fib: 3,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 55,   sugar: 4.2,  addedSugar: 0 },

  // ── Vegetables ──────────────────────────────────────────
  { name: "Tomato",                     cat: "Vegetable", cal: 18,  pro: 0.9,  carb: 3.9,  fat: 0.2,  fib: 1.2,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 5,    sugar: 2.6,  addedSugar: 0 },
  { name: "Onion",                      cat: "Vegetable", cal: 40,  pro: 1.1,  carb: 9.3,  fat: 0.1,  fib: 1.7,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 4,    sugar: 4.2,  addedSugar: 0 },
  { name: "Garlic",                     cat: "Vegetable", cal: 149, pro: 6.4,  carb: 33,   fat: 0.5,  fib: 2.1,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 17,   sugar: 1,    addedSugar: 0 },
  { name: "Ginger",                     cat: "Vegetable", cal: 80,  pro: 1.8,  carb: 18,   fat: 0.8,  fib: 2,    satFat: 0.2,  transFat: 0,  chol: 0,   sodium: 13,   sugar: 1.7,  addedSugar: 0 },
  { name: "Green Chilli",               cat: "Vegetable", cal: 40,  pro: 2,    carb: 9.5,  fat: 0.2,  fib: 1.5,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 7,    sugar: 5.1,  addedSugar: 0 },
  { name: "Carrot",                     cat: "Vegetable", cal: 41,  pro: 0.9,  carb: 10,   fat: 0.2,  fib: 2.8,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 69,   sugar: 4.7,  addedSugar: 0 },
  { name: "Spinach / Palak",            cat: "Vegetable", cal: 23,  pro: 2.9,  carb: 3.6,  fat: 0.4,  fib: 2.2,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 79,   sugar: 0.4,  addedSugar: 0 },
  { name: "Fenugreek / Methi",          cat: "Vegetable", cal: 49,  pro: 4.4,  carb: 6,    fat: 0.9,  fib: 2.7,  satFat: 0.2,  transFat: 0,  chol: 0,   sodium: 67,   sugar: 0,    addedSugar: 0 },
  { name: "Cauliflower / Gobhi",        cat: "Vegetable", cal: 25,  pro: 2,    carb: 5,    fat: 0.3,  fib: 2,    satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 30,   sugar: 1.9,  addedSugar: 0 },
  { name: "Cabbage / Patta Gobhi",      cat: "Vegetable", cal: 25,  pro: 1.3,  carb: 5.8,  fat: 0.1,  fib: 2.5,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 18,   sugar: 3.2,  addedSugar: 0 },
  { name: "Brinjal / Baingan",          cat: "Vegetable", cal: 25,  pro: 1,    carb: 6,    fat: 0.2,  fib: 3,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 2,    sugar: 3.5,  addedSugar: 0 },
  { name: "Bitter Gourd / Karela",      cat: "Vegetable", cal: 17,  pro: 1,    carb: 3.7,  fat: 0.2,  fib: 2.8,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 5,    sugar: 1.7,  addedSugar: 0 },
  { name: "Bottle Gourd / Lauki",       cat: "Vegetable", cal: 15,  pro: 0.6,  carb: 3.4,  fat: 0.1,  fib: 0.5,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 2,    sugar: 1.5,  addedSugar: 0 },
  { name: "Ridge Gourd / Turai",        cat: "Vegetable", cal: 20,  pro: 1.2,  carb: 4.4,  fat: 0.1,  fib: 0.5,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 3,    sugar: 2,    addedSugar: 0 },
  { name: "Drumstick / Moringa",        cat: "Vegetable", cal: 37,  pro: 2.1,  carb: 8.5,  fat: 0.2,  fib: 3.2,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 42,   sugar: 3.2,  addedSugar: 0 },
  { name: "Lady Finger / Okra / Bhindi",cat: "Vegetable", cal: 33,  pro: 1.9,  carb: 7.5,  fat: 0.1,  fib: 3.2,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 7,    sugar: 1.5,  addedSugar: 0 },
  { name: "Peas / Matar",               cat: "Vegetable", cal: 81,  pro: 5.4,  carb: 14,   fat: 0.4,  fib: 5.1,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 5,    sugar: 5.7,  addedSugar: 0 },
  { name: "Corn / Makka",               cat: "Vegetable", cal: 96,  pro: 3.4,  carb: 21,   fat: 1.5,  fib: 2.4,  satFat: 0.2,  transFat: 0,  chol: 0,   sodium: 15,   sugar: 4.5,  addedSugar: 0 },
  { name: "Capsicum / Bell Pepper",     cat: "Vegetable", cal: 20,  pro: 0.9,  carb: 4.6,  fat: 0.2,  fib: 1.7,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 4,    sugar: 2.4,  addedSugar: 0 },
  { name: "Cucumber / Kheera",          cat: "Vegetable", cal: 16,  pro: 0.7,  carb: 3.6,  fat: 0.1,  fib: 0.5,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 2,    sugar: 1.7,  addedSugar: 0 },
  { name: "Radish / Mooli",             cat: "Vegetable", cal: 16,  pro: 0.7,  carb: 3.4,  fat: 0.1,  fib: 1.6,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 39,   sugar: 1.9,  addedSugar: 0 },
  { name: "Turnip / Shalgam",           cat: "Vegetable", cal: 28,  pro: 0.9,  carb: 6.4,  fat: 0.1,  fib: 1.8,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 67,   sugar: 3.8,  addedSugar: 0 },
  { name: "Colocasia / Arbi",           cat: "Vegetable", cal: 94,  pro: 3.4,  carb: 22,   fat: 0.1,  fib: 4.1,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 11,   sugar: 0.4,  addedSugar: 0 },
  { name: "Raw Banana / Kachha Kela",   cat: "Vegetable", cal: 89,  pro: 1.3,  carb: 23,   fat: 0.3,  fib: 2.6,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 4,    sugar: 12,   addedSugar: 0 },
  { name: "Mushroom",                   cat: "Vegetable", cal: 22,  pro: 3.1,  carb: 3.3,  fat: 0.3,  fib: 1,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 5,    sugar: 2,    addedSugar: 0 },
  { name: "Lotus Stem / Bhein / Kamal Kakdi", cat: "Vegetable", cal: 74, pro: 1.6, carb: 17.2, fat: 0.1, fib: 4.9, satFat: 0,   transFat: 0,  chol: 0,   sodium: 40,   sugar: 0.5,  addedSugar: 0 },
  { name: "Fresh Coriander / Dhaniya", cat: "Vegetable", cal: 23,  pro: 2.1,  carb: 3.7,  fat: 0.5,  fib: 2.8,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 46,   sugar: 0.9,  addedSugar: 0 },
  { name: "Curry Leaves / Kadi Patta", cat: "Vegetable", cal: 108, pro: 6.1,  carb: 18.7, fat: 1,    fib: 6.4,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 68,   sugar: 0.9,  addedSugar: 0 },
  { name: "Beetroot / Chukandar",      cat: "Vegetable", cal: 43,  pro: 1.6,  carb: 9.6,  fat: 0.2,  fib: 2.8,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 78,   sugar: 6.8,  addedSugar: 0 },
  { name: "Ash Gourd / Petha",         cat: "Vegetable", cal: 13,  pro: 0.4,  carb: 3,    fat: 0.2,  fib: 2.9,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 11,   sugar: 1.5,  addedSugar: 0 },

  // ── Fruits ───────────────────────────────────────────────
  { name: "Mango / Aam",                cat: "Fruit",     cal: 60,  pro: 0.8,  carb: 15,   fat: 0.4,  fib: 1.6,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 1,    sugar: 13.7, addedSugar: 0 },
  { name: "Banana / Kela",              cat: "Fruit",     cal: 89,  pro: 1.1,  carb: 23,   fat: 0.3,  fib: 2.6,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 1,    sugar: 12.2, addedSugar: 0 },
  { name: "Apple / Seb",                cat: "Fruit",     cal: 52,  pro: 0.3,  carb: 14,   fat: 0.2,  fib: 2.4,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 1,    sugar: 10.4, addedSugar: 0 },
  { name: "Guava / Amrood",             cat: "Fruit",     cal: 68,  pro: 2.6,  carb: 14,   fat: 1,    fib: 5.4,  satFat: 0.3,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 8.9,  addedSugar: 0 },
  { name: "Papaya / Papita",            cat: "Fruit",     cal: 43,  pro: 0.5,  carb: 11,   fat: 0.3,  fib: 1.7,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 8,    sugar: 7.8,  addedSugar: 0 },
  { name: "Pomegranate / Anar",         cat: "Fruit",     cal: 83,  pro: 1.7,  carb: 19,   fat: 1.2,  fib: 4,    satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 3,    sugar: 13.7, addedSugar: 0 },
  { name: "Watermelon / Tarbuj",        cat: "Fruit",     cal: 30,  pro: 0.6,  carb: 7.6,  fat: 0.2,  fib: 0.4,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 1,    sugar: 6.2,  addedSugar: 0 },
  { name: "Pineapple / Ananas",         cat: "Fruit",     cal: 50,  pro: 0.5,  carb: 13,   fat: 0.1,  fib: 1.4,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 1,    sugar: 9.9,  addedSugar: 0 },
  { name: "Grapes / Angoor",            cat: "Fruit",     cal: 69,  pro: 0.6,  carb: 18,   fat: 0.2,  fib: 0.9,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 15.5, addedSugar: 0 },
  { name: "Orange / Santra",            cat: "Fruit",     cal: 47,  pro: 0.9,  carb: 12,   fat: 0.1,  fib: 2.4,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 0,    sugar: 9.4,  addedSugar: 0 },
  { name: "Lemon / Nimbu",              cat: "Fruit",     cal: 29,  pro: 1.1,  carb: 9,    fat: 0.3,  fib: 2.8,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 2,    sugar: 2.5,  addedSugar: 0 },
  { name: "Dates / Khajoor (dried)",    cat: "Fruit",     cal: 277, pro: 1.8,  carb: 75,   fat: 0.2,  fib: 6.7,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 1,    sugar: 66.5, addedSugar: 0 },
  { name: "Coconut (fresh) / Nariyal",  cat: "Fruit",     cal: 354, pro: 3.3,  carb: 15,   fat: 33,   fib: 9,    satFat: 29.7, transFat: 0,  chol: 0,   sodium: 20,   sugar: 6.2,  addedSugar: 0 },
  { name: "Jackfruit / Kathal",         cat: "Fruit",     cal: 95,  pro: 1.7,  carb: 23.2, fat: 0.6,  fib: 1.5,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 19.1, addedSugar: 0 },
  { name: "Tamarind / Imli",            cat: "Fruit",     cal: 239, pro: 2.8,  carb: 62.5, fat: 0.6,  fib: 5.1,  satFat: 0.3,  transFat: 0,  chol: 0,   sodium: 28,   sugar: 57.4, addedSugar: 0 },
  { name: "Amla / Indian Gooseberry",   cat: "Fruit",     cal: 44,  pro: 0.9,  carb: 10.2, fat: 0.6,  fib: 3.4,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 1,    sugar: 0,    addedSugar: 0 },

  // ── Dairy & Dairy Products ────────────────────────────────
  { name: "Whole Milk",                 cat: "Dairy",     cal: 61,  pro: 3.2,  carb: 4.8,  fat: 3.3,  fib: 0,    satFat: 1.9,  transFat: 0,  chol: 10,  sodium: 44,   sugar: 4.8,  addedSugar: 0 },
  { name: "Toned Milk",                 cat: "Dairy",     cal: 44,  pro: 3.5,  carb: 4.9,  fat: 1.5,  fib: 0,    satFat: 0.9,  transFat: 0,  chol: 6,   sodium: 47,   sugar: 4.9,  addedSugar: 0 },
  { name: "Curd / Dahi (full fat)",     cat: "Dairy",     cal: 98,  pro: 3.1,  carb: 3.4,  fat: 8,    fib: 0,    satFat: 5.1,  transFat: 0,  chol: 22,  sodium: 36,   sugar: 3.4,  addedSugar: 0 },
  { name: "Curd / Dahi (low fat)",      cat: "Dairy",     cal: 61,  pro: 3.4,  carb: 3.6,  fat: 3.4,  fib: 0,    satFat: 2.1,  transFat: 0,  chol: 13,  sodium: 40,   sugar: 3.6,  addedSugar: 0 },
  { name: "Lassi (salted)",             cat: "Dairy",     cal: 62,  pro: 3.5,  carb: 5,    fat: 3,    fib: 0,    satFat: 1.9,  transFat: 0,  chol: 12,  sodium: 270,  sugar: 5,    addedSugar: 0 },
  { name: "Paneer (full fat)",          cat: "Dairy",     cal: 265, pro: 18,   carb: 3.4,  fat: 20,   fib: 0,    satFat: 13.0, transFat: 0,  chol: 52,  sodium: 30,   sugar: 3.4,  addedSugar: 0 },
  { name: "Ghee",                       cat: "Dairy",     cal: 900, pro: 0.4,  carb: 0,    fat: 99.5, fib: 0,    satFat: 61.9, transFat: 0,  chol: 256, sodium: 2,    sugar: 0,    addedSugar: 0 },
  { name: "Butter",                     cat: "Dairy",     cal: 717, pro: 0.9,  carb: 0.1,  fat: 81,   fib: 0,    satFat: 51.4, transFat: 3.3,chol: 215, sodium: 11,   sugar: 0.1,  addedSugar: 0 },
  { name: "Khoa / Mawa",                cat: "Dairy",     cal: 421, pro: 20,   carb: 20,   fat: 31,   fib: 0,    satFat: 19.4, transFat: 0,  chol: 90,  sodium: 150,  sugar: 20,   addedSugar: 0 },
  { name: "Buttermilk / Chaas",         cat: "Dairy",     cal: 40,  pro: 3.3,  carb: 4.8,  fat: 0.9,  fib: 0,    satFat: 0.6,  transFat: 0,  chol: 4,   sodium: 105,  sugar: 4.8,  addedSugar: 0 },

  // ── Oils & Fats ──────────────────────────────────────────
  { name: "Mustard Oil",                cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 11.6, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Groundnut Oil",              cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 16.9, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Sunflower Oil",              cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 10.1, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Coconut Oil",                cat: "Fats",      cal: 892, pro: 0,    carb: 0,    fat: 99,   fib: 0,    satFat: 86.5, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Sesame Oil / Til Oil",       cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 14.2, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Vanaspati / Dalda",          cat: "Fats",      cal: 900, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 40.0, transFat: 25, chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Rice Bran Oil",             cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 19.7, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },

  // ── Nuts & Seeds ─────────────────────────────────────────
  { name: "Almonds / Badam",            cat: "Nuts",      cal: 579, pro: 21,   carb: 22,   fat: 50,   fib: 12.5, satFat: 3.8,  transFat: 0,  chol: 0,   sodium: 1,    sugar: 4.4,  addedSugar: 0 },
  { name: "Cashews / Kaju",             cat: "Nuts",      cal: 553, pro: 18,   carb: 30,   fat: 44,   fib: 3.3,  satFat: 7.8,  transFat: 0,  chol: 0,   sodium: 12,   sugar: 5.9,  addedSugar: 0 },
  { name: "Peanuts / Moongphali",       cat: "Nuts",      cal: 567, pro: 26,   carb: 16,   fat: 49,   fib: 8.5,  satFat: 6.9,  transFat: 0,  chol: 0,   sodium: 18,   sugar: 4.7,  addedSugar: 0 },
  { name: "Walnuts / Akhrot",           cat: "Nuts",      cal: 654, pro: 15,   carb: 14,   fat: 65,   fib: 6.7,  satFat: 6.1,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 2.6,  addedSugar: 0 },
  { name: "Pistachios / Pista",         cat: "Nuts",      cal: 562, pro: 20,   carb: 28,   fat: 45,   fib: 10.6, satFat: 5.6,  transFat: 0,  chol: 0,   sodium: 1,    sugar: 7.7,  addedSugar: 0 },
  { name: "Sesame Seeds / Til",         cat: "Nuts",      cal: 573, pro: 18,   carb: 23,   fat: 50,   fib: 11.8, satFat: 7.0,  transFat: 0,  chol: 0,   sodium: 11,   sugar: 0.3,  addedSugar: 0 },
  { name: "Mustard Seeds / Rai",        cat: "Nuts",      cal: 508, pro: 26,   carb: 28,   fat: 36,   fib: 12.2, satFat: 1.9,  transFat: 0,  chol: 0,   sodium: 13,   sugar: 6.8,  addedSugar: 0 },
  { name: "Cumin Seeds / Jeera",        cat: "Nuts",      cal: 375, pro: 18,   carb: 44,   fat: 22,   fib: 10.5, satFat: 1.5,  transFat: 0,  chol: 0,   sodium: 168,  sugar: 2.3,  addedSugar: 0 },
  { name: "Flax Seeds / Alsi",          cat: "Nuts",      cal: 534, pro: 18,   carb: 29,   fat: 42,   fib: 27.3, satFat: 3.7,  transFat: 0,  chol: 0,   sodium: 30,   sugar: 1.6,  addedSugar: 0 },
  { name: "Poppy Seeds / Khus Khus",    cat: "Nuts",      cal: 525, pro: 18,   carb: 28,   fat: 42,   fib: 19.5, satFat: 4.5,  transFat: 0,  chol: 0,   sodium: 26,   sugar: 2.9,  addedSugar: 0 },

  // ── Spices ───────────────────────────────────────────────
  { name: "Turmeric / Haldi",           cat: "Spice",     cal: 354, pro: 8,    carb: 65,   fat: 10,   fib: 21.1, satFat: 3.1,  transFat: 0,  chol: 0,   sodium: 38,   sugar: 3.2,  addedSugar: 0 },
  { name: "Red Chilli Powder",          cat: "Spice",     cal: 314, pro: 12,   carb: 56,   fat: 13,   fib: 34.5, satFat: 2.4,  transFat: 0,  chol: 0,   sodium: 30,   sugar: 10.3, addedSugar: 0 },
  { name: "Coriander Powder / Dhania",  cat: "Spice",     cal: 298, pro: 12.4, carb: 55,   fat: 17,   fib: 41.9, satFat: 1.0,  transFat: 0,  chol: 0,   sodium: 35,   sugar: 0,    addedSugar: 0 },
  { name: "Cumin Powder / Jeera",       cat: "Spice",     cal: 375, pro: 18,   carb: 44,   fat: 22,   fib: 10.5, satFat: 1.5,  transFat: 0,  chol: 0,   sodium: 168,  sugar: 2.3,  addedSugar: 0 },
  { name: "Garam Masala",               cat: "Spice",     cal: 379, pro: 13,   carb: 50,   fat: 15,   fib: 16,   satFat: 2.6,  transFat: 0,  chol: 0,   sodium: 60,   sugar: 3,    addedSugar: 0 },
  { name: "Cinnamon / Dalchini",        cat: "Spice",     cal: 247, pro: 4,    carb: 81,   fat: 1.2,  fib: 53.1, satFat: 0.3,  transFat: 0,  chol: 0,   sodium: 10,   sugar: 2.2,  addedSugar: 0 },
  { name: "Cardamom / Elaichi",         cat: "Spice",     cal: 311, pro: 10.8, carb: 68,   fat: 6.7,  fib: 28,   satFat: 0.7,  transFat: 0,  chol: 0,   sodium: 18,   sugar: 0,    addedSugar: 0 },
  { name: "Black Pepper / Kali Mirch",  cat: "Spice",     cal: 251, pro: 10,   carb: 64,   fat: 3.3,  fib: 25.3, satFat: 1.4,  transFat: 0,  chol: 0,   sodium: 20,   sugar: 0.6,  addedSugar: 0 },
  { name: "Fennel Seeds / Saunf",       cat: "Spice",     cal: 345, pro: 15.8, carb: 52,   fat: 14.9, fib: 39.8, satFat: 0.5,  transFat: 0,  chol: 0,   sodium: 88,   sugar: 0,    addedSugar: 0 },
  { name: "Carom Seeds / Ajwain",       cat: "Spice",     cal: 305, pro: 16,   carb: 43,   fat: 25,   fib: 21.2, satFat: 4.0,  transFat: 0,  chol: 0,   sodium: 10,   sugar: 0,    addedSugar: 0 },
  { name: "Bay Leaf / Tej Patta",       cat: "Spice",     cal: 313, pro: 7.6,  carb: 75,   fat: 8.4,  fib: 26.3, satFat: 2.3,  transFat: 0,  chol: 0,   sodium: 23,   sugar: 0,    addedSugar: 0 },
  { name: "Cloves / Laung",             cat: "Spice",     cal: 274, pro: 6,    carb: 66,   fat: 13,   fib: 33.9, satFat: 3.4,  transFat: 0,  chol: 0,   sodium: 277,  sugar: 2.4,  addedSugar: 0 },
  { name: "Dry Mango Powder / Amchur",  cat: "Spice",     cal: 323, pro: 2.9,  carb: 84,   fat: 1.1,  fib: 5.9,  satFat: 0.2,  transFat: 0,  chol: 0,   sodium: 25,   sugar: 50,   addedSugar: 0 },
  { name: "Kashmiri Red Chilli / Kashmiri Mirch", cat: "Spice", cal: 280, pro: 10, carb: 50, fat: 10,  fib: 30,   satFat: 1.8,  transFat: 0,  chol: 0,   sodium: 30,   sugar: 10,   addedSugar: 0 },
  { name: "Asafoetida / Hing",          cat: "Spice",     cal: 297, pro: 4,    carb: 65,   fat: 1,    fib: 4.1,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 1200, sugar: 0,    addedSugar: 0 },
  { name: "Kasuri Methi / Dried Fenugreek", cat: "Spice", cal: 323, pro: 23,   carb: 47,   fat: 6.5,  fib: 47.2, satFat: 1.5,  transFat: 0,  chol: 0,   sodium: 67,   sugar: 0,    addedSugar: 0 },
  { name: "Chaat Masala",               cat: "Spice",     cal: 342, pro: 10,   carb: 60,   fat: 7,    fib: 18,   satFat: 1.5,  transFat: 0,  chol: 0,   sodium: 5000, sugar: 3,    addedSugar: 0 },
  { name: "Peri Peri Masala",          cat: "Spice",     cal: 330, pro: 11,   carb: 55,   fat: 12,   fib: 20,   satFat: 2.0,  transFat: 0,  chol: 0,   sodium: 4000, sugar: 5,    addedSugar: 0 },
  { name: "Onion Powder",              cat: "Spice",     cal: 341, pro: 10.4, carb: 79,   fat: 0.4,  fib: 9.2,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 58,   sugar: 28.6, addedSugar: 0 },
  { name: "Black Salt / Kala Namak",   cat: "Spice",     cal: 0,   pro: 0,    carb: 0,    fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 36000,sugar: 0,    addedSugar: 0 },
  { name: "Roasted Cumin Powder / Bhuna Jeera", cat: "Spice", cal: 370, pro: 18, carb: 43, fat: 22,  fib: 11,   satFat: 1.5,  transFat: 0,  chol: 0,   sodium: 168,  sugar: 2.3,  addedSugar: 0 },

  // ── Condiments & Sauces ──────────────────────────────────
  { name: "Tomato Ketchup",             cat: "Sauce",     cal: 101, pro: 1.3,  carb: 26,   fat: 0.1,  fib: 0.3,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 907,  sugar: 22,   addedSugar: 18 },
  { name: "Green Chutney",              cat: "Sauce",     cal: 55,  pro: 2,    carb: 8,    fat: 2,    fib: 2.5,  satFat: 0.3,  transFat: 0,  chol: 0,   sodium: 250,  sugar: 2,    addedSugar: 0 },
  { name: "Tamarind Chutney",           cat: "Sauce",     cal: 130, pro: 1,    carb: 33,   fat: 0.2,  fib: 1.5,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 200,  sugar: 28,   addedSugar: 15 },
  { name: "Coconut Chutney",            cat: "Sauce",     cal: 195, pro: 2.5,  carb: 10,   fat: 17,   fib: 4,    satFat: 14.8, transFat: 0,  chol: 0,   sodium: 180,  sugar: 2,    addedSugar: 0 },
  { name: "Sambar",                     cat: "Sauce",     cal: 54,  pro: 3,    carb: 8,    fat: 1.5,  fib: 2.5,  satFat: 0.2,  transFat: 0,  chol: 0,   sodium: 350,  sugar: 2,    addedSugar: 0 },

  // ── Sweeteners ───────────────────────────────────────────
  { name: "Jaggery / Gud",              cat: "Sweetener", cal: 383, pro: 0.4,  carb: 98.3, fat: 0.1,  fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 30,   sugar: 98.3, addedSugar: 0 },
  { name: "White Sugar / Chini",        cat: "Sweetener", cal: 387, pro: 0,    carb: 100,  fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 1,    sugar: 100,  addedSugar: 0 },
  { name: "Honey / Shahad",             cat: "Sweetener", cal: 304, pro: 0.3,  carb: 82,   fat: 0,    fib: 0.2,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 4,    sugar: 82,   addedSugar: 0 },
  { name: "Mishri / Rock Sugar",        cat: "Sweetener", cal: 385, pro: 0,    carb: 99.5, fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 1,    sugar: 99.5, addedSugar: 0 },
  { name: "Bura Sugar / Boora",        cat: "Sweetener", cal: 387, pro: 0,    carb: 100,  fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 1,    sugar: 100,  addedSugar: 0 },

  // ── Basic Cooking Staples ─────────────────────────────────
  { name: "Salt / Namak",               cat: "Basic",     cal: 0,   pro: 0,    carb: 0,    fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 38758,sugar: 0,    addedSugar: 0 },
  { name: "Water",                      cat: "Basic",     cal: 0,   pro: 0,    carb: 0,    fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Ghee",                       cat: "Basic",     cal: 900, pro: 0.4,  carb: 0,    fat: 99.5, fib: 0,    satFat: 61.9, transFat: 0,  chol: 256, sodium: 2,    sugar: 0,    addedSugar: 0 },
  { name: "Mustard Oil",                cat: "Basic",     cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 11.6, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Sunflower Oil",              cat: "Basic",     cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 10.1, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Groundnut Oil",              cat: "Basic",     cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0,    satFat: 16.9, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Coconut Oil",                cat: "Basic",     cal: 892, pro: 0,    carb: 0,    fat: 99,   fib: 0,    satFat: 86.5, transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Vinegar / Sirka",            cat: "Basic",     cal: 18,  pro: 0,    carb: 0.9,  fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 5,    sugar: 0,    addedSugar: 0 },
  { name: "Baking Soda / Meetha Soda",  cat: "Basic",     cal: 0,   pro: 0,    carb: 0,    fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 27360,sugar: 0,    addedSugar: 0 },
  { name: "Baking Powder",              cat: "Basic",     cal: 53,  pro: 0,    carb: 28,   fat: 0,    fib: 0,    satFat: 0,    transFat: 0,  chol: 0,   sodium: 10600,sugar: 0,    addedSugar: 0 },
  { name: "Corn Flour / Cornstarch",    cat: "Basic",     cal: 381, pro: 0.3,  carb: 91,   fat: 0.1,  fib: 0.9,  satFat: 0,    transFat: 0,  chol: 0,   sodium: 9,    sugar: 0,    addedSugar: 0 },
  { name: "Rice Flour",                 cat: "Basic",     cal: 366, pro: 6,    carb: 80,   fat: 1.4,  fib: 2.4,  satFat: 0.4,  transFat: 0,  chol: 0,   sodium: 0,    sugar: 0,    addedSugar: 0 },
  { name: "Besan / Chickpea Flour",     cat: "Basic",     cal: 387, pro: 22,   carb: 58,   fat: 6,    fib: 10.8, satFat: 0.6,  transFat: 0,  chol: 0,   sodium: 64,   sugar: 10.9, addedSugar: 0 },
  { name: "Maida / All-Purpose Flour",  cat: "Basic",     cal: 364, pro: 10,   carb: 76,   fat: 1,    fib: 2.7,  satFat: 0.2,  transFat: 0,  chol: 0,   sodium: 2,    sugar: 0.3,  addedSugar: 0 },
  { name: "Dry Yeast",                  cat: "Basic",     cal: 325, pro: 40,   carb: 41,   fat: 7,    fib: 27,   satFat: 1.1,  transFat: 0,  chol: 0,   sodium: 51,   sugar: 0,    addedSugar: 0 },
  { name: "Tamarind Paste / Imli",      cat: "Basic",     cal: 239, pro: 2.8,  carb: 62.5, fat: 0.6,  fib: 5.1,  satFat: 0.3,  transFat: 0,  chol: 0,   sodium: 28,   sugar: 57.4, addedSugar: 0 },
  { name: "Coconut Milk",               cat: "Basic",     cal: 197, pro: 2.3,  carb: 5.5,  fat: 21,   fib: 2.2,  satFat: 18.9, transFat: 0,  chol: 0,   sodium: 13,   sugar: 3.3,  addedSugar: 0 },
  { name: "Tomato Puree",               cat: "Basic",     cal: 38,  pro: 1.7,  carb: 9,    fat: 0.4,  fib: 1.7,  satFat: 0.1,  transFat: 0,  chol: 0,   sodium: 28,   sugar: 6,    addedSugar: 0 },
  { name: "Curd / Dahi (for marinating)",cat: "Basic",    cal: 61,  pro: 3.4,  carb: 3.6,  fat: 3.4,  fib: 0,    satFat: 2.1,  transFat: 0,  chol: 13,  sodium: 40,   sugar: 3.6,  addedSugar: 0 },
  { name: "Cocoa Powder",               cat: "Basic",     cal: 228, pro: 19.6, carb: 57.9, fat: 13.7, fib: 33.2, satFat: 8.1,  transFat: 0,  chol: 0,   sodium: 21,   sugar: 1.8,  addedSugar: 0 },
  { name: "Compound Chocolate",         cat: "Basic",     cal: 530, pro: 5.5,  carb: 60,   fat: 30,   fib: 2.5,  satFat: 18.0, transFat: 0,  chol: 5,   sodium: 50,   sugar: 52,   addedSugar: 50 },
  { name: "Dark Chocolate",             cat: "Basic",     cal: 598, pro: 7.8,  carb: 46,   fat: 43,   fib: 10.9, satFat: 24.5, transFat: 0,  chol: 3,   sodium: 20,   sugar: 24,   addedSugar: 22 },
  { name: "Milk Powder",                cat: "Basic",     cal: 496, pro: 26,   carb: 38,   fat: 27,   fib: 0,    satFat: 16.9, transFat: 0,  chol: 97,  sodium: 371,  sugar: 38,   addedSugar: 0 },
  { name: "Condensed Milk",             cat: "Basic",     cal: 321, pro: 8,    carb: 55,   fat: 8.7,  fib: 0,    satFat: 5.5,  transFat: 0,  chol: 34,  sodium: 127,  sugar: 55,   addedSugar: 40 },
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
