import React, { useContext } from 'react'
import Styled from 'styled-components';
import { Context } from '../GlobalContext';

const TodayHighlightsArticle = Styled.section`
   h2 {
    margin: 23px;   
   }

    & .card_container {
        background: #1E213A;
        padding: 12px;
        margin: 23px;
        margin-bottom: 32px;
    }

    .weather_highlighted {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .weather_highlighted.humidity p{
         flex-basis: 100%;
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
    .page_paragraph.number {
        font-size: 64px;
        line-height: 75px;
    }

    p.progress_percentage {
        margin: 0;
        display: flex;
        justify-content: flex-end;
    
        span {
            display: block;
        }
    }

    h3 {
        font-size: 16px;
        line-height: 19px;
    }

    page_paragraph.number {
        font-weight: bold;
        font-size: 60px;
        line-height: 71px;
 
    }

    .unity {
        font-weight: 500;
        font-size: 51px; 
    }

    .humidity_container {
        display: flex;
        flex-direction: column;
        align-items: center;
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
                        <div className="card_container weather_highlighted wind_status">
                            <div>
                                <h3>Wind status</h3>
                                <p className="page_paragraph number">{Math.round(dayWeatherToHighlight.wind_speed)} <span className="unity">mph</span></p>
                                <p>{dayWeatherToHighlight.weather_state_abbr}</p>
                            </div>
                        </div>
                        <div className="card_container humidity">
                            <div className="humidity_container">
                                <h3>Humidity</h3>
                                <p className="page_paragraph number" >{dayWeatherToHighlight.humidity}%</p>
                            </div>
                            <div className="card_container humidity_measurement">
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
                        </div>
                        <div className="card_container weather_highlighted visibility">
                            <div>
                                <h3>Visibility</h3>
                                <p className="page_paragraph number" >{Math.round(dayWeatherToHighlight.visibility)} <span className="unity">miles</span></p>
                            </div>
                        </div>
                        <div className="card_container weather_highlighted air_pressure">
                            <div>
                                <h3>Air presure</h3>
                                <p className="page_paragraph number" >{dayWeatherToHighlight.air_pressure} <span className="unity">mb</span></p>
                            </div>
                        </div>
                    </TodayHighlightsArticle>
                </>
            }
        </section>
    )
}
