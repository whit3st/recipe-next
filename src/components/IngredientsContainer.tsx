import React, { useState } from "react";
import SubTitle from "./ui/SubTitle";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "./ui/Button";

const IngredientsContainer = ({ recipe }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col">
            <span
                className="flex items-center justify-between transition-all border-b border-black"
                onClick={() => setOpen(!open)}
            >
                <SubTitle>Ingredients</SubTitle>
                {open ? <ChevronUp /> : <ChevronDown />}
            </span>
            {open && (
                <ol className="list-decimal list-inside mt-5">
                    {recipe.strIngredient1 && <li>{recipe.strIngredient1}</li>}
                    {recipe.strIngredient2 && <li>{recipe.strIngredient2}</li>}
                    {recipe.strIngredient3 && <li>{recipe.strIngredient3}</li>}
                    {recipe.strIngredient4 && <li>{recipe.strIngredient4}</li>}
                    {recipe.strIngredient5 && <li>{recipe.strIngredient5}</li>}
                    {recipe.strIngredient6 && <li>{recipe.strIngredient6}</li>}
                    {recipe.strIngredient7 && <li>{recipe.strIngredient7}</li>}
                    {recipe.strIngredient8 && <li>{recipe.strIngredient8}</li>}
                    {recipe.strIngredient9 && <li>{recipe.strIngredient9}</li>}
                    {recipe.strIngredient10 && (
                        <li>{recipe.strIngredient10}</li>
                    )}
                    {recipe.strIngredient11 && (
                        <li>{recipe.strIngredient11}</li>
                    )}
                    {recipe.strIngredient12 && (
                        <li>{recipe.strIngredient12}</li>
                    )}
                    {recipe.strIngredient13 && (
                        <li>{recipe.strIngredient13}</li>
                    )}
                    {recipe.strIngredient14 && (
                        <li>{recipe.strIngredient14}</li>
                    )}
                    {recipe.strIngredient15 && (
                        <li>{recipe.strIngredient15}</li>
                    )}
                </ol>
            )}
        </div>
    );
};

export default IngredientsContainer;
