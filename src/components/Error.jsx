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

    return error ? <Title title={"Couldn`t find the recipe :("} /> : "";
}
