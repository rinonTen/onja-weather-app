import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../GlobalContext';
import SearchLocationComponent from '../components/SearchLocationComponent';
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
    const { state, todayWeather, showSearch } = useContext(Context);
    const { weatherDetails } = state;
    const daysWeatherEl = weatherDetails !== [] && weatherDetails?.filter(weather => weather !== todayWeather).map(weather => <DayWeatherComponent key={weather.id} {...weather} />)
    console.log(showSearch)
    return (
        <Main>
            <div className="today">
                {
                    showSearch ?
                        <SearchByLocation />
                        :
                        <>
                            <SearchLocationComponent />
                            <TodayWeatherComponent />
                        </>
                }
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
