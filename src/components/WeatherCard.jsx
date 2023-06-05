import { useState } from "react";
import './styles/weatherCard.css'

const WeatherCard = ({ weather, temp }) => {
    const [isCelsuis, setIsCelsuis] = useState(true)

    const handleChangeTemp = () => setIsCelsuis(!isCelsuis)

    return (
        <article className="weather">
            <header className="weather__header">
                <h1 className="weather__title">⛅Weather App⛅</h1>
                    <h2 className="weather__subtitle">
                        {weather?.name}, {weather?.sys.country}</h2>
                <form className="weather__search">
                    <input id="inputValue" className="weather__search-input" type="text" placeholder="City Name"/>
                    <button className="weather__search-btn-icon">
                        <i className="bx bx-search-btn-icon">
                            🔎
                        </i>
                    </button>
                </form>
            </header>
            <section className="weather__body">
                <div className="weather__img-container">
                    <img src={weather &&
                        `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt=""/>
                </div>
                <div className="weather__info">
                    <h3 className="weather__info-title">"{weather?.weather[0].description}"</h3>
                    <ul className="weather__list">
                        <li className="weather__list-item">
                            <span className="weather__list-label">Wind speed</span>
                            <span className="weather__list-value">{weather?.wind.speed} m/s</span>
                        </li>
                        <li className="weather__list-item">
                            <span className="weather__list-label">Clouds</span>
                            <span className="weather__list-value">{weather?.clouds.all} %</span>
                        </li>
                        <li className="weather__list-item">
                            <span className="weather__list-label">Pressure</span>
                            <span className="weather__list-value">{weather?.main.Pressure} hPa</span>
                        </li>
                    </ul>
                </div>
            </section>
            <footer className="weather__footer">
                <h2 className="weather__temp">{isCelsuis ? `${temp?.celsuis} °C`  : `${temp?.farenheit} °F`}</h2>
                <button className="weather__btn" onClick={handleChangeTemp}>Change to {isCelsuis ? 'ºF' : 'ºC'}</button>
            </footer>
        </article>
    );
};

export default WeatherCard;