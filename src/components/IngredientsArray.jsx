export default function IngredientsArray({ ingredients }) {
    return (
        <ol className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Ingredients:</h2>
            {ingredients.map((item, index) => (
                <li key={index}>-{item}</li>
            ))}
        </ol>
    );
}
