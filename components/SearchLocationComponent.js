import React, { useContext } from 'react';
import { Context } from '../GlobalContext';


export default function SearchLocationComponent() {
    const {setShowSearch} = useContext(Context);
   
    return (
        <form>
            <input onClick={() => setShowSearch(true)} type="text" />
            <button>
                search
            </button>
        </form>
    )
}
