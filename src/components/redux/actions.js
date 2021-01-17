import { showLoader,  hideLoader, getRequest, hideAlert, showAlert, clear } from './actionsType'
import axios from 'axios'

export function showLoading(){

    return{
        type: showLoader
    }
}

export function hideLoading(){

    return{
        type: hideLoader
    }
}

export function hideWarning(){
    return {
        type: hideAlert
    }
}

export function showWarning(text){
    return dispatch =>{
        dispatch({
          type: showAlert,
          payload: text
        })

        setTimeout(()=>{
           dispatch(hideWarning())
        }, 3000)
        
    }
}

export function clearData(){
     return {
         type: clear
     }
}

// get temperature and convert Calvin to Celsius
export function getTemperature(value){

    return async dispatch =>{
        try{
            dispatch(showLoading())
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b6ff068291a021a29d163871a49d7a04`)
            setTimeout(()=>{
                dispatch({ type: getRequest, payload: [{ city: response.data.name , temperature: ( (+response.data.main.temp) - 273.15 ).toFixed(1) }] })
                dispatch(hideLoading())
           }, 4000)
        }catch(e){
           dispatch(showWarning('Something went wrong or check city\'s name ...'))
           dispatch(hideLoading())
        }
        
   }
}