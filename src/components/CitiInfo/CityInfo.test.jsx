//imr
import React from 'react';
import {render} from '@testing-library/react'
import CityInfo from './CityInfo'; //SUT: System Under Testing

test("CityInfo render", async() => {

    const city = "Guadalajara";
    const country = "Mexico";
    //Renderiza el componente y retorno una serie de funciones
    const {findAllByRole} = render(<CityInfo city={city} country={country}></CityInfo>)

    //BUSCA TODOS LOS COMPONENTES SEAN CABECERA : H1,H2...
    const cityAndCountryComponents = await findAllByRole("heading")

    //Cuando el test debe ser correcto? 
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})