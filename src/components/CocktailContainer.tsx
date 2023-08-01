import { myStore } from "../data/store";
import React from "react";
import Card from "./ui/Card";
import Image from "next/image";
import Title from "./ui/Title";
import IngredientsContainer from "./IngredientsContainer";
import Instructions from "./Instructions";
import Loader from "./Loader";
const CocktailContainer = () => {
    const { data, loader } = myStore();
    return (
        <div className="flex flex-col items-center w-full gap-10">
            {loader && <Loader />}
            {data &&
                data.map((recipe: any) => (
                    <Card key={recipe.id}>
                        <Title
                            custom={"bg-white bg-opacity-50 py-5 rounded-md"}
                        >
                            {recipe.strDrink || recipe.strMeal}
                        </Title>
                        <div className={`flex flex-col gap-10`}>
                            <Image
                                src={
                                    recipe.strDrinkThumb || recipe.strMealThumb
                                }
                                alt={
                                    recipe.strDrinkThumb || recipe.strMealThumb
                                }
                                className="rounded-md absolute -top-28 left-0 right-0 -z-10 "
                                width={1000}
                                height={700}
                            />

                            <div
                                className={`flex flex-col justify-between px-5 gap-5 w-full sm:mt-[200px] mt-10 sm:py-10 py-5 rounded-md bg-gradient-to-b from-[#ffffff3d] via-white to-white`}
                            >
                                <IngredientsContainer recipe={recipe} />
                                <Instructions recipe={recipe} />
                            </div>
                        </div>
                    </Card>
                ))}
        </div>
    );
};

export default CocktailContainer;
