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
    let iconUrl;

    if (weather_state_abbr === "hc") {
        iconUrl = "https://www.metaweather.com/static/img/weather/hc.svg";
    }
    if (weather_state_abbr === "sn") {
        iconUrl = "https://www.metaweather.com/static/img/weather/sn.svg";
    }
    if (weather_state_abbr === "sl") {
        iconUrl = "https://www.metaweather.com/static/img/weather/sl.svg";
    }
    if (weather_state_abbr === "h") {
        iconUrl = "https://www.metaweather.com/static/img/weather/h.svg";
    }
    if (weather_state_abbr === "t") {
        iconUrl = "https://www.metaweather.com/static/img/weather/t.svg";
    }
    if (weather_state_abbr === "hr") {
        iconUrl = "https://www.metaweather.com/static/img/weather/hr.svg";
    }
    if (weather_state_abbr === "lr") {
        iconUrl = "https://www.metaweather.com/static/img/weather/lr.svg";
    }
    if (weather_state_abbr === "s") {
        iconUrl = "https://www.metaweather.com/static/img/weather/s.svg";
    }
    if (weather_state_abbr === "lc") {
        iconUrl = "https://www.metaweather.com/static/img/weather/lc.svg";
    }
    if (weather_state_abbr === "c") {
        iconUrl = "https://www.metaweather.com/static/img/weather/c.svg";
    }

    return (
        <DayWeatherContainer id={applicable_date} onClick={highlightWeatherOfTheDay} className="day_weather_container">
            <h3 className="day">{applicable_date}</h3>
            <img src={iconUrl} alt={`${weather_state_abbr}'s icon`} />
            <div className="temperature">
                <p>{Math.round(max_temp)}°C</p>
                <p>{Math.round(min_temp)}°C</p>
            </div>
        </DayWeatherContainer>
    )
}
