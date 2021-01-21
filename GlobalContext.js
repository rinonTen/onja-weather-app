import React, { useEffect, useState, createContext, useContext } from 'react'
import Reducer from './Reducer';
import DateFormat from './DateFormat';

const Context = createContext();
const PROXI_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.metaweather.com/api/location/search/?query=";
const WOEID_URL = "https://www.metaweather.com/api/location/";

function GlobalContext({ children }) {
    const { state, dispatch, fetchWeather, fetchWeatherDetails } = Reducer(PROXI_URL, API_URL);
    const { dayFormated } = DateFormat();
    let { weather, loading, weatherDetails } = state;
    const [ShowLocation, setShowLocation] = useState(false);
    const [locationQuery, setLocationQuery] = useState("Amsterdam");// Default location
    const [locationName, setLocationName] = useState('');
    const [locationWoeid, setLocationWoeid] = useState("727232");//Default woeid
    const [showSearch, setShowSearch] = useState(false);
    const [todayWeather, setWeatherToday] = useState({})
    const [dayWeatherToHighlight, setDayWeatherToHighlight] = useState({});
    const [isConvertToFahrenheit, setIsConvertToFahrenheit] = useState(false);
    // Formating date
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Frid", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
    }, [locationQuery, locationWoeid, weather])

    console.log(weatherDetails)

    console.log(weather)
    // Date today to compare with the date in the api
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    month = "0" + month;
    let year = today.getFullYear();
    if (day < 10) { day = '0' + day };
    //date today formated
    today = year + '-' + month + '-' + day;
    if (month < 10) { month = '0' + month };

    // Date today and tomorrow
    let currentDate = new Date();
    let todayTimestamp = currentDate.setDate(currentDate.getDate());
    let tommorowTimestamp = currentDate.setDate(currentDate.getDate() + 1)

    function getDates(timestamp) {
        let date = new Date(timestamp);
        let dateTomorrow = date.toLocaleDateString();
        let dateTomorrowFormated = dateTomorrow.replace(/(\d+)\/(\d+)\/(\d+)/g, "$3-0$1-$2");
        return dateTomorrowFormated;
    }

    const dateToday = getDates(todayTimestamp);
    const dateTomorrow = getDates(tommorowTimestamp);

    // Find today's weather
    useEffect(() => {
        const dateToday = weatherDetails && weatherDetails.find(weather => weather.applicable_date === today);
        setWeatherToday(dateToday);
        setDayWeatherToHighlight(dateToday)
    }, [dayFormated, weatherDetails])

    function highlightWeatherOfTheDay(e) {
        const date = e.currentTarget.id
        const dayToHighlight = weatherDetails && weatherDetails.find(weather => weather.applicable_date === date);
        setDayWeatherToHighlight(dayToHighlight);
    }

    return (
        <Context.Provider value={{ state, dispatch, weather, highlightWeatherOfTheDay, dayWeatherToHighlight, todayWeather, weatherDetails, setShowSearch, setLocationQuery, locationQuery, ShowLocation, setShowLocation, locationName, setLocationName, setLocationWoeid, setShowSearch, showSearch, isConvertToFahrenheit, setIsConvertToFahrenheit, weekday, months, dateToday, dateTomorrow }}>
            {children}
        </Context.Provider>
    )
}

export { Context, GlobalContext };
