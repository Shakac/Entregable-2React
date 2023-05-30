import { useState } from "react";

const WeatherCard = ({ weather, temp }) => {
 
    const [isCelsuis, setIsCelsuis] = useState(true)

    const handleChangeTemp = () => setIsCelsuis(!isCelsuis)

    return (
        <article>
            <header>
                <h1>Weather App</h1>
                    <h2>{weather?.name}, {weather?.sys.country}
                </h2>
            </header>
            <section>
                <div>
                    <img src={weather &&
                        `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt=""
                    />
                </div>
                <div>
                    <h3>"{weather?.weather[0].description}"</h3>
                    <ul>
                        <li>
                            <span>Wind speed</span>
                            <span>{weather?.wind.speed} m/s</span>
                        </li>
                        <li>
                            <span>Clouds</span>
                            <span>{weather?.Clouds.all} %</span>
                        </li>
                        <li>
                            <span>Pressure</span>
                            <span>{weather?.main.Pressure} hPa</span>
                        </li>
                    </ul>
                </div>
            </section>
            <div>
                <h2>{isCelsuis ? `${temp?.celsuis} °C  : `${temp?.ferenheit} °F`</h2>
                <button onClick={handleChangeTemp}>Change to {isCelsuis ? 'ºF' : 'ºC'}</
                button>
            </div>
        </article>
    );
};

export default WeatherCard;