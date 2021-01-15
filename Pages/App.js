import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../GlobalContext';
import Header from '../components/HeaderComponent';
import SearchLocationComponent from '../components/SearchLocationComponent';
import SearchByLocation from "../components/SearchByLocation";
import TodayWeatherComponent from '../components/TodayWeatherComponent';
import DayWeatherComponent from '../components/DayWeatherComponent';
import TodayHighlightsComponent from '../components/TodayHighlightsComponent';

const Main = Styled.main`
    & .today {
        background: #1E213A; 
    }
`

const DaysWeatherCard = Styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    padding: 54px;
`
export default function App() {
    const { state, todayWeather, showSearch } = useContext(Context);
    const { weatherDetails, loading } = state;
    const daysWeatherEl = weatherDetails !== [] && weatherDetails?.filter(weather => weather !== todayWeather).map(weather => <DayWeatherComponent key={weather.id} {...weather} />)

    return (
        <>
            {
                loading ? <div className="loading_text">Loading...</div>
                    :
                    <>
                        <Header />
                        <Main>
                            <div className={showSearch ? "weather_today_container today" : "today"}>
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
                                <DaysWeatherCard className="days_weather_container">
                                    {daysWeatherEl}
                                </DaysWeatherCard>
                                <TodayHighlightsComponent />
                            </div>
                        </Main>
                    </>
            }
        </>
    )
}
