import React, { useState, useReducer } from 'react'

export default function Reducer() {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_WEATHER": {
                return {
                    ...state,
                    loading: action.loading,
                    weather: action.weatherData,
                }
            }
            case "SET_WEATHER_DETAILS": {
                return {
                    ...state,
                    weatherDetails: action.weatherDetailsData
                }
            }
            
            default:
                return state
        }
    }, {
        loading: true,
        weather: [],
        weatherDetails: [],
    })

    async function fetchWeather(endpoint) {
        const response = await fetch(endpoint);
        const data = await response.json(); 
        dispatch({ type: "SET_WEATHER", loading: false, weatherData: data})
    }

    async function fetchWeatherDetails(endpoint) {
        const response = await fetch(endpoint);
        const data = await response.json(); 
        dispatch({ type: "SET_WEATHER_DETAILS", loading: false, weatherDetailsData: data.consolidated_weather})
    }
    return { state, dispatch, fetchWeather, fetchWeatherDetails };
 
}
