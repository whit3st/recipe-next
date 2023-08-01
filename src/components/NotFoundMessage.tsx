import React, { useEffect, useState } from "react";
import Text from "./ui/Text";
import { myStore } from "../data/store";
const NotFoundMessage = () => {
    const { data } = myStore();
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        if (data && data.length === 0) {
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
            }, 3500);
        }
    }, [data])

    return <>{isError && <Text>Couldn&apos;t find the recipe.</Text>}</>;
};

export default NotFoundMessage;
