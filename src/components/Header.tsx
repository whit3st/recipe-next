"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
const Header = () => {
    return (
        <header>
            <span className="flex items-center gap-5 cursor-pointer" onClick={() => window.location.href="/"}>
                <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
                <Logo title={"The Eaters"} />
            </span>
        </header>
    );
};

export default Header;
