import { Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'

const Form3 = ({data, skillData, setSkillData}) => {

    const categories = Object.keys(data.categories);

    const handleChange = (e) => {
       setSkillData({ ...skillData, [e.target.name]: e.target.value });
    }

   return (
      <>
         <Grid item xs={12} md={12}>
            <TextField
               className="textFields" 
               id="outlined-select-currency"
               select
               required
               label="Category"
               name="category"
               value={skillData.category}
               onChange={handleChange}
               helperText="Please select a category"
            >
               {categories.map((option, index) => (
                  <MenuItem key={index} value={option}>
                  {option}
                  </MenuItem>
               ))}
            </TextField>
         </Grid>
         <Grid item xs={12} md={12}>
            <TextField
               className="textFields" 
               id="outlined-select-currency"
               select
               required
               disabled={skillData.category===''}
               label="Subcategory"
               name="subCategory"
               value={skillData.subCategory}
               onChange={handleChange}
               helperText="Please select a subcategory"
            >
               {skillData.category!=='' && data.categories[skillData.category].map((option, key) => (
                  <MenuItem key={key} value={option}>{option}</MenuItem>
               ))}
            </TextField>
         </Grid>
      </>
   )
}

export default Form3
