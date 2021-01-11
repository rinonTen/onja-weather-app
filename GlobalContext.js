import React, { useEffect, useState, createContext, useContext } from 'react'
import Reducer from './Reducer';
const Context = createContext();
const PROXI_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.metaweather.com/api/location/search/?query=";
const WOEID_URL = "https://www.metaweather.com/api/location/";
function GlobalContext({ children }) {
    const { state, dispatch, fetchWeather, fetchWeatherDetails } = Reducer(PROXI_URL, API_URL);
    let { weather, loading, weatherDetails } = state;
    const [locationQuery, setLocationQuery] = useState("Amsterdam");
    const [locationWoeid, setLocationWoeid] = useState("727232")
    const [showSearch, setShowSearch] = useState(false);

    // Fetch weather
    let weatherEndpoint = PROXI_URL + API_URL + locationQuery;

    useEffect(() => {
        fetchWeather(weatherEndpoint);
        fetchWeatherDetails(PROXI_URL + WOEID_URL + locationWoeid + "/")
    }, [locationQuery, locationWoeid])


    useEffect(() => {
        if (loading == false) {
            weather.map(city => setLocationWoeid(city.woeid));
        }
    }, [weather, locationQuery, locationWoeid])
 
    return (
        <Context.Provider value={{ weather, weatherDetails, setShowSearch, setLocationQuery, setLocationWoeid }}>
            {children}
        </Context.Provider>
    )
}

export { Context, GlobalContext };
