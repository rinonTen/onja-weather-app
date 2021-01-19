import React, { useContext } from 'react';
import { Context } from '../GlobalContext';

import Styled from 'styled-components';

const DayWeatherContainer = Styled.div` 
    background-color: #1E213A;
    padding: 12px;
    cursor: pointer;

    .image_container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 31px;
    }

    img {
        width: 75%; 
        align-self: center;
    }

    .temperature {
        display: flex;
        justify-content: space-between;
    }

    .temperature p {
        font-size: 16px;
        line-height: 19px;
    }

    .temperature p:nth-of-type(2) {
        color: #A09FB1;
    }

    .day {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }
`
export default function DayWeatherComponent({ weather_state_abbr, max_temp, min_temp, applicable_date }) {
    const { highlightWeatherOfTheDay, isConvertToFahrenheit,weekday, months, dateTomorrow } = useContext(Context);
    
    const maxTempToFahrenheit = (max_temp * 9/5) + 32;
    const minTempToFahrenheit = (min_temp * 9/5) + 32;
   
    return (
        <DayWeatherContainer id={applicable_date} onClick={highlightWeatherOfTheDay} className="day_weather_container">
            <h3 className="day">  {applicable_date === dateTomorrow  ? "Tomorrow" : `${weekday[new Date(applicable_date).getDay()]} ${new Date(applicable_date).getDate()}, ${months[new Date(applicable_date).getMonth()]}`} </h3>
            <div className="image_container">
              <img src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt={`${weather_state_abbr}'s icon`} />
            </div>
            <div className="temperature">
                <p>{isConvertToFahrenheit ? `${Math.round(maxTempToFahrenheit)}°F` : `${Math.round(max_temp)}°C`}</p>
                <p>{isConvertToFahrenheit ? `${Math.round(minTempToFahrenheit)}°F` : `${Math.round(min_temp)}°C`}</p>
            </div>
        </DayWeatherContainer>
    )
}
