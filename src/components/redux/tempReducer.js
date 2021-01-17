import { showLoader, hideLoader, getRequest, hideAlert, showAlert , clear} from './actionsType'

const initialState = {
    data:[ { city: '', temperature: 0 } ],
    loader: false,
    warning: false,
    warningText: ''
}

export const tempReducer = (state = initialState, action)=>{
    
  switch(action.type){
    case showLoader:
     return { ...state, loader: true }
    case hideLoader:
      return { ...state, loader: false }
    case getRequest:
      return { ...state, data: action.payload }
    case hideAlert:
        return { ...state, warning: false }
    case showAlert:
        return { ...state, warning: true , warningText: action.payload}
    case clear:
        return { ...state, data:[ { city: '', temperature: 0 } ] }
    default: 
    return state 
  }
}