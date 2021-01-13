import React, { useContext } from 'react';
import { Context } from '../GlobalContext';


export default function SearchLocationComponent() {
    const {setShowSearch, setLocationName,} = useContext(Context);
   
    return (
        <form>
            <input onClick={() => {
                setLocationName("")
                setShowSearch(true)
                }} type="text" />
            <button>
                search
            </button>
        </form>
    )
}
