import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Expletus_Sans } from "next/font/google";

const expletus = Expletus_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "The Eaters",
    description: "Recipe app by Alican Akyıldız",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
            </head>
            <body
                className={`${expletus.className} flex flex-col items-center justify-center pt-10 px-3 bg-bg tracking-wide`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
