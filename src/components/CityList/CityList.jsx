import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import CitoInfo from '../CitiInfo';
import Weather from '../Weather';

//li, es un item de un lista
//renderCityAndCountry se va convertir en una función que retorna otra función 
const renderCityAndCountry = eventOnClickCity => cityAndCountry =>{
    const {city, country } = cityAndCountry;
    return(
        <li key={city} onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                alignItems="center"
            >
                <Grid item md={8} xs={12}>
                    <CitoInfo city={city} country={country}/> 
                </Grid>
            
                <Grid item md={4} xs={12}>
                    <Weather temperature={10} state={"sunny"}/>
                </Grid>
            </Grid>
        </li>
    ) 
}

//Cities : es un array con ciuda y country

const CityList = ({cities,onClickCity}) => {
    return (
        <ul>
           {
               cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
           } 
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired 
    }).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
