import React from 'react'
import Forecast from './Forecast'
import {render}  from '@testing-library/react'

const forecastItemList = [
    {hour:18, state:"clear", temperature:17, weekDay:"Jueves"},
    {hour:6, state:"clouds", temperature:18, weekDay:"Viernes"},
    {hour:12, state:"rain", temperature:18, weekDay:"Lunes"},
    {hour:18, state:"clouds", temperature:27, weekDay:"Jueves"},
    {hour:14, state:"rain", temperature:14, weekDay:"Martes"},
    {hour:14, state:"rain", temperature:12, weekDay:"Jueves"},
]

test('Forecast Render', async()=>{
    //Encontrar elemento por ID
    const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}></Forecast>) 

    const forecastItem = await findAllByTestId('forecast-item-container')
  
    expect(forecastItem).toHaveLength(6)
})