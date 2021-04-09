 import React from 'react'
 import {fireEvent, render} from '@testing-library/react'
 import CityList from './CityList'

 const listCity = [
    {city:"Guadalajara",country:"Mexico",countryCode: "MX"},
    {city:"Acapulco",country:"Mexico", countryCode: "MX"},
    {city:"Madrid",country:"España", countryCode: "ES"}
 ]
 test("CityList Render", async() =>{
     const {findAllByRole} = render(<CityList cities={listCity} onClickCity={()=>{}}/>)
 
     const items = await findAllByRole("button");

     expect(items).toHaveLength(3);
})

test("CityList click on item", async()=>{

    // Debemos simular una accion de usuario, click sobre un item
    // para eso se usa una funcion mock

    const fnClickOnItem = jest.fn();
    const {findAllByRole} = render(<CityList cities={listCity} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole('button');

    //Simular la accion utilizando fireEvent
    // es parte de la libreria  testReact
    fireEvent.click(items[0])

    //Se es espera despues del click? 
    //se llama a la funcion una sola vez 
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
});