const recipeURL = process.env.NEXT_PUBLIC_RECIPE_URL

interface Recipe {
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
}

export const recipeData = async (value: string): Promise<Recipe[]> => {
    try {
        const req = await fetch(`${recipeURL}${value}`);
        const res: {meals: Recipe[]} = await req.json();
        const meals: Recipe[] = res.meals.map((meal: Recipe) => ({
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb,
            strCategory: meal.strCategory,
            strArea: meal.strArea,
            strInstructions: meal.strInstructions.replace(/\r\n/g, ' '),
            strIngredient1: meal.strIngredient1,
            strIngredient2: meal.strIngredient2,
            strIngredient3: meal.strIngredient3,
            strIngredient4: meal.strIngredient4,
            strIngredient5: meal.strIngredient5,
            strIngredient6: meal.strIngredient6,
            strIngredient7: meal.strIngredient7,
            strIngredient8: meal.strIngredient8,
            strIngredient9: meal.strIngredient9,
            strIngredient10: meal.strIngredient10,
            strIngredient11: meal.strIngredient11,
            strIngredient12: meal.strIngredient12,
            strIngredient13: meal.strIngredient13,
            strIngredient14: meal.strIngredient14,
            strIngredient15: meal.strIngredient15,
            strIngredient16: meal.strIngredient16,
            strIngredient17: meal.strIngredient17,
            strIngredient18: meal.strIngredient18,
            strIngredient19: meal.strIngredient19,
            strIngredient20: meal.strIngredient20
        }))
        return meals;
    } catch (error) {
        console.error(error);
        return [];
    }
    
}