import React, { useContext } from 'react';
import { Context } from '../GlobalContext';

import Styled from 'styled-components';

const DayWeatherContainer = Styled.div` 
    background-color: #1E213A;
    padding: 12px;

    img {
        width: 56.44px;
        height: 62px;
        align-self: center;
    }

    .temperature {
        display: flex;
        justify-content: space-between;
    }
`
export default function DayWeatherComponent({ weather_state_abbr, max_temp, min_temp, applicable_date }) {
    const { highlightWeatherOfTheDay } = useContext(Context);
let weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Frid", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
   
    return (
        <DayWeatherContainer id={applicable_date} onClick={highlightWeatherOfTheDay} className="day_weather_container">
            <h3 className="day"> {weekday[new Date(applicable_date).getDay()]} {new Date(applicable_date).getDate()}, {months[new Date(applicable_date).getMonth()]} </h3>
            <img src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt={`${weather_state_abbr}'s icon`} />
            <div className="temperature">
                <p>{Math.round(max_temp)}°C</p>
                <p>{Math.round(min_temp)}°C</p>
            </div>
        </DayWeatherContainer>
    )
}
