import React, {useContext} from 'react';
import { Context } from '../GlobalContext';


export default function HeaderComponent() {
    const { setIsConvertToFahrenheit } = useContext(Context);
     
    return (
        <header>
            <div className="page_container">
                <h1>
                    Weather App
                </h1>
                <div className="button_container">
                    <button type="button" onClick={() => setIsConvertToFahrenheit(false)} className="convert_to_celcius">℃</button>
                    <button type="button" onClick={() => setIsConvertToFahrenheit(true)} className="convert_to_fanhereit">℉</button>
                </div>
            </div>
        </header>
    )
}
