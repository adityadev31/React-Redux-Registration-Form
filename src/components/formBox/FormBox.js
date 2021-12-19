import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import Form1 from '../allForms/Form1'
import Form2 from '../allForms/Form2'
import Form3 from '../allForms/Form3'
import BtnBox from './BtnBox'
import Data from '../../data.json'
import './formBox.css'
import React from 'react'
import Form4 from '../allForms/Form4'

const FormBox = () => {

   const { pageNumber } = useSelector((state) => state);
   const [aboutData, setAboutData] = React.useState({
      name: '',
      dob: new Date(Date.now()).toISOString().substring(0, 10),
      phone: '',
      education: '',
      institute: '',
      instituteAddress: '',
      description: '',
      workExperience: ''
   });
   const [locationData, setLocationData] = React.useState({
      country: '',
      state: '',
      city: '',
      pincode: '',
      language: {
         English: true,
         Hindi: false,
         Other: false,
      }
    });
    const [skillData, setSkillData] = React.useState({
      category: '',
      subCategory: '',
    });

   return (
      <div className='formBox'>
         <Grid container rowSpacing={2} columnSpacing={2}>
            {pageNumber===1 && <Form1 data={Data} aboutData={aboutData} setAboutData={setAboutData} />}
            {pageNumber===2 && <Form2 data={Data} locationData={locationData} setLocationData={setLocationData} />}
            {pageNumber===3 && <Form3 data={Data} skillData={skillData} setSkillData={setSkillData} />}
            {pageNumber===4 && <Form4 />}
         </Grid>
         <BtnBox aboutData={aboutData} locationData={locationData} skillData={skillData} />
      </div>
   )
}

export default FormBox
