import React from 'react';
import {render} from '@testing-library/react'
import WeatherDetails from './WeatherDetails'


test("WeatherDetails Render", async()=>{

    const {findByText} = render(<WeatherDetails humidity={80} wind={10}/>)

    //AL usar BARRAS // una REGEX que encuentra 10
    const wind =  await findByText(/10/)

    const humidity =  await findByText(/80/)

    expect(wind).toHaveTextContent("Viento: 10 km/h")
    expect(humidity).toHaveTextContent("Humedad: 80%") 
})