import { useState } from "react";
import useCurrency from "../hooks/useCurrency";

const InputBox = () => {
    const selectedCurrency = "$myro";
    
    const currency = useCurrency('inr');
    console.log('currency', (currency['$myro']))
    const currencyOptions = Object.keys(currency);
    const [value, setValue] = useState(0);
    const [result,setResult] = useState(value * Number(currency['$myro']) | 0);
    const convertedVal = (code) => {
        const res = value * currency[code];
        setResult(res);
    }

    return(
        <div>
            <div>
                <h1>CurrencyConverter</h1>
            </div>
            <span><input placeholder="Enter Amount"
            value={value}
            onChange={(e) => {
                const temp = value
                setValue(Number(e.target.value))
                setResult(result/temp * (e.target.value))
            }}
            ></input></span>
            <select
            onChange={(e) => convertedVal((e.target.value))}
            >
                {currencyOptions.map((item) => (
                <option>{item}</option>
                ))}
            </select>
            <div>
                <span>Result : </span>
                {result}
                <span></span>
                </div>
        </div>
    )
}
export default InputBox;