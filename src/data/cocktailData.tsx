const cocktailURL = process.env.NEXT_PUBLIC_COCKTAIL_URL

interface Drink {
    strDrink: string;
    strDrinkThumb: string;
    strAlcoholic: string;
    strCategory: string;
    strGlass: string;
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
}

export const cocktailData = async (value: string): Promise<Drink[]> => {
    try {
        const req = await fetch(`${cocktailURL}${value}`);
        const res: {drinks: Drink[]} = await req.json();
        const drinks: Drink[] = res.drinks.map((drink: Drink) => ({
            strDrink: drink.strDrink,
            strDrinkThumb: drink.strDrinkThumb,
            strAlcoholic: drink.strAlcoholic,
            strCategory: drink.strCategory,
            strGlass: drink.strGlass,
            strInstructions: drink.strInstructions,
            strIngredient1: drink.strIngredient1,
            strIngredient2: drink.strIngredient2,
            strIngredient3: drink.strIngredient3,
            strIngredient4: drink.strIngredient4,
            strIngredient5: drink.strIngredient5,
            strIngredient6: drink.strIngredient6,
            strIngredient7: drink.strIngredient7,
            strIngredient8: drink.strIngredient8,
            strIngredient9: drink.strIngredient9,
            strIngredient10: drink.strIngredient10,
            strIngredient11: drink.strIngredient11,
            strIngredient12: drink.strIngredient12,
            strIngredient13: drink.strIngredient13,
            strIngredient14: drink.strIngredient14,
            strIngredient15: drink.strIngredient15,
        }))
        return drinks;
    } catch (error) {
        console.error(error);
        return [];
    }
    
}