import React from 'react';
import './card.css'
import { useSelector } from 'react-redux';

const CardWeather = () => {
    const weather = useSelector((state) => state.weath.value)


    let now = new Date().toLocaleDateString()
    console.log(now)

    return (
        <div className='card'>
            {weather ?
                <div className='wrapper'>
                    <div className='cardTitle'>
                        <b>{weather.name}</b>
                        <p className='cardData'>{now}</p>
                    </div>
                    <div className='cardContent'>
                        <div className='cardInfo'>
                            <div>
                                <p>{weather.main.temp} °C</p>
                            </div>
                            <div>
                                <p>{weather.weather.map((item) => item.description)}</p>
                            </div>
                            <div>
                               
                                <p>ошущается как: {weather.main.feels_like}</p>
                            </div>
                        </div>
                        <div>
                            <p><img src={weather.weather.map((item) => item.icon + '.png')} /></p>
                        </div>
                    </div>
                </div>
                : <div className='cardInput'>
                    <p>Fill in the required field</p>
                    </div>}
        </div>
    );
}

export default CardWeather;
