export const recipeData = async (name) => {
    const key = process.env.NEXT_PUBLIC_NINJA_KEY;
    // OPTIONS
    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": key,
            "Content-Type": "application/json",
        },
    };
    // HANDLE REQUEST
    try {
        const request = await fetch(
            `https://api.api-ninjas.com/v1/recipe?query=${name}`,
            options
        );
        const response = await request.json();

        return response;
    } catch (error) {
        // HANDLE ERROR
        throw new Error("Failed to fetch cocktail data: " + error.message);
    }
};
