import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeaterApp = () => {

    let api_key = '97b5077f22add0c7166b63f459fa28d6';

    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.querySelector('.cityInput')
        if(element.value == ''){
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;
        
        let response = await fetch(url);

        let data = await response.json();

        const humidity = document.querySelector('.humidity-percent')
        const wind = document.querySelector('.wind-rate')
        const temperatur = document.querySelector('.weather-temp')
        const location = document.querySelector('.weather-location')

        humidity.innerHTML = data.main.humidity + '%';
        wind.innerHTML = Math.floor(data.wind.speed) + 'km/h';
        temperatur.innerHTML = Math.floor(data.main.temp) + '°C';
        location.innerHTML = data.name;

        if (data.weather.icon==='01d' || data.weather.icon==='01n') {
            setWicon(clear_icon);
        } else if (data.weather.icon==='02d' || data.weather.icon==='02n') {
            setWicon(cloud_icon);
        } else if (data.weather.icon==='03d' || data.weather.icon==='03n') {
            setWicon(drizzle_icon);
        } else if (data.weather.icon==='04d' || data.weather.icon==='04n') {
            setWicon(drizzle_icon);
        } else if (data.weather.icon==='09d' || data.weather.icon==='09n') {
            setWicon(rain_icon);
        } else if (data.weather.icon==='10d' || data.weather.icon==='10n') {
            setWicon(rain_icon);
        } else if (data.weather.icon==='13d' || data.weather.icon==='13n') {
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon)
        }
    }


    return (
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search city'/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="search_icon" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="cloud icon" />
            </div>
            <div className="weather-temp">
                24 C
            </div>
            <div className="weather-location">
                London
            </div>
            <div className="data-container">
                <din className="element">
                    <img src={humidity_icon} alt="" className='icon'/>
                    <div className='data'>
                        <div className="humidity-percent">
                            64%
                        </div>
                        <div className="text">Humidity </div>
                    </div>
                </din>
                <din className="element">
                    <img src={wind_icon} alt="" className='icon'/>
                    <div className='data'>
                        <div className="wind-rate">
                            18 km/h
                        </div>
                        <div className="text">Wind</div>
                    </div>
                </din>
            </div>
        </div>
    )
}

export default WeaterApp