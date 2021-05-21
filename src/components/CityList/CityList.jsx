import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units';
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CitoInfo from '../CitiInfo';
import Weather from '../Weather';

const getCityCode = (city, countryCode) => `${city}-${countryCode}`
//li, es un item de un lista
//renderCityAndCountry se va convertir en una función que retorna otra función 
const renderCityAndCountry = eventOnClickCity => (cityAndCountry,weather) =>{
    const {city, country,countryCode } = cityAndCountry;
   // const {temperature, state} = weather;
    return(
        <ListItem 
            button    
            key={getCityCode(city,countryCode)} 
            onClick={()=> eventOnClickCity(city,countryCode)}>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item md={9} xs={12}>
                    <CitoInfo city={city} country={country}/> 
                </Grid>
                <Grid item md={3} xs={12}>
                    {/* weather && weather.temperature retorno el valor si se cunmplen la condicion sino undefined */}
                    <Weather temperature={weather && weather.temperature} 
                            state={weather && weather.state}/>
                </Grid>
            </Grid>
        </ListItem>
    ) 
}

//Cities : es un array con ciuda y country

const CityList = ({cities,onClickCity}) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) =>{
            const appID = "bf1ac51b78940285ba0026280beaf76a"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appID}`
           
            try {
                const res = await axios.get(url)

                const {data} = res
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
                const state = data.weather[0].main.toLowerCase()
                console.log(state)
                const propName = getCityCode(city,countryCode)
                const propValue = {temperature, state}
                
                setAllWeather(allWeather => ({...allWeather, [propName]:propValue}))
            } catch (err) {
                if(err.respose){
                    setError("Ha ocurrido un error en el server del clima")
                }else if(err.resquest){
                    setError("Verifica tu conexión a internet")
                }else{
                    setError("Error al cargar los datos")
                }
            }

            // .then(res =>{
            //    const {data} = res
            //    const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
            //    const state = data.weather[0].main.toLowerCase()

            //    const propName = `${city}-${country}`
            //    const propValue = {temperature, state}
               
            //    //Con esto no se necesita agregar en la dependencias [cities] de useEffect
            //    setAllWeather(allWeather => (
            //        {...allWeather, [propName]:propValue}))

            //    //Con esto se necesita agregar en la dependencias [cities,allWeather] de useEffect
            //    //setAllWeather({...allWeather, [propName]:propValue})
            // })
            // .catch(err => {
            //     if(err.respose){
            //         setError("Ha ocurrido un error en el server del clima")
            //     }else if(err.resquest){
            //         setError("Verifica tu conexión a internet")
            //     }else{
            //         setError("Error al cargar los datos")
            //     }
            // })
        }
        //Desctructurin del elemento cities [city,country]
        cities.forEach(({city,countryCode} )=> {
            setWeather(city,countryCode);
        });
       
    }, [cities]) //}, [cities,allWeather]) 
    //const weather = {temperature: 10, state: "sunny"}
    return (
      <div>
          {
            //   Cuando hay un nulo react no renderiza 
              error && <Alert onClose={()=>setError(null)} severity="error">{error}</Alert>
          }
            <List>
           {
               cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                allWeather[getCityCode(cityAndCountry.city,cityAndCountry.countryCode)]))
           } 
        </List>
      </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
