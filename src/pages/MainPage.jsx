import React from 'react'
import {useHistory} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from '../components/AppFrame'
import CityList from '../components/CityList';

const cities = [
    {city:"Guadalajara",country:"Mexico"},
    {city:"Acapulco",country:"Mexico"},
    {city:"Madrid",country:"España"}]
    
function MainPage() {
    const history = useHistory();

    const onClickHandler = () =>{
        //Permite alterar la URL por propagacion
        history.push("/city");
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} onClickCity={onClickHandler}/>
                {/* <button onClick={onClickHandler}>Ir a City Page</button> */}
            </Paper>
        </AppFrame>
    )
}


export default MainPage

