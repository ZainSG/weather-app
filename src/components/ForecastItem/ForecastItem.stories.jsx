import React from 'react';
import 'typeface-roboto';
import ForecastItem from './ForecastItem';

export default {
    title: 'ForecastItem',
    component: ForecastItem 
}

 
export const ForecastItemExample = () => (
    <ForecastItem weekDay={"Lunes"} hour={10} state={"sunny"} temperature={23}  />
    
    )

