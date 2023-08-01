import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}


const Input: React.FC<InputProps> = ({children, placeholder, ...rest}) => {
    return (
        <input
        {...rest}
        className="border border-[#091C1E] px-3 py-1 rounded-sm w-[160px] sm:w-[220px]"
        type="text"
        placeholder={placeholder}
        >
            {children}
        </input>
    )
}

export default Input;