import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { 
    useGetCurrentWeatherQuery, 
    useGetWeatherForecastQuery 
} from "../redux/weatherSlice";
import { useSelector } from "react-redux";

import type { RootState } from '../redux/store'


const WeatherBlock1 = styled.div`
    width: 100%;
    height: 400px;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const WeatherBlock2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
`

const WeatherNow = styled.div`
    width: 70%;
    color: black;
`

const WeatherHourly = styled.div`
    width: 30%;
    color: black;
`

const WeatherCard = styled.div`
    width: 60%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InfoLine = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    padding: 0;
`

const InfoLineLight = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
`

const HourlyCard = styled.div`
    width: 70%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HourlyCardItem = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px dotted black;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const DailyWeatherItem = styled.div`
    width: 150px;
    height: 100px;
    border: 1px solid grey;
    background-color: #b4afaf;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`

const DailySection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`


const Main = () => {

    const search = useSelector((state: RootState) => state.search)
    

    const { data: currentWeather, isFetching: currentFetch} = useGetCurrentWeatherQuery({city: 'Yerevan'});
    const {data: forecastWeather, isFetching: forecastFetch} = useGetWeatherForecastQuery({city: 'Yerevan'});

    
    useEffect(() => {
        
    }, [search])

    return (
        <>
           <WeatherBlock1>
                <WeatherNow>
                    {currentFetch && <div>Loading...</div>}
                    {!currentFetch && currentWeather && (
                        <WeatherCard>
                            <InfoLine>{currentWeather.name}</InfoLine>
                            <InfoLine>{currentWeather.main.temp}&#8451;</InfoLine>
                            <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`} id="image" alt="" width="100px" />
                            <InfoLine>{currentWeather.weather[0].main}</InfoLine>
                        </WeatherCard>
                    )}
                </WeatherNow>
                <WeatherHourly>
                    {forecastFetch && <div>Loading...</div>}
                    {!forecastFetch && forecastWeather && (
                        <HourlyCard>
                            {forecastWeather.list.map(item => 
                            new Date(item.dt_txt).getDate() == new Date().getDate() &&
                                <HourlyCardItem>
                                    <InfoLineLight>{item.dt_txt}</InfoLineLight>
                                    <InfoLineLight>{item.main.temp}&#8451;</InfoLineLight>
                                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} id="image" alt="" width="25px" />
                                </HourlyCardItem>
                            )}
                        </HourlyCard>
                    )}
                </WeatherHourly>
           </WeatherBlock1>
           <WeatherBlock2>
           {forecastFetch && <div>Loading...</div>}
           {!forecastFetch && currentWeather && (
            <>
            {forecastWeather.list.map(item => 
                new Date(item.dt_txt).getDate() !== new Date().getDate() &&  new Date(item.dt_txt).getHours() == 12 && 
                <DailyWeatherItem>
                        <InfoLineLight>{item.dt_txt}</InfoLineLight>
                        <DailySection>
                            <InfoLineLight>{item.main.temp}&#8451;</InfoLineLight>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} id="image" alt="" width="40px" />
                        </DailySection>
                </DailyWeatherItem>
            )}
            </>
                )}
           </WeatherBlock2>
        </>
    )
}

export default Main