import React, { useContext } from 'react'
import Styled from 'styled-components';
import { Context } from '../GlobalContext';

const TodayHighlightsArticle = Styled.section`
   h2 {
    margin: 23px;   
   }
   
    & div {
        background: #1E213A;
        padding: 12px;
        margin: 23px;
        margin-bottom: 32px;
    }

    .progress_humidity {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & span {
            display: block;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
        }
    }

    p.progress_percentage {
        margin: 0;
        display: flex;
        justify-content: flex-end;
    
        span {
            display: block;
        }
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
                    <TodayHighlightsArticle className="page_article">
                        <div className="wind_status">
                            <p>Wind status</p>
                            <p>{Math.round(dayWeatherToHighlight.wind_speed)}mph</p>
                            <p>{dayWeatherToHighlight.weather_state_abbr}</p>
                        </div>
                        <div className="humidity">
                            <p>Humidity</p>
                            <p>{dayWeatherToHighlight.humidity}%</p>
                            <label htmlFor="humidity" className="progress_humidity">
                                <span className="progress_start">0</span>
                                <span className="progress_mid">50</span>
                                <span className="progress_end">100</span>
                            </label>
                            <progress id="humidity" value={dayWeatherToHighlight.humidity} max="100"> 32% </progress>
                            <p className="progress_percentage">
                                <span>%</span>
                            </p>
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
