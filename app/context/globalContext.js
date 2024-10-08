"use client"

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react"


const GlobalContext = createContext();
const GlobalContextUpdate = createContext();


export const GlobalContextProvider = ({children})=>{
    const [forecast, setForecast] = useState({});
    const [airQuality,setAirQuality] = useState({});
    const [fiveDayForecast,setFiveDayForecast] = useState({});

    //weather forecast
    const fetchForecast = async()=>{
        try{
            const res = await axios.get("api/weather")

            setForecast(res.data);            

        }catch(error){
            console.log("Error fetching forecast data", error.message);
            
        }
    };


    //Air quality
    const fetchAirQuality = async()=>{
        try{
            const res = await axios.get("api/pollution");
            setAirQuality(res.data);
        }catch(error){
            console.log("Error fetching air quality data: ",error.message);
            
        }
    };


    //five day forecast
    const fetchFiveDayForecast = async() =>{
        try{
            const res = await axios.get("api/fiveday");            
            setFiveDayForecast(res.data);
        }catch(error){
            console.log("Error fetching five day forecast data: ",error.message);
            
        }
    }


    useEffect(()=>{
        fetchForecast();
        fetchAirQuality();
        fetchFiveDayForecast();
    },[]);

    return(
        
        <GlobalContext.Provider 
        value={{
            forecast,
            airQuality,
            fiveDayForecast,
        }}>
            <GlobalContextUpdate.Provider >
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
};



export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate)

