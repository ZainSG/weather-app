import React from 'react'
import Weather from './Weather';

export default {
    title: 'Weather',
    component: Weather
}

export const WeatherCloud = () => <Weather temperature={10} state={"clouds"}/>
export const WeatherSunny = () => <Weather temperature={10} state={"clear"}/>
export const WeatherFog = () => <Weather temperature={10} state={"fog"}/>