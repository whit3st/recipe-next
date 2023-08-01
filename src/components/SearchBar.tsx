import React, { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { myStore } from "../data/store";
import { cocktailData } from "../data/cocktailData";
import { recipeData } from "../data/recipeData";
const SearchBar = () => {
    const { setUserValue, userValue, setData, setLoader } = myStore();
    const [view, setView] = useState("recipe");

    const handleView = () => {
        setView((prevView) => (prevView === "recipe" ? "cocktail" : "recipe"));
    };
    const handleButton = async () => {
        if (view === "recipe") {
            setData(null);
            setLoader(true);
            const data = await recipeData(userValue);
            setTimeout(() => {
                setData(data);
                setLoader(false);
            }, 2500);
            console.log(data);
        }
        if (view === "cocktail") {
            setData(null);
            setLoader(true);
            const data = await cocktailData(userValue);
            setTimeout(() => {
                setData(data);
                setLoader(false);
            }, 2500);
            console.log(data);
        }
    };
    const handleEnter = async (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && view === "cocktail") {
            setData(null);
            setLoader(true);
            const data = await cocktailData(userValue);
            setTimeout(() => {
                setLoader(false);
                setData(data);
            }, 2500);
            console.log(data);
        }
        if (e.key === "Enter" && view === "recipe") {
            setData(null);
            setLoader(true);
            const data = await recipeData(userValue);
            setTimeout(() => {
                setLoader(false);
                setData(data);
            }, 2500);

            console.log(data);
        }
    };
    return (
        <div className="flex flex-col items-center mt-10 gap-5">
            <Button style={{ width: "100%" }} onClick={handleView}>
                I am looking for a {view}
            </Button>
            <div className="flex items-center gap-5">
                <Input
                    placeholder="Search"
                    onChange={(e) => setUserValue(e.target.value)}
                    onKeyDown={(e) => handleEnter(e)}
                />
                <Button onClick={handleButton}>Search</Button>
            </div>
        </div>
    );
};

export default SearchBar;
