"use client";
import Image from "next/image";
import CocktailContainer from "../components/CocktailContainer";
import NotFoundMessage from "../components/NotFoundMessage";
import SearchBar from "../components/SearchBar";
export default function Home() {
    return (
        <main className="flex flex-col items-center gap-10 max-w-[1000px] w-full min-h-[100svh]">
            <SearchBar />
            <NotFoundMessage />
            <CocktailContainer />
        </main>
    );
}
