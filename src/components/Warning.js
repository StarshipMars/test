import Alert from '@material-ui/lab/Alert';


export const Warning = ({ text })=>{

    return (

        <Alert 
        variant="outlined" 
        severity="warning" 
        style={{ marginTop: "150px", width: "330px" , color: 'orange', fontSize: '24px', fontFamily: "revert" }} 
        >
           {text}
        </Alert>
    )
}