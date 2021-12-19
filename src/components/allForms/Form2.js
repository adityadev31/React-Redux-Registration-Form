import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'

const Form2 = ({ data, locationData, setLocationData }) => {

    const countries = Object.keys(data.countries);

    const handleChange = (e) => {
       setLocationData({...locationData, [e.target.name]: e.target.value});
    }

    const handleChangeLanguage = (e) => {
       setLocationData({...locationData, language: {...locationData.language, [e.target.name]: !locationData.language[e.target.name]}});
    }

   return (
      <>
         <Grid item xs={12} md={4}>
            <TextField
               className="textFields" 
               id="outlined-select-currency"
               select
               required
               label="Country"
               name="country"
               value={locationData.country}
               onChange={handleChange}
               helperText="Please select your country"
            >
               {countries.map((option, index) => (
                  <MenuItem key={index} value={option}>
                  {option}
                  </MenuItem>
               ))}
            </TextField>
         </Grid>
         <Grid item xs={12} md={8}>
            <TextField
               className="textFields" 
               id="outlined-select-currency"
               select
               disabled={locationData.country===''}
               required
               label="State"
               name="state"
               value={locationData.state}
               onChange={handleChange}
               helperText="Please select your state"
            >
               {locationData.country!=='' && data.countries[locationData.country].map((option, index) => (
                  <MenuItem key={index} value={option}>
                  {option}
                  </MenuItem>
               ))}
            </TextField>
         </Grid>
         <Grid item xs={12} md={8}>
            <TextField className="textFields" required id="outlined-name" label="Enter City" name='city' value={locationData.city} onChange={handleChange} />
         </Grid>
         <Grid item xs={12} md={4}>
            <TextField className="textFields" required id="outlined-number" type={'number'} label="Enter Pincode" name="pincode" value={locationData.pincode} onChange={handleChange} />
         </Grid>
         <Grid item xs={12} md={12}>
            <FormControl sx={{ mt: 3 }} component="fieldset" variant="standard">
               <FormLabel component="legend">Enter Language</FormLabel>
               <FormGroup>
                  <FormControlLabel
                     control={
                     <Checkbox checked={locationData.language.English} onChange={handleChangeLanguage} name="English" />
                     }
                     label="English"
                  />
                  <FormControlLabel
                     control={
                     <Checkbox checked={locationData.language.Hindi} onChange={handleChangeLanguage} name="Hindi" />
                     }
                     label="Hindi"
                  />
                  <FormControlLabel
                     control={
                     <Checkbox checked={locationData.language.Other} onChange={handleChangeLanguage} name="Other" />
                     }
                     label="Other"
                  />
               </FormGroup>
            </FormControl>
         </Grid>
      </>
   )
}

export default Form2
