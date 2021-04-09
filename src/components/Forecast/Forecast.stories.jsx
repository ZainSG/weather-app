import React from 'react'
import Forecast from './Forecast'

export default {
    title:'Forecast',
    component: Forecast
}
const forecastItemList = [
    {hour:18, state:"clear", temperature:17, weekDay:"Jueves"},
    {hour:6, state:"clouds", temperature:18, weekDay:"Viernes"},
    {hour:12, state:"rain", temperature:18, weekDay:"Lunes"},
    {hour:18, state:"cloudd", temperature:27, weekDay:"Jueves"},
    {hour:14, state:"rain", temperature:14, weekDay:"Martes"},
    {hour:14, state:"rain", temperature:12, weekDay:"Jueves"},
]
export const ForecastExample =  () => (<Forecast forecastItemList={forecastItemList}></Forecast>)