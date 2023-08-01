import React, {  HTMLProps } from "react";

const Text: React.FC<HTMLProps<HTMLParagraphElement>> = ({
    children,
    ...props
}) => {

    return (
        <p className="text-xl font-bold" {...props}>
            {children}
        </p>
    );
};

export default Text;
