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
                
            </button>
        </Form>
    )
}
