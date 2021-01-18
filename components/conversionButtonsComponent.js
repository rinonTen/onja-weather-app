import React, {useContext} from 'react';
import { Context } from '../GlobalContext';


export default function ConversionButtonsComponent() {
    const { setIsConvertToFahrenheit, isConvertToFahrenheit } = useContext(Context);
     console.log(isConvertToFahrenheit)
    return (
        <>
            <div className="page_container">
                <div className="button_container">
                    <button type="button" onClick={() => {
                        console.log("I am clicked")
                        setIsConvertToFahrenheit(false)}} className="convert_to_celcius">℃</button>
                    <button type="button" onClick={() => setIsConvertToFahrenheit(true)} className="convert_to_fanhereit">℉</button>
                </div>
            </div>
        </>
    )
}
