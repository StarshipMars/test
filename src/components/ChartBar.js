import React from 'react'
import {
      BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
       } from 'recharts';
import { Loader } from './Loader'
import { Warning } from './Warning'
import {useSelector} from 'react-redux'




export const ChartBar = ()=>{

  const data = useSelector(state => state.tempData.data)
  const warn = useSelector(state => state.tempData.warning)
  const loading = useSelector(state => state.tempData.loader)
  const warnText = useSelector(state => state.tempData.warningText)

   if(loading){
     return <Loader />
   }

    return(
      <>
      {
        warn ? <Warning text={warnText}/> 
             :
        data[0].city.length && !warn 
             ?
         <React.Fragment>
            <h2 style={{ fontFamily: "revert" }}>Checked city: {data[0].city}</h2>
            <BarChart
              width={500}
              height={600}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="city" />
                <YAxis 
                unit="°C"
                domain={[-60,60]}
                ticks={[-60, -55,  -50, -45,  -40, -35,  -30, -25,  -20, -15,  -10 , -5, 0, 5, 10, 15 , 20 , 25 ,30 ,35, 40 , 45, 50, 55 , 60]}
                />
                <Tooltip />

                <Legend />

                <ReferenceLine y={0} stroke="#000" />
                {
                  data[0].temperature >= 0  ? <Bar dataKey='temperature' fill="red" /> : <Bar dataKey='temperature' fill="blue" />
                }
                
            </BarChart>
        </React.Fragment>
            :
         <div style={{ marginTop: '150px', color: 'grey', fontSize: '24px', fontFamily: "cursive", opacity: '0.7' }}>
            Enter the city name in the field below to get the current temperature in °C
         </div>   
      }
      
       </>
    )
}