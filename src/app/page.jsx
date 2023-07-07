"use client";
import Link from "next/link";
import { useState } from "react";
import Recipe from "@/components/Recipe";
import Button from "@/components/Button";
import Cocktail from "@/components/Cocktail";
export default function Home() {
    const [recipe, setRecipe] = useState(true);
    const activeStyle = {
        scale: '1.1',
        transform: 'translateY(5px)',
      };

    return (
        <main className="flex flex-col items-center gap-10 max-w-[1000xp] min-h-[100svh]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-center">
                Welcome to the Eaters!
            </h1>
            <div className="flex justify-between w-full max-w-[395px]">
                <Button onClick={() => setRecipe(true)} name="Recipe" style={recipe && activeStyle}/>
                <Button onClick={() => setRecipe(false)} name="Cocktail" style={!recipe && activeStyle}/>
            </div>
            {recipe && <Recipe />}
            {!recipe && <Cocktail />}
            <footer className="flex max-w-[1000px] w-full justify-center border-t border-black py-5 h-[70px] mt-auto">
                <a
                    className="text-lg font-semibold tracking-wide"
                    href="https://alicanakyildiz.dev"
                    target="_blank"
                >
                    Alican Akyıldız
                </a>
            </footer>
        </main>
    );
}
