import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../GlobalContext';

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;

    .hide_manu_btn {
        background: none;
        color: #E7E7EB;
        font-size: 32px;
        align-self: flex-end;
        padding: 0;
        padding-top: 12px;
        padding-bottom: 25px;
    }
`
export default function SearchByLocation() {
    const { weather, setLocationQuery, locationQuery, locationName, ShowLocation, setShowLocation, setLocationName, setShowSearch } = useContext(Context);
    const [location, setLocation] = useState(locationQuery);

    function searchLocation(e) {
        e.preventDefault();
        setLocationQuery(e.target.location.value);
        setShowLocation(true)
    }

    const locationElements = weather !== [] && weather.map(weather => {
        return (
            <label htmlFor="search_location">
                <input type="text" onClick={(e) => {
                    setLocationQuery(e.target.value)
                    setShowSearch(false)
                    setShowLocation(false)
                    setLocationName(e.target.id)
                }}
                    name="locationName" value={weather.title} placeholder="Search location" readOnly />
            </label>
        )
    })

    return (
        <SearchContainer className="search_container">
            <button type="button" className="hide_manu_btn" onClick={() => setShowSearch(false)}>&#215;</button>
            <form className="search_form" onSubmit={searchLocation}>
                <div className="input_container">
                    <label htmlFor="search_location">
                        <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }} name="location" placeholder="Search location" />
                    </label>
                </div>
                {
                    ShowLocation && <div className="locations_container">
                        {locationElements}
                    </div>
                }

                <div className="submit_btn_container">
                    <button type="submit">Search</button>
                </div>
            </form>
        </SearchContainer>
    )
}
