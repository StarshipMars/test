import CircularProgress from "@material-ui/core/CircularProgress";

const style = {
    backgroundColor: 'rgba(143, 217, 230, 0.5)',
    width: '80px',
    height: '80px',
    borderRadius: '39px',
    marginTop: '100px'
}

export const Loader = ()=>{
    return(
        <div style={style}>
           {
               <CircularProgress disableShrink style={{ width: '80px', height: '80px', color: 'blue'}}/>
           }
        </div>
        
    )
}