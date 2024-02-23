import { useState } from "react";

export default function Temperature() {
    const [celcius, setCelcius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0)

    function Celcius(e) {
        setCelcius(e.target.value)
        setFahrenheit(celcius*1.8+32)
    }

    function Fahrenheit(e) {
        setFahrenheit(e.target.value)
        setCelcius((fahrenheit-32)/1.8)
    }

    return (
        <div>
            <h1>Temperature Converter</h1>
            <label>
                Celcius:
                <input type="number" onChange={e => Celcius(e)} value={celcius} />
            </label>
            <label>
                Fahrenheit:
                <input type="number" onChange={e => Fahrenheit(e)} value={fahrenheit}/>
            </label>
            <p><span>{celcius}</span>&deg;C</p>
            <p><span>{fahrenheit}</span>&deg;F</p>
        </div>
    )
}