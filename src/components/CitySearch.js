import React from 'react'
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {useDispatch} from 'react-redux';
import { showWarning, getTemperature , clearData} from './redux/actions';


// button for search
  const SearchButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      width: '120px',
      height: '50px',
      color: '#fff',
      "&:hover": {
        backgroundColor: green[700]
      }
    }
  }))(Button)


  // input field
  const Input = withStyles((theme) => ({
    root: {
      width: '230px',
      height: '50px',
      color: '#fff',
      cursor: 'pointer',
      "& label":{
          marginTop: '-12px'
      }
    }
  }))(TextField)


  // wrapper for button and input field
  const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 70%;
   margin-top: 100px;
   margin-bottom: 15px;
  `


export const CitySearch = ()=>{
 const inputValue = React.createRef()
 const dispatch = useDispatch()

   function getCitytemp(){
     let value = inputValue.current.children[1].children[0].value

     if(!value.length){
        dispatch(showWarning('The field cannot be empty !'))
     }
     else{
        dispatch(getTemperature(value))
     }
   
 }

    function deleteValue(){
    let value = inputValue.current.children[1].children[0].value
    if(!value.length){
        dispatch(clearData())
    }

     }
    

    return(

        <SearchContainer>

            <Input ref={inputValue} id="standard-basic" onChange={()=> deleteValue()} label="Enter the name of the city" />
            <SearchButton onClick={()=> getCitytemp()}>
               Search
            </SearchButton>

        </SearchContainer>
        
    )
       
    
}

const mapDispatchToProps = {
    showWarning,
    getTemperature,
    clearData
  }

const mapStateToProps = (state)=>({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch)