"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Recipe from "@/components/Recipe";
import Button from "@/components/Button";
import Cocktail from "@/components/Cocktail";
import Logo from "@/components/Logo";
export default function Home() {
    const [recipe, setRecipe] = useState(true);
    const activeStyle = {
        scale: '1.1',
        transform: 'translateY(5px)',
      };

    return (
        <main className="flex flex-col items-center justify-center gap-10 max-w-[1000px] w-full min-h-[100svh]">
            <Link className="flex items-center gap-5" href={'/'}><Image src={'/logo.svg'} width={100} height={100} alt='logo'/><Logo title={'The Eaters'}/> </Link>
            <p className="font-semibold tracking-wider text-lg text-center">
                Let&apos;s find the recipe of your {recipe ? 'dish!' : 'cocktail!'}
            </p>
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
