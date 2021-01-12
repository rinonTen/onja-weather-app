import React, { useContext } from 'react'
import Styled from 'styled-components';
import { Context } from '../GlobalContext';

const TodayHighlightsArticle = Styled.section`
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 48px; 
 

    & div {
        background: #1E213A;
        padding: 12px;
    }
`
export default function TodayHighlightsComponent() {
    const { dayWeatherToHighlight } = useContext(Context);

    return (
        <section>
            {
                dayWeatherToHighlight &&
                <>
                    <h2>{dayWeatherToHighlight.applicable_date}'s highlights</h2>
                    <TodayHighlightsArticle>
                        <div className="wind_status">
                            <p>Wind status</p>
                            <p>{Math.round(dayWeatherToHighlight.wind_speed)}mph</p>
                            <p>{dayWeatherToHighlight.weather_state_abbr}</p>
                        </div>
                        <div className="humidity">
                            <p>Humidity</p>
                            <p>{dayWeatherToHighlight.humidity}</p>
                            <label htmlFor="humidity"></label>
                            <progress id="humidity" value="32" max="100"> 32% </progress>
                        </div>
                        <div className="visibility">
                            <p>Visibility</p>
                            <p>{Math.round(dayWeatherToHighlight.visibility)}miles</p>
                        </div>
                        <div className="air_pressure">
                            <p>Air presure</p>
                            <p>{dayWeatherToHighlight.air_pressure}mb</p>
                        </div>
                    </TodayHighlightsArticle>
                </>
            }
        </section>
    )
}
