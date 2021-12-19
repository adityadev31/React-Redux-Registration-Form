import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { pageActions } from '../../redux/actionCreators/index'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import SendIcon from '@mui/icons-material/Send';

const BtnBox = ({aboutData, locationData, skillData}) => {

   const { pageNumber } = useSelector((state) => state);
   const dispatch = useDispatch();
   const { nextPage, prevPage } = bindActionCreators(pageActions, dispatch);

   let arr1 = [];
   let arr2 = [];
   let arr3 = [];

   const handleOnClick = (type) => {
      if(type === 'add') {
         arr1 = Object.values(aboutData).filter((val) => (val===''));
         arr2 = Object.values(locationData).filter((val) => (val===''));
         arr3 = Object.values(skillData).filter((val) => (val===''));
         if(pageNumber===1 && arr1.length===0) nextPage({type: 'about', data: aboutData}); 
         else if(pageNumber===2 && arr1.length===0 && arr2.length===0) nextPage({type: 'location', data: locationData});
         else if(pageNumber===3 && arr1.length===0 && arr2.length===0 && arr3.length===0) nextPage({type: 'skill', data: skillData});
         else window.alert('Please fill all the fields');
      }
      else prevPage();
   }

   return (
      <div className="formBox-btnBox">
         {pageNumber!==1 && pageNumber<=3 && <Button className='btns' color='warning' variant="outlined" onClick={() => handleOnClick('sub')}>Back</Button>}
         {pageNumber<3 && <Button className='btns' color="warning" variant="contained" onClick={() => handleOnClick('add')}>Next</Button>}
         {pageNumber===3 && <Button className='btns' color="warning" variant="contained" endIcon={<SendIcon />} onClick={() => handleOnClick('add')}>Submit</Button>}
      </div>
   )
}

export default BtnBox
