import { Grid, Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HomeIcon from '@mui/icons-material/Home';
import './form4.css'

const Form4 = () => {

   const { userData } = useSelector((state) => state);
   
   useEffect(() => {
      console.log(userData);
   })

   return (
      <>
         <Grid item xs={12} md={12} lg={12}>
            <div className='greetings'>
               <h1>THANK YOU <AutoAwesomeIcon sx={{color: "orange", fontSize: "3rem"}} /></h1>
               <p>{ userData.about.name.split(" ")[0] }</p>
            </div>
         </Grid>
         <Grid item xs={12} md={12} lg={12}>
            <div className="greetings-bottom">
               <p>Now you can signin as a seller</p>
               <a href="#">
                  <Button variant="contained" color="warning" endIcon={<HomeIcon />}>Home</Button>
               </a>
            </div>
         </Grid>
      </>
   )
}

export default Form4
