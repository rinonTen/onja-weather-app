import React, { useContext } from 'react';
import { Context } from '../GlobalContext';

export default function SearchByLocation() {

    const { weather, setLocationQuery, locationName, setLocationName, setLocationWoeid, setShowSearch } = useContext(Context);
 console.log(weather)
    function searchLocation(e) {
        e.preventDefault();
        setLocationName(e.target.location.value)
    }

    return (
        <div>
            <button type="button" onClick={() => setShowSearch(false)}>&#215;</button>
            <form onSubmit={searchLocation}>
                <div>
                    <label htmlFor="search_location">
                        <input type="text" name="location" placeholder="Search location" />
                    </label>
                    {
                        locationName !== "" &&
                        <label htmlFor="search_location">
                            <input type="text" onClick={(e) => {
                                setLocationQuery(e.target.value)
                                setShowSearch(false)
                            }}
                            name="locationName" value={locationName} placeholder="Search location" readOnly />
                        </label>
                    }

                </div>
                <div>
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}
