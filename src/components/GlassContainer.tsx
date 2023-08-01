import React from "react";
import SubTitle from "./ui/SubTitle";

const GlassContainer = ({ recipe }) => {
    return (
        <>
            <SubTitle>Glass</SubTitle>
            <p>{recipe.strGlass}</p>
        </>
    );
};

export default GlassContainer;
