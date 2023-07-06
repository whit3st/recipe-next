import { useState } from "react";
import { imageData } from "@/apiRequests/imageData";
import { cocktailData } from "@/apiRequests/cocktailData";
import Image from "next/image";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import IngredientsArray from "./IngredientsArray";
import Instructions from "./Instructions";
export default function Cocktail() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [input, setInput] = useState("");
    const [image, setImage] = useState();
    const [cocktail, setCocktail] = useState("");
    const handleData = async () => {
        if (input.length > 0) {
            setCocktail("");
            setLoading(true);
            // HANDLE IMAGE
            const image = await imageData(input);
            setImage(image.results[0].urls.raw + '');
            // HANDLE RECIPE
            const cocktail = await cocktailData(input);
            setCocktail(cocktail);
            setLoading(false);
            console.log();
        } else {
            setLoading(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    };
    return (
        <div className="flex flex-col gap-5 items-center w-full max-w-[1000px] mx-auto px-3 py-10 border-t border-[#091C1E]">
            <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center w-full sm:max-w-[395px]">
                <Input
                    placeholder={"Type a cocktail"}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={handleData} name="Get Cocktail" />
            </div>
            {loading && (
                <h1 className=" col-span-full mx-auto text-3xl">
                    <Image
                        src={"/loading-unscreen.gif"}
                        alt="loading icon"
                        height={185}
                        width={185}
                    />
                </h1>
            )}
            {error && (
                <h1 className=" col-span-full mx-auto text-3xl">
                    Please type a meal
                </h1>
            )}
            {cocktail && (
                <div className="flex flex-col h-[520px] sm:flex-row justify-between items-center border border-[#091C1E] bg-white bg-opacity-70 max-w-[700px] w-full p-5 gap-5 rounded-md">
                    <Image
                        src={image}
                        alt="cocktail photo"
                        width={300}
                        height={300}
                        className="rounded-lg"
                    />
                    <div className="flex flex-col h-full justify-between flex-1">
                    <Title title={cocktail[0].name.toUpperCase()} />
                    <IngredientsArray ingredients={cocktail[0].ingredients} />
                    <Instructions instractions={cocktail[0].instractions} />
                    </div>
                    
                </div>
            )}
        </div>
    );
}
