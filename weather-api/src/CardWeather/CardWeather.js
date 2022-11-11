import React from 'react';
import './card.css'
import { useSelector } from 'react-redux';

const CardWeather = () => {
    const weather = useSelector((state) => state.weath.value)
    console.log(weather)

    return (
        <div className='card'>
            <div className='wrapper'>
                <div>
                    <p>{weather&&weather.main.temp}</p>
                </div>
            </div>
        </div>
    );
}

export default CardWeather;
