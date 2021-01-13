import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../GlobalContext';

const Img = Styled.img`
    width: 90%; 
`

let weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Frid", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
   
export default function TodayWeatherComponent() {
    const { state, todayWeather } = useContext(Context);
    const {weather } = state;

    return (
        <div>
            {
                todayWeather ?
                    <>
                        <Img src={`https://www.metaweather.com/static/img/weather/${todayWeather.weather_state_abbr}.svg`} alt={`${todayWeather.weather_state_abbr}'s image`} />
                        <ul>
                            <li>
                                {Math.round(todayWeather.the_temp)}
                                <span className="temp_degre">°C</span>
                            </li>
                            <li>{todayWeather.weather_state_name}</li>
                            <li>
                                <span>Today - </span>
                                <span>{weekday[new Date(todayWeather.applicable_date).getDay()]} {new Date(todayWeather.applicable_date).getDate()}, {months[new todayWeather.Date(applicable_date).getMonth()]}</span>
                            </li>
                            <li className="city">{weather[0]?.title}</li>
                        </ul>
                    </>
                    : <div>loading...</div>
            }
        </div>
    )
}
