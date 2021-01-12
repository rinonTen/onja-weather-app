import React, { useEffect, useState, createContext, useContext } from 'react'
import Reducer from './Reducer';
const Context = createContext();
const PROXI_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.metaweather.com/api/location/search/?query=";
const WOEID_URL = "https://www.metaweather.com/api/location/";

function GlobalContext({ children }) {
    const { state, dispatch, fetchWeather, fetchWeatherDetails } = Reducer(PROXI_URL, API_URL);
    let { weather, loading, weatherDetails } = state;
    const [locationQuery, setLocationQuery] = useState("Amsterdam");// Default location
    const [locationWoeid, setLocationWoeid] = useState("727232");//Default woeid
    const [showSearch, setShowSearch] = useState(false);
    const [todayWeather, setWeatherToday] = useState({})
    const [dayWeatherToHighlight, setDayWeatherToHighlight] = useState({});
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

    // Date today to compare with the date in the api
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    month = "0" + month;
    let year = today.getFullYear();
    if (day < 10){day = '0' + day};
    //date today formated
    today = year + '-' + month + '-' + day; 
    if (month < 10) {month = '0' + month};

  // Find today's weather
  useEffect(() => {
    const dateToday = weatherDetails.consolidated_weather &&  weatherDetails.consolidated_weather.find(weather => weather.applicable_date === today);
    setWeatherToday(dateToday);
    setDayWeatherToHighlight(dateToday)
}, [weatherDetails])
    
  function highlightWeatherOfTheDay(e) {
    const date = e.currentTarget.id
    const dayToHighlight = weatherDetails.consolidated_weather &&  weatherDetails.consolidated_weather.find(weather => weather.applicable_date === date);
    setDayWeatherToHighlight(dayToHighlight);
}
 
    return (
        <Context.Provider value={{ state, dispatch, weather, highlightWeatherOfTheDay, dayWeatherToHighlight, todayWeather, weatherDetails, setShowSearch, setLocationQuery, setLocationWoeid }}>
            {children}
        </Context.Provider>
    )
}

export { Context, GlobalContext };
