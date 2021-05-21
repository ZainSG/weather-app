import React from 'react';

class ErrorBoundary extends React.Component{

     constructor(props){
         super(props)

         this.state = {
           hasError : false
         }
     }
 
    
    static getDerivedStateFromError(error){
        //No se puede hacer esto porque es un metodo static y no hay acceso a this
        // this.setState({hasError: true})
        return {hasError: true} 
    }

    componentDidCatch(error, errorInfo){
        console.log("ErrorInfo",errorInfo)
    }

    render(){
        return(
            this.state.hasError?
                ( <h1>Hubo un error</h1> )
            :
                ( this.props.children)
        )
    }

} 

export default ErrorBoundary
