import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../GlobalContext';

const Form = Styled.form`
    display: flex;
    justify-content: space-between;
    padding: 11px;
    padding-top: 18px;


    input {
        padding: 11px;
        padding-left: 18px;
        padding-right: 18px;
        background: #6E707A;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        flex-basis: 40%;
        color: white;
        }

        button {
            background: rgba(110, 112, 122, 0.3);
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

`

export default function SearchLocationComponent() {
    const {weather, setShowSearch, setLocationName,} = useContext(Context);

    return (
        <Form>
            <input onClick={() => {
                setLocationName("")
                setShowSearch(true)
                }} type="text" placeholder="Search for places" />
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ffffff" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
            </button>
        </Form>
    )
}
