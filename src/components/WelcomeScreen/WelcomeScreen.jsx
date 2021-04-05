import React,{useRef, useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three'

function WelcomeScreen({children}) {
    //Accede al DOM de forma directa
    const myRefDiv = useRef(null);
    const [vanta, setVanta] = useState(0) //Se inicia en 0
    //Actual Value
    console.log(myRefDiv.current)

    useEffect(()=>{
        //console.log(myRefDiv)

        //Solo se ejecute una sola vez y establezca el componente como inicial
        //vanta === 0, es igual a vanta == false
        if(!vanta){
            //Inicializar el componente
            setVanta(1)
            Clouds({
                THREE,
                el: myRefDiv.current
            })
        }
        //Al salir de la pantalla debemos detener el efecto
        //y des-asociar doso los recursos
        return () => {
            //Realiaza la tarea de destruir los recursos tomados por vanta
            if(vanta) {
                //vanta.destroy()
                console.log("Liberando recursos")
            }
        }
    },[vanta]); //Se asegura que si no hay cambio en vanta no haga nada
    
    return (
        <div className="full" ref={myRefDiv}>
            {children}    
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node 
}

export default WelcomeScreen

