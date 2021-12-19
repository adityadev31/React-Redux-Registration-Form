import { Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'

const Form1 = ({data, aboutData, setAboutData}) => {

    const educations = data.education;
    

    const handleChange = (e) => {
       setAboutData({...aboutData, [e.target.name]: e.target.value});
    }

   return (
      <>
         <Grid item xs={12} md={6}>
            <TextField className="textFields" required label="Full Name" name="name" value={aboutData.name} onChange={handleChange}/>
         </Grid>
         <Grid item xs={12} md={3}>
            <TextField className="textFields" required id="outlined-date" label="Date Of Birth" type={'date'} helperText='DD-MM-YYYY' name="dob" value={aboutData.dob} onChange={handleChange}/>
         </Grid>
         <Grid item xs={12} md={3}>
            <TextField className="textFields" required id="outlined-name" label="Contact Number" helperText="Enter numbers only" type={'number'} name='phone' value={aboutData.phone} onChange={handleChange} />
         </Grid>
         <Grid item xs={12} md={4}>
            <TextField
               className="textFields" 
               id="outlined-select-currency"
               select
               required
               label="Education"
               name="education"
               value={aboutData.education}
               onChange={handleChange}
               helperText="Please select your Highest Education"
            >
               {educations.map((option, index) => (
                  <MenuItem key={index} value={option}>
                  {option}
                  </MenuItem>
               ))}
            </TextField>
         </Grid>
         <Grid item xs={12} md={4}>
            <TextField className="textFields" required id="outlined-name" label="Institute Name" name="institute" value={aboutData.institute} onChange={handleChange} />
         </Grid>
         <Grid item xs={12} md={4}>
            <TextField className="textFields" required id="outlined-name" label="Address of institute" name="instituteAddress" value={aboutData.instituteAddress} onChange={handleChange} />
         </Grid>
         <Grid item xs={12} md={6}>
            <TextField
               className="textFields" 
               id="outlined-multiline-flexible"
               required
               label="Your Description"
               placeholder='We are very excited to know !!'
               helperText="Describe yourself in about 60 words"
               multiline
               rows={4}
               name="description"
               value={aboutData.description}
               onChange={ handleChange }
            />
         </Grid>
         <Grid item xs={12} md={6}>
            <TextField
               className="textFields" 
               id="outlined-multiline-flexible"
               required
               label="Work Experience"
               placeholder={`1) Type (Intern, Project, Other)${'\n'}2) Short Description`}
               helperText="Please be crisp and precise"
               multiline
               style={{whiteSpace: "pre-line"}}
               rows={4}
               name="workExperience"
               value={aboutData.workExperience}
               onChange={ handleChange }
            />
         </Grid>
      </>
   )
}

export default Form1
