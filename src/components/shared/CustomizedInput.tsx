// import React from 'react'
import { TextField } from '@mui/material';

type Props = {
  name: string;
  type: string;
  label:string;
};

const CustomizedInput = (props:Props) => {
  return (
    <TextField
    margin="normal" 
    InputLabelProps ={{style:{color:"white"}}} 
    name = {props.name} label={props.label} type={props.type}
    InputProps={{style:{width:"400px", borderRadius:10, fontSize:12, color:"white"}}}
    ></TextField>
  )
}

export default CustomizedInput
