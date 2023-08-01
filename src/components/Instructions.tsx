import React, { useState } from 'react'
import SubTitle from './ui/SubTitle'
import { ChevronDown, ChevronUp } from 'lucide-react';
const Instructions = ({ recipe }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col flex-1'>
            <span
                className="flex items-center justify-between transition-all border-b border-black"
                onClick={() => setOpen(!open)}
            >
                <SubTitle>Instructions</SubTitle>
                {open ? <ChevronUp /> : <ChevronDown />}
            </span>
            {open && <p className='mt-5'>{recipe.strInstructions}</p>}
        </div>
    );
}

export default Instructions
