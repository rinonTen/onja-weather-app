import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../GlobalContext';

const TodayWeatherContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 105px;

    .temp {
        font-weight: 500;
        font-size: 84px;
        line-height: 96px;
        color: #E7E7EB;
    }

    .temp_unity {
        font-size: 64px;
        font-weight: 400;
        color: #A09FB1
    }

    .weather_state {
        font-weight: 600;
        font-size: 36px;
        line-height: 42px;
        transform: translateX(18px);
        margin-top: 23px;
        margin-bottom: 48px;
    }

    .weather_state, 
    .dayname,
    .city {
        color: #88869D;
    }  

    .dayname {
        margin-bottom: 23px;
    }

    .city {
        transform: translateX(18px);
    }
    .dayname,
    .city {
        font-size: 18px;
        line-height: 21px;

        svg {
            margin-bottom: -6px;
        }
    }
`
const Img = Styled.img`
    width: 100%; 
    margin-top: 76px;
    margin-bottom: 40px;
`
 
export default function TodayWeatherComponent() {
    const { state, todayWeather, isConvertToFahrenheit, weekday, months } = useContext(Context);
    const { weather } = state;

    const temp = todayWeather && Math.round(todayWeather.the_temp);
    const tempToFahrenheit = (temp * 9 / 5) + 32;

    return (
        <TodayWeatherContainer className="today_weather_container">
            {
                todayWeather ?
                    <>
                        <div className="img_container">
                            <Img src={`https://www.metaweather.com/static/img/weather/${todayWeather.weather_state_abbr}.svg`} alt={`${todayWeather.weather_state_abbr}'s image`} />
                        </div>
                        <ul>

                            {

                                !isConvertToFahrenheit ?
                                    <li className="temp">
                                        {temp}
                                        <span className="temp_unity">°C</span>
                                    </li> :
                                    <li className="temp">
                                        {tempToFahrenheit}
                                        <span className="temp_unity">°F</span>
                                    </li>
                            }

                            <li className="weather_state">{todayWeather.weather_state_name}</li>
                            <li className="dayname">
                                <span>Today - </span>
                                <span>{weekday[new Date(todayWeather.applicable_date).getDay()]} {new Date(todayWeather.applicable_date).getDate()}, {months[new Date(todayWeather.applicable_date).getMonth()]}</span>
                            </li>
                            <li className="city">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#88869D" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                <span>{weather[0]?.title}</span>
                            </li>
                        </ul>
                    </>
                    : <div>loading...</div>
            }
        </TodayWeatherContainer>
    )
}
