import React from 'react'
import PropTypes from 'prop-types'
import {
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm } from 'react-icons/wi'
//Thunderstorm, Drizzle Rain Snow Clear Clouds
export const validValues = [
    "clouds",
    "clear",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm"
];

const stateByName = {
    clouds : WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,

}

const IconState = ({state}) => {
    const StateByName = stateByName[state];
    return (<StateByName />)
}

IconState.propTypes = {
    state:  PropTypes.oneOf(validValues ).isRequired 
}

export default IconState

