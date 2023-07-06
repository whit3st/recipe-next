import Image from "next/image";
import { useState } from "react";
import { recipeData } from "@/apiRequests/recipeData";
import { imageData } from "@/apiRequests/imageData";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import IngredientsString from "./IngredientsString";
import Servings from "./Servings";
import Instructions from "./Instructions";

export default function Recipe() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [input, setInput] = useState("");
    const [recipe, setRecipe] = useState();
    const [image, setImage] = useState();
    const handleData = async () => {
        if (input.length > 0) {
            setRecipe("");
            setLoading(true);
            // HANDLE IMAGE
            const image = await imageData(input);
            setImage(image.results[0].urls.raw + "&w=300");
            // HANDLE RECIPE
            const recipe = await recipeData(input);
            setRecipe(recipe);
            setLoading(false);
        } else {
            setLoading(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    };
    return (
        <div className="flex flex-col gap-10 items-center w-full max-w-[1000px] py-10 border-t border-[#091C1E]">
            <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center w-full sm:max-w-[395px]">
                <Input placeholder={'Type a meal'} onChange={(e) => setInput(e.target.value)} />
                <Button onClick={handleData} name="Get Recipe" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
                {loading && (
                    <h1 className=" col-span-full mx-auto text-3xl">
                        <Image src={'/loading-unscreen.gif'} alt="loading icon" height={185} width={185}/>
                    </h1>
                )}
                {error && (
                    <h1 className=" col-span-full mx-auto text-3xl">
                        Please type a meal
                    </h1>
                )}
                {recipe &&
                    recipe.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#091C1E] bg-white bg-opacity-70 w-[300px] p-5 flex flex-col gap-5 rounded-md"
                        >
                            <Title title={item.title} />
                            <IngredientsString ingredients={item.ingredients} />
                            <Servings servings={item.servings} />
                            <Instructions instractions={item.instractions} />
                        </div>
                    ))}
            </div>
        </div>
    );
}
