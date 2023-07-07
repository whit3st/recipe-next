import { useState } from "react";
import { imageData } from "@/apiRequests/imageData";
import { cocktailData } from "@/apiRequests/cocktailData";
import Image from "next/image";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import Error from "./Error";
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
    
            // HANDLE RECIPE
            const cocktail = await cocktailData(input);
            // SET COCKTAIL
            setCocktail(cocktail);
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
        <div className="flex flex-col gap-5 items-center w-full max-w-[1000px] mx-auto px-3 py-10 border-t border-[#091C1E]">
            <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center w-full sm:max-w-[395px]">
                <Input
                    onKeyDown={(e) => e.key === 'Enter' ? handleData() : ''}
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
            {cocktail.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cocktail.map((cock, index) => (
                      <div key={index} className="flex flex-col h-full border w-[300px] border-[#091C1E] bg-white bg-opacity-70 p-5 gap-5 rounded-md">
                    <Title title={cock.name.toUpperCase()} />
                    <IngredientsArray ingredients={cock.ingredients} />
                    <Instructions instractions={cock.instructions} />
                    </div>  
                    ))}                    
                </div>
            )}
            {cocktail && cocktail.length <= 0 &&  <Error />}
        </div>
    );
}
