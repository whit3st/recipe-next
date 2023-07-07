import Title from "./Title";
import { useEffect, useState } from "react";
export default function Error() {
    const [error, setError] = useState(false);
    useEffect(() => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 3000);
    }, []);

    return error ? <h1 className="text-lg text-center font-semibold">Could&apos;t find the recipe :(</h1>: "";
}
