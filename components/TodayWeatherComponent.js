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
                            <li className="city">{weather[0]?.title}</li>
                        </ul>
                    </>
                    : <div>loading...</div>
            }
        </TodayWeatherContainer>
    )
}
