import React, {useContext} from 'react';
import { Context } from '../GlobalContext';



export default function TodayWeatherComponent() {
    const {state, todayWeather } = useContext(Context);
    const { weatherDetails } = state; 
  
    return (
        <div>
            {
                todayWeather  ? 
            <ul>
                <li>{Math.round(todayWeather.the_temp)}C</li>
                <li>{todayWeather.weather_state_name}</li>
                <li>
                    <span>Today</span>
                    <span>{todayWeather.applicable_date}</span>    
                </li>
                <li className="city">{weatherDetails.title}</li>
            </ul> : <div>loading...</div>
        }
        </div>
    )
}
