import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../GlobalContext';

const Img = Styled.img`
    width: 90%; 
`


export default function TodayWeatherComponent() {
    const { state, todayWeather } = useContext(Context);
    const {weather } = state;

    let iconUrl; 
    if (todayWeather) {
        if (todayWeather.weather_state_abbr === "hc") {
            iconUrl = "https://www.metaweather.com/static/img/weather/hc.svg";
        }
        if (todayWeather.weather_state_abbr === "sn") {
            iconUrl = "https://www.metaweather.com/static/img/weather/sn.svg";
        }
        if (todayWeather.weather_state_abbr === "sl") {
            iconUrl = "https://www.metaweather.com/static/img/weather/sl.svg";
        }
        if (todayWeather.weather_state_abbr === "h") {
            iconUrl = "https://www.metaweather.com/static/img/weather/h.svg";
        }
        if (todayWeather.weather_state_abbr === "t") {
            iconUrl = "https://www.metaweather.com/static/img/weather/t.svg";
        }
        if (todayWeather.weather_state_abbr === "hr") {
            iconUrl = "https://www.metaweather.com/static/img/weather/hr.svg";
        }
        if (todayWeather.weather_state_abbr === "lr") {
            iconUrl = "https://www.metaweather.com/static/img/weather/lr.svg";
        }
        if (todayWeather.weather_state_abbr === "s") {
            iconUrl = "https://www.metaweather.com/static/img/weather/s.svg";
        }
        if (todayWeather.weather_state_abbr === "lc") {
            iconUrl = "https://www.metaweather.com/static/img/weather/lc.svg";
        }
        if (todayWeather.weather_state_abbr === "c") {
            iconUrl = "https://www.metaweather.com/static/img/weather/c.svg";
        }
    }
    
    return (
        <div>
            {
                todayWeather ?
                    <>
                        <Img src={iconUrl} alt={`${todayWeather.weather_state_abbr}'s image`} />
                        <ul>
                            <li>
                                {Math.round(todayWeather.the_temp)}
                                <span className="temp_degre">°C</span>
                            </li>
                            <li>{todayWeather.weather_state_name}</li>
                            <li>
                                <span>Today</span>
                                <span>{todayWeather.applicable_date}</span>
                            </li>
                            <li className="city">{weather[0]?.title}</li>
                        </ul>
                    </>
                    : <div>loading...</div>

            }
        </div>
    )
}
