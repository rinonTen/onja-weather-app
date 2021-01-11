import React, {  useEffect, useState, createContext, useContext } from 'react'
import Reducer from './Reducer';
const Context = createContext();

function GlobalContext({children}) {
    return (
        <Context.Provider value="joo">
          {children}
        </Context.Provider>
      )
}

export { Context, GlobalContext };
