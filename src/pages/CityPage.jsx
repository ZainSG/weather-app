import React,{useState,useEffect} from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import 'moment/locale/es'
import {useParams} from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CitiInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'



const dataExample = [
    {
        dayHour: "Jue 18",
        min: 14,
        max: 22
    },
    {
        dayHour: "Vie 06",
        min: 18,
        max: 27
    },
    {
        dayHour: "Vie 12",
        min: 18,
        max: 28
    },
    {
        dayHour: "Vie 18",
        min: 18,
        max: 25
    },
    {
        dayHour: "Sab 06",
        min: 15,
        max: 22
    },
    {
        dayHour: "Sab 12",
        min: 12,
        max: 29
    },
]

const forecastItemListExample = [
    {hour:18, state:"clear", temperature:17, weekDay:"Jueves"},
    {hour:6, state:"clouds", temperature:18, weekDay:"Viernes"},
    {hour:12, state:"rain", temperature:18, weekDay:"Lunes"},
    {hour:19, state:"clouds", temperature:27, weekDay:"Jueves"},
    {hour:14, state:"rain", temperature:14, weekDay:"Martes"},
    {hour:14, state:"rain", temperature:12, weekDay:"Jueves"},
]

const CityPage = () => {



    const [data, setData] = useState(null)
    const [forecastItemList, setForacastItemList] = useState(null)

    const {city, countryCode} = useParams();
   

    useEffect(() => {

        const getForecast = async () => {
            const appID = "bf1ac51b78940285ba0026280beaf76a"
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appID}`
            
            try {
                const {data} = await axios.get(url)
                const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))

                const daysAhead = [1, 2, 3, 4, 5]
                const days = daysAhead.map(d => moment().add(d, 'd'))
             
                const dataAux = days.map(day => { 

                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        console.log(dayOfYear)
                        return dayOfYear === day.dayOfYear()
                    })
                    console.log("day.dayOfYear", day.dayOfYear())
                    console.log("TemObjAyyar",tempObjArray)

                    const temps = tempObjArray.map(item => item.main.temp)
                    
                    return({
                        dayHour: day.format('ddd'),
                        min: toCelsius(Math.min(...temps)),
                        max: toCelsius(Math.max(...temps))
                    })
                    
                })
                
                setData(dataAux)

                //{hour:18, state:"clear", temperature:17, weekDay:"Jueves"},
                const interval = [4, 8, 12, 16, 20, 24]
                const forescastItemListAux = data.list
                .filter((item,index) => interval.includes(index))
                .map(item =>{
                    return({
                        hour: moment.unix(item.dt).hour(), 
                        weekDay: moment.unix(item.dt).format('dddd'),
                        state: item.weather[0].main.toLowerCase(), 
                        temperature: toCelsius(item.main.temp)
                        
                    })
                })
                setForacastItemList(forescastItemListAux)
        
            } catch (error) {
                console.log(error)
            }
        }

        getForecast()
    }, [city, countryCode])

    const country = "Mexico"
    const state = "clouds"
    const temperature = 18
    const humidity = 80
    const wind = 5


        
    return (
        <AppFrame>
            <Grid container
            justify="space-around"
            direction="column"
            spacing={2}>
                <Grid item  container 
                    xs={12} 
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container item xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature}></Weather>
                    <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>
                </Grid>
                <Grid item>
                   { data && <ForecastChart data={data}/>}
                </Grid>
                <Grid item>
                    { forecastItemList && <Forecast forecastItemList={forecastItemList}/>}
                </Grid>
            </Grid>
        </AppFrame>

    )
}


export default CityPage

