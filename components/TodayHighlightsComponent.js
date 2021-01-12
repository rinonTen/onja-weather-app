import React from 'react'
import Styled from 'styled-components';
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
    return (
        <section>
            <h2>Today's highlights</h2>
            <TodayHighlightsArticle>
                <div className="wind_status">
                    <p>Wind status</p>
                    <p>7mph</p>
                    <p>ddd</p>
                </div>
                <div className="humidity">
                    <p>Humidity</p>
                    <p>75%</p>
                    <label htmlFor="humidity"></label>
                    <progress id="humidity" value="32" max="100"> 32% </progress>
                </div>
                <div className="visibility">
                    <p>Visibility</p>
                    <p>6,4 miles</p>
                </div>
                <div className="air_pressure">
                    <p>Air presure</p>
                    <p>998mb</p>
                </div>
            </TodayHighlightsArticle>
        </section>
    )
}
