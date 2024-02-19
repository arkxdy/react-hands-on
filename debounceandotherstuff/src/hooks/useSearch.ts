import { useEffect, useState } from "react";


const useSearch = <T>(value:T, delay: number = 2000) => {
    const [res, setResult] = useState<T>(value)

    useEffect(() => {
        console.log(value)
        const timeout = setTimeout(() => {
            setResult(value);
        },delay)

        return () => clearTimeout(timeout);
    },[value])

    return res;
}
export default useSearch;