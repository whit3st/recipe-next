import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    custom?: string;
}

const Button: React.FC<ButtonProps> = ({ children, custom, ...props }) => {
    return (
        <button
            {...props}
            className={
                "border border-[#091C1E] sm:w-[130px] hover:invert text-black bg-white font-bold rounded-sm px-3 py-1 transition-all " +
                custom
            }
        >
            {children}
        </button>
    );
};

export default Button;
