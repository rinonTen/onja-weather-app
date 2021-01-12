import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../GlobalContext';
import SearchByLocation from "../components/SearchByLocation";
import TodayWeatherComponent from '../components/TodayWeatherComponent';
import DayWeatherComponent from '../components/DayWeatherComponent';
import TodayHighlightsComponent from '../components/TodayHighlightsComponent';

const Main = Styled.main`
    display: grid;
    grid-template-columns: 30% 68%;
    column-gap: 32px;

    & .today {
        background: #1E213A;
        padding: 12px;
    }
`

const DaysWeatherCard = Styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 32px;
`
export default function App() {
    const { state } = useContext(Context);
    const { weather, weatherDetails } = state;
    console.log(weatherDetails);

    const daysWeatherEl = weatherDetails !== [] && weatherDetails.consolidated_weather?.map(weather => <DayWeatherComponent key={weather.id} {...weather} />)

    return (
        <Main>
            <div className="today">
                <SearchByLocation />
                <TodayWeatherComponent />
            </div>
            <div>
                <DaysWeatherCard>
                    {daysWeatherEl}
                </DaysWeatherCard>
                <TodayHighlightsComponent />
            </div>
        </Main>
    )
}
