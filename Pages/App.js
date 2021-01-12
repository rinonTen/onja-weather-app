import React from 'react';
import Styled from 'styled-components';

import SearchByLocation from "../components/SearchByLocation";
import TodayWeatherComponent from '../components/TodayWeatherComponent';
import DayWeatherComponent from '../components/DayWeatherComponent';
import TodayHighlightsComponent from '../components/TodayHighlightsComponent';

const Main = Styled.main`
    display: grid;
    grid-template-columns: 30% 68%;
    column-gap: 32px;

    & div:first-of-type {
        background: #1E213A;
        padding: 12px;
    }
`
export default function App() {
    return (
        <Main>
            <div>
                <SearchByLocation />
                <TodayWeatherComponent />
            </div>
            <div>
                <DayWeatherComponent />
                <TodayHighlightsComponent />                
            </div>
        </Main>
    )
}
