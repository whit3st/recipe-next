export const imageData = async (name) => {
    const key = process.env.NEXT_PUBLIC_IMAGE_KEY;
    // HANDLE REQUEST
    try {
        const data = await fetch(
            `https://api.unsplash.com/search/photos/?${key}&query=${name}&page=1&per_page=1`
        );
        const response = await data.json();
        return response;
    } catch (error) {
        // HANDLE ERROR
        throw new Error("Failed to fetch image: " + error.message);
    }
};
