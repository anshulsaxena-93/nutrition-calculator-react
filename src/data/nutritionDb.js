// Nutrition Database (values per 100g)
// { name, cat, cal, pro, carb, fat, fib, perPiece? }
export const NUTRITION_DB = [
  // ── Proteins ─────────────────────────────────────────────
  { name: "Chicken Breast (cooked)",    cat: "Protein",   cal: 165, pro: 31,   carb: 0,    fat: 3.6,  fib: 0 },
  { name: "Chicken Thigh (cooked)",     cat: "Protein",   cal: 209, pro: 26,   carb: 0,    fat: 11,   fib: 0 },
  { name: "Beef (lean ground, cooked)", cat: "Protein",   cal: 215, pro: 26,   carb: 0,    fat: 12,   fib: 0 },
  { name: "Salmon (cooked)",            cat: "Protein",   cal: 206, pro: 28,   carb: 0,    fat: 9,    fib: 0 },
  { name: "Tuna (canned in water)",     cat: "Protein",   cal: 116, pro: 25.5, carb: 0,    fat: 0.8,  fib: 0 },
  { name: "Shrimp (cooked)",            cat: "Protein",   cal: 99,  pro: 24,   carb: 0.2,  fat: 0.3,  fib: 0 },
  { name: "Egg (whole)",                cat: "Protein",   cal: 155, pro: 13,   carb: 1.1,  fat: 11,   fib: 0,   perPiece: 60 },
  { name: "Egg White",                  cat: "Protein",   cal: 52,  pro: 11,   carb: 0.7,  fat: 0.2,  fib: 0 },
  { name: "Tofu (firm)",                cat: "Protein",   cal: 76,  pro: 8,    carb: 1.9,  fat: 4.8,  fib: 0.3 },
  { name: "Lentils (cooked)",           cat: "Protein",   cal: 116, pro: 9,    carb: 20,   fat: 0.4,  fib: 7.9 },
  { name: "Chickpeas (cooked)",         cat: "Protein",   cal: 164, pro: 8.9,  carb: 27.4, fat: 2.6,  fib: 7.6 },
  { name: "Black Beans (cooked)",       cat: "Protein",   cal: 132, pro: 8.9,  carb: 24,   fat: 0.5,  fib: 8.7 },
  { name: "Turkey Breast (cooked)",     cat: "Protein",   cal: 135, pro: 30,   carb: 0,    fat: 1,    fib: 0 },
  { name: "Pork Tenderloin (cooked)",   cat: "Protein",   cal: 143, pro: 26,   carb: 0,    fat: 3.5,  fib: 0 },
  { name: "Greek Yogurt (plain, 0%)",   cat: "Dairy",     cal: 59,  pro: 10,   carb: 3.6,  fat: 0.4,  fib: 0 },

  // ── Grains & Starches ────────────────────────────────────
  { name: "White Rice (cooked)",        cat: "Grains",    cal: 130, pro: 2.7,  carb: 28,   fat: 0.3,  fib: 0.4 },
  { name: "Brown Rice (cooked)",        cat: "Grains",    cal: 123, pro: 2.7,  carb: 26,   fat: 1,    fib: 1.8 },
  { name: "Pasta (cooked)",             cat: "Grains",    cal: 131, pro: 5,    carb: 25,   fat: 1.1,  fib: 1.8 },
  { name: "Whole Wheat Pasta (cooked)", cat: "Grains",    cal: 124, pro: 5.3,  carb: 25,   fat: 0.5,  fib: 4.5 },
  { name: "Oats (dry)",                 cat: "Grains",    cal: 389, pro: 17,   carb: 66,   fat: 7,    fib: 10.6 },
  { name: "Oats (cooked)",              cat: "Grains",    cal: 71,  pro: 2.5,  carb: 12,   fat: 1.5,  fib: 1.7 },
  { name: "Bread (white)",              cat: "Grains",    cal: 265, pro: 9,    carb: 49,   fat: 3.2,  fib: 2.7 },
  { name: "Bread (whole wheat)",        cat: "Grains",    cal: 247, pro: 13,   carb: 41,   fat: 4.2,  fib: 6.9 },
  { name: "Quinoa (cooked)",            cat: "Grains",    cal: 120, pro: 4.4,  carb: 21.3, fat: 1.9,  fib: 2.8 },
  { name: "Potato (baked, no skin)",    cat: "Grains",    cal: 93,  pro: 2.5,  carb: 21.5, fat: 0.1,  fib: 2.1 },
  { name: "Sweet Potato (baked)",       cat: "Grains",    cal: 90,  pro: 2,    carb: 21,   fat: 0.1,  fib: 3.3 },
  { name: "Corn (cooked)",              cat: "Grains",    cal: 96,  pro: 3.4,  carb: 21,   fat: 1.5,  fib: 2.4 },
  { name: "Tortilla (flour)",           cat: "Grains",    cal: 312, pro: 8.5,  carb: 55,   fat: 7.3,  fib: 3.5 },

  // ── Vegetables ──────────────────────────────────────────
  { name: "Broccoli",                   cat: "Vegetable", cal: 34,  pro: 2.8,  carb: 7,    fat: 0.4,  fib: 2.6 },
  { name: "Spinach",                    cat: "Vegetable", cal: 23,  pro: 2.9,  carb: 3.6,  fat: 0.4,  fib: 2.2 },
  { name: "Kale",                       cat: "Vegetable", cal: 49,  pro: 4.3,  carb: 9,    fat: 0.9,  fib: 3.6 },
  { name: "Lettuce (romaine)",          cat: "Vegetable", cal: 17,  pro: 1.2,  carb: 3.3,  fat: 0.3,  fib: 2.1 },
  { name: "Tomato",                     cat: "Vegetable", cal: 18,  pro: 0.9,  carb: 3.9,  fat: 0.2,  fib: 1.2 },
  { name: "Cucumber",                   cat: "Vegetable", cal: 16,  pro: 0.7,  carb: 3.6,  fat: 0.1,  fib: 0.5 },
  { name: "Bell Pepper (red)",          cat: "Vegetable", cal: 31,  pro: 1,    carb: 6,    fat: 0.3,  fib: 2.1 },
  { name: "Bell Pepper (green)",        cat: "Vegetable", cal: 20,  pro: 0.9,  carb: 4.6,  fat: 0.2,  fib: 1.7 },
  { name: "Onion",                      cat: "Vegetable", cal: 40,  pro: 1.1,  carb: 9.3,  fat: 0.1,  fib: 1.7 },
  { name: "Garlic",                     cat: "Vegetable", cal: 149, pro: 6.4,  carb: 33,   fat: 0.5,  fib: 2.1 },
  { name: "Carrot",                     cat: "Vegetable", cal: 41,  pro: 0.9,  carb: 10,   fat: 0.2,  fib: 2.8 },
  { name: "Mushroom (white)",           cat: "Vegetable", cal: 22,  pro: 3.1,  carb: 3.3,  fat: 0.3,  fib: 1 },
  { name: "Zucchini",                   cat: "Vegetable", cal: 17,  pro: 1.2,  carb: 3.1,  fat: 0.3,  fib: 1 },
  { name: "Cauliflower",                cat: "Vegetable", cal: 25,  pro: 2,    carb: 5,    fat: 0.3,  fib: 2 },
  { name: "Celery",                     cat: "Vegetable", cal: 16,  pro: 0.7,  carb: 3,    fat: 0.2,  fib: 1.6 },
  { name: "Avocado",                    cat: "Vegetable", cal: 160, pro: 2,    carb: 9,    fat: 15,   fib: 6.7 },
  { name: "Peas (frozen, cooked)",      cat: "Vegetable", cal: 81,  pro: 5.4,  carb: 14,   fat: 0.4,  fib: 5.1 },

  // ── Fruits ───────────────────────────────────────────────
  { name: "Apple",                      cat: "Fruit",     cal: 52,  pro: 0.3,  carb: 14,   fat: 0.2,  fib: 2.4 },
  { name: "Banana",                     cat: "Fruit",     cal: 89,  pro: 1.1,  carb: 23,   fat: 0.3,  fib: 2.6 },
  { name: "Orange",                     cat: "Fruit",     cal: 47,  pro: 0.9,  carb: 12,   fat: 0.1,  fib: 2.4 },
  { name: "Strawberry",                 cat: "Fruit",     cal: 32,  pro: 0.7,  carb: 7.7,  fat: 0.3,  fib: 2 },
  { name: "Blueberry",                  cat: "Fruit",     cal: 57,  pro: 0.7,  carb: 14,   fat: 0.3,  fib: 2.4 },
  { name: "Mango",                      cat: "Fruit",     cal: 60,  pro: 0.8,  carb: 15,   fat: 0.4,  fib: 1.6 },
  { name: "Grapes",                     cat: "Fruit",     cal: 69,  pro: 0.6,  carb: 18,   fat: 0.2,  fib: 0.9 },
  { name: "Lemon Juice",                cat: "Fruit",     cal: 22,  pro: 0.4,  carb: 7,    fat: 0.2,  fib: 0.3 },

  // ── Dairy ────────────────────────────────────────────────
  { name: "Whole Milk",                 cat: "Dairy",     cal: 61,  pro: 3.2,  carb: 4.8,  fat: 3.3,  fib: 0 },
  { name: "Skim Milk",                  cat: "Dairy",     cal: 34,  pro: 3.4,  carb: 5,    fat: 0.1,  fib: 0 },
  { name: "Cheddar Cheese",             cat: "Dairy",     cal: 403, pro: 25,   carb: 1.3,  fat: 33,   fib: 0 },
  { name: "Mozzarella Cheese",          cat: "Dairy",     cal: 280, pro: 28,   carb: 2.2,  fat: 17,   fib: 0 },
  { name: "Parmesan Cheese",            cat: "Dairy",     cal: 431, pro: 38,   carb: 4,    fat: 29,   fib: 0 },
  { name: "Cottage Cheese (low fat)",   cat: "Dairy",     cal: 82,  pro: 11,   carb: 3.4,  fat: 2.3,  fib: 0 },
  { name: "Butter",                     cat: "Dairy",     cal: 717, pro: 0.9,  carb: 0.1,  fat: 81,   fib: 0 },
  { name: "Heavy Cream",                cat: "Dairy",     cal: 340, pro: 2.8,  carb: 2.8,  fat: 36,   fib: 0 },

  // ── Fats & Oils ──────────────────────────────────────────
  { name: "Olive Oil",                  cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Coconut Oil",                cat: "Fats",      cal: 892, pro: 0,    carb: 0,    fat: 99,   fib: 0 },
  { name: "Sunflower Oil",              cat: "Fats",      cal: 884, pro: 0,    carb: 0,    fat: 100,  fib: 0 },
  { name: "Almonds",                    cat: "Nuts",      cal: 579, pro: 21,   carb: 22,   fat: 50,   fib: 12.5 },
  { name: "Walnuts",                    cat: "Nuts",      cal: 654, pro: 15,   carb: 14,   fat: 65,   fib: 6.7 },
  { name: "Peanut Butter",              cat: "Nuts",      cal: 588, pro: 25,   carb: 20,   fat: 50,   fib: 6 },
  { name: "Cashews",                    cat: "Nuts",      cal: 553, pro: 18,   carb: 30,   fat: 44,   fib: 3.3 },
  { name: "Chia Seeds",                 cat: "Nuts",      cal: 486, pro: 17,   carb: 42,   fat: 31,   fib: 34.4 },
  { name: "Flax Seeds",                 cat: "Nuts",      cal: 534, pro: 18,   carb: 29,   fat: 42,   fib: 27.3 },

  // ── Sauces & Condiments ──────────────────────────────────
  { name: "Tomato Sauce",               cat: "Sauce",     cal: 29,  pro: 1.5,  carb: 6.3,  fat: 0.4,  fib: 1.5 },
  { name: "Soy Sauce",                  cat: "Sauce",     cal: 53,  pro: 8,    carb: 5,    fat: 0.1,  fib: 0.8 },
  { name: "Ketchup",                    cat: "Sauce",     cal: 101, pro: 1.3,  carb: 26,   fat: 0.1,  fib: 0.3 },
  { name: "Mayonnaise",                 cat: "Sauce",     cal: 680, pro: 1,    carb: 0.6,  fat: 75,   fib: 0 },
  { name: "Mustard",                    cat: "Sauce",     cal: 66,  pro: 4.4,  carb: 5.8,  fat: 3.7,  fib: 3.2 },
  { name: "Salsa",                      cat: "Sauce",     cal: 36,  pro: 1.7,  carb: 7.9,  fat: 0.3,  fib: 1.9 },
  { name: "Hummus",                     cat: "Sauce",     cal: 177, pro: 7.9,  carb: 20,   fat: 8.6,  fib: 6 },

  // ── Sweeteners ───────────────────────────────────────────
  { name: "White Sugar",                cat: "Sweetener", cal: 387, pro: 0,    carb: 100,  fat: 0,    fib: 0 },
  { name: "Brown Sugar",                cat: "Sweetener", cal: 380, pro: 0,    carb: 98,   fat: 0,    fib: 0 },
  { name: "Honey",                      cat: "Sweetener", cal: 304, pro: 0.3,  carb: 82,   fat: 0,    fib: 0.2 },
  { name: "Maple Syrup",                cat: "Sweetener", cal: 260, pro: 0,    carb: 67,   fat: 0.1,  fib: 0 },
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

// USDA FoodData Central
export const USDA_BASE = "https://api.nal.usda.gov/fdc/v1";
export const NUTRIENT_IDS = { cal: 1008, pro: 1003, carb: 1005, fat: 1004, fib: 1079 };

export function getNutrientValue(nutrients, id) {
  const n = nutrients.find(x => x.nutrientId === id);
  return n ? (n.value || 0) : 0;
}

export async function searchUSDA(query, apiKey) {
  if (!apiKey || query.length < 2) return [];
  const url = `${USDA_BASE}/foods/search?query=${encodeURIComponent(query)}&api_key=${apiKey}&pageSize=7&dataType=Foundation,SR%20Legacy`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.status === 403 ? "invalid_key" : "api_error");
  const data = await res.json();
  return (data.foods || []).map(f => ({
    name: f.description,
    cat:  "USDA",
    cal:  getNutrientValue(f.foodNutrients, NUTRIENT_IDS.cal),
    pro:  getNutrientValue(f.foodNutrients, NUTRIENT_IDS.pro),
    carb: getNutrientValue(f.foodNutrients, NUTRIENT_IDS.carb),
    fat:  getNutrientValue(f.foodNutrients, NUTRIENT_IDS.fat),
    fib:  getNutrientValue(f.foodNutrients, NUTRIENT_IDS.fib),
    source: "usda",
  }));
}
