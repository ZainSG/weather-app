import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CitoInfo from '../CitiInfo';
import Weather from '../Weather';

//li, es un item de un lista
//renderCityAndCountry se va convertir en una función que retorna otra función 
const renderCityAndCountry = eventOnClickCity => (cityAndCountry,weather) =>{
    const {city, country } = cityAndCountry;
    const {temperature, state} = weather;
    return(
        <ListItem 
            button    
            key={city} 
            onClick={eventOnClickCity}>
            <Grid container
                justify="center"
                alignItems="center"
            >
                <Grid item md={9} xs={12}>
                    <CitoInfo city={city} country={country}/> 
                </Grid>
            
                <Grid item md={3} xs={12}>
                    <Weather temperature={temperature} state={state}/>
                </Grid>
            </Grid>
        </ListItem>
    ) 
}

//Cities : es un array con ciuda y country

const CityList = ({cities,onClickCity}) => {
    const weather = {temperature: 10, state: "sunny"}
    return (
        <List>
           {
               cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,weather))
           } 
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired 
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
