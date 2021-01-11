import React, {useContext} from 'react';
import { Context } from '../GlobalContext';

export default function SearchByLocation() {
    const {setLocationQuery, setLocationWoeid} = useContext(Context);
     
    function searchLocation(e) {
        e.preventDefault();
        setLocationQuery(e.target.location.value)
    }

    function handleCheckboxes(e) {
        if(e.target.checked) {
            setLocationQuery(e.target.id)
        }
    }
    return (
        <div>
            <form onSubmit={searchLocation}>
                <label htmlFor="search_location">
                    <input type="text" name="location" placeholder="Search location" />
                    <button type="submit">Search</button>
                </label>
                <label htmlFor="london">
                    <span>London</span>
                    <input onChange={handleCheckboxes} className="location_choice" name="city" type="checkbox" id="london"/>
                </label>
                <label htmlFor="new york">
                    <span>New York</span>
                    <input className="location_choice" onChange={handleCheckboxes} name="city" type="checkbox" id="new york" />
                </label>
            </form>
        </div>
    )
}
