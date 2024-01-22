import { useEffect, useState } from "react"
const useCurrency = (currency) => {
    const [currencyData, setCurrencyData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            setCurrencyData(data[currency])
        })
        .catch((er) => console.log(er))
    },[currency])
    //console.log(currencyData)
    return currencyData;
}
export default useCurrency;