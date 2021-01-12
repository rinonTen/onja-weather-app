import React from 'react'
import Styled from 'styled-components';

const DayWeatherContainer = Styled.div` 
    background-color: #1E213A;
    padding: 12px;
`
export default function DayWeatherComponent() {
    return (
        <DayWeatherContainer className="day_weather_container">
            <h3 className="day">Today</h3>
            <div className="temperature">
                <p>max</p>
                <p>min</p>
            </div>
        </DayWeatherContainer>
    )
}
