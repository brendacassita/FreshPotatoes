import React, {useState, useContext, useEffect} from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=$
{process.env.REACT_APP_MOVIE_API_KEY}`
console.log(API_ENDPOINT)
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  return <AppContext.Provider value='hello' >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default (AppContext, AppProvider);